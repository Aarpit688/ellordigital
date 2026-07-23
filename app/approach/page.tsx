import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/Reveal";
import { METHOD_STEPS, type MethodStep } from "@/data/method";

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
        subtitle="Five stages, always in this order. It's slower on paper than jumping straight to design — and it's the reason our projects rarely need a second round to fix what the first one missed."
      />

      <section className="max-w-[1180px] mx-auto px-5 md:px-10 pb-8">
        {METHOD_STEPS.map((step, i) => (
          <MethodBlock key={step.letter + step.title} {...step} index={i} />
        ))}
      </section>

      <section className="max-w-[1180px] mx-auto px-5 md:px-10 py-14 md:py-16 border-t border-line">
        <Reveal>
          <h2 className="font-display text-[clamp(26px,3.6vw,38px)] mb-5 max-w-[700px]">
            Why we don&apos;t skip steps, even on a tight timeline
          </h2>
          <p className="text-lg text-muted max-w-[640px] leading-relaxed">
            Every skipped step comes back as a revision. A logo drawn before the
            positioning is settled gets redrawn once the positioning finally
            happens. A site built before the sitemap is agreed gets torn apart
            the moment someone notices the navigation doesn&apos;t match how
            people actually think about the product. Running the method in order
            costs a little time up front and saves a lot on the back end. That
            trade has held on every project we&apos;ve run it on.
          </p>
        </Reveal>
      </section>

      <CtaBanner
        heading="Curious how this maps to your project?"
        subtext="Tell us where things stand today and we'll point out which stage you actually need to start from."
      />
    </>
  );
}
