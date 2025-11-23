"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BookOpen, LogIn } from "lucide-react";
import { useScrolled } from "@/app/hooks/useScrolled";
import { useFocusTrap } from "@/app/hooks/useFocusTrap";
import ContactModal from "./ContactModal";

type HeaderProps = {
  loginUrl?: string;
};

export default function Header({ loginUrl }: HeaderProps = {}) {
  const scrolled = useScrolled(2);
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const isRestaurants = pathname === "/restaurants";
  const isUsers = pathname === "/users";
  const restaurantsNavLinks = [
    { label: "Contacto", href: "#contacto", mode: "modal" as const },
  ];

  const usersNavLinks = [
    { label: "Contacto", href: "#contacto", mode: "modal" as const },
  ];

  const landingNavLinks = [
    { label: "Hero", href: "#hero", mode: "anchor" as const },
    { label: "Blog", href: "/blog", mode: "route" as const },
  ];

  const navLinks = isRestaurants ? restaurantsNavLinks : isUsers ? usersNavLinks : landingNavLinks;
  const logoDimensions = (isRestaurants || isUsers) ? { width: 240, height: 38 } : { width: 194, height: 30 };
  const logoSizes = (isRestaurants || isUsers) ? "(max-width: 640px) 192px, 240px" : "(max-width: 640px) 155px, 194px";
  const logoClass = (isRestaurants || isUsers) ? "h-[38px] w-auto" : "h-[30px] w-auto";

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

  useFocusTrap(panelRef, menuOpen);

  const handleMenuClick = (href: string) => {
    setMenuOpen(false);
    const isHash = href.startsWith("#");
    setTimeout(() => {
      if (isHash) {
        const targetId = href.slice(1);
        const element = targetId ? document.getElementById(targetId) : null;
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          window.location.hash = href;
          return;
        }
        router.push(`/${href}`);
        return;
      }
      router.push(href);
    }, 120);
  };

  return (
    <header className={`app-header ${scrolled ? "app-header-border" : ""} ${isUsers ? "app-header-white" : ""}`}>
      <div className="container-outer h-full">
        <div className="h-full flex items-center justify-between gap-3 py-3">
          {/* Logo compacto */}
          <Link href="/" className="flex items-center gap-2" aria-label="Gulanity">
            <Image
              src={isUsers ? "/logo_user.png" : "/logo_rest.png"}
              alt="Gulanity"
              width={logoDimensions.width}
              height={logoDimensions.height}
              quality={100}
              sizes={logoSizes}
              className={`${logoClass} object-contain`}
              priority
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.src.includes("logo_user.png")) {
                  target.src = "/logo_rest.png";
                }
              }}
            />
          </Link>

          {/* Derecha: Menú + Toggle */}
          <div className="flex items-center gap-3 relative">
            {/* Botón menú hamburguesa */}
            <button
              ref={buttonRef}
              onClick={() => setMenuOpen((v) => !v)}
              className={`p-2 transition-colors ${isUsers ? "text-[#052838]/80 hover:text-[#052838]" : "text-white/80 hover:text-white"}`}
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
                className={`absolute top-full right-0 mt-2 w-56 rounded-xl shadow-xl z-[110] overflow-hidden ${isUsers ? "bg-white border border-[#052838]/10" : "bg-[#052838] border border-white/10"}`}
              >
                <nav className="py-2" aria-label="Navegación principal">
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
                            className={`block px-4 py-2.5 text-[13px] transition-colors ${isUsers ? "text-[#052838]/85 hover:text-[#052838] hover:bg-[#052838]/5" : "text-white/85 hover:text-white hover:bg-white/5"}`}
                          >
                            {link.label}
                          </a>
                        ) : link.mode === "modal" ? (
                          <button
                            onClick={() => {
                              setMenuOpen(false);
                              setContactModalOpen(true);
                            }}
                            className={`block w-full text-left px-4 py-2.5 text-[13px] transition-colors ${isUsers ? "text-[#052838]/85 hover:text-[#052838] hover:bg-[#052838]/5" : "text-white/85 hover:text-white hover:bg-white/5"}`}
                          >
                            {link.label}
                          </button>
                        ) : (
                          <Link
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className={`block px-4 py-2.5 text-[13px] transition-colors ${isUsers ? "text-[#052838]/85 hover:text-[#052838] hover:bg-[#052838]/5" : "text-white/85 hover:text-white hover:bg-white/5"}`}
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

            {/* Toggle - solo visible al hacer scroll */}
            {scrolled && (
              <nav aria-label="Selector de vista" className="shrink-0">
                <div className={`inline-flex rounded-full p-0.5 ${isUsers ? "bg-[#052838]/5 border border-[#052838]/10" : "bg-white/5 border border-white/10"}`}>
                  <Link
                    href="/restaurants"
                    className={`px-3.5 py-1.5 rounded-full text-[11.5px] font-semibold transition-all ${
                      isRestaurants ? "bg-[#D4BFA6] text-[#052838]" : isUsers ? "text-[#052838]/85 hover:text-[#052838]" : "text-white/85 hover:text-white"
                    }`}
                    aria-current={isRestaurants ? "page" : undefined}
                  >
                    Restaurantes
                  </Link>
                  <Link
                    href="/users"
                    className={`px-3.5 py-1.5 rounded-full text-[11.5px] font-semibold transition-all ${
                      isUsers ? "bg-[#F4BF00] text-[#052838]" : "text-white/85 hover:text-white"
                    }`}
                    aria-current={isUsers ? "page" : undefined}
                  >
                    Usuarios
                  </Link>
                </div>
              </nav>
            )}

            {/* Link directo al blog */}
            <Link
              href="/blog"
              className={`hidden sm:inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${isUsers ? "border border-[#052838]/15 text-[#052838]/85 hover:bg-[#052838]/10 hover:text-[#052838]" : "border border-white/15 text-white/85 hover:bg-white/10 hover:text-white"}`}
            >
              <BookOpen className="w-4 h-4" />
              Blog
            </Link>

            {/* Botón Login - solo en restaurantes */}
            {isRestaurants && loginUrl && (
              <a
                href={loginUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all border border-white/15 text-white/85 hover:bg-white/10 hover:text-white"
              >
                <LogIn className="w-4 h-4" />
                Login
              </a>
            )}
          </div>
        </div>
      </div>
      {(isUsers || isRestaurants) && <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />}
    </header>
  );
}
