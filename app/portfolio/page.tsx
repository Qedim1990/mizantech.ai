import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio | Tamamlanmış Layihələr",
  description:
    "AI-dəstəkli veb sayt, brendinq və dizayn layihələrimizə baxın — hər biri etik biznes prinsiplərinə uyğun icra edilib.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <section className="border-b border-neutral-200 bg-navy-50 py-20">
        <div className="container">
          <Reveal>
            <h1 className="max-w-2xl text-4xl font-extrabold text-navy-900 md:text-5xl">
              İşlərimiz Özü Üçün Danışır
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="container py-20">
        <PortfolioGrid />
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50 py-20 text-center">
        <Reveal>
          <h2 className="text-2xl font-bold text-navy-900 md:text-3xl">
            Növbəti Uğur Hekayəsi Siz Olun
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
