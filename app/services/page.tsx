import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCard from "@/components/ServiceCard";
import CtaBanner from "@/components/CtaBanner";
import { SERVICES } from "@/data/services";

export default function ServicesHub() {
  return (
    <>
      <PageHero
        breadcrumbs={<Breadcrumbs items={[{ label: "Services" }]} />}
        eyebrow="What we do"
        title="Everything we do, done by one team."
        subtitle="No hand-offs between departments. Every service below is delivered by the same strategist, designer, and engineer who scoped your project. Pick one, or combine a few."
      />

      <section className="max-w-[1180px] mx-auto px-5 md:px-10 pb-16 md:pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </section>

      <CtaBanner
        heading="Not sure which one you need?"
        subtext="Tell us what you're trying to fix and we'll tell you straight which of these actually applies. Often it's fewer than you'd think."
        buttonLabel="Talk it through with us"
      />
    </>
  );
}
