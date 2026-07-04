import {
  Image as ImageIcon,
  Video,
  Code2,
  Palette,
  ShieldCheck,
  Layers,
  Zap,
  Eye,
  Compass,
  Lightbulb,
  Wand2,
  Rocket,
  type LucideIcon,
} from "lucide-react";

export interface ServiceContent {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDesc: string;
  heroLine: string;
  differentiators: { title: string; desc: string }[];
  useCases: string[];
  process: string[];
}

export const SERVICES: ServiceContent[] = [
  {
    slug: "ai-image-generation",
    icon: ImageIcon,
    title: "AI Şəkil Generasiyası",
    shortDesc: "Brend-uyğun vizuallar, saniyələr içində.",
    heroLine: "Stok Fotoya Ehtiyacınız Qalmır",
    differentiators: [
      { title: "Brend Uyğunluğu", desc: "Hər çıxış brend kitabınıza kalibrlənir." },
      { title: "Sürət", desc: "Çəkilişin günlərini saniyələrə endirir." },
      { title: "Miqyaslana bilən", desc: "1 konseptdən onlarla format/ölçü." },
    ],
    useCases: ["Məhsul Fotoqrafiyası", "Sosial Media Vizualları", "Reklam Kreativləri", "E-ticarət Kataloqu"],
    process: ["Brief", "AI Generasiya", "Ekspert Kürasiya", "Təhvil"],
  },
  {
    slug: "ai-video-generation",
    icon: Video,
    title: "AI Video Generasiyası",
    shortDesc: "Sosial media və reklam üçün AI-dəstəkli video.",
    heroLine: "Video İstehsalı Artıq Həftələr Çəkmir",
    differentiators: [
      { title: "Sürət", desc: "Həftələri günlərə endirir." },
      { title: "Büdcə Effektivliyi", desc: "Studio/heyət xərci yoxdur." },
      { title: "Ekspert Nəzarəti", desc: "Hər video insan gözü ilə yoxlanılır." },
    ],
    useCases: ["Reels/Shorts", "Məhsul Tanıtımı", "Reklam Kampaniyaları", "Brend Hekayəsi"],
    process: ["Konsept & Ssenari", "AI Generasiya", "Redaktə & Səs", "Təhvil"],
  },
  {
    slug: "web-development",
    icon: Code2,
    title: "Veb Development",
    shortDesc: "Next.js əsaslı sürətli, premium saytlar.",
    heroLine: "Sadəcə Sayt Yox, Satış Aləti",
    differentiators: [
      { title: "Sürət", desc: "Core Web Vitals standartları." },
      { title: "SEO-Hazır Arxitektura", desc: "Schema markup daxil." },
      { title: "Tam Responsive", desc: "Mobil 'kiçildilmiş desktop' deyil." },
    ],
    useCases: ["Korporativ/Brend Saytları", "Veb Kataloqlar", "E-ticarət", "Xüsusi Veb Tətbiqlər"],
    process: ["Strategiya", "Dizayn Sistemi", "Development", "Test/QA", "Launch & Dəstək"],
  },
  {
    slug: "branding-design",
    icon: Palette,
    title: "Brendinq & Dizayn",
    shortDesc: "Loqo, vizual kimlik, UI/UX, rəqəmsal məhsul.",
    heroLine: "Brendiniz İlk Baxışdan Etibar Yaratmalıdır",
    differentiators: [
      { title: "Strategiya Əsaslı", desc: "Dizayndan əvvəl təhlil." },
      { title: "Sistemli", desc: "Tək loqo yox, bütöv ekosistem." },
      { title: "Sənədləşdirilmiş", desc: "Tam brend kitabı ilə təhvil." },
    ],
    useCases: ["Loqo Dizaynı", "Tam Vizual Kimlik", "UI/UX Dizaynı", "Rəqəmsal Məhsul Dizaynı"],
    process: ["Kəşf & Araşdırma", "Konsept", "Sistem Qurulması", "Sənədləşdirmə & Təhvil"],
  },
];

export const WHY_US = [
  {
    icon: ShieldCheck,
    title: "Yalnız Etik Layihələr",
    desc: "Dəyərlərinizə uyğun tərəfdaş — gambling, adult, fırıldaqçılıq layihələri qəbul edilmir.",
  },
  {
    icon: Layers,
    title: "Tək Komanda, Tam Ekosistem",
    desc: "Strategiya, brend, AI, development — bir komanda, sıfır koordinasiya yükü.",
  },
  {
    icon: Zap,
    title: "AI Sürəti + Ekspert Nəzarəti",
    desc: "Sürətli icra, hər çıxış insan ekspert tərəfindən kalibrlənir.",
  },
  {
    icon: Eye,
    title: "Saytımız Sübutdur",
    desc: "Bizə inanmaq üçün uzağa getmə lazım deyil — elə buraya bax.",
  },
];

