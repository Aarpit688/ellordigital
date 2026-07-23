import Link from "next/link";
import OpenModalButton from "./OpenModalButton";

const LOGOS = [
  "Aurora Outfitters",
  "Meridian Health",
  "Northline Roasters",
  "Basin & Co.",
  "Fernweh Travel",
  "Kettle Analytics",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* static aurora glow behind the headline — bottom is pinned to the marquee's
          top border (marquee height + section's pb-14 are both breakpoint-constant) */}
      <div
        aria-hidden="true"
        className="hero-aurora pointer-events-none absolute -top-40 left-0 right-0 bottom-27.5 opacity-80"
      />

      <div className="relative max-w-[1180px] mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-14">
        {/* <p className="font-mono text-xs md:text-sm tracking-[0.14em] uppercase text-muted mb-6 animate-fade-up">
          Ellor Digital / Brand &amp; Web Studio / Los Angeles
        </p> */}

        <h1 className="font-display font-bold tracking-tight leading-[0.9] text-[clamp(48px,11.5vw,150px)] mb-7 text-ink">
          <span className="hero-line">
            <span style={{ animationDelay: "0.15s" }}>Clarity that</span>
          </span>
          <span className="hero-line">
            <span style={{ animationDelay: "0.3s" }}>
              drives <span className="hero-accent">growth.</span>
            </span>
          </span>
        </h1>

        <p
          className="max-w-[640px] text-[clamp(19px,2.6vw,30px)] font-semibold leading-snug text-ink mb-9 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Brand, web, and code for companies ready to grow — with intention.
        </p>

        <div
          className="flex gap-4 flex-wrap mb-16 animate-fade-up"
          style={{ animationDelay: "0.28s" }}
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 bg-lime text-lime-ink font-semibold text-sm px-6 py-3.5 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(198,255,61,0.25)] transition-all"
          >
            See our work
          </Link>
          <OpenModalButton variant="outline">Start a project</OpenModalButton>
        </div>

        <div
          className="overflow-hidden border-t border-b border-line py-4"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
          }}
          aria-label="Trusted by"
        >
          <div className="flex gap-14 whitespace-nowrap w-max animate-marquee font-mono text-sm text-dim">
            {[...LOGOS, ...LOGOS].map((name, i) => (
              <span key={i}>{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
