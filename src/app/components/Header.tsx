"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useScrolled } from "@/app/hooks/useScrolled";

export default function Header() {
  const scrolled = useScrolled(2);
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const isRestaurants = pathname === "/restaurants";
  const isUsers = pathname === "/users";

  const navLinks = isRestaurants
    ? [
        { label: "Inicio", href: "#hero", mode: "anchor" as const },
        { label: "Qué ganas", href: "#que-ganas", mode: "anchor" as const },
        { label: "Beneficios", href: "#beneficios", mode: "anchor" as const },
        { label: "Impacto", href: "#impacto", mode: "anchor" as const },
        { label: "Cómo funciona", href: "#como-funciona", mode: "anchor" as const },
        { label: "Lista de espera", href: "#lista-espera", mode: "anchor" as const },
        { label: "Feedback", href: "#feedback", mode: "anchor" as const },
        { label: "Blog", href: "/blog", mode: "route" as const },
      ]
    : isUsers
    ? [
        { label: "Inicio", href: "#hero", mode: "anchor" as const },
        { label: "Qué ganas", href: "#que-ganas", mode: "anchor" as const },
        { label: "Beneficios", href: "#beneficios", mode: "anchor" as const },
        { label: "Impacto", href: "#impacto", mode: "anchor" as const },
        { label: "Cómo funciona", href: "#como-funciona", mode: "anchor" as const },
        { label: "Lista de espera", href: "#lista-espera", mode: "anchor" as const },
        { label: "Feedback", href: "#feedback", mode: "anchor" as const },
        { label: "Blog", href: "/blog", mode: "route" as const },
      ]
    : [
        { label: "Inicio", href: "#hero", mode: "anchor" as const },
        { label: "Qué ganas", href: "#que-ganas", mode: "anchor" as const },
        { label: "Beneficios", href: "#beneficios", mode: "anchor" as const },
        { label: "Impacto", href: "#impacto", mode: "anchor" as const },
        { label: "Cómo funciona", href: "#como-funciona", mode: "anchor" as const },
        { label: "Lista de espera", href: "#lista-espera", mode: "anchor" as const },
        { label: "Blog", href: "/blog", mode: "route" as const },
      ];

  // Cerrar con clic/touch fuera y con Escape. Además, bloquear scroll cuando el menú está abierto.
  useEffect(() => {
    const handleOutside = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (
        menuOpen &&
        panelRef.current &&
        !panelRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setMenuOpen(false);
      }
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("mousedown", handleOutside, true);
    document.addEventListener("touchstart", handleOutside, true);
    document.addEventListener("keydown", onKey);

    // bloquea scroll de la página al abrir
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.removeEventListener("mousedown", handleOutside, true);
      document.removeEventListener("touchstart", handleOutside, true);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleMenuClick = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      window.location.hash = href;
    }, 120);
  };

  return (
    <header className={`app-header ${scrolled ? "app-header-border" : ""}`}>
      <div className="container-outer h-full">
        <div className="h-full flex items-center justify-between gap-3 py-3">
          {/* Logo compacto */}
          <Link
            href={isRestaurants ? "/restaurants" : "/users"}
            className="flex items-center gap-2"
            aria-label="Gulanity"
          >
            <img
              src={isUsers ? "/logo_user.png" : "/logo_rest.png"}
              alt="Gulanity"
              className="h-6 w-auto"
            />
          </Link>

          {/* Derecha: Menú + Toggle */}
          <div className="flex items-center gap-3 relative">
            {/* Botón menú hamburguesa */}
            <button
              ref={buttonRef}
              onClick={() => setMenuOpen((v) => !v)}
              className="p-2 text-white/80 hover:text-white transition-colors"
              aria-expanded={menuOpen}
              aria-haspopup="true"
              aria-label="Abrir menú"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Overlay para cerrar con tap/click fuera (por encima del header) */}
            {menuOpen && (
              <div
                className="fixed inset-0 z-[105]" // header es z-[100]; esto va por encima
                aria-hidden="true"
              />
            )}

            {/* Panel dropdown */}
            {menuOpen && (
              <div
                ref={panelRef}
                className="absolute top-full right-0 mt-2 w-56 bg-[#052838] border border-white/10 rounded-xl shadow-xl z-[110] overflow-hidden"
                role="menu"
                aria-label="Navegación principal"
              >
                <nav className="py-2">
                  <ul>
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        {link.mode === "anchor" ? (
                          <a
                            href={link.href}
                            onClick={(e) => {
                              e.preventDefault();
                              handleMenuClick(link.href);
                            }}
                            className="block px-4 py-2.5 text-[13px] text-white/85 hover:text-white hover:bg-white/5 transition-colors"
                            role="menuitem"
                          >
                            {link.label}
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="block px-4 py-2.5 text-[13px] text-white/85 hover:text-white hover:bg-white/5 transition-colors"
                            role="menuitem"
                          >
                            {link.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            )}

            {/* Link directo al blog */}
            <Link
              href="/blog"
              className="hidden sm:inline-flex items-center rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-semibold text-white/85 hover:bg-white/10 hover:text-white transition-all"
            >
              Blog
            </Link>

            {/* Toggle - solo visible al hacer scroll */}
            {scrolled && (
              <nav aria-label="Selector de vista" className="shrink-0">
                <div className="inline-flex rounded-full p-0.5 bg-white/5 border border-white/10">
                  <Link
                    href="/restaurants"
                    className={`px-3.5 py-1.5 rounded-full text-[11.5px] font-semibold transition-all ${
                      isRestaurants
                        ? "bg-[#D4BFA6] text-[#052838]"
                        : "text-white/85 hover:text-white"
                    }`}
                    aria-pressed={isRestaurants}
                  >
                    Restaurantes
                  </Link>
                  <Link
                    href="/users"
                    className={`px-3.5 py-1.5 rounded-full text-[11.5px] font-semibold transition-all ${
                      isUsers
                        ? "bg-[#F4BF00] text-[#052838]"
                        : "text-white/85 hover:text-white"
                    }`}
                    aria-pressed={isUsers}
                  >
                    Usuarios
                  </Link>
                </div>
              </nav>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
