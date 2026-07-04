"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const LINKS = [
  { href: "/", label: "Ana Səhifə" },
  { href: "/services", label: "Xidmətlər" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "Haqqımızda" },
  { href: "/faq", label: "FAQ" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 16);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile menü açıq olanda arxa fonu kilidlə
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Klaviatura fokusunu panel daxilində saxla (Tab/Shift+Tab dövrəsi),
  // Escape ilə bağla və fokusu toggle düyməsinə qaytar. Panel açılanda
  // fokusu avtomatik ilk keçidə köçürür.
  useEffect(() => {
    if (!mobileOpen) return;

    const panel = menuPanelRef.current;
    const focusables = panel?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])'
    );
    focusables?.[0]?.focus();

    function handleKeydown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMobileOpen(false);
        toggleButtonRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !focusables || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out-quart",
        scrolled
          ? "bg-white/85 shadow-card backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav className="container flex h-18 items-center justify-between" aria-label="Əsas naviqasiya">
        <Link href="/" className="flex items-center gap-2 font-mono text-lg font-bold tracking-tight text-navy-900">
          MIZAN<span className="text-gold-500">.tech</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href} className="relative">
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    isActive ? "text-navy-900" : "text-neutral-600 hover:text-navy-900"
                  )}
                >
                  {link.label}
                </Link>
                {isActive && (
                  <motion.span
                    layoutId="nav-active-indicator"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-gold-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <Link href="/contact">
            <Button size="sm">Konsultasiya Alın</Button>
          </Link>
        </div>

        <button
          ref={toggleButtonRef}
          type="button"
          className="p-2 text-navy-900 md:hidden"
          aria-label={mobileOpen ? "Menyunu bağla" : "Menyunu aç"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            ref={menuPanelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobil naviqasiya menyusu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="border-t border-neutral-200 bg-white px-6 py-4 shadow-card md:hidden"
          >
            <ul className="space-y-1">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "block rounded px-3 py-3 text-base font-medium",
                      pathname === link.href
                        ? "bg-navy-50 text-navy-900"
                        : "text-neutral-700 hover:bg-neutral-50"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="mt-3 block">
              <Button className="w-full">Konsultasiya Alın</Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
