import Link from "next/link";
import Reveal from "./Reveal";
import { TESTIMONIALS, type ClientTestimonial } from "@/data/testimonials";

function TestimonialCard({ t, index }: { t: ClientTestimonial; index: number }) {
  const cardClass =
    "bg-surface border border-line p-7 flex flex-col h-full hover:border-white/20 transition-colors";
  const body = (
    <>
      <p className="text-[15px] leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
      <div className="mt-auto">
        <p className="font-display text-[15px]">{t.author}</p>
        <p className="font-mono text-xs text-muted">
          {t.role}, {t.company}
        </p>
      </div>
    </>
  );

  return (
    <Reveal delay={index * 0.06} className="h-full">
      {t.projectSlug ? (
        <Link href={`/work/${t.projectSlug}`} className={cardClass}>
          {body}
        </Link>
      ) : (
        <div className={cardClass}>{body}</div>
      )}
    </Reveal>
  );
}

export default function Testimonials() {
  const featured = TESTIMONIALS.slice(0, 3);

  return (
    <section className="max-w-[1180px] mx-auto px-5 md:px-10 py-16 md:py-20 border-t border-line">
      <Reveal>
        <p className="font-mono text-xs tracking-[0.14em] uppercase text-muted mb-5">
          What clients say
        </p>
        <h2 className="font-display text-[clamp(28px,4.4vw,48px)] max-w-[720px] mb-12 leading-tight">
          The best thing a client can say is &ldquo;that fixed it.&rdquo;
        </h2>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-5 items-stretch">
        {featured.map((t, i) => (
          <TestimonialCard key={t.author} t={t} index={i} />
        ))}
      </div>
    </section>
  );
}
