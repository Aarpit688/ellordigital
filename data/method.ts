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
    short: "Stakeholder interviews, an analytics audit, and a look at the competition, all before a pixel moves.",
    long: "Every project starts with us listening, not pitching. We talk to your stakeholders, dig through your analytics, and map who you're up against, so the brief matches reality instead of a hunch. It's also where we're straight with you on scope. If a full redesign isn't the answer, we say so now.",
  },
  {
    letter: "L",
    title: "Layout",
    short: "Sitemaps, user flows, and positioning, all settled and signed off. The map before the road trip.",
    long: "Before anything gets styled, we lock the structure: sitemaps, user flows, content models, and positioning on brand work. It's the dullest stage and the one most shops rush. We don't, because every design choice that comes later inherits whatever we decide here.",
  },
  {
    letter: "L",
    title: "Layer",
    short: "Visual design and clickable prototypes, laid over the structure and tested on real people.",
    long: "With the structure agreed, we add the visual layer: type, color, components, and prototypes you can click through. We test those on real users before calling anything done. Catching a bad flow in Figma costs a lot less than catching it in production.",
  },
  {
    letter: "O",
    title: "Optimize",
    short: "Clean, fast, accessible builds, put together so nothing gets in the reader's way.",
    long: "Here the design turns into a real, production build: clean code, performance budgets, and an accessibility pass that checks contrast, focus order, and screen readers instead of ticking a box. We do this before launch, not in a panic after a slow page has already cost you sales.",
  },
  {
    letter: "R",
    title: "Release",
    short: "Launch, then check-ins at 30, 60, and 90 days against the numbers we set at kickoff.",
    long: "Launch is a milestone, not the finish line. We come back at 30, 60, and 90 days and measure against the exact numbers we agreed on before kickoff, not flattering ones we cherry-pick later to pad a report.",
  },
];
