export interface MethodStep {
  letter: string;
  title: string;
  short: string;
  long: string;
}

export const METHOD_STEPS: MethodStep[] = [
  {
    letter: "E",
    title: "Explore",
    short: "Stakeholder interviews, analytics audits, and competitor teardowns — before a single pixel moves.",
    long: "Every engagement starts with listening, not proposing. We interview stakeholders, audit existing analytics, and map the competitive landscape so the brief we work from reflects reality, not assumptions. This is also where we're honest with you about scope — if something doesn't need a full redesign, we'll say so here.",
  },
  {
    letter: "L",
    title: "Layout",
    short: "Sitemaps, user flows, and positioning locked down and signed off — the map before the road trip.",
    long: "Before anything gets styled, we settle the structure: sitemaps, user flows, content models, and — for brand work — positioning. This is the least glamorous stage and the one most likely to get rushed elsewhere. We don't skip it, because every downstream design decision inherits whatever gets decided here.",
  },
  {
    letter: "L",
    title: "Layer",
    short: "Visual design and interactive prototypes, layered onto the structure and tested with real users.",
    long: "With structure agreed, we layer on visual design and interaction: type, color, component design, and clickable prototypes. Prototypes get tested with real users before we call anything final — catching a confusing flow in Figma is a lot cheaper than catching it in production.",
  },
  {
    letter: "O",
    title: "Optimize",
    short: "Clean, performant, accessible builds — engineered so nothing slows your story down.",
    long: "Design becomes a real, production build here: clean code, performance budgets, and an accessibility pass that actually checks contrast, focus order, and screen readers rather than ticking a box. We optimize before launch, not as an emergency fix after a slow page costs you conversions.",
  },
  {
    letter: "R",
    title: "Release",
    short: "Launch, plus 30/60/90-day check-ins against the metrics we agreed on at kickoff.",
    long: "Launch is a milestone, not a finish line. We check in at 30, 60, and 90 days against the specific metrics we agreed on before the project started — not vanity numbers we picked afterward to look good in a report.",
  },
];
