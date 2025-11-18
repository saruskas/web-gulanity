"use client";

import { useScrollDepth } from "@/app/hooks/useScrollDepth";

type ScrollDepthTrackerProps = {
  page?: string;
};

/**
 * Componente auxiliar que registra profundidad de scroll usando `useScrollDepth`.
 * Útil para medir engagement en páginas específicas sin repetir lógica.
 */
export default function ScrollDepthTracker({ page }: ScrollDepthTrackerProps) {
  useScrollDepth(page);
  return null;
}

