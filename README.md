# Jesus Gospel & Karunya Orphanage Trust

One-page website for the trust. Reg. No. 397/07.

Built with [Astro](https://docs.astro.build). Static output — it can be hosted
free on Netlify, Cloudflare Pages, GitHub Pages or any plain web host.

```sh
pnpm install
pnpm dev       # http://localhost:4321
pnpm build     # static site into dist/
pnpm preview   # check the build before deploying
```

---

## The one thing to know

**All the content lives in `src/data/site.ts`.** Nobody needs to touch a
component to change the words, the phone number, the bank details or the photo
captions. Everything still wrapped in `[square brackets]` is a fact we don't
have yet.

Run `pnpm dev` and a **content checklist** appears in the bottom-right corner
listing exactly what is still outstanding and which line it's on. It is
development-only — it is stripped from `pnpm build` and can never reach a
visitor.

## Still needed before this goes live

The design is done. The page is only as good as what goes in it, and these are
the gaps:

- [ ] Address, phone, email → `contact` in `site.ts`
- [ ] Bank / UPI details for donations → `donate.bank`
- [ ] The founding story: who started it, when, why → `about.body`
- [ ] The director's photo (`src/assets/director.jpg`) and 3–5 sentences in
      their own voice → `director.message`
- [ ] All 14 photographs → `src/assets/gallery/` (see the README in that folder)
      — **plus written consent for any photo showing a child**
- [ ] The trust's actual logo file → `src/assets/logo.svg`
- [ ] Real numbers: children housed, elders, years running → `impact.stats`
- [ ] Two or three testimonials, if any exist → `stories.items`
- [ ] Google Maps embed URL → `contact.mapEmbedSrc`

### Sections that hide themselves

**Impact** and **Stories** do not render at all until there is real content for
them. That's deliberate — the brief was to skip them rather than make vague
claims, so an empty `impact.stats` array means the section simply isn't there.
Fill in one stat and it appears. Don't round the numbers up; donors ask.

### Photographs

Put the files in `src/assets/gallery/` **straight off the camera** — don't
resize them first. The build compresses each one and generates phone-sized
WebP versions automatically, which is what keeps the page quick on mobile data.
Files dropped in `public/` instead would be served untouched, so use
`src/assets/`.

Any slot without a file shows a labelled dashed placeholder rather than
breaking the layout, so the site stays deployable while photos trickle in.

---

## Design notes

Colours are sampled from the trust's logo, not invented:

| Token         | Hex       | Used for                                       |
| ------------- | --------- | ---------------------------------------------- |
| `--navy`      | `#0A1E3B` | Header, footer, dark sections, body text       |
| `--gold`      | `#D4A73E` | Accents, icons, headings **on navy only**      |
| `--gold-deep` | `#B8862A` | **Button fill only** — never text              |
| `--gold-ink`  | `#876413` | The only gold allowed as text on a light ground |
| `--cream`     | `#FAF8F4` | Content backgrounds (not pure white)           |
| `--cream-200` | `#F1ECE2` | Alternating tinted sections                    |

Measured contrast ratios:

| Combination                       | Ratio    |                                       |
| --------------------------------- | -------- | ------------------------------------- |
| Gold `#D4A73E` as text on cream   | 2.1 : 1  | ✗ never — at any size                 |
| Deep gold `#B8862A` as text       | 3.1 : 1  | ✗ fails too — it is a **fill**, not ink |
| Gold ink `#876413` on cream       | 5.1 : 1  | ✓ use this when gold must be text     |
| Gold ink `#876413` on tint        | 4.6 : 1  | ✓                                     |
| Gold on navy                      | 7.4 : 1  | ✓                                     |
| Navy on cream                     | 15.7 : 1 | ✓                                     |
| **Navy text on deep gold**        | 5.1 : 1  | ✓ this is the button combination      |
| White text on deep gold           | 3.2 : 1  | ✗ fails AA — don't switch to white    |

Two of these are easy to get wrong:

- **The gold buttons carry navy labels, not white.** White looks tempting and
  measures 3.2:1, which fails at normal text sizes.
- **The logo gold is a fill, not ink.** Any gold *text* on a light background
  needs `--gold-ink`, which is the same hue (42°) darkened until it passes.
  `pnpm run audit:contrast` fails the build if `--gold-deep` is used as a text
  colour anywhere.

The **focus ring** is a gold ring inside a navy halo. Gold alone disappears on
the cream sections and navy alone disappears on the navy ones; the pair is
visible on both.

```sh
pnpm run audit:contrast   # checks every pair in use, and the banned ones
```

Two typefaces only: **Lora** for headings, **Inter** for everything else.
Adding a third for "personality" is what makes a site look homemade.

## Structure

```
src/
├─ data/site.ts        ← all content lives here
├─ pages/index.astro   ← section order
├─ layouts/Layout.astro
├─ styles/global.css   ← colour and type tokens
├─ components/         ← one per section
└─ assets/             ← logo, hero, director, gallery/
```

Sections run in this order: Header · Hero · About · Programs · Director ·
Impact · Gallery · Stories · Get involved · Donate · Contact · Footer.

## Accessibility & performance

- Skip link, landmarks, and a focus ring that stays visible on both the light
  and the navy sections.
- Every text/background pair on the rendered page was checked against WCAG AA
  in a real browser, at desktop and phone width, with the mobile menu open.
- The gallery lightbox is a native `<dialog>` — Escape, focus trapping and the
  backdrop come from the browser rather than a JavaScript library. Arrow keys
  move between photos.
- No JavaScript framework and no runtime dependencies. Two small inline scripts
  (mobile menu, lightbox).
- Respects `prefers-reduced-motion`.
- Images are lazy-loaded below the fold; the lightbox opens a compressed copy
  capped at 1600px rather than the original camera file.
