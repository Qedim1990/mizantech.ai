import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: "navy" | "gold" | "neutral";
}

const TONE_STYLES = {
  navy: "bg-navy-50 text-navy-700 border-navy-200",
  gold: "bg-gold-50 text-gold-800 border-gold-200",
  neutral: "bg-neutral-100 text-neutral-700 border-neutral-200",
};

export function Badge({ tone = "navy", className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1",
        "font-mono text-xs uppercase tracking-wider",
        TONE_STYLES[tone],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
