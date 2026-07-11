import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import PlaceholderFrame from "@/components/PlaceholderFrame";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with ELLOR Digital. A strategist reads every message personally and replies within one business day.",
};

const DETAILS = [
  { label: "Phone", value: "213.894.9933", href: "tel:2138949933" },
  { label: "Email", value: "hello@ellordigital.example", href: "mailto:hello@ellordigital.example" },
  { label: "Studio", value: "424 Sunset Ave, Los Angeles, CA" },
  { label: "Hours", value: "Mon–Fri, 9am–6pm PT" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumbs={<Breadcrumbs items={[{ label: "Contact" }]} />}
        eyebrow="Get in touch"
        title="Tell us where it hurts."
        subtitle="No sales gatekeeping — a strategist reads every message personally and replies within one business day."
      />

      <section className="max-w-[1180px] mx-auto px-5 md:px-10 pb-20 md:pb-24 grid md:grid-cols-[1fr_1.3fr] gap-10 md:gap-14">
        <div>
          <dl className="mb-10">
            {DETAILS.map((d) => (
              <div key={d.label} className="py-5 border-t border-line first:border-t-0">
                <dt className="font-mono text-xs uppercase tracking-wide text-dim mb-1">
                  {d.label}
                </dt>
                <dd className="text-lg">
                  {d.href ? (
                    <a href={d.href} className="hover:text-lime transition-colors">
                      {d.value}
                    </a>
                  ) : (
                    d.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <PlaceholderFrame label="studio location / map" aspect="aspect-[4/3]" />
        </div>

        <ContactForm />
      </section>
    </>
  );
}
