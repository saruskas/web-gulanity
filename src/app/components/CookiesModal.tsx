"use client";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface CookiesModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CookiesModal({ open, onOpenChange }: CookiesModalProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        onOpenChange(false);
      }
    };
    if (open) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open, onOpenChange]);
  if (!open) return null;
  const modalContent = (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
        aria-hidden="true"
      />
      <div
        className="relative bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-[#052838]">Política de Cookies</h2>
            <p className="text-sm text-gray-600 mt-1">
              Información sobre el uso de cookies en nuestro sitio web.
            </p>
          </div>
          <button
            onClick={() => onOpenChange(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5 text-[#052838]" />
          </button>
        </div>
        <div className="overflow-y-auto flex-1 p-6">
          <div className="space-y-6 text-sm text-[#052838]">
           <section>
             <h3 className="font-bold text-xl mb-2">¿Qué son las cookies?</h3>
            <p className="text-[#052838]/80 leading-relaxed">
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. 
              Nos ayudan a mejorar su experiencia de navegación y a proporcionar funcionalidades personalizadas.
            </p>
          </section>
           <section>
             <h3 className="font-bold text-xl mb-2">Tipos de cookies que utilizamos</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-base mb-1">Cookies esenciales</h4>
                <p className="text-[#052838]/80 leading-relaxed">
                  Estas cookies son necesarias para el funcionamiento del sitio web y no se pueden desactivar. 
                  Incluyen cookies de sesión y seguridad que permiten que el sitio funcione correctamente.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">Cookies de rendimiento</h4>
                <p className="text-[#052838]/80 leading-relaxed">
                  Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web recopilando 
                  información de forma anónima. Esto nos permite mejorar el rendimiento y la experiencia del usuario.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">Cookies de funcionalidad</h4>
                <p className="text-[#052838]/80 leading-relaxed">
                  Permiten que el sitio web recuerde las elecciones que hace (como su nombre de usuario, idioma o región) 
                  para proporcionar características mejoradas y más personalizadas.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">Cookies de marketing</h4>
                <p className="text-[#052838]/80 leading-relaxed">
                  Se utilizan para rastrear a los visitantes en diferentes sitios web con la intención de mostrar 
                  anuncios relevantes y atractivos para el usuario individual.
                </p>
              </div>
            </div>
          </section>
           <section>
             <h3 className="font-bold text-xl mb-2">Gestión de cookies</h3>
            <p className="text-[#052838]/80 leading-relaxed">
              Puede controlar y/o eliminar las cookies como desee. Puede eliminar todas las cookies que ya están en su 
              ordenador y puede configurar la mayoría de los navegadores para evitar que se coloquen. Sin embargo, si 
              hace esto, es posible que tenga que ajustar manualmente algunas preferencias cada vez que visite un sitio.
            </p>
          </section>
           <section>
             <h3 className="font-bold text-xl mb-2">Cookies de terceros</h3>
            <p className="text-[#052838]/80 leading-relaxed">
              Algunos de nuestros socios pueden establecer cookies en su dispositivo cuando visita nuestro sitio. 
              No tenemos control sobre estas cookies de terceros. Le recomendamos que consulte las políticas de 
              privacidad de estos terceros para obtener más información sobre sus cookies.
            </p>
          </section>
           <section>
             <h3 className="font-bold text-xl mb-2">Más información</h3>
            <p className="text-[#052838]/80 leading-relaxed">
              Si tiene alguna pregunta sobre nuestra política de cookies, puede contactarnos en{" "}
              <a href="mailto:contact@gulanity.com" className="text-[#F4BF00] hover:underline">
                contact@gulanity.com
              </a>
              .
            </p>
          </section>
          <section className="pt-4 border-t border-gray-200">
            <p className="text-xs text-[#052838]/60">
              Última actualización: {new Date().getFullYear()}
            </p>
          </section>
          </div>
        </div>
      </div>
    </div>
  );
  if (typeof window !== "undefined") {
    return createPortal(modalContent, document.body);
  }
  return null;
}

