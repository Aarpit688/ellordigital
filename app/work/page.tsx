import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProjectsGrid from "@/components/ProjectsGrid";
import CtaBanner from "@/components/CtaBanner";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work from ELLOR Digital — branding, product UX, ecommerce, web development, and growth case studies with real outcomes.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        breadcrumbs={<Breadcrumbs items={[{ label: "Work" }]} />}
        eyebrow="Our Approach"
        title="One studio, five disciplines, zero guesswork."
        subtitle="Every project starts the same way: we ask what's actually broken before we touch design or code. Branding, product UX, e-commerce, web development, and growth are filtered below if you want to see how we think about something specific."
      />

      <section className="max-w-[1180px] mx-auto px-5 md:px-10 pb-16 md:pb-20">
        <ProjectsGrid showFilters />
      </section>

      <CtaBanner
        heading="Ready to see it clearly?"
        subtext="Thirty minutes, no deck, no pressure. Just a straight conversation about what's working and what isn't."
      />

      <section className="max-w-[1180px] mx-auto px-5 md:px-10 pb-20 md:pb-24">
        <h2 className="font-display text-[clamp(28px,4.4vw,48px)] mb-10 leading-tight">
          Frequently Asked Questions
        </h2>
        <FaqAccordion faqs={WORK_FAQS} />
      </section>
    </>
  );
}

const WORK_FAQS = [
  { q: "What kind of projects do you take on?", a: "Mostly branding, e-commerce, web development, product UX, and growth work—either as standalone projects or bundled together when a business needs more than one fixed at once." },
  { q: "Do you work with early-stage or first-time founders?", a: "Yes. A lot of our conversations start with someone who has an idea and no existing site or brand yet. We're used to building from a blank page as much as fixing an existing one." },
  { q: "How long does a typical project take?", a: "It depends on scope. A brand identity or a landing page moves faster than a full e-commerce rebuild or a multi-page product redesign. We'll give you a realistic timeline on the strategy call before anything is signed." },
  { q: "Do you only design, or do you build too?", a: "Both. Design and development happen under one roof here, so nothing gets lost in translation between a designer's file and a developer's build." },
  { q: "What if I only need one piece, like a logo or a landing page?", a: "That's fine. Not every project needs the full stack. We scope to what you actually need, not what fills out a bigger invoice." },
  { q: "How do we get started?", a: "Book the free strategy call above. It's a real conversation, not a sales pitch—we'll ask about the problem first and tell you honestly whether we're the right fit." },
];
