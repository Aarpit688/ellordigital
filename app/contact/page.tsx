import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import Media from "@/components/Media";
import GradientArt from "@/components/GradientArt";
import UiIcon from "@/components/UiIcon";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with ELLOR Digital. A strategist reads every message personally and replies within one business day.",
  alternates: { canonical: "/contact" },
};

const DETAILS = [
  { label: "Phone", value: "+91 9311127429", icon: "phone", chip: "bg-blue/10 text-blue border-blue/25" },
  { label: "Email", value: "officialellordigital@gmail.com", href: "mailto:officialellordigital@gmail.com", icon: "mail", chip: "bg-violet/15 text-violet border-violet/25" },
  { label: "Studio", value: "Spaze I-Tech, Sector 49 , Gurugram , Haryana , 122001", icon: "pin", chip: "bg-pink/10 text-pink border-pink/25" },
  { label: "Hours", value: "Mon–Fri, 9am–6pm IST", icon: "clock", chip: "bg-amber/10 text-amber border-amber/25" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumbs={<Breadcrumbs items={[{ label: "Contact" }]} />}
        eyebrow="Get in touch"
        title="Let's discuss your project."
        subtitle="No sales gatekeeping — a strategist reviews every message personally and responds within one business day."
      />

      <section className="max-w-[1180px] mx-auto px-5 md:px-10 pb-20 md:pb-24 grid md:grid-cols-[1fr_1.3fr] gap-10 md:gap-14">
        <div>
          <dl className="mb-10">
            {DETAILS.map((d) => (
              <div
                key={d.label}
                className="grid grid-cols-[44px_1fr] gap-4 items-center py-5 border-t border-line first:border-t-0"
              >
                <span className={`flex h-11 w-11 items-center justify-center rounded-xl border ${d.chip}`}>
                  <UiIcon name={d.icon} size={20} />
                </span>
                <div>
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
              </div>
            ))}
          </dl>
          <Media
            src="/studio/location.webp"
            alt="ELLOR studio location in Los Angeles"
            aspect="aspect-[4/3]"
            className="border border-line"
            fallback={<GradientArt tint="teal" label="424 Sunset Ave, Los Angeles" />}
          />
        </div>

        <ContactForm />
      </section>
    </>
  );
}
