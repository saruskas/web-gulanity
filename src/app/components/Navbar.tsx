"use client";
import Image from "next/image";
import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { track } from "@/lib/track";
import { getAudience, setAudience, type Audience } from "@/lib/audience";
import { Menu } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [aud, setAud] = React.useState<Audience>("user");

  React.useEffect(() => {
    const saved = getAudience();
    if (saved) setAud(saved);
  }, []);

  React.useEffect(() => {
    if (pathname?.startsWith("/restaurantes")) setAud("restaurant");
    if (pathname?.startsWith("/usuarios")) setAud("user");
  }, [pathname]);

  function onSwitch(to: Audience) {
    const from = aud;
    setAud(to);
    setAudience(to);
    track("audience_switch_click", { from, to, path: pathname });
    router.push(to === "user" ? "/usuarios" : "/restaurantes");
  }

  return (
    <nav className="bg-[#052838]/95 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        <Link href="/" aria-label="Ir a la Home" className="flex items-center">
          <Image src="/logo.png" alt="Gulanity" width={140} height={40} className="h-8 w-auto" priority />
        </Link>

        {/* Desktop - Solo switcher */}
        <div className="hidden md:flex items-center">
          {/* Segmented control tipo "píldora" */}
          <div
            role="group"
            aria-label="Selector de audiencia"
            className="inline-flex rounded-full p-1 bg-white/10 border border-white/15 shadow-inner"
          >
            <Button
              variant="ghost"
              size="sm"
              aria-pressed={aud === "user"}
              aria-label="Ir a página de usuarios"
              className={`h-9 w-28 rounded-full text-sm transition
                ${aud === "user"
                  ? "bg-[var(--brand-gold)] text-[var(--brand-ink)] shadow-sm hover:bg-[var(--brand-gold)]"
                  : "text-white/80 hover:text-white hover:bg-transparent"}`}
              onClick={() => onSwitch("user")}
            >
              Usuario
            </Button>
            <Button
              variant="ghost"
              size="sm"
              aria-pressed={aud === "restaurant"}
              aria-label="Ir a página de restaurantes"
              className={`h-9 w-28 rounded-full text-sm transition
                ${aud === "restaurant"
                  ? "bg-[var(--brand-gold)] text-[var(--brand-ink)] shadow-sm hover:bg-[var(--brand-gold)]"
                  : "text-white/80 hover:text-white hover:bg-transparent"}`}
              onClick={() => onSwitch("restaurant")}
            >
              Restaurante
            </Button>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Abrir menú" className="text-white hover:text-[var(--brand-gold)]">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-[#0F1417] border-white/10">
              <SheetHeader>
                <SheetTitle className="text-white">Navegación</SheetTitle>
              </SheetHeader>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="text-sm mb-3 text-white/80">¿Qué buscas?</p>
                <div className="flex flex-col gap-2">
                  <Button
                    variant="ghost"
                    aria-label="Ir a página de usuarios"
                    className={`h-10 rounded-full justify-start
                      ${aud === "user"
                        ? "bg-[var(--brand-gold)] text-[var(--brand-ink)]"
                        : "text-white/80 hover:text-white hover:bg-transparent border border-white/15"}`}
                    onClick={() => onSwitch("user")}
                  >
                    Usuario
                  </Button>
                  <Button
                    variant="ghost"
                    aria-label="Ir a página de restaurantes"
                    className={`h-10 rounded-full justify-start
                      ${aud === "restaurant"
                        ? "bg-[var(--brand-gold)] text-[var(--brand-ink)]"
                        : "text-white/80 hover:text-white hover:bg-transparent border border-white/15"}`}
                    onClick={() => onSwitch("restaurant")}
                  >
                    Restaurante
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
