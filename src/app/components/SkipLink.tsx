"use client";

import type { MouseEvent } from "react";

/**
 * Enlace "Saltar al contenido principal" para mejorar accesibilidad con teclado.
 * Permite a las personas que navegan con Tab omitir el header fijo e ir directo al contenido.
 */
export default function SkipLink() {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const main = document.getElementById("main-content");
    if (main) {
      main.focus();
      main.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a href="#main-content" className="skip-link" onClick={handleClick}>
      Saltar al contenido principal
    </a>
  );
}

