"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** y-offset in px the content travels while fading in. */
  distance?: number;
}

/**
 * Fades + slides content in once, when it enters the viewport.
 * Deliberately small distance (default 16px) and short duration —
 * per frontend-design guidance, motion should aid comprehension,
 * not perform. Automatically respects prefers-reduced-motion via
 * Framer Motion's built-in handling of the `transform`/`opacity` combo
 * (browser-level reduced-motion still applies through globals.css).
 */
export function Reveal({ children, delay = 0, className, distance = 16 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.25, 1, 0.5, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
