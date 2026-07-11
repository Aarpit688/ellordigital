"use client";

import { useState, type ReactNode } from "react";
import ModalContext from "./ModalContext";
import CursorGlow from "./CursorGlow";
import TopStrip from "./TopStrip";
import Header from "./Header";
import Footer from "./Footer";
import ScrollTop from "./ScrollTop";
import LeadModal from "./LeadModal";
import CookieBar from "./CookieBar";
import Preloader from "./Preloader";

// Client shell: owns the lead-modal state, exposes it through ModalContext, and
// renders the chrome around every page. Replaces the react-router <Layout> +
// <Outlet context={{ openModal }} /> pattern from the Vite app.
export default function Shell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
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
  );
}
