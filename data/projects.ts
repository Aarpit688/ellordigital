export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface Project {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
  category: string;
  mockKey: string;
  // ---- case study detail ----
  client: string;
  year: string;
  services: string[];
  challenge: string;
  approach: string[];
  results: string[];
  metrics: CaseStudyMetric[];
  testimonial?: Testimonial;
}

export const PROJECTS: Project[] = [
  {
    slug: "aurora-outfitters",
    eyebrow: "Aurora Outfitters — Ecommerce Rebuild",
    title: "Cutting Checkout Time in Half Without Losing the Brand",
    description:
      "A ground-up Shopify rebuild focused on load speed and a mobile checkout redesign — outcome-first, with the outdoor-gear grit of the brand kept fully intact.",
    tags: ["Ecommerce", "Performance", "Shopify"],
    category: "ecommerce",
    mockKey: "aurora",
    client: "Aurora Outfitters",
    year: "2025",
    services: ["E-commerce Development", "Web Design & Development"],
    challenge:
      "Aurora had healthy traffic and a loyal base, but mobile shoppers were bailing at checkout. Product pages loaded slowly on anything short of office wifi, and a five-step checkout asked for too much, too early. The team could see the drop-off in analytics but every proposed fix risked flattening a brand built on rugged, high-contrast personality.",
    approach: [
      "We started with a funnel audit instead of a redesign, mapping exactly where and on which devices shoppers were leaving. The data pointed squarely at product-page load time and a checkout that demanded account creation before it showed a shipping cost.",
      "From there we rebuilt the storefront on Shopify with a strict performance budget: every image, script, and third-party app had to justify its weight. Checkout was collapsed to a mobile-first, guest-first flow that surfaces cost and delivery date up front.",
      "The brand work was subtractive, not additive — we kept the grit and the contrast, and cut the decorative weight that was quietly costing seconds.",
    ],
    results: [
      "Mobile checkout time dropped by nearly half without changing the product catalog.",
      "Largest Contentful Paint on a mid-range phone over 4G fell under 1.5 seconds.",
      "Guest checkout became the default path, lifting completed mobile orders across the board.",
    ],
    metrics: [
      { value: "−48%", label: "Checkout time" },
      { value: "+31%", label: "Mobile conversion" },
      { value: "1.4s", label: "LCP on 4G" },
    ],
    testimonial: {
      quote:
        "They treated our checkout like the product it actually is. Same brand, half the friction — and we could finally trust the numbers we were making decisions from.",
      author: "Dana Cole",
      role: "Head of Ecommerce, Aurora Outfitters",
    },
  },
  {
    slug: "meridian-health",
    eyebrow: "Meridian Health — Patient Portal",
    title: "A Portal Patients Actually Want to Log Into",
    description:
      "We rebuilt the appointment and records flow around plain language and a five-tap rule: nothing patients need should take more than five taps to reach.",
    tags: ["Healthcare", "Web Development", "Accessibility"],
    category: "web",
    mockKey: "meridian",
    client: "Meridian Health",
    year: "2025",
    services: ["Web Design & Development", "UI/UX Design"],
    challenge:
      "Meridian's patient portal technically had every feature — and patients still called the front desk to book appointments and find results. The interface spoke in clinical jargon, buried common tasks under nested menus, and failed basic accessibility checks that mattered for an older patient base.",
    approach: [
      "We ran moderated sessions with real patients across age ranges and watched where they got stuck. Almost every point of failure came down to two things: the words on screen, and how many taps a task took.",
      "We rewrote the interface in plain language, restructured the information architecture around the handful of things patients actually come to do, and enforced a 'five-tap rule' — nothing essential should be more than five taps from the home screen.",
      "Accessibility was a design constraint from day one, not a final audit: contrast, focus order, and screen-reader behavior were checked at every step.",
    ],
    results: [
      "Front-desk calls for routine tasks dropped sharply as patients self-served.",
      "Task-completion rates for booking and records climbed well past the old portal.",
      "The rebuilt portal met WCAG 2.2 AA across the core patient flows.",
    ],
    metrics: [
      { value: "−37%", label: "Support calls" },
      { value: "+52%", label: "Task completion" },
      { value: "AA", label: "WCAG 2.2" },
    ],
    testimonial: {
      quote:
        "Our patients stopped calling to do things they could now do themselves in under a minute. That's the whole point of a portal, and it took ELLOR to make ours deliver it.",
      author: "Priya Nair",
      role: "Director of Digital, Meridian Health",
    },
  },
  {
    slug: "northline-roasters",
    eyebrow: "Northline Roasters — Brand & Site",
    title: "Giving a Third-Wave Roastery a Second Look",
    description:
      "New mark, new type system, and a site built around the one thing that actually sells coffee online: knowing exactly where and when it was roasted.",
    tags: ["Branding", "Webflow", "Photography Direction"],
    category: "branding",
    mockKey: "northline",
    client: "Northline Roasters",
    year: "2024",
    services: ["Brand Identity", "Web Design & Development"],
    challenge:
      "Northline made genuinely excellent coffee and looked like every other roastery online. The brand had no visual point of view, and the website hid the one detail their best customers cared about most: roast date and origin. Subscriptions were flat and repeat orders were leaking to competitors with clearer stories.",
    approach: [
      "We rebuilt the brand from the positioning up — landing on freshness and traceability as the thing Northline could own — then designed a mark and type system with a distinct, confident point of view.",
      "The new site puts roast date and origin front and center on every product, with photography direction that makes the craft feel tangible rather than generic.",
      "We built it in Webflow so the Northline team could publish new roasts and stories themselves without a developer in the loop.",
    ],
    results: [
      "Online sales grew substantially in the two quarters after launch.",
      "Subscription signups more than doubled against the previous year.",
      "Repeat orders climbed as the freshness story gave customers a reason to come back.",
    ],
    metrics: [
      { value: "+64%", label: "Online sales" },
      { value: "2.3×", label: "Subscriptions" },
      { value: "+41%", label: "Repeat orders" },
    ],
    testimonial: {
      quote:
        "We finally look like we taste. The freshness story was hiding in plain sight, and ELLOR built the whole brand around it.",
      author: "Marcus Lee",
      role: "Founder, Northline Roasters",
    },
  },
  {
    slug: "basin-and-co",
    eyebrow: "Basin & Co. — Fintech Dashboard",
    title: "Redesigning a Fintech Dashboard for Trust at a Glance",
    description:
      "A ground-up UX overhaul that turned a dense, spreadsheet-like dashboard into something a first-time user could read correctly in ten seconds.",
    tags: ["UI/UX Design", "Fintech", "Design System"],
    category: "uiux",
    mockKey: "basin",
    client: "Basin & Co.",
    year: "2024",
    services: ["UI/UX Design"],
    challenge:
      "Basin's dashboard showed everything at once — a wall of numbers that power users tolerated and new users abandoned. Onboarding drop-off was high, support was fielding the same 'what am I looking at' questions daily, and in a fintech product, confusion reads as a reason not to trust you with money.",
    approach: [
      "We reframed the core problem: the dashboard wasn't missing data, it was missing hierarchy. We interviewed new and expert users to find the two or three things that actually needed to be legible in the first ten seconds.",
      "From there we rebuilt the interface around a clear visual hierarchy, progressive disclosure for the dense stuff, and a design system that kept every screen consistent.",
      "We prototyped and tested with first-time users twice before a line of production code was written — the cheapest place to catch a confusing layout.",
    ],
    results: [
      "New users could identify their key numbers within about ten seconds of landing.",
      "Onboarding drop-off fell significantly as the first screen stopped overwhelming people.",
      "Repetitive 'how do I read this' support tickets dropped as the interface explained itself.",
    ],
    metrics: [
      { value: "10s", label: "To first insight" },
      { value: "−44%", label: "Onboarding drop-off" },
      { value: "−29%", label: "Support tickets" },
    ],
    testimonial: {
      quote:
        "Same data, completely different product. New users get it now, and 'trust at a glance' turned out to be a design problem we could actually solve.",
      author: "Sofia Reyes",
      role: "VP Product, Basin & Co.",
    },
  },
  {
    slug: "fernweh-travel",
    eyebrow: "Fernweh Travel — SEO & Growth Campaign",
    title: "Turning Search Intent Into Bookings",
    description:
      "A technical SEO overhaul plus a content strategy rebuilt around booking intent, not just traffic — organic bookings up, cost per acquisition down.",
    tags: ["SEO", "Digital Marketing", "Content Strategy"],
    category: "marketing",
    mockKey: "fernweh",
    client: "Fernweh Travel",
    year: "2025",
    services: ["SEO & Organic Growth", "Digital Marketing"],
    challenge:
      "Fernweh ranked for plenty of high-volume travel terms and converted almost none of it. The content was built for traffic, not bookings, and a shaky technical foundation — slow pages, thin structured data, tangled architecture — capped how far any of it could climb.",
    approach: [
      "We fixed the foundation first: crawlability, site speed, and structured data, so the content work that followed had somewhere solid to land.",
      "Then we rebuilt the content strategy around booking intent — mapping keywords to where people actually were in the decision, not just what got the most searches — and produced content to match.",
      "We tied everything to one dashboard reporting on bookings and cost per acquisition, so channel and content decisions were made against outcomes, not vanity rankings.",
    ],
    results: [
      "Organic bookings more than doubled over the course of the campaign.",
      "Cost per acquisition dropped as intent-matched content converted better.",
      "Top-three keyword positions tripled against the previous baseline.",
    ],
    metrics: [
      { value: "+118%", label: "Organic bookings" },
      { value: "−36%", label: "Cost per acquisition" },
      { value: "3×", label: "Top-3 keywords" },
    ],
    testimonial: {
      quote:
        "We were drowning in traffic that never booked. ELLOR pointed the whole strategy at intent, and the bookings finally followed the rankings.",
      author: "Tom Fisher",
      role: "Marketing Lead, Fernweh Travel",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export interface ProjectCategory {
  key: string;
  label: string;
}

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  { key: "all", label: "All Work" },
  { key: "branding", label: "Branding" },
  { key: "uiux", label: "UI/UX" },
  { key: "web", label: "Web Development" },
  { key: "ecommerce", label: "Ecommerce" },
  { key: "marketing", label: "Marketing" },
];
