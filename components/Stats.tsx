"use client";

import useCounter from "@/hooks/useCounter";

interface Stat {
  target: number;
  label: string;
  decimal?: boolean;
}

const STATS: Stat[] = [
  { target: 120, label: "Projects Launched" },
  { target: 4.9, label: "Average Client Rating", decimal: true },
  { target: 38, label: "Industries Served" },
  { target: 9, label: "Years in Business" },
];

function StatItem({ target, label, decimal }: Stat) {
  const [ref, value] = useCounter(target, { decimal });
  return (
    <div ref={ref} className="flex-1 min-w-[140px] text-center">
      <span className="block font-display font-bold text-[clamp(36px,5vw,54px)] text-lime">
        {decimal ? value.toFixed(1) : value}
      </span>
      <span className="font-mono text-[13px] tracking-wide text-muted">
        {label}
      </span>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="max-w-[1180px] mx-auto px-5 md:px-10 py-16 md:py-20 border-t border-line">
      <div className="flex flex-wrap gap-10 justify-between text-center">
        {STATS.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </div>
      <p className="w-full text-center text-xs text-dim mt-8">
        Illustrative figures for this demo template — swap in your studio&apos;s
        real numbers.
      </p>
    </section>
  );
}
