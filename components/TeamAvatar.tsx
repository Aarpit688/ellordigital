const PALETTES: [string, string][] = [
  ["var(--color-blue)", "var(--color-violet)"],
  ["var(--color-violet)", "var(--color-pink)"],
  ["var(--color-pink)", "var(--color-amber)"],
  ["var(--color-amber)", "var(--color-blue)"],
];

/** Deterministic pseudo-random pick based on a seed string, so each name always renders the same avatar. */
function pick<T>(seed: string, arr: T[]): T {
  const code = seed.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return arr[code % arr.length];
}

export default function TeamAvatar({
  seed = "x",
  size = 72,
}: {
  seed?: string;
  size?: number;
}) {
  const [c1, c2] = pick(seed, PALETTES);
  const shape = pick(seed, ["circle", "square", "triangle"] as const);

  return (
    <div
      className="flex items-center justify-center rounded-full overflow-hidden"
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${c1}, ${c2})`,
      }}
      aria-hidden="true"
    >
      <svg width={size * 0.5} height={size * 0.5} viewBox="0 0 24 24">
        {shape === "circle" && <circle cx="12" cy="12" r="8" fill="rgba(0,0,0,0.25)" />}
        {shape === "square" && <rect x="4" y="4" width="16" height="16" rx="2" fill="rgba(0,0,0,0.25)" />}
        {shape === "triangle" && <polygon points="12,4 20,20 4,20" fill="rgba(0,0,0,0.25)" />}
      </svg>
    </div>
  );
}
