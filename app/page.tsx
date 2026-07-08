"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface TextScrambleProps {
  text: string;
  className?: string;
  /** Total scramble-to-resolve duration in ms. */
  duration?: number;
  /** Delay before the scramble starts, in ms — use to stagger after a parent Reveal settles. */
  delay?: number;
}

const SCRAMBLE_POOL =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZƏŞÇĞÖÜIİabcdefghijklmnopqrstuvwxyzəşçğöüı0123456789";

// Unicode-aware: treats Azerbaijani letters (ə, ş, ç, ğ, ö, ü, ı, İ) as
// ordinary letters, so only real letters/digits scramble — spaces, "&"
// and punctuation stay fixed and never get corrupted mid-animation.
function isScramblable(ch: string) {
  return /[\p{L}\p{N}]/u.test(ch);
}

/**
 * Reveals `text` by resolving it left-to-right out of random characters —
 * a restrained "decode" moment for short, punchy labels (step titles),
 * not for body copy. Triggers once on scroll-into-view; pairs with
 * <Reveal>, which handles the fade/slide of the surrounding container —
 * this component only owns the character animation.
 *
 * Accessibility: animated glyphs are aria-hidden; a sr-only span carries
 * the real text immediately, so screen readers never see the scramble.
 * Renders the plain final text with no animation under
 * prefers-reduced-motion.
 */
export function TextScramble({ text, className, duration = 900, delay = 0 }: TextScrambleProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (!isInView || prefersReducedMotion) {
      setDisplay(text);
      return;
    }

    const chars = Array.from(text);
    const staticMask = chars.map((ch) => !isScramblable(ch));
    const totalFrames = Math.max(1, Math.round((duration / 1000) * 60));

    let frame = 0;
    let rafId = 0;

    const startTimeout = setTimeout(() => {
      const tick = () => {
        const revealCount = Math.floor((frame / totalFrames) * chars.length);

        setDisplay(
          chars
            .map((ch, i) => {
              if (staticMask[i] || i < revealCount) return ch;
              return SCRAMBLE_POOL[Math.floor(Math.random() * SCRAMBLE_POOL.length)];
            })
            .join("")
        );

        frame++;
        if (frame <= totalFrames) {
          rafId = requestAnimationFrame(tick);
        } else {
          setDisplay(text); // lock to the exact source string, no drift
        }
      };
      rafId = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      cancelAnimationFrame(rafId);
    };
  }, [isInView, prefersReducedMotion, text, duration, delay]);

  return (
    <span ref={ref} className={className}>
      <span aria-hidden="true">{display}</span>
      <span className="sr-only">{text}</span>
    </span>
  );
}

  
