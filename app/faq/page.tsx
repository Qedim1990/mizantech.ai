import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { FAQ_ITEMS } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Tez-tez Verilən Suallar",
  description:
    "Qiymətlər, proses, AI-generasiya keyfiyyəti və halal siyasətimiz haqqında ən çox verilən suallara cavablar.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(FAQ_ITEMS)} />

      <section className="border-b border-neutral-200 bg-navy-50 py-20">
        <div className="container text-center">
          <Reveal>
            <h1 className="text-4xl font-extrabold text-navy-900 md:text-5xl">
              Suallarınız Var? Cavablarımız Var
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="container max-w-3xl py-20">
        <Reveal>
          <Accordion items={FAQ_ITEMS} />
        </Reveal>

        <Reveal delay={0.1} className="mt-12 text-center">
          <p className="text-neutral-600">Cavab tapmadınız?</p>
          <Link href="/contact" className="mt-4 inline-block">
            <Button>
              Birbaşa Soruşun <ArrowRight className="size-4" />
            </Button>
          </Link>
        </Reveal>
      </section>
    </>
  );
}
