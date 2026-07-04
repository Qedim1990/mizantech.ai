"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import { PORTFOLIO_PLACEHOLDER, type PortfolioItem } from "@/lib/content";

const FILTERS: { label: string; value: PortfolioItem["category"] | "all" }[] = [
  { label: "Hamısı", value: "all" },
  { label: "Veb Development", value: "web-development" },
  { label: "Brendinq", value: "branding" },
  { label: "AI Generasiya", value: "ai-generation" },
];

export function PortfolioGrid() {
  const [active, setActive] = useState<(typeof FILTERS)[number]["value"]>("all");

  const items =
    active === "all"
      ? PORTFOLIO_PLACEHOLDER
      : PORTFOLIO_PLACEHOLDER.filter((item) => item.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Portfolio kateqoriyaları">
        {FILTERS.map((filter) => (
          <button
            key={filter.value}
            type="button"
            role="tab"
            aria-selected={active === filter.value}
            onClick={() => setActive(filter.value)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              active === filter.value
                ? "border-navy-900 bg-navy-900 text-white"
                : "border-neutral-300 text-neutral-600 hover:border-navy-400"
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {items.length === 0 ? (
        <p className="mt-12 text-neutral-600">
          Bu kateqoriyada hələ layihə yoxdur — tezliklə əlavə olunacaq.
        </p>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.slug} delay={i * 0.06}>
              <Card tilt={false} className="h-full">
                <span className="font-mono text-xs uppercase tracking-wider text-gold-800">
                  {item.categoryLabel}
                </span>
                <h3 className="mt-2 font-semibold text-navy-900">{item.industry}</h3>
                <dl className="mt-4 space-y-2 text-sm">
                  <div>
                    <dt className="text-neutral-600">Problem</dt>
                    <dd className="text-neutral-700">{item.problem}</dd>
                  </div>
                  <div>
                    <dt className="text-neutral-600">Həll</dt>
                    <dd className="text-neutral-700">{item.solution}</dd>
                  </div>
                </dl>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-navy-700">
                  Case Study-ə Bax <ArrowRight className="size-3.5" />
                </span>
              </Card>
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
