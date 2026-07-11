import { redirect } from "next/navigation";
import { getServiceBySlug, SERVICES } from "@/data/services";
import ServiceDetailView from "./ServiceDetailView";

// Pre-render every known service at build time (SSG on Vercel).
export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
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

  return <ServiceDetailView service={service} />;
}
