import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/** Skeleton loading placeholder. Compose shapes with className (e.g. h-4 w-32, size-12 rounded-full). */
export function Skeleton({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="status"
      aria-label="Yüklənir"
      className={cn("bg-shimmer animate-shimmer rounded", className)}
      {...props}
    />
  );
}

/** Preset: skeleton for a Card-shaped block (used while portfolio/service data loads). */
export function CardSkeleton() {
  return (
    <div className="rounded-lg border border-neutral-200 p-6 shadow-card">
      <Skeleton className="mb-4 h-10 w-10 rounded-md" />
      <Skeleton className="mb-2 h-5 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="mt-1 h-4 w-5/6" />
    </div>
  );
}
