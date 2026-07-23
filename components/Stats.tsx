"use client";

import useCounter from "@/hooks/useCounter";
import UiIcon from "./UiIcon";

interface Stat {
  target: number;
  label: string;
  icon: string;
  chip: string; // literal Tailwind classes (kept literal so JIT can see them)
  num: string;
  decimal?: boolean;
}

const STATS: Stat[] = [
  {
    target: 120,
    label: "Projects Launched",
    icon: "launch",
    chip: "bg-blue/10 text-blue border-blue/25",
    num: "text-blue",
  },
  {
    target: 4.9,
    label: "Average Client Rating",
    icon: "star",
    chip: "bg-amber/10 text-amber border-amber/25",
    num: "text-amber",
    decimal: true,
  },
  {
    target: 38,
    label: "Industries Served",
    icon: "layers",
    chip: "bg-violet/15 text-violet border-violet/25",
    num: "text-violet",
  },
  {
    target: 9,
    label: "Years in Business",
    icon: "clock",
    chip: "bg-lime/10 text-lime border-lime/25",
    num: "text-lime",
  },
];

function StatItem({ target, label, icon, chip, num, decimal }: Stat) {
  const [ref, value] = useCounter(target, { decimal });
  return (
    <div
      ref={ref}
      className="rounded-2xl border border-line bg-surface/50 p-6 text-center transition-transform duration-300 hover:-translate-y-1"
    >
      <span
        className={`mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl border ${chip}`}
      >
        <UiIcon name={icon} size={20} />
      </span>
      <span className={`block font-display font-bold text-[clamp(34px,4.6vw,50px)] leading-none ${num}`}>
        {decimal ? value.toFixed(1) : value}
      </span>
      <span className="mt-2 block font-mono text-[13px] tracking-wide text-muted">
        {label}
      </span>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="max-w-[1180px] mx-auto px-5 md:px-10 py-16 md:py-20 border-t border-line">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {STATS.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
