"use client";

import useReveal from "@/hooks/useReveal";
import { useModal } from "./ModalContext";

export default function CtaBanner({
  heading = "Ready to see things clearly?",
  subtext = "Thirty minutes, no deck, no pressure — just a straight conversation about what's working and what isn't.",
  buttonLabel = "Book a Free Strategy Call",
  id,
}: {
  heading?: string;
  subtext?: string;
  buttonLabel?: string;
  id?: string;
}) {
  const [ref, visible] = useReveal<HTMLElement>();
  const { openModal } = useModal();

  return (
    <section
      id={id}
      ref={ref}
      className={`reveal ${
        visible ? "is-visible" : ""
      } max-w-[1180px] mx-auto mb-14 px-5 md:px-10 py-16 md:py-24 text-center bg-surface border border-line`}
    >
      <h2 className="font-display text-[clamp(30px,5vw,52px)] mb-4">{heading}</h2>
      <p className="text-lg text-muted max-w-[520px] mx-auto mb-8">{subtext}</p>
      <button
        onClick={openModal}
        className="bg-lime text-lime-ink font-semibold px-8 py-4 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(198,255,61,0.25)] transition-all"
      >
        {buttonLabel}
      </button>
    </section>
  );
}
