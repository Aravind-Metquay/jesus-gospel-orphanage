/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  EVERY PIECE OF REAL CONTENT ON THIS SITE LIVES IN THIS ONE FILE.
 *  Nobody needs to touch the components to update the website.
 *
 *  Anything still wrapped in [SQUARE BRACKETS] is a fact we don't have yet.
 *  Run `pnpm dev` and a checklist panel in the corner will list what is missing.
 *  That panel only ever appears in development — it cannot reach the live site.
 *
 *  Sections that would otherwise invent facts (Impact, Stories) stay hidden
 *  until real content is added here. That's deliberate: an empty section is
 *  better than a made-up one.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type Stat = { value: string; label: string; note?: string };
export type Story = { quote: string; name: string; role: string };
export type Photo = { file: string; alt: string };
export type GalleryGroup = { id: string; title: string; blurb: string; photos: Photo[] };

export const org = {
  name: "Jesus Gospel & Karunya Orphanage Trust",
  shortName: "Jesus Gospel & Karunya",
  regNo: "397/07",
  /* One line. What this place is — not what it needs. */
  tagline: "A home for children and elders, and a door that stays open to everyone.",
  established: "[year the trust was founded]",
};

export const nav = [
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#director", label: "Director" },
  { href: "#impact", label: "Impact" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export const hero = {
  /* Drop a wide photo at src/assets/hero.jpg and this picks it up automatically. */
  imageAlt:
    "Children and elders together in the courtyard at Jesus Gospel & Karunya Orphanage Trust",
  heading: "Everyone here has somewhere to belong.",
  sub: "We look after children and elders under one roof in [town/district], and we have done it since [year].",
};

export const about = {
  eyebrow: "About us",
  heading: "How this place started",
  /* Written to be read aloud. Keep it plain — no "vulnerable beneficiaries". */
  body: [
    "Jesus Gospel & Karunya Orphanage Trust was started in [year] by [founder's name], who [one sentence: what they were doing at the time, and what made them start].",
    "It began with [number] children in [a rented house / the family home / wherever it actually began]. Today the same trust cares for children and elders together on one campus — they eat at the same table, and the older residents help with homework.",
    "We are a registered public charitable trust, Reg. No. 397/07. Our accounts are open to any donor who asks to see them.",
  ],
  facts: [
    { label: "Registration", value: "Reg. No. 397/07" },
    { label: "Founded", value: "[year]" },
    { label: "Founder", value: "[founder's name]" },
    { label: "Where we are", value: "[town, district, state]" },
  ],
};

/* The five arms already named on the trust's logo, in the logo's own wording. */
export const programs = {
  eyebrow: "What we do",
  heading: "Five things, done properly",
  sub: "These are the five arms named on our logo. They have not changed since the trust began.",
  items: [
    {
      icon: "prayer",
      title: "Prayer for All",
      body: "Morning and evening prayers are open to anyone who walks in — resident, neighbour, visitor, any faith. Nobody is asked what they believe first.",
    },
    {
      icon: "elder",
      title: "Elder Care",
      body: "Elders with no family to return to live here permanently. Meals, medicine, regular check-ups, and people around them all day.",
    },
    {
      icon: "children",
      title: "Children's Care",
      body: "Children live here full time. A bed, three meals, clothes, school uniforms, and someone who notices when they are quiet.",
    },
    {
      icon: "education",
      title: "Educational Support",
      body: "Every child is enrolled in school. We cover fees, books and tuition, and we keep going for the ones who make it to college.",
    },
    {
      icon: "community",
      title: "Strong Community",
      body: "Food, clothes and help during floods and hard months reach families in the villages around us, not only the people living on our campus.",
    },
  ],
};

export const director = {
  eyebrow: "A word from the director",
  name: "[Director's full name]",
  title: "Founder & Director",
  /* Their own words, lightly tidied. 3–5 sentences. Do not turn this into a bio. */
  message: [
    "[Open with why they started — one sentence, the way they'd actually say it.]",
    "[One sentence about what a normal day here looks like.]",
    "[One sentence about what the children and elders need most right now.]",
    "[Close by thanking the people who help, and inviting the reader to visit. An invitation to come and see is worth more than an appeal.]",
  ],
  /* Drop a portrait at src/assets/director.jpg */
  photoAlt: "[Director's name], founder and director of the trust",
};

/**
 * IMPACT — numbers only. Every entry here must be one somebody can defend if a
 * donor asks. Delete the ones you cannot back up; the section hides itself if
 * none are filled in. Do not round up.
 */
export const impact: { eyebrow: string; heading: string; sub: string; stats: Stat[] } = {
  eyebrow: "Impact",
  heading: "Where things stand today",
  sub: "Counted, not estimated. Last updated [month, year].",
  stats: [
    // Fill in the value and this appears. Leave it empty and it stays hidden.
    // { value: "40", label: "Children living here", note: "As of [month, year]" },
    // { value: "18", label: "Elders in permanent care" },
    // { value: "19", label: "Years running", note: "Registered in 2007" },
    // { value: "12", label: "Students in college or ITI" },
  ],
};

/**
 * GALLERY — 14 photos, grouped rather than dumped in one scroll.
 * Put the real files in src/assets/gallery/ using exactly these filenames and
 * Astro will compress them and generate phone-sized versions automatically.
 * Any slot without a file shows a labelled placeholder instead.
 * Alt text: describe what is happening. Consent first, for every photo of a child.
 */
export const gallery: { eyebrow: string; heading: string; sub: string; groups: GalleryGroup[] } = {
  eyebrow: "Gallery",
  heading: "A look around",
  sub: "Ordinary days here, mostly.",
  groups: [
    {
      id: "daily-life",
      title: "Daily life",
      blurb: "Meals, homework, the walk to school.",
      photos: [
        { file: "daily-01", alt: "[What is happening in this photo]" },
        { file: "daily-02", alt: "[What is happening in this photo]" },
        { file: "daily-03", alt: "[What is happening in this photo]" },
        { file: "daily-04", alt: "[What is happening in this photo]" },
        { file: "daily-05", alt: "[What is happening in this photo]" },
        { file: "daily-06", alt: "[What is happening in this photo]" },
      ],
    },
    {
      id: "elder-care",
      title: "Elder care",
      blurb: "The quieter half of the campus.",
      photos: [
        { file: "elder-01", alt: "[What is happening in this photo]" },
        { file: "elder-02", alt: "[What is happening in this photo]" },
        { file: "elder-03", alt: "[What is happening in this photo]" },
        { file: "elder-04", alt: "[What is happening in this photo]" },
      ],
    },
    {
      id: "events",
      title: "Events",
      blurb: "Festivals, exam results, visitors.",
      photos: [
        { file: "event-01", alt: "[What is happening in this photo]" },
        { file: "event-02", alt: "[What is happening in this photo]" },
        { file: "event-03", alt: "[What is happening in this photo]" },
        { file: "event-04", alt: "[What is happening in this photo]" },
      ],
    },
  ],
};

/**
 * STORIES — two or three real quotes, with permission to publish them.
 * Leave this array empty and the whole section disappears. Better nothing
 * than something invented.
 */
export const stories: { eyebrow: string; heading: string; items: Story[] } = {
  eyebrow: "In their words",
  heading: "People who have lived it",
  items: [
    // { quote: "…", name: "…", role: "Former resident, now a nurse in […]" },
  ],
};

export const getInvolved = {
  eyebrow: "Get involved",
  heading: "Three ways to help",
  sub: "Any of these matters. Pick whichever one fits.",
  doors: [
    {
      title: "Donate",
      body: "A one-off gift covers groceries, school fees, or a medical bill. Every rupee is receipted and accounted for.",
      cta: "Donate",
      href: "#donate",
      primary: true,
    },
    {
      title: "Sponsor a Child",
      body: "Cover one child's food, schooling and clothes for a year — [₹amount per month / per year]. You'll get their progress twice a year.",
      cta: "Sponsor a child",
      href: "#donate",
      primary: true,
    },
    {
      title: "Volunteer",
      body: "Tuition, medical camps, repairs, a day of your time at a festival. Tell us what you're good at and we'll find the use.",
      cta: "Get in touch",
      href: "#contact",
      primary: false,
    },
  ],
};

/**
 * DONATIONS — bank details go here once the trustees confirm them.
 * Publish the account name exactly as it appears on the passbook; donors check.
 */
export const donate = {
  eyebrow: "Donate",
  heading: "How to give",
  sub: "Transfer directly to the trust's account, or get in touch and we'll help.",
  bank: {
    accountName: "[Account name exactly as printed on the passbook]",
    accountNumber: "[Account number]",
    bank: "[Bank name and branch]",
    ifsc: "[IFSC]",
    upi: "[UPI ID, if you have one]",
  },
  note: "Receipts are issued for every donation. If you need one for tax purposes, ask and we'll send it with the trust's registration details.",
};

export const contact = {
  eyebrow: "Contact",
  heading: "Come and see the place",
  sub: "Visitors are welcome. Call ahead so someone is free to show you around.",
  address: [
    "Jesus Gospel & Karunya Orphanage Trust",
    "[Building / street]",
    "[Village or area]",
    "[Town, District]",
    "[State] [PIN]",
  ],
  phone: "[+91 XXXXX XXXXX]",
  phoneHref: "tel:+91XXXXXXXXXX",
  email: "[email address]",
  /* Paste the "Embed a map" iframe src from Google Maps here to show a map. */
  mapEmbedSrc: "",
  mapLink: "",
};

export const social: { label: string; href: string }[] = [
  // { label: "Facebook", href: "https://facebook.com/…" },
  // { label: "Instagram", href: "https://instagram.com/…" },
  // { label: "YouTube", href: "https://youtube.com/…" },
];

/** A value is "missing" while it still carries a [bracketed] placeholder. */
export const isPlaceholder = (v: string): boolean => /\[.+\]/.test(v);