export const PROCESS = [
  { icon: Compass, step: "01", title: "Kəşf", desc: "Biznesinizi, məqsədinizi və auditoriyanızı öyrənirik." },
  { icon: Lightbulb, step: "02", title: "Strategiya", desc: "Brend, mesaj və texniki yol xəritəsini qururuq." },
  { icon: Wand2, step: "03", title: "Yaradılış", desc: "AI sürəti ilə dizayn və kodu həyata keçiririk." },
  { icon: Rocket, step: "04", title: "Təhvil & Dəstək", desc: "Launch edirik və inkişafda yanınızda qalırıq." },
];

export const TRUST_POINTS = [
  "100% Halal-Compliant Layihə Siyasəti",
  "Strategiyadan Production-a Tək Komanda",
  "7 Gündə İlk Konsept",
];

export const FAQ_ITEMS = [
  {
    question: "AI vizualları həqiqi/keyfiyyətli görünürmü?",
    answer:
      "Bəli, hər çıxış brend rəhbərliyinə uyğun kalibrlənir və ekspert tərəfindən yoxlanılır. Portfolio-da nümunələrə baxa bilərsiniz.",
  },
  {
    question: "Niyə freelancer-dən bahasınız?",
    answer:
      "Freelancer tək bacarıq satır, biz strategiya, icra və dəstəyi bir komandada, ölçülə bilən nəticə ilə təqdim edirik.",
  },
  {
    question: "Halal/etik siyasətiniz nəyi əhatə edir?",
    answer:
      "Gambling, adult məzmun, fırıldaqçılıq və manipulyativ layihələri qəbul etmirik. Qalan hər sağlam biznes sahəsi ilə işləyirik.",
  },
  {
    question: "Yalnız müsəlman brendlərlə işləyirsiniz?",
    answer:
      "Xeyr. Prinsipimiz dini deyil, etikdir — istənilən sağlam, şəffaf biznesi məmnuniyyətlə qəbul edirik.",
  },
  {
    question: "Layihə nə qədər çəkir?",
    answer:
      "Həcmdən asılı olaraq ilk konsept 7 gün ərzində, tam təhvil layihənin miqyasına görə dəyişir — konsultasiyada dəqiq müddət veririk.",
  },
  {
    question: "Kiçik büdcəm var, işləyə bilərikmi?",
    answer: "Bəli, səviyyəli paketlərimiz var; ehtiyacınıza uyğun başlanğıc nöqtəsini birlikdə tapırıq.",
  },
  {
    question: "Təhvildən sonra dəstək varmı?",
    answer: "Bəli, launch sonrası dəstək və inkişaf paketləri mövcuddur.",
  },
];

export interface PortfolioItem {
  slug: string;
  category: "web-development" | "branding" | "ai-generation";
  categoryLabel: string;
  industry: string;
  problem: string;
  solution: string;
  result: string;
}

// PLACEHOLDER — real layihələr tamamlandıqca əvəz olunmalıdır.
export const PORTFOLIO_PLACEHOLDER: PortfolioItem[] = [
  {
    slug: "nümunə-1",
    category: "web-development",
    categoryLabel: "Veb Development",
    industry: "E-ticarət",
    problem: "Köhnəlmiş sayt, aşağı konversiya",
    solution: "Next.js əsaslı yenidən qurma + UX audit",
    result: "Nümunə struktur — real nəticə əlavə ediləcək",
  },
  {
    slug: "nümunə-2",
    category: "branding",
    categoryLabel: "Brendinq",
    industry: "Halal Qida",
    problem: "Tutarsız vizual kimlik",
    solution: "Tam brend sistemi + loqo",
    result: "Nümunə struktur — real nəticə əlavə ediləcək",
  },
  {
    slug: "nümunə-3",
    category: "ai-generation",
    categoryLabel: "AI Generasiya",
    industry: "Pərakəndə",
    problem: "Məhsul fotoqrafiyası büdcəsi məhdud",
    solution: "AI-əsaslı məhsul vizualları",
    result: "Nümunə struktur — real nəticə əlavə ediləcək",
  },
];
