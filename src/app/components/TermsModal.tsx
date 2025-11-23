"use client";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface TermsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function TermsModal({ open, onOpenChange }: TermsModalProps) {
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
            <h2 className="text-2xl font-bold text-[#052838]">Términos y Condiciones</h2>
            <p className="text-sm text-gray-600 mt-1">
              Condiciones de uso de nuestro servicio.
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
              <h3 className="font-bold text-xl mb-2">1. Aceptación de los términos</h3>
              <p className="text-[#052838]/80 leading-relaxed">
                Al acceder y utilizar este sitio web, acepta cumplir con estos términos y condiciones. 
                Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestro servicio.
              </p>
            </section>
            <section>
              <h3 className="font-bold text-xl mb-2">2. Uso del servicio</h3>
              <p className="text-[#052838]/80 leading-relaxed">
                Gulanity proporciona una plataforma que conecta restaurantes y usuarios. Usted se compromete a 
                utilizar el servicio de manera legal y de acuerdo con estos términos. No debe utilizar el servicio 
                para ningún propósito ilegal o no autorizado.
              </p>
            </section>
            <section>
              <h3 className="font-bold text-xl mb-2">3. Cuentas de usuario</h3>
              <p className="text-[#052838]/80 leading-relaxed">
                Es responsable de mantener la confidencialidad de su cuenta y contraseña. Usted acepta la responsabilidad 
                de todas las actividades que ocurran bajo su cuenta. Debe notificarnos inmediatamente de cualquier uso 
                no autorizado de su cuenta.
              </p>
            </section>
            <section>
              <h3 className="font-bold text-xl mb-2">4. Contenido del usuario</h3>
              <p className="text-[#052838]/80 leading-relaxed">
                Usted conserva todos los derechos sobre el contenido que publique en nuestra plataforma. Al publicar 
                contenido, nos otorga una licencia para usar, modificar y mostrar dicho contenido en relación con el servicio.
              </p>
            </section>
            <section>
              <h3 className="font-bold text-xl mb-2">5. Propiedad intelectual</h3>
              <p className="text-[#052838]/80 leading-relaxed">
                Todo el contenido del sitio web, incluyendo pero no limitado a textos, gráficos, logos, iconos, imágenes, 
                es propiedad de Gulanity o de sus proveedores de contenido y está protegido por las leyes de propiedad intelectual.
              </p>
            </section>
            <section>
              <h3 className="font-bold text-xl mb-2">6. Limitación de responsabilidad</h3>
              <p className="text-[#052838]/80 leading-relaxed">
                Gulanity no será responsable de ningún daño indirecto, incidental, especial o consecuente que resulte del uso 
                o la imposibilidad de usar el servicio. Nuestra responsabilidad total no excederá el monto que haya pagado 
                por el servicio en los últimos 12 meses.
              </p>
            </section>
            <section>
              <h3 className="font-bold text-xl mb-2">7. Modificaciones</h3>
              <p className="text-[#052838]/80 leading-relaxed">
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en 
                vigor inmediatamente después de su publicación en el sitio web. Su uso continuado del servicio después de 
                cualquier modificación constituye su aceptación de los nuevos términos.
              </p>
            </section>
            <section>
              <h3 className="font-bold text-xl mb-2">8. Contacto</h3>
              <p className="text-[#052838]/80 leading-relaxed">
                Si tiene alguna pregunta sobre estos términos y condiciones, puede contactarnos en{" "}
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

