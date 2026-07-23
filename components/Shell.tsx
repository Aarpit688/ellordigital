"use client";

import { useState, type ReactNode } from "react";
import dynamic from "next/dynamic";
import { LazyMotion, domAnimation } from "motion/react";
import ModalContext from "./ModalContext";
import TopStrip from "./TopStrip";
import Header from "./Header";
import Footer from "./Footer";
import Preloader from "./Preloader";

// Non-critical chrome: none of it is needed for first paint, so it is loaded
// lazily on the client after hydration. This keeps the initial JS payload small.
const LeadModal = dynamic(() => import("./LeadModal"), { ssr: false });
const CookieBar = dynamic(() => import("./CookieBar"), { ssr: false });
const CursorGlow = dynamic(() => import("./CursorGlow"), { ssr: false });
const ScrollTop = dynamic(() => import("./ScrollTop"), { ssr: false });

// Client shell: owns the lead-modal state, exposes it through ModalContext, and
// provides the motion feature bundle (domAnimation via LazyMotion keeps the
// animation runtime small). Renders the chrome around every page.
export default function Shell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <LazyMotion features={domAnimation} strict>
      <ModalContext.Provider
        value={{
          open,
          openModal: () => setOpen(true),
          closeModal: () => setOpen(false),
        }}
      >
        <Preloader />
        <CursorGlow />
        <TopStrip />
        <Header />

        <main>{children}</main>

        <Footer />
        <ScrollTop />
        <LeadModal />
        <CookieBar />
      </ModalContext.Provider>
    </LazyMotion>
  );
}
