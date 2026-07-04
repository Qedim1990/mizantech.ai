import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Eye } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { BalanceSignature } from "@/components/sections/BalanceSignature";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Haqqımızda | MIZAN.tech-in Hekayəsi və Dəyərləri",
  description:
    "MIZAN.tech niyə yalnız etik və halal-compliant layihələrlə işləyir? Missiyamız və prinsiplərimizlə tanış olun.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-neutral-200 bg-navy-50 py-20">
        <div className="container text-center">
          <Reveal>
            <BalanceSignature className="mx-auto mb-6" size={72} />
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mx-auto max-w-2xl text-4xl font-extrabold text-navy-900 md:text-5xl">
              Balans Üzərində Qurulmuş Agentlik
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-4 max-w-lg text-neutral-600">
              &ldquo;Mizan&rdquo; — tərəzi, balans. Texnologiya ilə dəyərlər arasında.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container max-w-3xl py-20">
        <Reveal>
          <h2 className="text-2xl font-bold text-navy-900 md:text-3xl">Niyə Varıq</h2>
          <p className="mt-4 text-neutral-600">
            Süni intellekt sürəti çox vaxt etik məsuliyyəti arxa plana atır. Biz
            texnologiyanın sürətini dəyərlərdən güzəştə getmədən istifadə etməyin
            mümkün olduğuna inanırıq — missiyamız məhz bu balansı qurmaqdır.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-16">
          <h2 className="text-2xl font-bold text-navy-900 md:text-3xl">Prinsiplərimiz</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <ShieldCheck className="size-7 text-gold-600" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-3 font-semibold text-navy-900">Yalnız Halal və Etik Layihələr</h3>
              <p className="mt-1.5 text-sm text-neutral-600">
                Gambling, adult məzmun, fırıldaqçılıq və manipulyativ təcrübələr daxil
                olan heç bir layihəni qəbul etmirik.
              </p>
            </div>
            <div>
              <Eye className="size-7 text-gold-600" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-3 font-semibold text-navy-900">Şəffaflıq</h3>
              <p className="mt-1.5 text-sm text-neutral-600">
                Nə qəbul etdiyimiz və nə etmədiyimiz açıqdır — sürprizsiz əməkdaşlıq.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-16">
          <h2 className="text-2xl font-bold text-navy-900 md:text-3xl">Yanaşmamız</h2>
          <p className="mt-4 text-neutral-600">
            Strategiya, AI və insan ekspert nəzarətini birləşdiririk: AI sürəti icranı
            sürətləndirir, ekspert nəzarəti isə hər çıxışın brendinizə uyğun və
            keyfiyyətli olmasını təmin edir.
          </p>
        </Reveal>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl font-bold text-navy-900 md:text-3xl">
            Dəyərlərimiz Sizinkilərlə Üst-üstə Düşür?
          </h2>
          <Link href="/contact" className="mt-6 inline-block">
            <Button size="lg">
              Danışaq <ArrowRight className="size-4" />
            </Button>
          </Link>
        </Reveal>
      </section>
    </>
  );
}
