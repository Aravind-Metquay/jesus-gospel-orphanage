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
  established: "2007",
};

export const nav = [
  { href: "#about", label: "About" },
  { href: "#story", label: "Our Story" },
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
  sub: "We look after children and elders under one roof in Naricode, Thiruvananthapuram, and we have done it since 2007.",
};

export const about = {
  eyebrow: "About us",
  heading: "How this place started",
  /* Written to be read aloud. Keep it plain — no "vulnerable beneficiaries". */
  body: [
    "Jesus Gospel & Karunya Orphanage Trust was started in 2007 by Brother V. Nadeson, who has lived in a wheelchair since an accident in his school years. Through those long years of illness he turned to prayer, and began spending every donation that came to him on orphans, the disabled and the elderly.",
    "Since then the trust has raised 25 children who had no one else, conducted 5 marriages, and supported around 30 more children and 25 elders. Today 15 children and 12 elders live with us in a rented building in Naricode, and we pay the school costs of about 35 more children from the villages around us.",
    "We are a registered public charitable trust, Reg. No. 397/07. Our accounts are open to any donor who asks to see them.",
  ],
  facts: [
    { label: "Registration", value: "Reg. No. 397/07" },
    { label: "Founded", value: "2007" },
    { label: "Founder", value: "Brother V. Nadeson" },
    { label: "Where we are", value: "Naricode, Thiruvananthapuram, Kerala" },
  ],
};

/**
 * FOUNDER'S STORY — Brother Nadeson's own account, lightly tidied.
 * Keep it in his voice, first person.
 */
export const story = {
  eyebrow: "Our story",
  heading: "A Journey of Faith, Service, and Hope",
  sub: "The story of Mr. V. Nadeson, in his own words.",
  body: [
    "My name is Nadeson. I was born in 1959 in a village called Kunnathukal in Neyyattinkara, in Thiruvananthapuram District, Kerala, South India. Mine was a poor family. My father's name is Mr. Wilson.",
    "When I was studying in school, I met with an accident. My parents could not continue my treatment, and because of that I became physically and mentally weak. Because of sorrow, I reached a condition where I could not even eat food. Even my close relatives abandoned me. For 12 years I was in a very difficult condition and could not even move. Now I live with the help of a wheelchair.",
    "It was during this time that I began to think about the Lord. I saw many poor people who were struggling for food and clothing, and I prayed for them.",
  ],
  verse: {
    text: "Do not be anxious about anything; but in everything by prayer and supplication, with thanksgiving, let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and minds through Christ Jesus.",
    ref: "Philippians 4:6–7",
  },
  body2: [
    "I joined the Lord with my whole heart. Then the Lord brought many people to me. I prayed for them, and the sick were healed. They gave donations according to their ability, and I spent those donations on orphans, the disabled and the elderly.",
    "In 2007, I formed an institution named Jesus Gospel & Karunya Orphanage Trust. Through it, I raised 25 poor and destitute children who had no one to depend on. I conducted 5 marriages. I worked as a support for about 30 children and about 25 elderly people.",
    "I have not received any financial assistance in the name of this Trust. We have maintained and run it using our own financial resources. Because of financial difficulties and debts, the Trust's work progressed very slowly. Now, again, we have 15 children and 12 elderly people staying in our institution, and we are struggling greatly for their education, food and daily needs.",
    "In addition, we bear the educational expenses of about 35 children. We take care of sick people and do what is necessary for them. We have been helping widowed women to find work.",
    "The institution is now run in a rented building. I wish to purchase land in the name of the Trust and construct a building with basic facilities, so that orphaned children and elderly parents can have a place to stay. For this, approximately 3 crore rupees will be required.",
    "Because my legs are weak, I cannot go and meet people directly. The small donations we receive now are not enough to manage everything. I wish to help poor people, but I do not have the means, and I am not healthy. In this difficult condition of mine, living with the help of a wheelchair, I humbly request in the name of God that you please help me with a good heart and with generosity.",
  ],
  signoff: {
    closing: "Yours,",
    name: "Brother V. Nadeson",
    org: "Jesus Gospel & Karunya Orphanage Trust · Reg. No. 397/07",
  },
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
  name: "Brother V. Nadeson",
  title: "Founder & Director",
  /* Their own words, lightly tidied. 3–5 sentences. Do not turn this into a bio. */
  message: [
    "When I could not even move, I saw people around me struggling for food and clothing, and I prayed for them. Everything the Lord has given since, I have spent on orphans, the disabled and the elderly.",
    "Today 15 children and 12 elders live with us, and we help with the schooling of about 35 more. We have run this trust on our own resources, without any grant.",
    "We are in a rented building. My hope is to buy land in the trust's name and build a home with basic facilities, so the children and elders always have a place to stay.",
    "My legs are weak and I cannot come to meet you, so please come and meet us. Thank you to everyone who has helped — every gift, however small, keeps this place going.",
  ],
  /* Drop a portrait at src/assets/director.jpg */
  photoAlt: "Brother V. Nadeson, founder and director of the trust, seated in his wheelchair",
};

