import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SERVICES } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Xidmətlər | AI, Veb Development, Brendinq",
  description:
    "AI şəkil/video generasiyası, veb development, brendinq və dizayn xidmətləri. Etik bizneslər üçün tam-stack rəqəmsal həllər.",
  path: "/services",
});

const MATCH_GUIDE = [
  { need: "Yeni brend qururam", answer: "Brendinq & Dizayn", slug: "branding-design" },
  { need: "Saytım köhnəlib/yoxdur", answer: "Veb Development", slug: "web-development" },
  { need: "Məzmun istehsalına AI lazımdır", answer: "AI Şəkil/Video Generasiyası", slug: "ai-image-generation" },
];

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-neutral-200 bg-navy-50 py-20">
        <div className="container">
          <Reveal>
            <h1 className="max-w-2xl text-4xl font-extrabold text-navy-900 md:text-5xl">
              Rəqəmsal Ekosistem Xidmətləri
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {SERVICES.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.08}>
              <Link href={`/services/${service.slug}`} className="block h-full">
                <Card className="h-full">
                  <service.icon className="size-9 text-gold-600" strokeWidth={1.5} aria-hidden="true" />
                  <h2 className="mt-4 text-xl font-semibold text-navy-900">{service.title}</h2>
                  <p className="mt-2 text-neutral-600">{service.shortDesc}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-navy-700">
                    Ətraflı Bax <ArrowRight className="size-3.5" />
                  </span>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-neutral-50 py-20">
        <div className="container">
          <Reveal>
            <h2 className="text-2xl font-bold text-navy-900 md:text-3xl">
              Hansı Xidmət Sizə Uyğundur?
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {MATCH_GUIDE.map((item, i) => (
              <Reveal key={item.need} delay={i * 0.08}>
                <Link
                  href={`/services/${item.slug}`}
                  className="block rounded border border-neutral-200 bg-white p-5 transition-colors hover:border-gold-400"
                >
                  <p className="text-sm text-neutral-600">&ldquo;{item.need}&rdquo;</p>
                  <p className="mt-2 font-semibold text-navy-900">→ {item.answer}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20 text-center">
        <Reveal>
          <p className="text-neutral-600">
            Əmin deyilsinizsə, pulsuz konsultasiyada birlikdə müəyyənləşdirək.
          </p>
          <Link href="/contact" className="mt-5 inline-block">
            <Button size="lg">
              Pulsuz Konsultasiya <ArrowRight className="size-4" />
            </Button>
          </Link>
        </Reveal>
      </section>
    </>
  );
}
