import Link from "next/link";
import Reveal from "./Reveal";
import ServiceCard from "./ServiceCard";
import { SERVICES } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="max-w-[1180px] mx-auto px-5 md:px-10 py-16 md:py-20 border-t border-line">
      <Reveal className="flex items-end justify-between flex-wrap gap-4 mb-10">
        <h2 className="font-display text-[clamp(30px,4.4vw,44px)]">
          Where we come in
        </h2>
        <Link
          href="/services"
          className="font-semibold text-[15px] border-b border-lime pb-0.5 hover:opacity-70 transition-opacity"
        >
          All services →
        </Link>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SERVICES.map((service, i) => (
          <ServiceCard key={service.slug} service={service} index={i} />
        ))}
      </div>
    </section>
  );
}
