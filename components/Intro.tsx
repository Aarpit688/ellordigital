import Link from "next/link";
import Reveal from "./Reveal";

export default function Intro() {
  return (
    <Reveal
      as="section"
      className="max-w-[1180px] mx-auto px-5 md:px-10 py-16 md:py-20 grid md:grid-cols-[0.8fr_1.2fr] gap-12 md:gap-16 items-center border-t border-line"
    >
      <div aria-hidden="true" className="relative w-full aspect-square">
        <div
          className="absolute inset-0 rounded-sm opacity-90"
          style={{
            top: 0,
            right: "30%",
            bottom: "30%",
            left: 0,
            background: "linear-gradient(135deg, var(--color-blue), var(--color-violet))",
          }}
        />
        <div
          className="absolute rounded-sm opacity-75 mix-blend-screen"
          style={{
            top: "20%",
            right: 0,
            bottom: 0,
            left: "20%",
            background: "linear-gradient(135deg, var(--color-violet), var(--color-pink))",
          }}
        />
        <div
          className="absolute rounded-full opacity-85"
          style={{
            top: "45%",
            left: 0,
            width: "35%",
            height: "35%",
            background: "var(--color-amber)",
          }}
        />
      </div>

      <div>
        <p className="font-mono text-xs tracking-[0.14em] uppercase text-muted mb-5">
          What we do
        </p>
        <h2 className="font-display text-[clamp(28px,4vw,44px)] leading-tight mb-5">
          We don&apos;t follow briefs. <u className="accent-underline">We solve problems.</u>
        </h2>
        <p className="text-lg text-muted leading-relaxed max-w-[560px] mb-7">
          A brief tells us what you want. A discovery tells us what you need. We spend the first part of every engagement understanding your business, your audience, and the gap between where you are and where you&apos;re trying to go. Everything we design and build comes from that—not from a template, not from a trend, not from what worked for someone else.
        </p>
        <Link
          href="/approach"
          className="font-semibold text-[15px] border-b border-lime pb-0.5 hover:opacity-70 transition-opacity"
        >
          See how we work ↓
        </Link>
      </div>
    </Reveal>
  );
}
