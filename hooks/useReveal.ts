import { useEffect, useRef, useState } from "react";

/**
 * Adds `.reveal` fade/slide-up behavior driven by IntersectionObserver.
 * Usage: const [ref, isVisible] = useReveal();
 *        <div ref={ref} className={`reveal ${isVisible ? "is-visible" : ""}`}>
 *
 * Generic over the element type so the returned ref attaches cleanly to any
 * host element (div by default, or e.g. useReveal<HTMLLIElement>()).
 */
export default function useReveal<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.15
): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}
