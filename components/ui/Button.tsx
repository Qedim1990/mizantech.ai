"use client";

import { forwardRef, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  /** Disables the magnetic cursor-follow effect (used automatically when reduced-motion is on). */
  magnetic?: boolean;
}

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    "bg-gold-500 text-navy-900 shadow-card hover:bg-gold-400 hover:shadow-gold-glow active:bg-gold-600",
  secondary:
    "bg-navy-900 text-white shadow-card hover:bg-navy-800 active:bg-navy-950",
  ghost:
    "bg-transparent text-navy-900 border border-navy-200 hover:border-navy-400 hover:bg-navy-50 active:bg-navy-100",
};

const SIZE_STYLES: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm gap-1.5",
  md: "h-12 px-6 text-base gap-2",
  lg: "h-14 px-8 text-lg gap-2.5",
};

/**
 * Tactile CTA button. Primary variant has a subtle "magnetic" pull toward
 * the cursor within its bounds — a small, intentional micro-interaction
 * (not decoration): it makes the highest-intent action feel responsive.
 * Fully disabled under prefers-reduced-motion.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      magnetic = true,
      disabled,
      className,
      children,
      onMouseMove,
      onMouseLeave,
      ...props
    },
    ref
  ) => {
    const innerRef = useRef<HTMLButtonElement | null>(null);
    const prefersReducedMotion = useReducedMotion();
    const enableMagnetic = magnetic && variant === "primary" && !prefersReducedMotion;

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.5 });
    const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.5 });

    function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
      if (enableMagnetic && innerRef.current) {
        const rect = innerRef.current.getBoundingClientRect();
        const relX = e.clientX - (rect.left + rect.width / 2);
        const relY = e.clientY - (rect.top + rect.height / 2);
        x.set(relX * 0.25);
        y.set(relY * 0.4);
      }
      onMouseMove?.(e);
    }

    function handleMouseLeave(e: React.MouseEvent<HTMLButtonElement>) {
      x.set(0);
      y.set(0);
      onMouseLeave?.(e);
    }

    return (
      <motion.button
        ref={(node) => {
          innerRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        style={enableMagnetic ? { x: springX, y: springY } : undefined}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileTap={disabled || loading ? undefined : { scale: 0.97 }}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        className={cn(
          "inline-flex items-center justify-center rounded font-semibold",
          "transition-colors duration-200 ease-out-quart",
          "disabled:opacity-50 disabled:pointer-events-none disabled:shadow-none",
          VARIANT_STYLES[variant],
          SIZE_STYLES[size],
          className
        )}
        {...props}
      >
        {loading ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            <span>Göndərilir...</span>
          </>
        ) : (
          children
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
