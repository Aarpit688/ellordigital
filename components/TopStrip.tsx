"use client";

import { useModal } from "./ModalContext";

export default function TopStrip() {
  const { openModal } = useModal();

  return (
    <div className="flex items-center justify-between px-5 md:px-10 py-2 text-[13px] border-b border-line bg-bg">
      <a href="tel:2138949933" className="font-mono text-muted tracking-wide">
        213.894.9933
      </a>
      <button
        onClick={openModal}
        className="flex items-center gap-1.5 font-medium hover:text-lime transition-colors"
      >
        Get a Free Growth Audit <span aria-hidden="true">→</span>
      </button>
    </div>
  );
}
