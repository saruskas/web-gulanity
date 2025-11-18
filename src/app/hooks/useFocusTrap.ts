"use client";

import { RefObject, useEffect } from "react";

const FOCUSABLE_SELECTORS =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

/**
 * Hook para mantener el foco atrapado dentro de un contenedor (modales, menús, sheets).
 * Mejora la accesibilidad asegurando que Tab/Shift+Tab no escapen mientras el overlay esté abierto.
 *
 * @param ref Referencia al contenedor que debe atrapar el foco
 * @param isActive Si el foco debe permanecer atrapado
 */
export function useFocusTrap<T extends HTMLElement>(ref: RefObject<T | null>, isActive: boolean) {
  useEffect(() => {
    if (!isActive) {
      return;
    }

    const element = ref.current;
    if (!element) {
      return;
    }

    const focusable = Array.from(element.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS)).filter(
      (node) => !node.hasAttribute("data-focus-ignore")
    );

    if (focusable.length === 0) {
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const previousActive = document.activeElement as HTMLElement | null;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab") {
        return;
      }

      if (event.shiftKey) {
        if (document.activeElement === first) {
          event.preventDefault();
          last.focus();
        }
      } else if (document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    // Dar focus al primer elemento interactivo al abrir
    window.requestAnimationFrame(() => first.focus());

    element.addEventListener("keydown", handleKeyDown);
    return () => {
      element.removeEventListener("keydown", handleKeyDown);
      previousActive?.focus?.();
    };
  }, [ref, isActive]);
}

