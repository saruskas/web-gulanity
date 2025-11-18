"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { toast } from "sonner";
import { siteConfig } from "@/lib/config";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const pathname = usePathname();

  const isUsers = pathname === "/users";

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 800));
      toast.success("¡Gracias! Te has suscrito.");
      setEmail("");
    } catch {
      toast.error("No se pudo procesar tu suscripción.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#052838] text-white">
      <div className="container-outer py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image src={isUsers ? "/logo_user.png" : "/logo_rest.png"} alt="Gulanity" width={120} height={32} className="h-4 w-auto mb-3" />
            <p className="text-white/70 text-sm">
              Conectamos restaurantes y foodies para que lo que esperas sea exactamente lo que encuentras.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-3">Producto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/restaurants" className="text-white/75 hover:text-white transition-colors">
                  Para Restaurantes
                </Link>
              </li>
              <li>
                <Link href="/users" className="text-white/75 hover:text-white transition-colors">
                  Para Usuarios
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={siteConfig.legal.privacy} className="text-white/75 hover:text-white transition-colors">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href={siteConfig.legal.terms} className="text-white/75 hover:text-white transition-colors">
                  Términos
                </Link>
              </li>
              <li>
                <Link href={siteConfig.legal.cookies} className="text-white/75 hover:text-white transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-3">Newsletter</h4>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <label htmlFor="footer-newsletter-email" className="sr-only">
                Email para newsletter
              </label>
              <input
                id="footer-newsletter-email"
                type="email"
                placeholder="Tu email"
                className="flex-1 px-3 py-2 rounded-md bg-white/5 border border-white/15 text-white placeholder-white/50 text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn btn-md ${isUsers ? "btn-yellow" : "btn-gold"}`}
              >
                Suscribirme
              </button>
            </form>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-block mt-3 text-white/80 hover:text-white text-sm transition-colors"
            >
              {siteConfig.contact.email}
            </a>
            <p className="mt-1 text-white/60 text-xs">{siteConfig.contact.phoneFormatted}</p>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-5 text-white/60 text-xs flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© 2025 Gulanity. Todos los derechos reservados.</span>
          <nav aria-label="Redes sociales">
            <ul className="flex items-center gap-4 text-sm">
              <li>
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
