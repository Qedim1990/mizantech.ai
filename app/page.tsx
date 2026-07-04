import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { BalanceSignature } from "@/components/sections/BalanceSignature";
import { SERVICES, WHY_US, PROCESS, TRUST_POINTS } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-50">
        <div className="bg-noise absolute inset-0" aria-hidden="true" />
        <div className="container relative flex flex-col items-center py-24 text-center md:py-30">
          <Reveal>
            <BalanceSignature className="mx-auto mb-6" size={80} />
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-balance max-w-3xl text-4xl font-extrabold tracking-tight text-navy-900 md:text-6xl">
              Biznesiniz üçün etibar doğuran rəqəmsal ekosistem
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-lg text-neutral-600">
              Strategiya, brendinq, AI və developmenti bir komandada birləşdirən
              yeganə etik-yönümlü agentlik.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact">
                <Button size="lg">
                  Pulsuz Konsultasiya Alın <ArrowRight className="size-4" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="ghost">
                  Portfolio-ya Baxın
                </Button>
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
              <Badge tone="gold">Halal-Compliant</Badge>
              <Badge tone="navy">AI-Dəstəkli</Badge>
              <Badge tone="neutral">Production-Ready</Badge>
            </div>
          </Reveal>
        </div>
      </section>

      {/* NƏ EDİRİK */}
      <section className="container py-24">
        <Reveal>
          <p className="font-mono text-sm uppercase tracking-wider text-gold-800">Xidmətlər</p>
          <h2 className="mt-2 text-3xl font-bold text-navy-900 md:text-4xl">Nə Edirik</h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.08}>
              <Link href={`/services/${service.slug}`} className="block h-full">
                <Card className="h-full">
                  <service.icon className="size-8 text-gold-600" aria-hidden="true" strokeWidth={1.5} />
                  <h3 className="mt-4 font-semibold text-navy-900">{service.title}</h3>
                  <p className="mt-1.5 text-sm text-neutral-600">{service.shortDesc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-navy-700 transition-transform group-hover:translate-x-1">
                    Ətraflı <ArrowRight className="size-3.5" />
                  </span>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* NİYƏ MIZAN.tech */}
      <section className="on-dark bg-navy-900 py-24 text-white">
        <div className="container">
          <Reveal>
            <p className="font-mono text-sm uppercase tracking-wider text-gold-400">Fərq</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Niyə MIZAN.tech</h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_US.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <item.icon className="size-7 text-gold-400" aria-hidden="true" strokeWidth={1.5} />
                <h3 className="mt-4 font-semibold">{item.title}</h3>
                <p className="mt-1.5 text-sm text-neutral-300">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NECƏ İŞLƏYİRİK */}
      <section className="container py-24">
        <Reveal>
          <p className="font-mono text-sm uppercase tracking-wider text-gold-800">Proses</p>
          <h2 className="mt-2 text-3xl font-bold text-navy-900 md:text-4xl">Necə İşləyirik</h2>
        </Reveal>

        <div className="relative mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="absolute left-0 right-0 top-6 hidden h-px bg-neutral-200 lg:block"
            aria-hidden="true"
          />
          {PROCESS.map((item, i) => (
            <Reveal key={item.step} delay={i * 0.1} className="relative">
              <div className="relative z-10 flex size-12 items-center justify-center rounded-full border-2 border-gold-500 bg-white">
                <item.icon className="size-5 text-gold-600" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <p className="mt-4 font-mono text-xs text-neutral-400">{item.step}</p>
              <h3 className="mt-1 font-semibold text-navy-900">{item.title}</h3>
              <p className="mt-1.5 text-sm text-neutral-600">{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TRUST / QUALITY POINTS */}
      <section className="border-y border-neutral-200 bg-neutral-50 py-16">
        <div className="container flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {TRUST_POINTS.map((point) => (
            <p key={point} className="text-center text-sm font-medium text-navy-700">
              {point}
            </p>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container py-24 text-center">
        <Reveal>
          <h2 className="text-balance mx-auto max-w-2xl text-3xl font-bold text-navy-900 md:text-4xl">
            Layihənizi Müzakirə Edək
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-neutral-600">
            Pulsuz kəşf zənginə qeydiyyatdan keçin — 24 saat ərzində sizinlə əlaqə saxlayırıq.
          </p>
          <Link href="/contact" className="mt-8 inline-block">
            <Button size="lg">
              Kəşf Zəngi Planlayın <ArrowRight className="size-4" />
            </Button>
          </Link>
        </Reveal>
      </section>
    </>
  );
}
