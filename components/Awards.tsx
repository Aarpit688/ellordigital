"use client";

import useReveal from "@/hooks/useReveal";
import { AWARDS } from "@/data/awards";

export default function Awards() {
  const [ref, visible] = useReveal();

  return (
    <section className="max-w-[1180px] mx-auto px-5 md:px-10 py-16 md:py-20 border-t border-line">
      <div ref={ref} className={`reveal ${visible ? "is-visible" : ""}`}>
        <p className="font-mono text-xs tracking-[0.14em] uppercase text-muted mb-5">
          Recognition
        </p>
        <h2 className="font-display text-[clamp(28px,4.4vw,48px)] max-w-[720px] mb-10 leading-tight">
          Work that gets noticed — occasionally by juries.
        </h2>
      </div>

      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10">
        {AWARDS.map((a) => (
          <li
            key={`${a.org}-${a.name}-${a.year}`}
            className="flex items-baseline justify-between gap-4 py-5 border-t border-line"
          >
            <div>
              <p className="font-display text-lg leading-tight">{a.name}</p>
              <p className="text-muted text-sm">
                {a.org} · {a.category}
              </p>
            </div>
            <span className="font-mono text-xs text-lime flex-shrink-0">{a.year}</span>
          </li>
        ))}
      </ul>

      <p className="text-xs text-dim mt-8">
        Illustrative recognition for this demo template — swap in your studio&apos;s real awards.
      </p>
    </section>
  );
}
