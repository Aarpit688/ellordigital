import Link from "next/link";
import ServiceIcon from "./ServiceIcon";
import Reveal from "./Reveal";
import { getProjectBySlug } from "@/data/projects";
import type { Industry } from "@/data/industries";

export default function IndustryCard({ industry }: { industry: Industry }) {
  const related = industry.relatedProjectSlug
    ? getProjectBySlug(industry.relatedProjectSlug)
    : undefined;

  return (
    <Reveal
      as="article"
      className="bg-surface border border-line p-7 md:p-8 flex flex-col hover:border-lime/40 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="text-lime mb-5">
        <ServiceIcon name={industry.icon} />
      </div>
      <h2 className="font-display text-2xl mb-2">{industry.name}</h2>
      <p className="text-lime text-[15px] mb-3">{industry.tagline}</p>
      <p className="text-muted leading-relaxed mb-6">{industry.description}</p>

      <p className="font-mono text-xs uppercase tracking-wide text-dim mb-3">
        How we help
      </p>
      <ul className="space-y-2.5 mb-6">
        {industry.howWeHelp.map((h) => (
          <li key={h.slice(0, 24)} className="flex gap-3 text-[15px] text-muted leading-relaxed">
            <span aria-hidden="true" className="text-lime flex-shrink-0 mt-0.5">
              +
            </span>
            {h}
          </li>
        ))}
      </ul>

      {related && (
        <Link
          href={`/work/${related.slug}`}
          className="mt-auto pt-2 font-semibold text-[15px] border-b border-lime pb-0.5 self-start hover:opacity-70 transition-opacity"
        >
          See related work →
        </Link>
      )}
    </Reveal>
  );
}
