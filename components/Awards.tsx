import Reveal from "./Reveal";
import { AWARDS } from "@/data/awards";

export default function Awards() {
  return (
    <section className="max-w-[1180px] mx-auto px-5 md:px-10 py-16 md:py-20 border-t border-line">
      <Reveal>
        <p className="font-mono text-xs tracking-[0.14em] uppercase text-muted mb-5">
          Recognition
        </p>
        <h2 className="font-display text-[clamp(28px,4.4vw,48px)] max-w-[720px] mb-10 leading-tight">
          Work that gets noticed—by the people it was built for first.
        </h2>
      </Reveal>

      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10">
        {AWARDS.map((a, i) => (
          <Reveal
            as="li"
            key={`${a.org}-${a.name}-${a.year}`}
            delay={(i % 3) * 0.05}
            className="flex items-baseline justify-between gap-4 py-5 border-t border-line"
          >
            <div>
              <p className="font-display text-lg leading-tight">{a.name}</p>
              <p className="text-muted text-sm">
                {a.org} · {a.category}
              </p>
            </div>
            <span className="font-mono text-xs text-lime flex-shrink-0">{a.year}</span>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
