# MIZAN.tech

Next.js 14 (App Router) + TypeScript + Tailwind + Framer Motion.

## Quraşdırma

```bash
npm install
npm run dev
```

`http://localhost:3000` açılacaq.

## Struktur

```
app/                  → route-lar (App Router)
  page.tsx            → Ana səhifə
  services/page.tsx   → Xidmətlər hub
  services/[slug]/    → 4 xidmət detalı (dinamik route, lib/content.ts-dən)
  portfolio/ about/ faq/ contact/
components/ui/        → Button, Card, Input, Accordion, Badge, Skeleton, Reveal
components/layout/    → Navigation, Footer
components/sections/  → BalanceSignature, PortfolioGrid, ContactForm
lib/content.ts        → BÜTÜN səhifə məzmunu tək yerdə (AZ mətn, xidmət detalları, FAQ, portfolio)
lib/seo.ts            → Metadata generator
lib/schema.ts         → JSON-LD schema generatorları
```

## Deploy öncəsi YOXLAMA SİYAHISI

- [ ] `npm install && npm run build` — build-i lokal işə salıb xəta olmadığını təsdiqləyin
- [ ] **Şrift/Azərbaycan hərfləri**: real mətnlə bütün "ə, ş, ç, ğ, ö, ü, ı" hərflərini brauzerdə vizual yoxlayın (bax `app/globals.css` başındakı qeyd — bəzi Google Fonts schwa "ə" hərfini dəstəkləmir, fallback zənciri qoyulub, amma vizual təsdiq lazımdır)
- [ ] `components/sections/ContactForm.tsx` — `FORM_ENDPOINT` dəyişənini real Make.com webhook (və ya backend) URL-i ilə əvəz edin
- [ ] `components/sections/ContactForm.tsx` — WhatsApp linkini (`wa.me/994000000000`) real nömrə ilə əvəz edin
- [ ] `lib/content.ts` → `PORTFOLIO_PLACEHOLDER` — real layihələrlə əvəz edin
- [ ] `lib/seo.ts` → `SITE_URL` dəyişəni real domenə uyğundur, OG şəkli (`/public/og/default.jpg`) və `/public/logo.png` əlavə edin
- [ ] `app/layout.tsx` — Google Search Console verification tag lazımdırsa əlavə edin

## Deploy (Vercel)

```bash
npm i -g vercel
vercel
```

Və ya GitHub reposuna push edib Vercel-də import edin — `next.config.js` və `vercel.json`-a əlavə konfiqurasiya lazım deyil.

## Qalan səhifələr / komponentlər (Mərhələ 6-nın davamı)

Bu checkpoint 10 səhifənin hamısını əhatə edir. Əlavə cilalama üçün:
- Portfolio kartlarına real şəkillər (hazırda yalnız mətn strukturu var)
- `next/image` ilə optimallaşdırılmış şəkil komponentləri (real vizual aktivlər əlavə olunanda)
- E2E test (Playwright) — istəyə bağlı
# mizantech.ai
