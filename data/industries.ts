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
      "Healthcare sites carry a different kind of weight. People arrive stressed, in a hurry, or unsure what they're looking for, so clarity matters more than cleverness. We build with plain language, accessible navigation, and forms that don't ask someone to repeat information they already gave you.",
    painPoints: [
      "Screens written in clinical jargon no patient can follow",
      "The tasks people come to do, buried under menus and logins",
      "Accessibility gaps that quietly lock out older patients",
    ],
    howWeHelp: [
      "Plain-language navigation that meets patients where they are, not where a sitemap assumes they'll be",
      "Accessible design as a baseline, not an add-on",
      "Booking and intake flows that don't make people guess what happens next",
    ],
    relatedProjectSlug: "meridian-health",
  },
  {
    slug: "ecommerce-retail",
    name: "Ecommerce & Retail",
    icon: "ecommerce",
    tagline: "Storefronts that hold up when people actually shop.",
    description:
      "A store that looks good empty is a different problem than a store that holds up under real browsing and checkout pressure. We build product pages, cart flows, and checkout paths that stay fast and clear whether someone's on a laptop or thumbing through on their phone in a parking lot.",
    painPoints: [
      "Slow product pages bleeding mobile sales you never see",
      "Checkouts that ask for too much, too soon",
      "A theme dropped in with no conversion research behind it",
    ],
    howWeHelp: [
      "Product pages built to answer the buyer's actual questions, not just show the item",
      "Checkout flows designed for mobile first, not adapted to it after the fact",
      "Merchandising that's easy for your team to update without touching code",
    ],
    relatedProjectSlug: "aurora-outfitters",
  },
  {
    slug: "fintech",
    name: "Fintech & Financial",
    icon: "finance",
    tagline: "Complicated products made clear enough to trust.",
    description:
      "Financial products often carry more moving parts than most people want to think about. Our job is to design a hierarchy that shows the number that matters first, explains the rest in order, and never leaves someone wondering if a page is broken versus just loading slowly.",
    painPoints: [
      "Dashboards that show everything and explain none of it",
      "People quitting onboarding at the first wall of numbers",
      "Support answering the same 'what am I looking at' question all day",
    ],
    howWeHelp: [
      "Clear visual hierarchy so the most important figure is never buried",
      "Design systems that keep dense products consistent as they grow",
      "Interfaces that make trust the default, not something users have to work for",
    ],
    relatedProjectSlug: "basin-and-co",
  },
  {
    slug: "travel-hospitality",
    name: "Travel & Hospitality",
    icon: "travel",
    tagline: "Search that turns into actual bookings.",
    description:
      "Travel sites live or die on how easy it is to go from just looking to booked. We design search and filtering that doesn't overwhelm, content that reflects where someone is in their planning, and booking paths with as few dead ends as possible.",
    painPoints: [
      "Big rankings that convert almost none of the traffic",
      "Content written for clicks, not for people ready to book",
      "A shaky technical base holding every campaign back",
    ],
    howWeHelp: [
      "Search and filtering built around how people actually plan trips",
      "Content that adapts to whether someone's browsing or ready to book",
      "Booking flows with a clear, short path to confirmation",
    ],
    relatedProjectSlug: "fernweh-travel",
  },
  {
    slug: "food-beverage",
    name: "Food & Beverage",
    icon: "brand",
    tagline: "Brands that feel as good as they taste.",
    description:
      "Food and beverage brands live on shelf appeal and scroll appeal at the same time. We build identity systems that start with packaging and product, then carry that same feel through the site so the online experience never undersells the physical one.",
    painPoints: [
      "A great product with no look of its own",
      "The detail that sells, buried below the fold",
      "Flat subscriptions and repeat orders slipping to rivals",
    ],
    howWeHelp: [
      "Brand systems that hold up on packaging, shelf, and screen alike",
      "Sites built around the product itself, not a generic template with photos dropped in",
      "Content management that's simple enough for your team to run without a developer on call",
    ],
    relatedProjectSlug: "northline-roasters",
  },
  {
    slug: "saas-technology",
    name: "SaaS & Technology",
    icon: "saas",
    tagline: "Marketing sites and product UX that don't fight each other.",
    description:
      "For software teams, the marketing site and the actual product often feel like they were built by two different companies. We design both to speak the same visual language, so the jump from learn more to sign up to using the product feels like one continuous experience.",
    painPoints: [
      "Marketing sites that list features and convert no one",
      "Product UX that spawns support tickets instead of active users",
      "Design and engineering drifting apart at every handoff",
    ],
    howWeHelp: [
      "Marketing sites built to convert, not just describe",
      "Product UX judged on real usage patterns, not assumptions",
      "A visual language consistent from landing page through to logged-in product",
    ],
    relatedProjectSlug: "basin-and-co",
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}
