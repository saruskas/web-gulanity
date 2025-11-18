"use client";

import { useEffect } from "react";
import { track, trackingEvents } from "@/lib/track";

/**
 * Trackea la profundidad de scroll alcanzada por la persona usuaria.
 * Emite eventos al 25/50/75/90/100% para medir engagement de lectura.
 *
 * @param page Identificador opcional de página (por defecto, `window.location.pathname`)
 */
export function useScrollDepth(page?: string) {
  useEffect(() => {
    const thresholds = [25, 50, 75, 90, 100];
    const triggered = new Set<number>();
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) {
        return;
      }
      const scrolled = (window.scrollY / scrollHeight) * 100;
      thresholds.forEach((threshold) => {
        if (scrolled >= threshold && !triggered.has(threshold)) {
          triggered.add(threshold);
          track(trackingEvents.SCROLL_DEPTH, {
            depth: threshold,
            page: page ?? window.location.pathname,
          });
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page]);
}

