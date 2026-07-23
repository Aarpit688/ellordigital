/**
 * ELLOR Digital logomark.
 *
 * Concept: a geometric "E" built from a lime spine plus three flat-color
 * bars (blue / violet / amber) — the studio's recurring spectrum palette,
 * carried at brand-mark scale instead of only in gradients. Flat fills
 * (no gradients in the mark itself) keep it crisp down to favicon size.
 */
export function LogoMark({
  size = 32,
  className = "",
  id,
}: {
  size?: number;
  className?: string;
  id?: string;
}) {
  return (
    <svg
      id={id}
      width={size}
      height={size}
      viewBox="0 0 44 44"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="4" y="4" width="7" height="36" rx="1.5" fill="#c6ff3d" />
      <rect x="11" y="4" width="24" height="8" rx="1.5" fill="#5b8def" />
      <rect x="11" y="18" width="16" height="8" rx="1.5" fill="#9b5de5" />
      <rect x="11" y="32" width="24" height="8" rx="1.5" fill="#ffb020" />
    </svg>
  );
}

export default function Logo({
  size = 28,
  className = "",
  wordmarkClassName = "",
  markId,
}: {
  size?: number;
  className?: string;
  wordmarkClassName?: string;
  markId?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <LogoMark size={size} id={markId} />
      <span
        className={`font-display font-bold tracking-tight ${wordmarkClassName}`}
      >
        ELLOR<span className="text-lime">.</span>
      </span>
    </span>
  );
}
