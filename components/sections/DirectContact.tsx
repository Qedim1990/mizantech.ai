import { Phone, Mail, Instagram, Facebook } from "lucide-react";

const CONTACT_LINKS = [
  {
    icon: Phone,
    label: "+994 10 415 51 85",
    href: "tel:+994104155185",
  },
  {
    icon: Mail,
    label: "mizantech.ai@gmail.com",
    href: "mailto:mizantech.ai@gmail.com",
  },
  {
    icon: Instagram,
    label: "instagram.com/mizantech.ai",
    href: "https://instagram.com/mizantech.ai",
  },
  {
    icon: Facebook,
    label: "facebook.com/mizantech.ai",
    href: "https://facebook.com/mizantech.ai",
  },
];

/** Named personal point of contact — sits beside the form on /contact as a direct alternative to it. */
export function DirectContact() {
  return (
    <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-6">
      <p className="font-mono text-xs uppercase tracking-wider text-gold-800">Birbaşa Əlaqə</p>
      <h2 className="mt-2 text-lg font-semibold text-navy-900">M.Gadim</h2>
      <p className="text-sm text-neutral-600">Təsisçi</p>

      <ul className="mt-5 space-y-3">
        {CONTACT_LINKS.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-3 text-sm text-navy-900 transition-colors hover:text-gold-800"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white text-navy-700 transition-colors group-hover:border-gold-400 group-hover:text-gold-800">
                <item.icon className="size-4" aria-hidden="true" />
              </span>
              <span className="break-all">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
