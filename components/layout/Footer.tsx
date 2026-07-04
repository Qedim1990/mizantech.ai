import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

const COLUMNS = [
  {
    title: "Xidmətlər",
    links: [
      { href: "/services/ai-image-generation", label: "AI Şəkil Generasiyası" },
      { href: "/services/ai-video-generation", label: "AI Video Generasiyası" },
      { href: "/services/web-development", label: "Veb Development" },
      { href: "/services/branding-design", label: "Brendinq & Dizayn" },
    ],
  },
  {
    title: "Şirkət",
    links: [
      { href: "/about", label: "Haqqımızda" },
      { href: "/portfolio", label: "Portfolio" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Əlaqə" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="on-dark border-t border-neutral-200 bg-navy-950 text-neutral-300">
      <div className="container py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <span className="font-mono text-lg font-bold tracking-tight text-white">
              MIZAN<span className="text-gold-400">.tech</span>
            </span>
            <p className="mt-3 max-w-sm text-sm text-neutral-400">
              Etik və halal-compliant bizneslər üçün AI-dəstəkli veb development,
              brendinq və dizayn agentliyi.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge tone="gold">Halal-Compliant</Badge>
              <Badge tone="navy" className="border-navy-700 bg-navy-900 text-neutral-300">
                AI-Dəstəkli
              </Badge>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-400">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-300 transition-colors hover:text-gold-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-navy-800 pt-6 text-xs text-neutral-600 sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} MIZAN.tech. Bütün hüquqlar qorunur.</p>
          <p>Yalnız etik və halal-compliant layihələr üçün.</p>
        </div>
      </div>
    </footer>
  );
}
