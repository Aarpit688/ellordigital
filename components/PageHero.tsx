"use client";

import type { ReactNode } from "react";
import useReveal from "@/hooks/useReveal";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  breadcrumbs?: ReactNode;
}) {
  const [ref, visible] = useReveal();
  return (
    <section className="max-w-[1180px] mx-auto px-5 md:px-10 pt-10 md:pt-14 pb-12 md:pb-16">
      {breadcrumbs}
      <div ref={ref} className={`reveal ${visible ? "is-visible" : ""}`}>
        {eyebrow && (
          <p className="font-mono text-xs tracking-[0.14em] uppercase text-muted mb-5">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display font-bold leading-[1.02] text-[clamp(36px,6vw,64px)] mb-5 max-w-[900px]">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-muted max-w-[640px] leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
