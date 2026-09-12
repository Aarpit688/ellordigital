export interface MethodStep {
  letter: string;
  title: string;
  short: string;
  long: string;
}

export const METHOD_STEPS: MethodStep[] = [
  {
    letter: "D",
    title: "Discover",
    short: "We start with the business, not the brief. Market position, audience behavior, and competitive landscape—all mapped before a single design decision is made.",
    long: "Every project starts with us listening, not pitching. We talk to your stakeholders, dig through your analytics, and map who you're up against, so the brief matches reality instead of a hunch. It's also where we're straight with you on scope. If a full redesign isn't the answer, we say so now.",
  },
  {
    letter: "A",
    title: "Architect",
    short: "Structure before style. Information architecture, user flows, and content hierarchy—the invisible work that makes everything visible work better.",
    long: "Before anything gets styled, we lock the structure: sitemaps, user flows, content models, and positioning on brand work. It's the dullest stage and the one most shops rush. We don't, because every design choice that comes later inherits whatever we decide here.",
  },
  {
    letter: "L",
    title: "Design",
    short: "Visual identity and interface design built on the architecture. Every decision traceable to a reason. Nothing added because it looks nice; everything added because it works.",
    long: "With the structure agreed, we add the visual layer: type, color, components, and prototypes you can click through. We test those on real users before calling anything done. Catching a bad flow in Figma costs a lot less than catching it in production.",
  },
  {
    letter: "B",
    title: "Build",
    short: "Clean, fast, accessible code. Built for performance from the ground up, not bolted on at the end.",
    long: "Here the design turns into a real, production build: clean code, performance budgets, and an accessibility pass that checks contrast, focus order, and screen readers instead of ticking a box. We do this before launch, not in a panic after a slow page has already cost you sales.",
  },
  {
    letter: "L",
    title: "Launch & Review",
    short: "We go live—then we stay involved. Check-ins at 30, 60, and 90 days against the metrics we set at the start. Because launch is the beginning, not the end.",
    long: "Launch is a milestone, not the finish line. We come back at 30, 60, and 90 days and measure against the exact numbers we agreed on before kickoff, not flattering ones we cherry-pick later to pad a report.",
  },
];
