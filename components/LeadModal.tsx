"use client";

import { useEffect, useRef, useState } from "react";
import { submitLead } from "@/lib/api";
import { useModal } from "./ModalContext";
import { LogoMark } from "./Logo";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  website: "",
  details: "",
};

type Status = "idle" | "loading" | "done" | "error";

export default function LeadModal() {
  const { open, closeModal } = useModal();
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeModal();
    document.addEventListener("keydown", onKey);
    // move focus into the dialog for keyboard + screen-reader users
    const t = setTimeout(() => firstFieldRef.current?.focus(), 60);
    return () => {
      document.removeEventListener("keydown", onKey);
      clearTimeout(t);
    };
  }, [open, closeModal]);

  if (!open) return null;

  const update =
    (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      await submitLead(form);
      setStatus("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) closeModal();
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="animate-modal-overlay fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-5 bg-[rgba(8,8,11,0.72)] backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
    >
      <div className="animate-modal-panel relative bg-surface border border-line max-w-[820px] w-full max-h-[92vh] overflow-auto grid md:grid-cols-[0.85fr_1.15fr] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
        <button
          onClick={closeModal}
          aria-label="Close dialog"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full border border-white/20 bg-black/30 text-white flex items-center justify-center hover:border-lime hover:text-lime transition-colors"
        >
          <span aria-hidden="true">✕</span>
        </button>

        {/* vibrant brand panel (SpinX-style split) */}
        <div
          aria-hidden="true"
          className="relative hidden md:block overflow-hidden bg-[#0e0f14] min-h-[440px]"
        >
          <div className="hero-aurora absolute inset-[-25%] opacity-90" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "conic-gradient(from 210deg at 42% 32%, rgba(91,141,239,0.55), rgba(155,93,229,0.5), rgba(241,91,181,0.45), rgba(255,176,32,0.4), rgba(91,141,239,0.55))",
              mixBlendMode: "screen",
              filter: "blur(8px)",
            }}
          />
          <div className="relative h-full flex flex-col justify-between p-8">
            <LogoMark size={34} />
            <div>
              <p className="font-display text-[26px] leading-tight text-white">
                Let&apos;s point the lens at your brand.
              </p>
              <p className="text-white/70 text-sm mt-3 max-w-[240px]">
                Thirty minutes. We&apos;ll show you what&apos;s costing you
                conversions and what&apos;s worth fixing first.
              </p>
            </div>
          </div>
        </div>

        {/* form */}
        <div className="p-8 md:p-10">
          {status === "done" ? (
            <div>
              <h2 className="font-display text-2xl mb-2.5">
                You&apos;re booked in spirit ✓
              </h2>
              <p className="text-muted text-sm">
                This is a demo form — nothing was actually scheduled. Wire{" "}
                <code className="font-mono text-xs bg-black/30 px-1.5 py-0.5 rounded">
                  POST /api/leads
                </code>{" "}
                up to your CRM, calendar, or email service to make it real.
              </p>
            </div>
          ) : (
            <>
              <h2 id="modalTitle" className="font-display text-2xl mb-2.5">
                Book a Free Strategy Call
              </h2>
              <p className="text-muted text-sm mb-6">
                Thirty minutes. We&apos;ll point out what&apos;s costing you
                conversions and what&apos;s worth fixing first.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <Field
                    ref={firstFieldRef}
                    id="modalFullName"
                    label="Full Name*"
                    value={form.fullName}
                    onChange={update("fullName")}
                    required
                  />
                  <Field
                    id="modalEmail"
                    label="Email Address*"
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    required
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Field
                    id="modalPhone"
                    label="Phone Number*"
                    type="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    required
                  />
                  <Field
                    id="modalWebsite"
                    label="Your Website URL"
                    type="url"
                    value={form.website}
                    onChange={update("website")}
                  />
                </div>
                <Field
                  id="modalDetails"
                  label="Tell us about your project*"
                  value={form.details}
                  onChange={update("details")}
                  required
                />

                {status === "error" && (
                  <p className="text-pink text-xs mb-3">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full justify-center inline-flex bg-lime text-lime-ink font-semibold px-8 py-4 mt-2 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(198,255,61,0.25)] transition-all disabled:opacity-60"
                >
                  {status === "loading" ? "Booking…" : "Book My Free Call"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  type = "text",
  value,
  onChange,
  required,
  ref,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  ref?: React.Ref<HTMLInputElement>;
}) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block font-mono text-xs text-dim mb-1.5">
        {label}
      </label>
      <input
        ref={ref}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-transparent border-b border-line py-2 text-[15px] focus:outline-none focus:border-lime transition-colors"
      />
    </div>
  );
}
