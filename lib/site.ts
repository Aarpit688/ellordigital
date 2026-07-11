// Central site constants — reused by metadata, sitemap, robots, and JSON-LD.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.ellordigital.com"
).replace(/\/$/, "");

export const SITE_NAME = "ELLOR Digital";

export const SITE_DESCRIPTION =
  "ELLOR Digital is a brand & web studio in Los Angeles. Strategy, design, and code under one roof — brand identity, UI/UX, web, ecommerce, SEO, and marketing.";

export const SITE_TAGLINE = "Brand & Web Studio, Los Angeles";
