import { SITE } from "./seo";

/** Root Organization schema — include once, in the home page. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/logo.png`,
    description:
      "Etik və halal-compliant bizneslər üçün AI-dəstəkli veb development, brendinq və dizayn agentliyi.",
    areaServed: "AZ",
    knowsAbout: [
      "AI Image Generation",
      "AI Video Generation",
      "Web Development",
      "UI/UX Design",
      "Branding",
    ],
  };
}

/** Service schema — use on each service detail page. */
export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: input.name,
    name: input.name,
    description: input.description,
    url: `${SITE.url}${input.path}`,
    provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
    areaServed: "AZ",
  };
}

/** FAQPage schema — use on the FAQ page, built from the same Q&A array that renders the Accordion. */
export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

/** BreadcrumbList schema — use on any non-home page. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}

