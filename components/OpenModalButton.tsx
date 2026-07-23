"use client";

import { m } from "motion/react";
import { useModal } from "./ModalContext";

// Small client leaf so sections that only need "open the lead modal" can stay
// server components. Includes a motion hover/tap micro-interaction.
export default function OpenModalButton({
  children,
  variant = "solid",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
}) {
  const { openModal } = useModal();

  const base =
    "inline-flex items-center justify-center gap-2 font-semibold text-sm px-6 py-3.5";
  const styles =
    variant === "solid"
      ? "bg-lime text-lime-ink hover:shadow-[0_10px_30px_rgba(198,255,61,0.3)]"
      : "border border-white/25 text-ink hover:border-ink";

  return (
    <m.button
      onClick={openModal}
      className={`${base} ${styles} ${className}`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
    >
      {children}
    </m.button>
  );
}
