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
    title: "Half the Checkout Time, Same Brand",
    description:
      "A full Shopify rebuild aimed at load speed and a reworked mobile checkout. We chased the numbers and kept the outdoor-gear grit that makes the brand look like itself.",
    tags: ["Ecommerce", "Performance", "Shopify"],
    category: "ecommerce",
    client: "Aurora Outfitters",
    year: "2025",
    services: ["E-commerce Development", "Web Design & Development"],
    challenge:
      "Aurora had steady traffic and a loyal base, but mobile shoppers kept quitting at checkout. Product pages crawled on anything slower than office wifi, and a five-step checkout asked for too much before it gave anything back. The drop-off was right there in the analytics. The trouble was that every fix on the table risked sanding down a brand built on rugged, high-contrast personality.",
    approach: [
      "We audited the funnel before touching the design, tracking exactly where people dropped and on which devices. Two culprits stood out: product-page load time, and a checkout that demanded an account before it would show a shipping cost.",
      "Then we rebuilt the storefront on Shopify against a strict performance budget. Every image, script, and third-party app had to earn its place. We collapsed checkout into a mobile-first, guest-first flow that shows cost and delivery date up front.",
      "The brand work was about removing, not adding. We kept the grit and the contrast and cut the decorative weight that was quietly costing seconds.",
    ],
    results: [
      "Mobile checkout time dropped by almost half, and we never touched the product catalog.",
      "Largest Contentful Paint on a mid-range phone over 4G came in under 1.5 seconds.",
      "Guest checkout became the default, and completed mobile orders went up across the board.",
    ],
    metrics: [
      { value: "−48%", label: "Checkout time" },
      { value: "+31%", label: "Mobile conversion" },
      { value: "1.4s", label: "LCP on 4G" },
    ],
    testimonial: {
      quote:
        "They treated our checkout like the product it actually is. Same brand, half the friction, and for once I trusted the numbers I was making decisions on.",
      author: "Dana Cole",
      role: "Head of Ecommerce, Aurora Outfitters",
    },
  },
  {
    slug: "meridian-health",
    eyebrow: "Meridian Health — Patient Portal",
    title: "A Portal Patients Actually Log Into",
    description:
      "We rebuilt the appointment and records flow around plain language and one rule: nothing a patient needs should sit more than five taps away.",
    tags: ["Healthcare", "Web Development", "Accessibility"],
    category: "web",
    client: "Meridian Health",
    year: "2025",
    services: ["Web Design & Development", "UI/UX Design"],
    challenge:
      "Meridian's portal had every feature on paper, and patients still phoned the front desk to book appointments and track down results. The interface talked in clinical jargon, buried the common tasks under nested menus, and flunked basic accessibility checks that really mattered for an older patient base.",
    approach: [
      "We sat with real patients across a range of ages and watched where they got stuck. Nearly every failure came down to two things: the words on the screen, and how many taps a task took.",
      "We rewrote the interface in plain language, reorganized it around the handful of things patients actually come to do, and held to a five-tap rule: nothing essential sits more than five taps from the home screen.",
      "Accessibility was a constraint from day one, not a box we ticked at the end. Contrast, focus order, and screen-reader behavior got checked at every step.",
    ],
    results: [
      "Front-desk calls for routine tasks fell sharply once patients could do the work themselves.",
      "Booking and records completion rates climbed well past the old portal.",
      "The rebuilt portal met WCAG 2.2 AA across the core patient flows.",
    ],
    metrics: [
      { value: "−37%", label: "Support calls" },
      { value: "+52%", label: "Task completion" },
      { value: "AA", label: "WCAG 2.2" },
    ],
    testimonial: {
      quote:
        "Patients stopped calling us to do things they can now do themselves in under a minute. That's the whole point of a portal, and it took ELLOR to make ours actually do it.",
      author: "Priya Nair",
      role: "Director of Digital, Meridian Health",
    },
  },
  {
    slug: "northline-roasters",
    eyebrow: "Northline Roasters — Brand & Site",
    title: "Giving a Third-Wave Roastery a Second Look",
    description:
      "A new mark, a new type system, and a site built around the one thing that actually sells coffee online: knowing exactly where and when it was roasted.",
    tags: ["Branding", "Webflow", "Photography Direction"],
    category: "branding",
    client: "Northline Roasters",
    year: "2024",
    services: ["Brand Identity", "Web Design & Development"],
    challenge:
      "Northline made genuinely excellent coffee and looked like every other roastery online. The brand had no point of view, and the site buried the one detail their best customers cared about most: roast date and origin. Subscriptions were flat, and repeat orders were leaking to competitors who told a clearer story.",
    approach: [
      "We rebuilt the brand from the positioning up, landing on freshness and traceability as the ground Northline could own, then designed a mark and type system with a clear point of view.",
      "The new site puts roast date and origin front and center on every product, with photography direction that makes the craft feel real instead of stock.",
      "We built it in Webflow so the Northline team could post new roasts and stories on their own, no developer needed.",
    ],
    results: [
      "Online sales jumped in the two quarters after launch.",
      "Subscription signups more than doubled year over year.",
      "Repeat orders climbed once the freshness story gave people a reason to come back.",
    ],
    metrics: [
      { value: "+64%", label: "Online sales" },
      { value: "2.3×", label: "Subscriptions" },
      { value: "+41%", label: "Repeat orders" },
    ],
    testimonial: {
      quote:
        "We finally look like we taste. The freshness story was sitting there in plain sight, and ELLOR built the whole brand around it.",
      author: "Marcus Lee",
      role: "Founder, Northline Roasters",
    },
  },
  {
    slug: "basin-and-co",
    eyebrow: "Basin & Co. — Fintech Dashboard",
    title: "Redesigning a Fintech Dashboard for Trust at a Glance",
    description:
      "A full UX overhaul that took a dense, spreadsheet-like dashboard and made it something a first-time user could read correctly in ten seconds.",
    tags: ["UI/UX Design", "Fintech", "Design System"],
    category: "uiux",
    client: "Basin & Co.",
    year: "2024",
    services: ["UI/UX Design"],
    challenge:
      "Basin's dashboard showed everything at once, a wall of numbers that power users put up with and new users walked away from. Onboarding drop-off was high, support answered the same 'what am I looking at' question every day, and in a fintech product, confusion reads as a reason not to trust you with money.",
    approach: [
      "We reframed the problem: the dashboard wasn't short on data, it was short on hierarchy. We interviewed new and expert users to pin down the two or three things that had to be legible in the first ten seconds.",
      "From there we rebuilt the interface around a clear visual hierarchy, tucked the dense detail behind progressive disclosure, and set up a design system that kept every screen consistent.",
      "We prototyped and tested with first-time users twice before anyone wrote a line of production code. It's the cheapest place to catch a confusing layout.",
    ],
    results: [
      "New users could find their key numbers within about ten seconds of landing.",
      "Onboarding drop-off fell hard once the first screen stopped overwhelming people.",
      "The repetitive 'how do I read this' tickets dropped off as the interface started explaining itself.",
    ],
    metrics: [
      { value: "10s", label: "To first insight" },
      { value: "−44%", label: "Onboarding drop-off" },
      { value: "−29%", label: "Support tickets" },
    ],
    testimonial: {
      quote:
        "Same data, completely different product. New users get it now, and trust at a glance turned out to be a design problem we could actually solve.",
      author: "Sofia Reyes",
      role: "VP Product, Basin & Co.",
    },
  },
  {
    slug: "fernweh-travel",
    eyebrow: "Fernweh Travel — SEO & Growth Campaign",
    title: "Turning Search Intent Into Bookings",
    description:
      "A technical SEO overhaul and a content strategy rebuilt around booking intent instead of raw traffic. Organic bookings went up, cost per acquisition came down.",
    tags: ["SEO", "Digital Marketing", "Content Strategy"],
    category: "marketing",
    client: "Fernweh Travel",
    year: "2025",
    services: ["SEO & Organic Growth", "Digital Marketing"],
    challenge:
      "Fernweh ranked for plenty of high-volume travel terms and converted almost none of them. The content was built for traffic, not bookings, and a shaky technical base of slow pages, thin structured data, and tangled architecture capped how far any of it could climb.",
    approach: [
      "We fixed the foundation first: crawlability, site speed, and structured data, so the content work that came next had somewhere solid to land.",
      "Then we rebuilt the content strategy around booking intent, mapping keywords to where people actually were in the decision rather than what got the most searches, and wrote to match.",
      "We tied it all to one dashboard tracking bookings and cost per acquisition, so channel and content calls were made against real outcomes instead of vanity rankings.",
    ],
    results: [
      "Organic bookings more than doubled over the run of the campaign.",
      "Cost per acquisition dropped as the intent-matched content converted better.",
      "Top-three keyword positions tripled against the old baseline.",
    ],
    metrics: [
      { value: "+118%", label: "Organic bookings" },
      { value: "−36%", label: "Cost per acquisition" },
      { value: "3×", label: "Top-3 keywords" },
    ],
    testimonial: {
      quote:
        "We were drowning in traffic that never booked. ELLOR aimed the whole strategy at intent, and the bookings finally caught up with the rankings.",
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
