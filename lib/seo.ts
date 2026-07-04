import type { Metadata } from "next";

const SITE_NAME = "MIZAN.tech";
const SITE_URL = "https://mizan.tech";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og/default.jpg`;

interface PageSeoInput {
  title: string;
  description: string;
  path: string; // e.g. "/services/ai-image-generation"
  ogImage?: string;
  noIndex?: boolean;
}

/**
 * Builds a Next.js Metadata object with title, description, canonical URL,
 * Open Graph and Twitter card data for a single page. Call from each
 * page's `export const metadata` (static) or `generateMetadata()` (dynamic).
 */
export function buildMetadata({
  title,
  description,
  path,
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
}: PageSeoInput): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
      locale: "az_AZ",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

export const SITE = { name: SITE_NAME, url: SITE_URL };
