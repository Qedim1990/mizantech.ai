"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  /** Turns off the 3D tilt (e.g. for dense grids where it feels excessive). */
  tilt?: boolean;
}

const MAX_TILT_DEG = 6;

/**
 * Card with a subtle cursor-responsive tilt (rotateX/rotateY driven by
 * pointer position within the card bounds). Springs back to flat on
 * leave. This is the one "reacts intelligently to cursor movement"
 * element from the brief — kept restrained (6° max) so it reads as
 * premium physicality, not a gimmick. Disabled under reduced-motion.
 */
export function Card({ children, tilt = true, className, ...props }: CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const enableTilt = tilt && !prefersReducedMotion;

  const rawX = useMotionValue(0.5);
  const rawY = useMotionValue(0.5);
  const springX = useSpring(rawX, { stiffness: 250, damping: 25 });
  const springY = useSpring(rawY, { stiffness: 250, damping: 25 });

  const rotateX = useTransform(springY, [0, 1], [MAX_TILT_DEG, -MAX_TILT_DEG]);
  const rotateY = useTransform(springX, [0, 1], [-MAX_TILT_DEG, MAX_TILT_DEG]);
  const glowX = useTransform(springX, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(springY, [0, 1], ["0%", "100%"]);
  const glowBackground = useMotionTemplate`radial-gradient(240px circle at ${glowX} ${glowY}, rgba(201,162,39,0.10), transparent 70%)`;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!enableTilt || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    rawX.set((e.clientX - rect.left) / rect.width);
    rawY.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    rawX.set(0.5);
    rawY.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        enableTilt
          ? { rotateX, rotateY, transformPerspective: 800 }
          : undefined
      }
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={cn(
        "group relative overflow-hidden rounded-lg border border-neutral-200",
        "bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover",
        className
      )}
      {...props}
    >
      {enableTilt && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glowBackground }}
        />
      )}
      <div className="relative">{children}</div>
    </motion.div>
  );
}
