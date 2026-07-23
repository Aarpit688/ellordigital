import Link from "next/link";
import Reveal from "./Reveal";
import ServiceIcon from "./ServiceIcon";
import type { Service } from "@/data/services";

export default function ServiceCard({
  service,
  index = 0,
}: {
  service: Service;
  index?: number;
}) {
  return (
    <Reveal delay={(index % 3) * 0.05} className="h-full">
      <Link
        href={`/services/${service.slug}`}
        className="group flex h-full flex-col border border-line p-7 md:p-8 hover:border-lime/50 hover:bg-white/[0.02] hover:-translate-y-1 transition-all duration-300"
      >
        <div className="text-lime mb-6">
          <ServiceIcon name={service.icon} />
        </div>
        <h3 className="font-display text-xl mb-3 flex items-center gap-2">
          {service.name}
          <span
            aria-hidden="true"
            className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-lime"
          >
            →
          </span>
        </h3>
        <p className="text-muted text-[15px] leading-relaxed">
          {service.shortDescription}
        </p>
      </Link>
    </Reveal>
  );
}
