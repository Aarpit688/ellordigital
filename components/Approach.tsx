"use client";

import Link from "next/link";
import useReveal from "@/hooks/useReveal";
import { METHOD_STEPS, type MethodStep } from "@/data/method";

function MethodRow({ letter, title, short }: Pick<MethodStep, "letter" | "title" | "short">) {
  const [ref, visible] = useReveal<HTMLLIElement>();
  return (
    <li
      ref={ref}
      className={`reveal ${
        visible ? "is-visible" : ""
      } grid grid-cols-[50px_1fr] md:grid-cols-[80px_1fr] gap-6 md:gap-7 py-7 border-t border-line hover:bg-white/[0.02] transition-colors`}
    >
      <span className="method-letter font-display font-bold text-3xl md:text-4xl">
        {letter}
      </span>
      <div>
        <h3 className="font-display text-xl mb-1.5">{title}</h3>
        <p className="text-muted max-w-[560px]">{short}</p>
      </div>
    </li>
  );
}

export default function Approach() {
  const [introRef, introVisible] = useReveal();

  return (
    <section className="max-w-[1180px] mx-auto px-5 md:px-10 py-16 md:py-20 border-t border-line">
      <div ref={introRef} className={`reveal ${introVisible ? "is-visible" : ""}`}>
        <p className="font-mono text-xs tracking-[0.14em] uppercase text-muted mb-5">
          How we work
        </p>
        <h2 className="font-display text-[clamp(28px,4.4vw,48px)] max-w-[720px] mb-5 leading-tight">
          The ELLOR Method — one word, five moves.
        </h2>
        <p className="text-lg text-muted leading-relaxed max-w-[620px]">
          Every engagement runs through the same five stages. Nothing
          skipped, nothing reordered — it&apos;s the sequence that keeps
          design decisions traceable back to a reason.
        </p>
      </div>

      <ol className="mt-12 md:mt-14">
        {METHOD_STEPS.map((step) => (
          <MethodRow key={step.letter + step.title} {...step} />
        ))}
      </ol>

      <div className="pt-10 text-center">
        <Link
          href="/approach"
          className="font-semibold text-[15px] border-b border-lime pb-0.5 hover:opacity-70 transition-opacity"
        >
          See the full process →
        </Link>
      </div>
    </section>
  );
}
