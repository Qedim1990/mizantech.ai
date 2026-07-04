import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { DirectContact } from "@/components/sections/DirectContact";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Əlaqə | Pulsuz Konsultasiya",
  description: "Layihənizi müzakirə etmək üçün bizimlə əlaqə saxlayın. 24 saat ərzində cavab veririk.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="container max-w-4xl py-20">
      <Reveal>
        <h1 className="text-4xl font-extrabold text-navy-900 md:text-5xl">Layihənizi Danışaq</h1>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
        <Reveal delay={0.15}>
          <DirectContact />
        </Reveal>
      </div>
    </section>
  );
}
