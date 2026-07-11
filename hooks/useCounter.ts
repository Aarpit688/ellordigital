import { useEffect, useRef, useState } from "react";

/**
 * Animates a number from 0 -> target once the element scrolls into view.
 */
export default function useCounter(
  target: number,
  { decimal = false }: { decimal?: boolean } = {}
): [React.RefObject<HTMLDivElement | null>, number] {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const animate = () => {
      if (reducedMotion) {
        setValue(target);
        return;
      }
      const duration = 1200;
      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const current = target * progress;
        setValue(decimal ? Number(current.toFixed(1)) : Math.round(current));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, decimal]);

  return [ref, value];
}
