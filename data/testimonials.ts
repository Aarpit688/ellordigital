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
      "They treated our checkout like the product it actually is. Same brand, half the friction, and for once we could trust the numbers we were making decisions on.",
    author: "Dana Cole",
    role: "Head of Ecommerce",
    company: "Aurora Outfitters",
    projectSlug: "aurora-outfitters",
  },
  {
    quote:
      "Patients stopped calling to do things they could suddenly handle themselves in under a minute. That's the entire point of a portal, and it took ELLOR to make ours actually do it.",
    author: "Priya Nair",
    role: "Director of Digital",
    company: "Meridian Health",
    projectSlug: "meridian-health",
  },
  {
    quote:
      "Same data, a completely different product. New users get it now, and it turned out 'trust at a glance' was a design problem we could actually solve.",
    author: "Sofia Reyes",
    role: "VP Product",
    company: "Basin & Co.",
    projectSlug: "basin-and-co",
  },
  {
    quote:
      "We finally look the way our coffee tastes. The freshness story was sitting in plain sight the whole time, and ELLOR built the brand around it.",
    author: "Marcus Lee",
    role: "Founder",
    company: "Northline Roasters",
    projectSlug: "northline-roasters",
  },
  {
    quote:
      "We were buried in traffic that never booked a thing. ELLOR aimed the whole strategy at intent, and the bookings finally caught up with the rankings.",
    author: "Tom Fisher",
    role: "Marketing Lead",
    company: "Fernweh Travel",
    projectSlug: "fernweh-travel",
  },
];
