import Link from "next/link";
import Reveal from "./Reveal";

export default function Studio() {
  return (
    <Reveal
      as="section"
      className="max-w-[1180px] mx-auto px-5 md:px-10 pt-16 md:pt-20 pb-20 md:pb-24 border-t border-line"
    >
      <p className="font-mono text-xs tracking-[0.14em] uppercase text-muted mb-5">
        The studio
      </p>
      <h2 className="font-display text-[clamp(26px,3.6vw,40px)] max-w-[820px] mb-5 leading-tight">
        Twelve people, one time zone, zero account managers who&apos;ve never
        opened Figma.
      </h2>
      <p className="text-lg text-muted max-w-[620px] leading-relaxed mb-7">
        ELLOR is a small, senior team in Los Angeles. Every project has a
        strategist, a designer, and an engineer on it from day one — so nothing
        gets lost in a hand-off between people who&apos;ve never met.
      </p>
      <Link
        href="/studio"
        className="font-semibold text-[15px] border-b border-lime pb-0.5 hover:opacity-70 transition-opacity"
      >
        Meet the studio →
      </Link>
    </Reveal>
  );
}
