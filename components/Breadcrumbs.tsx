import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono text-xs text-dim mb-8 flex-wrap">
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
