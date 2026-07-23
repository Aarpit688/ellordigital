import type { Metadata } from "next";
import { redirect } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { getServiceBySlug, SERVICES } from "@/data/services";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import ServiceDetailView from "./ServiceDetailView";

// Pre-render every known service at build time (SSG on Vercel).
export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Services" };
  const description = service.shortDescription;
  return {
    title: service.name,
    description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.name} — ${SITE_NAME}`,
      description,
      type: "website",
      url: `${SITE_URL}/services/${service.slug}`,
    },
    twitter: { title: `${service.name} — ${SITE_NAME}`, description },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    // Mirrors the original <Navigate to="/services" replace /> behavior.
    redirect("/services");
  }

  const serviceJsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.shortDescription,
    serviceType: service.name,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: { "@type": "Country", name: "United States" },
  };

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <ServiceDetailView service={service} />
    </>
  );
}
