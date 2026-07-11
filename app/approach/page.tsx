"use client";

import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBanner from "@/components/CtaBanner";
import useReveal from "@/hooks/useReveal";
import { METHOD_STEPS, type MethodStep } from "@/data/method";

function MethodBlock({
  letter,
  title,
  long,
  index,
}: Pick<MethodStep, "letter" | "title" | "long"> & { index: number }) {
  const [ref, visible] = useReveal();
  const reverse = index % 2 === 1;
  return (
    <div
      ref={ref}
      className={`reveal ${
        visible ? "is-visible" : ""
      } grid md:grid-cols-2 gap-8 md:gap-16 items-center py-12 md:py-16 border-t border-line`}
    >
      <div className={reverse ? "md:order-2" : ""}>
        <span className="method-letter font-display font-bold text-6xl md:text-7xl">
          {letter}
        </span>
        <h2 className="font-display text-2xl md:text-3xl mt-3 mb-4">{title}</h2>
        <p className="text-muted text-lg leading-relaxed max-w-[520px]">{long}</p>
      </div>
      <div className={`${reverse ? "md:order-1" : ""} aspect-[4/3] border border-line bg-surface flex items-center justify-center`}>
        <span className="method-letter font-display font-bold text-[120px] opacity-20">
          {letter}
        </span>
      </div>
    </div>
  );
}

export default function ApproachPage() {
  return (
    <>
      <PageHero
        breadcrumbs={<Breadcrumbs items={[{ label: "Approach" }]} />}
        eyebrow="How we work"
        title="The ELLOR Method"
        subtitle="Five stages, always in this order. It's slower on paper than jumping straight to design — and it's why our projects don't need a second round to fix what the first round missed."
      />

      <section className="max-w-[1180px] mx-auto px-5 md:px-10 pb-8">
        {METHOD_STEPS.map((step, i) => (
          <MethodBlock key={step.letter + step.title} {...step} index={i} />
        ))}
      </section>

      <section className="max-w-[1180px] mx-auto px-5 md:px-10 py-14 md:py-16 border-t border-line">
        <h2 className="font-display text-[clamp(26px,3.6vw,38px)] mb-5 max-w-[700px]">
          Why we don&apos;t skip steps, even on tight timelines
        </h2>
        <p className="text-lg text-muted max-w-[640px] leading-relaxed">
          Every skipped step shows up later as a revision. A logo designed
          before positioning is settled gets redesigned once the positioning
          finally happens. A site built before the sitemap is agreed gets
          restructured once someone notices the navigation doesn&apos;t
          match how people actually think about the product. Running the
          method in order costs a bit more time up front and saves a lot
          more time on the back end — that trade has held up on every
          project we&apos;ve run it on.
        </p>
      </section>

      <CtaBanner
        heading="Curious how this would apply to your project?"
        subtext="Tell us where you are today and we'll map out which stage you actually need to start from."
      />
    </>
  );
}
