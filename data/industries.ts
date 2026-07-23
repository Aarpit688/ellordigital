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
    tagline: "Sites patients trust and your team can actually keep running.",
    description:
      "Portals, booking flows, and provider sites. Here, plain writing and accessibility decide whether a patient handles it online or picks up the phone to the front desk. On this kind of work, that is the whole job.",
    painPoints: [
      "Screens written in clinical jargon no patient can follow",
      "The tasks people come to do, buried under menus and logins",
      "Accessibility gaps that quietly lock out older patients",
    ],
    howWeHelp: [
      "Plain-language navigation built around what patients come to do",
      "WCAG 2.2 AA baked in as a design rule, not checked off at the end",
      "Booking and records flows judged on whether people finish, not page count",
    ],
    relatedProjectSlug: "meridian-health",
  },
  {
    slug: "ecommerce-retail",
    name: "Ecommerce & Retail",
    icon: "ecommerce",
    tagline: "Storefronts built to check out, not just browse.",
    description:
      "Shopify and headless builds aimed at one thing: the sale. Fast product pages, a checkout that works thumb-first on mobile, and numbers you can actually trust.",
    painPoints: [
      "Slow product pages bleeding mobile sales you never see",
      "Checkouts that ask for too much, too soon",
      "A theme dropped in with no conversion research behind it",
    ],
    howWeHelp: [
      "Funnel audits that show exactly where shoppers quit",
      "Checkout redesigns built mobile-first and guest-first",
      "Performance budgets set on day one, not patched in later",
    ],
    relatedProjectSlug: "aurora-outfitters",
  },
  {
    slug: "fintech",
    name: "Fintech & Financial",
    icon: "finance",
    tagline: "Complicated products made clear enough to trust.",
    description:
      "Dashboards and money products where any confusion reads as a reason not to hand you their cash. We take dense data and make a screen a first-timer can read right the first time.",
    painPoints: [
      "Dashboards that show everything and explain none of it",
      "People quitting onboarding at the first wall of numbers",
      "Support answering the same 'what am I looking at' question all day",
    ],
    howWeHelp: [
      "A clear hierarchy that reveals dense data a step at a time",
      "A design system so every screen behaves the same way",
      "Prototypes tested on first-time users before we write code",
    ],
    relatedProjectSlug: "basin-and-co",
  },
  {
    slug: "travel-hospitality",
    name: "Travel & Hospitality",
    icon: "travel",
    tagline: "Search traffic turned into actual bookings.",
    description:
      "Some travel brands sit on piles of traffic that never books. We fix the technical base and aim the content at people ready to book, so rankings finally show up as revenue.",
    painPoints: [
      "Big rankings that convert almost none of the traffic",
      "Content written for clicks, not for people ready to book",
      "A shaky technical base holding every campaign back",
    ],
    howWeHelp: [
      "Technical SEO cleanups: speed, crawlability, structured data",
      "Content matched to where someone actually is in planning a trip",
      "Reports tied to bookings and cost per acquisition, nothing softer",
    ],
    relatedProjectSlug: "fernweh-travel",
  },
  {
    slug: "food-beverage",
    name: "Food & Beverage",
    icon: "brand",
    tagline: "Brands that finally look as good as they taste.",
    description:
      "Roasters, makers, and direct-to-consumer food brands with a great product and a forgettable look. We build the brand and the site around the one thing your best customers actually care about.",
    painPoints: [
      "A great product with no look of its own",
      "The detail that sells, buried below the fold",
      "Flat subscriptions and repeat orders slipping to rivals",
    ],
    howWeHelp: [
      "Brand systems that start with positioning, not a logo and a wish",
      "Sites built around the detail that brings people back",
      "A CMS your team runs alone, so new drops go live without us",
    ],
    relatedProjectSlug: "northline-roasters",
  },
  {
    slug: "saas-technology",
    name: "SaaS & Technology",
    icon: "saas",
    tagline: "Marketing sites and product UX that earn their keep.",
    description:
      "For software teams, we build marketing sites that convert and product screens that cut support load. Design and build sit under one roof, so what ships matches what was drawn.",
    painPoints: [
      "Marketing sites that list features and convert no one",
      "Product UX that spawns support tickets instead of active users",
      "Design and engineering drifting apart at every handoff",
    ],
    howWeHelp: [
      "Marketing sites built to convert, grounded in real positioning",
      "Product UX judged on activation and fewer support tickets",
      "One team from strategy through build, so less gets lost between them",
    ],
    relatedProjectSlug: "basin-and-co",
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}
