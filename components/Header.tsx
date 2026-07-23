"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import ServiceIcon from "./ServiceIcon";
import { useModal } from "./ModalContext";
import { lockScroll, unlockScroll } from "@/lib/scrollLock";
import { SERVICES } from "@/data/services";

export default function Header() {
  const pathname = usePathname();
  const { openModal } = useModal();
  const [condensed, setCondensed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinkClass = (href: string) =>
    `hover:text-ink transition-colors ${pathname === href ? "text-ink" : ""}`;

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 40);
    onScroll();
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu whenever a link is clicked, and lock scroll while open
  useEffect(() => {
    if (!mobileOpen) return;
    lockScroll();
    return () => unlockScroll();
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 transition-[padding] duration-200">
      <div
        className="border-b border-line backdrop-blur-md"
        style={{ background: "rgba(20,21,26,0.75)" }}
      >
        <div
          className={`max-w-[1180px] mx-auto flex items-center justify-between px-5 md:px-10 transition-[padding] duration-200 ${
            condensed ? "py-3" : "py-5"
          }`}
        >
          <Link href="/" onClick={() => setMobileOpen(false)} aria-label="ELLOR Digital home">
            <Logo size={26} wordmarkClassName="text-lg" markId="site-logo-mark" />
          </Link>

          <nav
            aria-label="Primary"
            className="hidden lg:flex items-center gap-8 text-sm font-medium text-muted"
          >
            <Link href="/work" className={navLinkClass("/work")}>
              Work
            </Link>

            <div className="relative group">
              <button className="flex items-center gap-1.5 hover:text-ink transition-colors">
                Services
                <svg width="10" height="6" viewBox="0 0 10 6" aria-hidden="true">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1.5 w-[300px] bg-surface border border-line p-3 grid grid-cols-1 gap-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 transition-all">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="flex items-center gap-3 px-3 py-2.5 text-[13px] hover:bg-surface-2 hover:text-lime rounded-sm text-ink"
                  >
                    <ServiceIcon name={s.icon} className="w-4 h-4 text-lime [&_svg]:w-4 [&_svg]:h-4" />
                    {s.name}
                  </Link>
                ))}
                <Link
                  href="/services"
                  className="px-3 py-2.5 text-[13px] font-semibold hover:text-lime rounded-sm border-t border-line mt-1 text-ink"
                >
                  All Services →
                </Link>
              </div>
            </div>

            <Link href="/industries" className={navLinkClass("/industries")}>
              Industries
            </Link>
            <Link href="/approach" className={navLinkClass("/approach")}>
              Approach
            </Link>
            <Link href="/studio" className={navLinkClass("/studio")}>
              Studio
            </Link>
            <Link href="/blog" className={navLinkClass("/blog")}>
              Insights
            </Link>
            <Link href="/contact" className={navLinkClass("/contact")}>
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={openModal}
              className="hidden sm:inline-flex bg-lime text-lime-ink font-semibold text-sm px-5 py-2.5 hover:-translate-y-0.5 transition-transform"
            >
              Start a Project
            </button>

            <button
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="lg:hidden w-10 h-10 flex items-center justify-center border border-line"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                {mobileOpen ? (
                  <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.8" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* mobile nav panel — kept OUTSIDE the backdrop-blur wrapper above, since
          backdrop-filter creates a containing block that would otherwise trap
          this fixed-position panel inside the header's own (short) box. */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[64px] bottom-0 bg-bg border-t border-line overflow-y-auto transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col px-5 py-6" aria-label="Mobile primary">
          <Link href="/work" onClick={() => setMobileOpen(false)} className="py-4 text-lg font-display border-b border-line">
            Work
          </Link>

          <p className="pt-6 pb-2 font-mono text-xs uppercase tracking-wide text-dim">Services</p>
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              onClick={() => setMobileOpen(false)}
              className="py-3 text-[15px] border-b border-line flex items-center gap-3"
            >
              <ServiceIcon name={s.icon} className="text-lime [&_svg]:w-4 [&_svg]:h-4" />
              {s.name}
            </Link>
          ))}
          <Link
            href="/services"
            onClick={() => setMobileOpen(false)}
            className="py-4 text-[15px] font-semibold text-lime"
          >
            All Services →
          </Link>

          <Link href="/industries" onClick={() => setMobileOpen(false)} className="py-4 text-lg font-display border-b border-line">
            Industries
          </Link>
          <Link href="/approach" onClick={() => setMobileOpen(false)} className="py-4 text-lg font-display border-b border-line">
            Approach
          </Link>
          <Link href="/studio" onClick={() => setMobileOpen(false)} className="py-4 text-lg font-display border-b border-line">
            Studio
          </Link>
          <Link href="/blog" onClick={() => setMobileOpen(false)} className="py-4 text-lg font-display border-b border-line">
            Insights
          </Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)} className="py-4 text-lg font-display border-b border-line">
            Contact
          </Link>

          <button
            onClick={() => {
              setMobileOpen(false);
              openModal();
            }}
            className="mt-8 bg-lime text-lime-ink font-semibold text-sm px-5 py-4 text-center"
          >
            Start a Project
          </button>
        </nav>
      </div>
    </header>
  );
}
