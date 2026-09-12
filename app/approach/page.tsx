import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/Reveal";
import FaqAccordion from "@/components/FaqAccordion";
import type { MethodStep } from "@/data/method";

function MethodBlock({
  letter,
  title,
  long,
  index,
}: Pick<MethodStep, "letter" | "title" | "long"> & { index: number }) {
  const reverse = index % 2 === 1;
  return (
    <Reveal className="grid md:grid-cols-2 gap-8 md:gap-16 items-center py-12 md:py-16 border-t border-line">
      <div className={reverse ? "md:order-2" : ""}>
        <span className="text-lime font-display font-bold text-6xl md:text-7xl">
          {letter}
        </span>
        <h2 className="font-display text-2xl md:text-3xl mt-3 mb-4">{title}</h2>
        <p className="text-muted text-lg leading-relaxed max-w-[520px]">{long}</p>
      </div>
      <div className={`${reverse ? "md:order-1" : ""} aspect-[4/3] border border-line bg-surface flex items-center justify-center`}>
        <span className="text-ink font-display font-bold text-[120px] opacity-10">
          {letter}
        </span>
      </div>
    </Reveal>
  );
}

export default function ApproachPage() {
  return (
    <>
      <PageHero
        breadcrumbs={<Breadcrumbs items={[{ label: "Approach" }]} />}
        eyebrow="How we work"
        title="The ELLOR method"
        subtitle="Five stages, always in this order. It's slower on paper than jumping straight to design, and that's the reason our projects rarely need a second round for what the first one missed."
      />

      <section className="max-w-[1180px] mx-auto px-5 md:px-10 pb-8">
        {APPROACH_STEPS.map((step, i) => (
          <MethodBlock key={step.letter + step.title} {...step} index={i} />
        ))}
      </section>

      <section className="max-w-[1180px] mx-auto px-5 md:px-10 py-14 md:py-16 border-t border-line">
        <Reveal>
          <h2 className="font-display text-[clamp(26px,3.6vw,38px)] mb-5 max-w-[700px]">
            Why we don&apos;t skip steps, even on a tight timeline
          </h2>
          <p className="text-lg text-muted max-w-[640px] leading-relaxed">
            Every skipped step comes back as a revision. A layout drawn before the structure is settled gets redrawn once the structure finally happens. A sitemap agreed on gets torn apart the moment someone actually tries to use the product and it doesn&apos;t hold up. Running the method in order costs a little more time up front and saves a lot more on the back end. That trade has held on every project we&apos;ve run it on.
          </p>
        </Reveal>
      </section>

      <CtaBanner
        heading="Curious how this maps to your project?"
        subtext="Tell us where things stand today and we'll point out which stage you actually need to start from."
      />

      <section className="max-w-[1180px] mx-auto px-5 md:px-10 pb-20 md:pb-24">
        <h2 className="font-display text-[clamp(28px,4.4vw,48px)] mb-10 leading-tight">Frequently Asked Questions</h2>
        <FaqAccordion faqs={APPROACH_FAQS} />
      </section>
    </>
  );
}

const APPROACH_STEPS: MethodStep[] = [
  { letter: "E", title: "Explore", short: "Listening, discovery, and a clear view of what the project actually needs.", long: "Every project starts with listening, not pitching. We talk to your stakeholders, dig through what you already have, and map out what you're really up against, so the brief matches reality instead of a hunch. It's also where we're straight with you on scope. If a full redesign isn't the answer, we say so." },
  { letter: "L", title: "Layout", short: "Structure, flows, and content models settled before visual design begins.", long: "Before anything gets styled, we lock the structure: sitemaps, user flows, content models, and how everything sits on the wireframe. It's the dullest stage and the one most people rush. We don't, because every design choice that comes later inherits whatever gets decided here." },
  { letter: "L", title: "Layer", short: "Visual design and prototypes tested on real users.", long: "With the structure agreed, we add the visual layer: type, color, components, and prototypes you can click through. We test those on real users before calling anything done. Catching a bad flow in a prototype costs a lot less than catching it in production." },
  { letter: "O", title: "Optimize", short: "Production-ready code, performance, and accessibility.", long: "Here the design turns into real, production-ready build: clean code, sensible performance budgets, and an accessibility pass that's about how the site actually reads and behaves, not just ticking a box. We do this before launch, not in a panic after a slow page has already cost you visitors." },
  { letter: "R", title: "Release", short: "Launch followed by clear performance check-ins.", long: "Launch is a milestone, not the finish line. We come back at agreed check-in points after go-live and review progress against what we set out to do before kickoff, not a flattering story assembled afterward." },
];

const APPROACH_FAQS = [
  { q: "Do you always run all five stages, even for smaller projects?", a: "The stages scale, they don't disappear. A one-page site still gets an Explore conversation and a Layout pass, just a shorter version. What changes with project size is depth, not order." },
  { q: "What if I already have a brand or design system in place?", a: "Then Explore and Layer look different. We start by understanding what already exists and where it's working, rather than assuming everything needs to be rebuilt from scratch." },
  { q: "Can we jump straight to design if we're in a hurry?", a: "We can move fast, but we won't skip Layout. Every project we've rushed past that stage has come back as a more expensive fix later, so even under a tight timeline we keep the order and compress the time spent, not the steps themselves." },
  { q: "What happens after Release? Is that the end of the relationship?", a: "No. Release includes agreed check-in points after launch to see how the site is actually performing in the real world, and we're available for ongoing work after that if you want it." },
  { q: "How long does the full method typically take?", a: "It depends entirely on project scope; a landing page and a full product rebuild don't run on the same clock. We'll walk you through a realistic timeline for your specific project on the strategy call." },
  { q: "What if my project doesn't fit neatly into one of these stages right now?", a: "That's normal, and it's exactly what the strategy call is for. Tell us where things actually stand and we'll tell you honestly which stage to start from, even if that means picking up mid-method rather than at Explore." },
];
