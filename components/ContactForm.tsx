"use client";

import { useState } from "react";
import { submitLead } from "@/lib/api";
import { SERVICES } from "@/data/services";

const BUDGETS = ["Under $10k", "$10k–$25k", "$25k–$75k", "$75k+", "Not sure yet"];

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  website: "",
  service: "",
  budget: "",
  details: "",
};

type Status = "idle" | "loading" | "done" | "error";

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const update =
    (field: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      await submitLead({ ...form, source: "contact-page" });
      setStatus("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <div className="border border-line bg-surface p-8">
        <h3 className="font-display text-2xl mb-2.5">Message received ✓</h3>
        <p className="text-muted text-[15px] leading-relaxed">
          Thanks for reaching out. A strategist reads every enquiry personally
          and will get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-line bg-surface p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-4">
        <Field id="contactFullName" label="Full Name" value={form.fullName} onChange={update("fullName")} required />
        <Field id="contactEmail" label="Email Address" type="email" value={form.email} onChange={update("email")} required />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <Field id="contactPhone" label="Phone Number" type="tel" value={form.phone} onChange={update("phone")} required />
        <Field id="contactWebsite" label="Company Website (optional)" placeholder="yourcompany.com" value={form.website} onChange={update("website")} />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <SelectField
          id="contactService"
          label="Which service are you interested in?"
          value={form.service}
          onChange={update("service")}
          options={["General inquiry", ...SERVICES.map((s) => s.name)]}
        />
        <SelectField
          id="contactBudget"
        label="Estimated Budget"
          value={form.budget}
          onChange={update("budget")}
          options={BUDGETS}
        />
      </div>
      <Field
        id="contactDetails"
        label="Tell us about your project"
        value={form.details}
        onChange={update("details")}
        required
        textarea
      />

      {status === "error" && <p className="text-pink text-xs mb-3">{error}</p>}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full justify-center inline-flex bg-lime text-lime-ink font-semibold px-8 py-4 mt-2 hover:-translate-y-0.5 transition-transform disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  value,
  onChange,
  required,
  textarea,
  placeholder,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  required?: boolean;
  textarea?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block font-mono text-xs text-dim mb-1.5">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          rows={4}
          className="w-full bg-transparent border-b border-line py-2 text-[15px] focus:outline-none focus:border-lime resize-none"
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className="w-full bg-transparent border-b border-line py-2 text-[15px] focus:outline-none focus:border-lime"
        />
      )}
    </div>
  );
}

function SelectField({
  id,
  label,
  value,
  onChange,
  options,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block font-mono text-xs text-dim mb-1.5">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent border-b border-line py-2 text-[15px] focus:outline-none focus:border-lime [&>option]:bg-surface"
      >
        <option value="" disabled>
          Select one
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
