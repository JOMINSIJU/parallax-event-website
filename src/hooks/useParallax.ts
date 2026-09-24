"use client";

import { useEffect, useState, useCallback } from "react";
import { useReducedMotion } from "./useReducedMotion";

/**
 * Custom hook for parallax scroll effects.
 * Returns the current scroll position and a function to calculate
 * parallax offset for a given speed factor.
 *
 * Automatically disables when user prefers reduced motion.
 */
export function useParallax() {
  const [scrollY, setScrollY] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prefersReducedMotion]);

  const getParallaxOffset = useCallback(
    (speed: number = 0.5): number => {
      if (prefersReducedMotion) return 0;
      return scrollY * speed;
    },
    [scrollY, prefersReducedMotion]
  );

  return {
    scrollY,
    getParallaxOffset,
    isEnabled: !prefersReducedMotion,
  };
}
