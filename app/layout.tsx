import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

// latin-ext genişləndirilmiş Latin diakritiklərinin çoxunu (ç,ğ,ş,ö,ü,ı) əhatə edir.
// "ə" (schwa) üçün qəsdən fallback zənciri var — bax globals.css qeydi.
const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = buildMetadata({
  title: "MIZAN.tech | Etik Bizneslər üçün AI-əsaslı Rəqəmsal Agentlik",
  description:
    "Halal və etik prinsiplərə sadiq bizneslər üçün AI-dəstəkli veb sayt, brendinq və dizayn. Strategiyadan production-a — tək komanda, tam ekosistem.",
  path: "/",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="az" className={`${manrope.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-navy-900 focus:shadow-card-hover"
        >
          Əsas məzmuna keç
        </a>
        <JsonLd data={organizationSchema()} />
        <Navigation />
        <main id="main-content" className="pt-18">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
