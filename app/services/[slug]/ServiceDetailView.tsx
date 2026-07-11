"use client";

import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceIcon from "@/components/ServiceIcon";
import ProjectCard from "@/components/ProjectCard";
import ProjectVisual from "@/components/ProjectVisual";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBanner from "@/components/CtaBanner";
import ServiceCard from "@/components/ServiceCard";
import useReveal from "@/hooks/useReveal";
import { useModal } from "@/components/ModalContext";
import { SERVICES, type Service } from "@/data/services";
import { getProjectBySlug } from "@/data/projects";

function DeliverableRow({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${
        visible ? "is-visible" : ""
      } py-6 border-t border-line`}
    >
      <h3 className="font-display text-lg mb-1.5">{title}</h3>
      <p className="text-muted">{description}</p>
    </div>
  );
}

function ProcessStep({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`reveal ${visible ? "is-visible" : ""}`}>
      <span className="font-mono text-xs text-lime">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="font-display text-lg mt-2 mb-1.5">{title}</h3>
      <p className="text-muted text-[15px] leading-relaxed">{description}</p>
    </div>
  );
}

export default function ServiceDetailView({ service }: { service: Service }) {
  const { openModal } = useModal();
  const [overviewRef, overviewVisible] = useReveal();

  const relatedProject = getProjectBySlug(service.relatedProjectSlug);
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        breadcrumbs={
          <Breadcrumbs items={[{ label: "Services", to: "/services" }, { label: service.name }]} />
        }
        eyebrow="Service"
        title={service.name}
        subtitle={service.heroSubtitle}
      />

      {/* overview */}
      <section className="max-w-[1180px] mx-auto px-5 md:px-10 pb-14 md:pb-16 grid md:grid-cols-[0.5fr_1fr] gap-10 md:gap-16">
        <div ref={overviewRef} className={`reveal ${overviewVisible ? "is-visible" : ""}`}>
          <div className="text-lime mb-4">
            <ServiceIcon name={service.icon} />
          </div>
          <p className="font-display text-2xl leading-snug">{service.tagline}</p>
        </div>
        <div className="space-y-4">
          {service.overview.map((para) => (
            <p key={para.slice(0, 24)} className="text-lg text-muted leading-relaxed">
              {para}
            </p>
          ))}
          <button
            onClick={openModal}
            className="mt-2 inline-flex bg-lime text-lime-ink font-semibold text-sm px-6 py-3.5 hover:-translate-y-0.5 transition-transform"
          >
            Start a {service.name} Project
          </button>
        </div>
      </section>

      {/* deliverables */}
      <section className="max-w-[1180px] mx-auto px-5 md:px-10 py-14 md:py-16 border-t border-line">
        <h2 className="font-display text-[clamp(26px,3.6vw,38px)] mb-8">
          What&apos;s included
        </h2>
        <div className="grid md:grid-cols-2 gap-x-10">
          {service.deliverables.map((d) => (
            <DeliverableRow key={d.title} {...d} />
          ))}
        </div>
      </section>

      {/* process */}
      <section className="max-w-[1180px] mx-auto px-5 md:px-10 py-14 md:py-16 border-t border-line">
        <h2 className="font-display text-[clamp(26px,3.6vw,38px)] mb-8">
          How we run a {service.name.toLowerCase()} engagement
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {service.process.map((step, i) => (
            <ProcessStep key={step.title} index={i} {...step} />
          ))}
        </div>
      </section>

      {/* related case study */}
      {relatedProject && (
        <section className="max-w-[1180px] mx-auto px-5 md:px-10 py-14 md:py-16 border-t border-line">
          <p className="font-mono text-xs tracking-[0.14em] uppercase text-muted mb-8">
            Related work
          </p>
          <ProjectCard
            eyebrow={relatedProject.eyebrow}
            title={relatedProject.title}
            description={relatedProject.description}
            tags={relatedProject.tags}
            mock={<ProjectVisual mockKey={relatedProject.mockKey} />}
          />
        </section>
      )}

      {/* faqs */}
      <section className="max-w-[1180px] mx-auto px-5 md:px-10 py-14 md:py-16 border-t border-line">
        <h2 className="font-display text-[clamp(26px,3.6vw,38px)] mb-4">
          Questions people actually ask
        </h2>
        <FaqAccordion faqs={service.faqs} />
      </section>

      <CtaBanner
        heading={`Ready to talk ${service.name.toLowerCase()}?`}
        subtext="Thirty minutes, no deck, no pressure — just a straight conversation about what's working and what isn't."
      />

      {/* explore other services */}
      <section className="max-w-[1180px] mx-auto px-5 md:px-10 pb-16 md:pb-20">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
          <h2 className="font-display text-2xl">Other ways we help</h2>
          <Link
            href="/services"
            className="font-semibold text-[15px] border-b border-lime pb-0.5 hover:opacity-70 transition-opacity"
          >
            All services →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherServices.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>
    </>
  );
}
