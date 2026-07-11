"use client";

import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCard from "@/components/ServiceCard";
import CtaBanner from "@/components/CtaBanner";
import useReveal from "@/hooks/useReveal";
import { SERVICES } from "@/data/services";

export default function ServicesHub() {
  const [gridRef, gridVisible] = useReveal();

  return (
    <>
      <PageHero
        breadcrumbs={<Breadcrumbs items={[{ label: "Services" }]} />}
        eyebrow="What we do"
        title="Six disciplines. One team, start to finish."
        subtitle="We don't hand you off between departments. Every service below is delivered by the same strategist, designer, and engineer who scoped the project — pick one, or combine a few."
      />

      <section className="max-w-[1180px] mx-auto px-5 md:px-10 pb-16 md:pb-20">
        <div
          ref={gridRef}
          className={`reveal ${
            gridVisible ? "is-visible" : ""
          } grid sm:grid-cols-2 lg:grid-cols-3 gap-4`}
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <CtaBanner
        heading="Not sure which service you need?"
        subtext="Tell us what you're trying to fix and we'll tell you honestly which of these actually applies — sometimes it's fewer than you think."
        buttonLabel="Talk It Through With Us"
      />
    </>
  );
}
