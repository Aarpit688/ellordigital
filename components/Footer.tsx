"use client";

import { useState } from "react";
import Link from "next/link";
import { submitNewsletter } from "@/lib/api";
import Logo from "./Logo";
import UiIcon from "./UiIcon";
import { SERVICES } from "@/data/services";

type Status = "idle" | "loading" | "done" | "error";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      await submitNewsletter(email);
      setStatus("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  };

  return (
    <footer className="bg-bg-alt border-t border-line">
      <div className="max-w-[1180px] mx-auto px-5 md:px-10 py-14 md:py-16 grid sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
        <div>
          <Link href="/">
            <Logo size={26} wordmarkClassName="text-lg" />
          </Link>
          <p className="text-muted max-w-[280px] text-sm my-4">
            ELLOR is a studio combining strategy, design, and engineering under one team, present on every project from kickoff through launch and beyond.
          </p>

          {status === "done" ? (
            <p className="text-lime text-sm font-medium">Subscribed ✓ — thanks!</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex max-w-[340px] border border-line">
              <label htmlFor="newsletterEmail" className="sr-only">
                Email address
              </label>
              <input
                id="newsletterEmail"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="flex-1 bg-transparent px-3.5 py-3 text-sm focus:outline-none min-w-0"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-lime text-lime-ink font-semibold text-[13px] px-4 py-3 disabled:opacity-60 flex-shrink-0"
              >
                {status === "loading" ? "..." : "Subscribe"}
              </button>
            </form>
          )}
          {status === "error" && <p className="text-pink text-xs mt-2">{error}</p>}
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-mono text-xs uppercase tracking-wide text-dim mb-1.5">Studio</h2>
          <Link href="/work" className="text-sm text-muted hover:text-lime">Work</Link>
          <Link href="/industries" className="text-sm text-muted hover:text-lime">Industries</Link>
          <Link href="/approach" className="text-sm text-muted hover:text-lime">Approach</Link>
          <Link href="/blog" className="text-sm text-muted hover:text-lime">Insights</Link>
          <Link href="/studio" className="text-sm text-muted hover:text-lime">About</Link>
          <Link href="/contact" className="text-sm text-muted hover:text-lime">Contact</Link>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-mono text-xs uppercase tracking-wide text-dim mb-1.5">Services</h2>
          {SERVICES.slice(0, 4).map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="text-sm text-muted hover:text-lime">
              {s.name}
            </Link>
          ))}
          <Link href="/services" className="text-sm text-lime font-medium">
            View all →
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-mono text-xs uppercase tracking-wide text-dim mb-1.5">Contact</h2>
          <a href="tel:2138949933" className="flex items-center gap-2.5 text-sm text-muted hover:text-lime">
            <UiIcon name="phone" size={15} className="text-lime shrink-0" />
            +91 9311127429
          </a>
          <a href="mailto:hello@ellordigital.com" className="flex items-center gap-2.5 text-sm text-muted hover:text-lime break-all">
            <UiIcon name="mail" size={15} className="text-lime shrink-0" />
            hello@ellordigital.com
          </a>
          <span className="flex items-center gap-2.5 text-sm text-dim">
            <UiIcon name="pin" size={15} className="text-lime shrink-0" />
            424 Sunset Ave, Los Angeles, CA
          </span>
        </div>
      </div>

      <div className="max-w-[1180px] mx-auto px-5 md:px-10 py-6 border-t border-line flex flex-col md:flex-row justify-between items-center gap-3.5 text-[13px] text-dim text-center">
        <span>© 2026 ELLOR Digital. All rights reserved.</span>
        <div className="flex gap-3.5">
          <a href="#" className="font-mono text-xs border border-line px-2.5 py-1.5 hover:text-lime hover:border-lime transition-colors">
            <span aria-hidden="true">IG</span>
            <span className="sr-only">Instagram</span>
          </a>
          <a href="#" className="font-mono text-xs border border-line px-2.5 py-1.5 hover:text-lime hover:border-lime transition-colors">
            <span aria-hidden="true">IN</span>
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="#" className="font-mono text-xs border border-line px-2.5 py-1.5 hover:text-lime hover:border-lime transition-colors">
            <span aria-hidden="true">DR</span>
            <span className="sr-only">Dribbble</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
