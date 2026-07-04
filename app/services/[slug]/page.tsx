import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { SERVICES } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";

interface PageProps {
  params: { slug: string };
}

// Next.js 14 App Router: build-time-də bütün 4 xidmət səhifəsini statik
// generasiya edir (ISR yox, tam static — məzmun tez-tez dəyişmir).
export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = getService(params.slug);
  if (!service) return {};
  return buildMetadata({
    title: `${service.title} | MIZAN.tech`,
    description: service.shortDesc,
    path: `/services/${service.slug}`,
  });
}

export default function ServiceDetailPage({ params }: PageProps) {
  const service = getService(params.slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: service.title,
          description: service.shortDesc,
          path: `/services/${service.slug}`,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Ana Səhifə", path: "/" },
          { name: "Xidmətlər", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ])}
      />

      {/* HERO */}
      <section className="border-b border-neutral-200 bg-navy-50 py-20">
        <div className="container">
          <Reveal>
            <p className="font-mono text-sm uppercase tracking-wider text-gold-800">{service.title}</p>
            <h1 className="text-balance mt-2 max-w-2xl text-4xl font-extrabold text-navy-900 md:text-5xl">
              {service.heroLine}
            </h1>
            <div className="mt-8">
              <Link href="/contact">
                <Button size="lg">
                  Nümunə Sifariş Edin <ArrowRight className="size-4" />
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* NECƏ FƏRQLƏNİR */}
      <section className="container py-20">
        <Reveal>
          <h2 className="text-2xl font-bold text-navy-900 md:text-3xl">Necə Fərqlənir</h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {service.differentiators.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.08}>
              <h3 className="font-semibold text-navy-900">{d.title}</h3>
              <p className="mt-1.5 text-sm text-neutral-600">{d.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* İSTİFADƏ HALLARI */}
      <section className="bg-neutral-50 py-20">
        <div className="container">
          <Reveal>
            <h2 className="text-2xl font-bold text-navy-900 md:text-3xl">İstifadə Halları</h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {service.useCases.map((useCase, i) => (
              <Reveal key={useCase} delay={i * 0.06}>
                <div className="flex items-center gap-3 rounded border border-neutral-200 bg-white p-4">
                  <Check className="size-4 shrink-0 text-gold-600" aria-hidden="true" />
                  <span className="text-navy-900">{useCase}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROSES */}
      <section className="container py-20">
        <Reveal>
          <h2 className="text-2xl font-bold text-navy-900 md:text-3xl">Proses</h2>
        </Reveal>
        <ol className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {service.process.map((step, i) => (
            <Reveal key={step} delay={i * 0.08}>
              <li className="flex gap-3">
                <span className="font-mono text-sm text-gold-800">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-navy-900">{step}</span>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-neutral-200 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl font-bold text-navy-900 md:text-3xl">
            {service.title} ilə Başlayaq
          </h2>
          <Link href="/contact" className="mt-6 inline-block">
            <Button size="lg">
              Kəşf Zəngi Planlayın <ArrowRight className="size-4" />
            </Button>
          </Link>
        </Reveal>
      </section>
    </>
  );
}
