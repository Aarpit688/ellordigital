export interface ClientTestimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  projectSlug?: string;
}

export const TESTIMONIALS: ClientTestimonial[] = [
  {
    quote:
      "They treated our checkout like the product it actually is. Same brand, half the friction — and we could finally trust the numbers we were making decisions from.",
    author: "Dana Cole",
    role: "Head of Ecommerce",
    company: "Aurora Outfitters",
    projectSlug: "aurora-outfitters",
  },
  {
    quote:
      "Our patients stopped calling to do things they could now do themselves in under a minute. That's the whole point of a portal, and it took ELLOR to make ours deliver it.",
    author: "Priya Nair",
    role: "Director of Digital",
    company: "Meridian Health",
    projectSlug: "meridian-health",
  },
  {
    quote:
      "Same data, completely different product. New users get it now, and 'trust at a glance' turned out to be a design problem we could actually solve.",
    author: "Sofia Reyes",
    role: "VP Product",
    company: "Basin & Co.",
    projectSlug: "basin-and-co",
  },
  {
    quote:
      "We finally look like we taste. The freshness story was hiding in plain sight, and ELLOR built the whole brand around it.",
    author: "Marcus Lee",
    role: "Founder",
    company: "Northline Roasters",
    projectSlug: "northline-roasters",
  },
  {
    quote:
      "We were drowning in traffic that never booked. ELLOR pointed the whole strategy at intent, and the bookings finally followed the rankings.",
    author: "Tom Fisher",
    role: "Marketing Lead",
    company: "Fernweh Travel",
    projectSlug: "fernweh-travel",
  },
];
