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
      "Ellor Digital didn't just redesign our site—they reframed how we talk about ourselves. We've been in business for twelve years, and this is the first time our brand actually feels like us.",
    author: "Dana Cole",
    role: "Head of Ecommerce",
    company: "Aurora Outfitters",
    projectSlug: "aurora-outfitters",
  },
  {
    quote:
      "They pushed back on two of our assumptions in week one and turned out to be right on both. That kind of clarity is exactly what we were paying for.",
    author: "Priya Nair",
    role: "Director of Digital",
    company: "Meridian Health",
    projectSlug: "meridian-health",
  },
  {
    quote:
      "The site launched on time and on budget, and the first week of traffic confirmed everything they said it would do. That almost never happens.",
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
