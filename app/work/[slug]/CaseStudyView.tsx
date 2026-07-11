"use client";

import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProjectVisual from "@/components/ProjectVisual";
import ProjectCard from "@/components/ProjectCard";
import CtaBanner from "@/components/CtaBanner";
import useReveal from "@/hooks/useReveal";
import { PROJECTS, type Project } from "@/data/projects";

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} ${className}`}>
      {children}
    </div>
  );
}

export default function CaseStudyView({ project }: { project: Project }) {
  const nextProject =
    PROJECTS[(PROJECTS.findIndex((p) => p.slug === project.slug) + 1) % PROJECTS.length];

  return (
    <>
      <PageHero
        breadcrumbs={
          <Breadcrumbs items={[{ label: "Work", to: "/work" }, { label: project.client }]} />
        }
        eyebrow={`${project.client} · ${project.year}`}
        title={project.title}
        subtitle={project.description}
      />

      {/* hero visual */}
      <section className="max-w-[1180px] mx-auto px-5 md:px-10 pb-14 md:pb-16">
        <div className="relative bg-surface border border-line overflow-hidden">
          <ProjectVisual mockKey={project.mockKey} />
        </div>
      </section>

      {/* meta + metrics */}
      <section className="max-w-[1180px] mx-auto px-5 md:px-10 py-14 md:py-16 border-t border-line grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16">
        <div>
          <p className="font-mono text-xs tracking-[0.14em] uppercase text-muted mb-5">
            Engagement
          </p>
          <dl className="space-y-4">
            <div>
              <dt className="font-mono text-xs text-dim">Client</dt>
              <dd className="text-[15px]">{project.client}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs text-dim">Year</dt>
              <dd className="text-[15px]">{project.year}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs text-dim mb-1.5">Services</dt>
              <dd className="flex gap-2.5 flex-wrap">
                {project.services.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-xs text-muted border border-line rounded-full px-3 py-1.5"
                  >
                    {s}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </div>

        <div className="flex flex-wrap gap-8 md:gap-10 items-start">
          {project.metrics.map((m) => (
            <div key={m.label} className="min-w-[120px]">
              <span className="block font-display font-bold text-[clamp(32px,4.4vw,48px)] text-lime leading-none">
                {m.value}
              </span>
              <span className="font-mono text-[13px] tracking-wide text-muted">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* challenge */}
      <section className="max-w-[1180px] mx-auto px-5 md:px-10 py-14 md:py-16 border-t border-line grid md:grid-cols-[0.4fr_1fr] gap-8 md:gap-16">
        <h2 className="font-display text-[clamp(26px,3.6vw,38px)]">The challenge</h2>
        <Reveal>
          <p className="text-lg text-muted leading-relaxed max-w-[680px]">
            {project.challenge}
          </p>
        </Reveal>
      </section>

      {/* approach */}
      <section className="max-w-[1180px] mx-auto px-5 md:px-10 py-14 md:py-16 border-t border-line grid md:grid-cols-[0.4fr_1fr] gap-8 md:gap-16">
        <h2 className="font-display text-[clamp(26px,3.6vw,38px)]">Our approach</h2>
        <Reveal className="space-y-4 max-w-[680px]">
          {project.approach.map((para) => (
            <p key={para.slice(0, 24)} className="text-lg text-muted leading-relaxed">
              {para}
            </p>
          ))}
        </Reveal>
      </section>

      {/* results */}
      <section className="max-w-[1180px] mx-auto px-5 md:px-10 py-14 md:py-16 border-t border-line grid md:grid-cols-[0.4fr_1fr] gap-8 md:gap-16">
        <h2 className="font-display text-[clamp(26px,3.6vw,38px)]">The results</h2>
        <Reveal>
          <ul className="space-y-4 max-w-[680px]">
            {project.results.map((r) => (
              <li key={r.slice(0, 24)} className="flex gap-3.5 text-lg text-muted leading-relaxed">
                <span aria-hidden="true" className="text-lime flex-shrink-0 mt-0.5">
                  ↗
                </span>
                {r}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* testimonial */}
      {project.testimonial && (
        <section className="max-w-[1180px] mx-auto px-5 md:px-10 py-16 md:py-20 border-t border-line">
          <Reveal>
            <blockquote className="max-w-[900px]">
              <p className="font-display text-[clamp(22px,3.2vw,34px)] leading-snug mb-6">
                &ldquo;{project.testimonial.quote}&rdquo;
              </p>
              <footer className="font-mono text-sm text-muted">
                {project.testimonial.author} — {project.testimonial.role}
              </footer>
            </blockquote>
          </Reveal>
        </section>
      )}

      <CtaBanner
        heading="Have a project like this?"
        subtext="Thirty minutes, no deck, no pressure — just a straight conversation about what's working and what isn't."
      />

      {/* next project */}
      <section className="max-w-[1180px] mx-auto px-5 md:px-10 pb-16 md:pb-20">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
          <h2 className="font-display text-2xl">Next case study</h2>
          <Link
            href="/work"
            className="font-semibold text-[15px] border-b border-lime pb-0.5 hover:opacity-70 transition-opacity"
          >
            All work →
          </Link>
        </div>
        <ProjectCard
          eyebrow={nextProject.eyebrow}
          title={nextProject.title}
          description={nextProject.description}
          tags={nextProject.tags}
          href={`/work/${nextProject.slug}`}
          mock={<ProjectVisual mockKey={nextProject.mockKey} />}
        />
      </section>
    </>
  );
}
