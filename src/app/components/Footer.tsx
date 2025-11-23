"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Twitter, Instagram, Facebook, MessageSquare, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/lib/config";
import CookiesModal from "./CookiesModal";
import TermsModal from "./TermsModal";
import PrivacyModal from "./PrivacyModal";
import ContactModal from "./ContactModal";

export default function Footer() {
  const pathname = usePathname();
  const [cookiesModalOpen, setCookiesModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const isUsers = pathname === "/users";

  const footerBgClass = isUsers ? "bg-[#f9fafb] text-[#052838]" : "bg-[#052838] text-white";
  return (
    <footer className={`${footerBgClass} backdrop-saturate-[140%] backdrop-blur-[6px]`}>
      <div className="container-outer pt-6 qhd:pt-5 pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 lg:gap-4 xl:gap-6">
          <div>
            <Image
              src={isUsers ? "/logo_user.png" : "/logo_rest.png"}
              alt="Gulanity"
              width={120}
              height={32}
              className="h-4 w-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.src.includes("logo_user.png")) {
                  target.src = "/logo_rest.png";
                }
              }}
            />
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-2">Producto</h4>
            <ul className="space-y-1.5 text-sm">
              <li>
                <Link href="/restaurants" className={isUsers ? "text-[#052838]/75 hover:text-[#052838] transition-colors" : "text-white/75 hover:text-white transition-colors"}>
                  Restaurantes
                </Link>
              </li>
              <li>
                <Link href="/users" className={isUsers ? "text-[#052838]/75 hover:text-[#052838] transition-colors" : "text-white/75 hover:text-white transition-colors"}>
                  Usuarios
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-2">Contacto</h4>
            <ul className="space-y-1.5 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className={`flex items-center gap-2 ${isUsers ? "text-[#052838]/75 hover:text-[#052838] transition-colors" : "text-white/75 hover:text-white transition-colors"}`}
                >
                  <Mail className="w-4 h-4" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className={`flex items-center gap-2 ${isUsers ? "text-[#052838]/75 hover:text-[#052838] transition-colors" : "text-white/75 hover:text-white transition-colors"}`}
                >
                  <Phone className="w-4 h-4" />
                  <span>{siteConfig.contact.phoneFormatted}</span>
                </a>
              </li>
              <li>
                <button
                  onClick={() => setContactModalOpen(true)}
                  className={`flex items-center gap-2 ${isUsers ? "text-[#052838]/75 hover:text-[#052838] transition-colors" : "text-white/75 hover:text-white transition-colors"}`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Feedback</span>
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-2 text-right">Síguenos</h4>
            <nav aria-label="Redes sociales">
              <ul className="flex items-center gap-4 justify-end">
                <li>
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={isUsers ? "text-[#052838]/60 hover:text-[#052838] transition-colors" : "text-white/60 hover:text-white transition-colors"}
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={isUsers ? "text-[#052838]/60 hover:text-[#052838] transition-colors" : "text-white/60 hover:text-white transition-colors"}
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={isUsers ? "text-[#052838]/60 hover:text-[#052838] transition-colors" : "text-white/60 hover:text-white transition-colors"}
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.social.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={isUsers ? "text-[#052838]/60 hover:text-[#052838] transition-colors" : "text-white/60 hover:text-white transition-colors"}
                    aria-label="TikTok"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className={`border-t mt-6 pt-4 text-xs flex flex-col sm:flex-row items-center justify-between gap-3 ${isUsers ? "border-[#052838]/10 text-[#052838]/60" : "border-white/10 text-white/60"}`}>
          <span>© 2025 Gulanity. Todos los derechos reservados.</span>
          <nav aria-label="Términos legales">
            <ul className="flex items-center gap-4">
              <li>
                <button
                  onClick={() => setPrivacyModalOpen(true)}
                  className={isUsers ? "text-[#052838]/60 hover:text-[#052838] transition-colors" : "text-white/60 hover:text-white transition-colors"}
                >
                  Privacidad
                </button>
              </li>
              <li>
                <button
                  onClick={() => setTermsModalOpen(true)}
                  className={isUsers ? "text-[#052838]/60 hover:text-[#052838] transition-colors" : "text-white/60 hover:text-white transition-colors"}
                >
                  Términos
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCookiesModalOpen(true)}
                  className={isUsers ? "text-[#052838]/60 hover:text-[#052838] transition-colors" : "text-white/60 hover:text-white transition-colors"}
                >
                  Cookies
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <CookiesModal open={cookiesModalOpen} onOpenChange={setCookiesModalOpen} />
      <TermsModal open={termsModalOpen} onOpenChange={setTermsModalOpen} />
      <PrivacyModal open={privacyModalOpen} onOpenChange={setPrivacyModalOpen} />
      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </footer>
  );
}
