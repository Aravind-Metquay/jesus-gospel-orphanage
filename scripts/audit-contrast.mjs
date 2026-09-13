/**
 * Palette contrast audit. No dependencies, no browser — runs anywhere.
 *
 *   pnpm run audit:contrast
 *
 * Two jobs:
 *   1. Read the colour tokens out of src/styles/global.css and check every
 *      combination the design actually uses against its WCAG AA threshold.
 *   2. Enforce the one rule that is easy to break by accident — the logo gold
 *      is a fill, not ink. Gold text on a light background measures ~3:1 and
 *      is the specific mistake the brand notes warn about.
 *
 * Exits non-zero on any violation, so it can go in CI.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const css = readFileSync("src/styles/global.css", "utf8");

/* ---------- colour maths (WCAG 2.x relative luminance) ---------- */
const srgb = (v) => { v /= 255; return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
const lum = ({ r, g, b }) => 0.2126 * srgb(r) + 0.7152 * srgb(g) + 0.0722 * srgb(b);
const ratio = (a, b) => {
  const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};
const hex = (h) => ({
  r: parseInt(h.slice(1, 3), 16),
  g: parseInt(h.slice(3, 5), 16),
  b: parseInt(h.slice(5, 7), 16),
});
/* Composite a translucent colour over an opaque one. */
const over = (fg, a, bg) => ({
  r: fg.r * a + bg.r * (1 - a),
  g: fg.g * a + bg.g * (1 - a),
  b: fg.b * a + bg.b * (1 - a),
});

/* ---------- read the tokens ---------- */
const token = (name) => {
  const m = css.match(new RegExp(`--${name}:\\s*(#[0-9a-fA-F]{6})`));
  if (!m) throw new Error(`token --${name} not found in global.css`);
  return hex(m[1]);
};
const T = Object.fromEntries(
  ["navy", "navy-700", "gold", "gold-deep", "gold-ink", "gold-soft", "cream", "cream-200", "ink"]
    .map((n) => [n, token(n)])
);
const WHITE = { r: 255, g: 255, b: 255 };

/* ---------- the combinations this design actually puts on screen ----------
   AA: 4.5 for body text, 3.0 for large text and for the boundary of a control. */
const CHECKS = [
  ["body text",              T.navy,      T.cream,     4.5],
  ["muted body text",        T.ink,       T.cream,     4.5],
  ["muted text on tint",     T.ink,       T["cream-200"], 4.5],
  ["stat text on white",     T.navy,      WHITE,       4.5],
  ["eyebrow on cream",       T["gold-ink"], T.cream,   4.5],
  ["eyebrow on tint",        T["gold-ink"], T["cream-200"], 4.5],
  ["heading on navy",        T.gold,      T.navy,      4.5],
  ["body text on navy",      T.cream,     T.navy,      4.5],
  ["sub-text on navy",       T["gold-soft"], T.navy,   4.5],
  ["nav link on navy-700",   T.cream,     T["navy-700"], 4.5],
  ["BUTTON label on gold",   T.navy,      T["gold-deep"], 4.5],
  ["focus ring on navy",     T.gold,      T.navy,      3.0],
  ["focus halo on cream",    T.navy,      T.cream,     3.0],
  ["focus halo on tint",     T.navy,      T["cream-200"], 3.0],
  ["outline-button border",  over(T.navy, 0.5, T.cream), T.cream, 3.0],
  ["menu-toggle border",     over(T.cream, 0.35, T.navy), T.navy, 3.0],
  ["on-navy button border",  over(T.cream, 0.45, T.navy), T.navy, 3.0],
];

/* ---------- combinations that MUST stay banned ---------- */
const BANNED = [
  ["gold as text on white",       T.gold,        WHITE],
  ["gold as text on cream",       T.gold,        T.cream],
  ["gold-deep as text on cream",  T["gold-deep"], T.cream],
  ["white label on gold button",  WHITE,         T["gold-deep"]],
];

let bad = 0;
console.log("Contrast — combinations in use\n");
for (const [name, fg, bg, need] of CHECKS) {
  const r = ratio(fg, bg);
  const ok = r >= need;
  if (!ok) bad++;
  console.log(`  ${ok ? "ok  " : "FAIL"}  ${r.toFixed(2).padStart(6)}:1  (needs ${need})  ${name}`);
}

console.log("\nGuard — these must keep failing, which is why they are not used:\n");
for (const [name, fg, bg] of BANNED) {
  const r = ratio(fg, bg);
  console.log(`  ${r < 4.5 ? "ok  " : "??  "}  ${r.toFixed(2).padStart(6)}:1  ${name}`);
}

/* ---------- the gold-is-a-fill rule ---------- */
const walk = (dir) => readdirSync(dir).flatMap((f) => {
  const p = join(dir, f);
  return statSync(p).isDirectory() ? walk(p) : [p];
});
const sources = walk("src").filter((f) => /\.(astro|css)$/.test(f));

console.log("\nUsage — gold-deep is a button fill, never ink:\n");
let misuse = 0;
for (const file of sources) {
  readFileSync(file, "utf8").split("\n").forEach((line, i) => {
    if (/(^|[^-\w])color:\s*var\(--gold-deep\)/.test(line)) {
      console.log(`  FAIL  ${file}:${i + 1}  gold-deep used as text — use --gold-ink`);
      misuse++;
    }
  });
}
if (!misuse) console.log("  ok    no gold-deep used as a text colour");
bad += misuse;

console.log(bad ? `\n${bad} violation(s).` : "\nAll clear.");
process.exit(bad ? 1 : 0);
