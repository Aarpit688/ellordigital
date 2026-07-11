export interface Industry {
  slug: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  painPoints: string[];
  howWeHelp: string[];
  relatedProjectSlug?: string;
}

export const INDUSTRIES: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: "health",
    tagline: "Digital that patients trust and teams can maintain.",
    description:
      "Portals, booking flows, and sites for providers where clarity and accessibility aren't nice-to-haves — they're the difference between a patient self-serving and calling the front desk.",
    painPoints: [
      "Interfaces written in clinical jargon patients can't parse",
      "Common tasks buried under nested menus and logins",
      "Accessibility gaps that exclude an older patient base",
    ],
    howWeHelp: [
      "Plain-language IA built around what patients actually come to do",
      "WCAG 2.2 AA accessibility treated as a design constraint, not a final audit",
      "Booking and records flows measured on task completion, not page count",
    ],
    relatedProjectSlug: "meridian-health",
  },
  {
    slug: "ecommerce-retail",
    name: "Ecommerce & Retail",
    icon: "ecommerce",
    tagline: "Storefronts engineered for checkout, not just browsing.",
    description:
      "Shopify and headless commerce builds where the whole experience is pointed at conversion — fast product pages, a mobile-first checkout, and analytics you can actually trust.",
    painPoints: [
      "Slow product pages quietly costing you mobile sales",
      "Checkout flows that ask for too much, too early",
      "Themes swapped in with no conversion research underneath",
    ],
    howWeHelp: [
      "Funnel audits that pinpoint exactly where shoppers drop off",
      "Mobile-first, guest-first checkout redesigns",
      "Performance budgets enforced from day one, not bolted on later",
    ],
    relatedProjectSlug: "aurora-outfitters",
  },
  {
    slug: "fintech",
    name: "Fintech & Financial",
    icon: "finance",
    tagline: "Complex products made legible enough to trust.",
    description:
      "Dashboards and financial products where confusion reads as a reason not to trust you with money. We turn dense data into interfaces a first-time user can read correctly at a glance.",
    painPoints: [
      "Dashboards that show everything and explain nothing",
      "High onboarding drop-off from overwhelming first screens",
      "Support fielding the same 'what am I looking at' questions daily",
    ],
    howWeHelp: [
      "Clear visual hierarchy and progressive disclosure for dense data",
      "Design systems that keep every screen consistent",
      "Prototype testing with first-time users before code is written",
    ],
    relatedProjectSlug: "basin-and-co",
  },
  {
    slug: "travel-hospitality",
    name: "Travel & Hospitality",
    icon: "travel",
    tagline: "Search intent turned into actual bookings.",
    description:
      "For travel brands drowning in traffic that never books, we rebuild the technical foundation and point content strategy at booking intent — so rankings finally translate into revenue.",
    painPoints: [
      "High-volume rankings that convert almost none of it",
      "Content built for traffic instead of booking intent",
      "Shaky technical foundations capping every campaign",
    ],
    howWeHelp: [
      "Technical SEO overhauls: speed, crawlability, structured data",
      "Content mapped to where people actually are in the decision",
      "Reporting tied to bookings and cost per acquisition",
    ],
    relatedProjectSlug: "fernweh-travel",
  },
  {
    slug: "food-beverage",
    name: "Food & Beverage",
    icon: "brand",
    tagline: "Brands that finally look like they taste.",
    description:
      "Roasters, makers, and DTC food brands with a great product and a forgettable identity. We build brand systems and sites around the one detail your best customers actually care about.",
    painPoints: [
      "A great product with no visual point of view",
      "The thing that sells hidden below the fold",
      "Flat subscriptions and repeat orders leaking to competitors",
    ],
    howWeHelp: [
      "Positioning-first brand systems, not a logo and a prayer",
      "Sites built around the detail that drives repeat purchase",
      "Self-serve CMS builds so your team can publish new drops",
    ],
    relatedProjectSlug: "northline-roasters",
  },
  {
    slug: "saas-technology",
    name: "SaaS & Technology",
    icon: "saas",
    tagline: "Marketing sites and product UX that pull their weight.",
    description:
      "For software teams, we build marketing sites that convert and product interfaces that reduce support load — designed and developed under one roof so what ships is what was designed.",
    painPoints: [
      "Marketing sites that describe features but don't convert",
      "Product UX that generates support tickets instead of activation",
      "Design and engineering drifting apart after every handoff",
    ],
    howWeHelp: [
      "Conversion-focused marketing sites grounded in real positioning",
      "Product UX measured on activation and support deflection",
      "One team from strategy through build — fewer lossy handoffs",
    ],
    relatedProjectSlug: "basin-and-co",
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}
