import Link from "next/link";
import JsonLd from "./JsonLd";
import { SITE_URL } from "@/lib/site";

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  // BreadcrumbList structured data (Home + each crumb). The final crumb is the
  // current page, so it carries a name but no `item` URL, per schema.org guidance.
  const crumbs = [{ label: "Home", to: "/" }, ...items];
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => {
      const isLast = i === crumbs.length - 1;
      const entry: Record<string, unknown> = {
        "@type": "ListItem",
        position: i + 1,
        name: c.label,
      };
      if (c.to && !isLast) entry.item = `${SITE_URL}${c.to === "/" ? "" : c.to}`;
      return entry;
    }),
  };

  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono text-xs text-dim mb-8 flex-wrap">
      <JsonLd data={breadcrumbJsonLd} />
      <Link href="/" className="hover:text-lime transition-colors">
        Home
      </Link>
      {items.map((item, i) => (
        <span key={item.label} className="flex items-center gap-2">
          <span aria-hidden="true">/</span>
          {item.to && i !== items.length - 1 ? (
            <Link href={item.to} className="hover:text-lime transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-muted">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
