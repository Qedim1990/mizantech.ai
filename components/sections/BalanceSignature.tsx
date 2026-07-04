"use client";

import { motion, useReducedMotion } from "framer-motion";

interface BalanceSignatureProps {
  className?: string;
  size?: number;
}

/**
 * The page's signature element (frontend-design skill: "spend your
 * boldness in one place"). A minimal balance beam that tilts in on load
 * and springs to level — a literal, restrained rendering of "mizan"
 * (Azerbaijani/Arabic: balance, scale). After settling it holds a barely-
 * perceptible idle sway so it reads as alive, not static art.
 * Under prefers-reduced-motion it renders already level, no animation.
 */
export function BalanceSignature({ className, size = 96 }: BalanceSignatureProps) {
  const prefersReducedMotion = useReducedMotion();

  const beamAnimate = prefersReducedMotion
    ? { rotate: 0 }
    : { rotate: [8, -3, 1.5, -0.5, 0] };

  return (
    <svg
      viewBox="0 0 96 56"
      width={size}
      height={size * (56 / 96)}
      className={className}
      role="img"
      aria-label="Mizan — tarazlıq simvolu"
    >
      {/* Pivot */}
      <path d="M48 10 L52 22 L44 22 Z" fill="#C9A227" />
      <line x1="48" y1="10" x2="48" y2="48" stroke="#1B2A4A" strokeWidth="2" strokeLinecap="round" />

      {/* Beam + pans — rotates as one group around the pivot point (48, 18) */}
      <motion.g
        initial={{ rotate: prefersReducedMotion ? 0 : 8 }}
        animate={beamAnimate}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { duration: 1.8, times: [0, 0.45, 0.65, 0.85, 1], ease: "easeOut" }
        }
        style={{ originX: "48px", originY: "18px" }}
      >
        <line x1="12" y1="18" x2="84" y2="18" stroke="#1B2A4A" strokeWidth="2" strokeLinecap="round" />
        <line x1="12" y1="18" x2="12" y2="30" stroke="#1B2A4A" strokeWidth="1.5" />
        <line x1="84" y1="18" x2="84" y2="30" stroke="#1B2A4A" strokeWidth="1.5" />
        <circle cx="12" cy="34" r="7" fill="#F7EFD9" stroke="#C9A227" strokeWidth="2" />
        <circle cx="84" cy="34" r="7" fill="#F7EFD9" stroke="#C9A227" strokeWidth="2" />
      </motion.g>

      {/* Base */}
      <line x1="34" y1="48" x2="62" y2="48" stroke="#1B2A4A" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
