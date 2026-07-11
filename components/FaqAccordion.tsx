"use client";

import { useState } from "react";
import useReveal from "@/hooks/useReveal";
import type { Faq } from "@/data/services";

function AccordionItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-t border-line py-2">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-display text-lg">{q}</span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full border border-line flex items-center justify-center text-sm transition-transform duration-200 ${
            isOpen ? "rotate-45 border-lime text-lime" : "text-muted"
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <div
        className="overflow-hidden transition-[max-height] duration-300"
        style={{ maxHeight: isOpen ? "240px" : "0px" }}
      >
        <p className="text-muted leading-relaxed pb-6 pr-8">{a}</p>
      </div>
    </div>
  );
}

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState(0);
  const [ref, visible] = useReveal();

  return (
    <div ref={ref} className={`reveal ${visible ? "is-visible" : ""}`}>
      {faqs.map((faq, i) => (
        <AccordionItem
          key={faq.q}
          {...faq}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
        />
      ))}
      <div className="border-t border-line" />
    </div>
  );
}
