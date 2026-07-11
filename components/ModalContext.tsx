"use client";

import { createContext, useContext } from "react";

export interface ModalContextValue {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

export function useModal(): ModalContextValue {
  const ctx = useContext(ModalContext);
  if (!ctx) {
    throw new Error("useModal must be used within <Shell>");
  }
  return ctx;
}

export default ModalContext;