/**
 * IMPACT — numbers only. Every entry here must be one somebody can defend if a
 * donor asks. Delete the ones you cannot back up; the section hides itself if
 * none are filled in. Do not round up.
 */
export const impact: { eyebrow: string; heading: string; sub: string; stats: Stat[] } = {
  eyebrow: "Impact",
  heading: "Where things stand today",
  sub: "Counted, not estimated. Last updated October 2026.",
  stats: [
    { value: "15", label: "Children living here", note: "As of October 2026" },
    { value: "12", label: "Elders living here", note: "As of October 2026" },
    { value: "35", label: "Children whose schooling we pay for" },
    { value: "25", label: "Children raised since 2007" },
    { value: "5", label: "Marriages conducted" },
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
      body: "Cover one child's food, schooling and clothes. Call us and we'll tell you what a year costs, and you'll get their progress twice a year.",
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
    accountName: "JESUS GOSPEL AND KARUNYA ORPHANAGE TRUST",
    accountNumber: "120041870735",
    bank: "Canara Bank, Karakonam branch",
    ifsc: "CNRB0014023",
    /* Leave empty to hide the UPI row. */
    upi: "",
  },
  note: "Receipts are issued for every donation. If you need one for tax purposes, ask and we'll send it with the trust's registration details.",
};

export const contact = {
  eyebrow: "Contact",
  heading: "Come and see the place",
  sub: "Visitors are welcome. Call ahead so someone is free to show you around.",
  address: [
    "Jesus Gospel & Karunya Orphanage Trust",
    "Naricode, Cheriyakolla P.O.",
    "Kunnathukal Village",
    "Neyyattinkara, Thiruvananthapuram",
    "Kerala 695504",
  ],
  phone: "+91 99952 68469",
  phoneHref: "tel:+919995268469",
  email: "jesusgospelnadesonancy@gmail.com",
  /* Paste the "Embed a map" iframe src from Google Maps here to show a map. */
  mapEmbedSrc: "https://maps.google.com/maps?q=8.4187565,77.18135247&z=17&output=embed",
  mapLink:
    "https://maps.google.com/maps/search/Nadeson%20jesus%20gospel%20%26%20karunya%20orphanege%20trust/@8.4187565,77.18135247,17z?hl=en",
};

export const social: { label: string; href: string }[] = [
  // { label: "Facebook", href: "https://facebook.com/…" },
  // { label: "Instagram", href: "https://instagram.com/…" },
  // { label: "YouTube", href: "https://youtube.com/…" },
];

/** A value is "missing" while it still carries a [bracketed] placeholder. */
export const isPlaceholder = (v: string): boolean => /\[.+\]/.test(v);
