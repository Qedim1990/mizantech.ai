import type { Config } from "tailwindcss";

// MIZAN.tech design tokens — sourced from Phase 5 (Dizayn Sistemi).
// Palette is hand-authored (not algorithmically generated) around two
// anchors: navy-900 (#1B2A4A, trust/technology) and gold-500 (#C9A227,
// premium/precision) — together encoding "mizan" (balance) between the two.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1440px" },
    },
    extend: {
      colors: {
        navy: {
          950: "#0D1526",
          900: "#1B2A4A", // primary base
          800: "#233657",
          700: "#2E4470",
          600: "#3D5990",
          500: "#5170A8",
          400: "#7C93BF",
          300: "#A8B9D6",
          200: "#CFD8E9",
          100: "#E5EAF3",
          50: "#F3F5FA",
        },
        gold: {
          900: "#5C4A15",
          800: "#7A611B",
          700: "#997A21",
          600: "#B08B26",
          500: "#C9A227", // accent base
          400: "#D6B655",
          300: "#E2C982", // use for small text on navy — meets AA
          200: "#EEDDAE",
          100: "#F7EFD9",
          50: "#FCFAF0",
        },
        neutral: {
          950: "#14161C",
          900: "#1C1F28",
          800: "#2A2E3A",
          700: "#3D4250",
          600: "#565C6D",
          500: "#767C8C",
          400: "#9BA0AD",
          300: "#C2C5CE",
          200: "#DEE0E5",
          100: "#EEEFF2",
          50: "#F8F8FA",
        },
        success: { DEFAULT: "#2F8A5B", bg: "#EAF6EF" },
        error: { DEFAULT: "#C4432E", bg: "#FBEBE7" },
        warning: { DEFAULT: "#B08B26", bg: "#FCF6E8" },
      },
      fontFamily: {
        // Manrope: distinctive geometric grotesk for display + body (one
        // family, differentiated by weight/tracking — deliberate choice,
        // see design-notes in globals.css re: font-family fallback chain).
        sans: ["var(--font-manrope)", "Noto Sans", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        // 1.25 modular scale, base 16px
        xs: ["0.8rem", { lineHeight: "1.5" }],
        sm: ["0.9rem", { lineHeight: "1.55" }],
        base: ["1rem", { lineHeight: "1.6" }],
        lg: ["1.25rem", { lineHeight: "1.55" }],
        xl: ["1.563rem", { lineHeight: "1.4" }],
        "2xl": ["1.953rem", { lineHeight: "1.3" }],
        "3xl": ["2.441rem", { lineHeight: "1.2" }],
        "4xl": ["3.052rem", { lineHeight: "1.12" }],
        "5xl": ["3.815rem", { lineHeight: "1.08" }],
        "6xl": ["4.768rem", { lineHeight: "1.02" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      borderRadius: {
        sm: "6px",
        DEFAULT: "10px",
        md: "12px",
        lg: "16px",
        xl: "22px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(13,21,38,0.04), 0 8px 24px -8px rgba(13,21,38,0.12)",
        "card-hover": "0 4px 12px rgba(13,21,38,0.08), 0 20px 40px -12px rgba(13,21,38,0.18)",
        "gold-glow": "0 0 0 1px rgba(201,162,39,0.25), 0 8px 30px -4px rgba(201,162,39,0.25)",
      },
      transitionTimingFunction: {
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        shimmer: "shimmer 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
