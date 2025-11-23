"use client";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface PrivacyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function PrivacyModal({ open, onOpenChange }: PrivacyModalProps) {
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
            <h2 className="text-2xl font-bold text-[#052838]">Política de Privacidad</h2>
            <p className="text-sm text-gray-600 mt-1">
              Cómo recopilamos, usamos y protegemos su información personal.
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
              <h3 className="font-bold text-xl mb-2">1. Información que recopilamos</h3>
              <p className="text-[#052838]/80 leading-relaxed mb-3">
                Recopilamos información que usted nos proporciona directamente, incluyendo:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#052838]/80 ml-4">
                <li>Información de registro (nombre, email, contraseña)</li>
                <li>Información de perfil (preferencias alimentarias, dieta, ubicación)</li>
                <li>Contenido que publique (reseñas, fotos, comentarios)</li>
                <li>Información de contacto cuando se comunica con nosotros</li>
              </ul>
            </section>
            <section>
              <h3 className="font-bold text-xl mb-2">2. Cómo usamos su información</h3>
              <p className="text-[#052838]/80 leading-relaxed">
                Utilizamos la información recopilada para proporcionar, mantener y mejorar nuestros servicios, 
                personalizar su experiencia, procesar transacciones, enviar comunicaciones y cumplir con obligaciones legales.
              </p>
            </section>
            <section>
              <h3 className="font-bold text-xl mb-2">3. Compartir información</h3>
              <p className="text-[#052838]/80 leading-relaxed">
                No vendemos su información personal. Podemos compartir su información con proveedores de servicios 
                que nos ayudan a operar nuestra plataforma, con su consentimiento, o cuando sea requerido por ley.
              </p>
            </section>
            <section>
              <h3 className="font-bold text-xl mb-2">4. Seguridad de los datos</h3>
              <p className="text-[#052838]/80 leading-relaxed">
                Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información 
                personal contra acceso no autorizado, alteración, divulgación o destrucción.
              </p>
            </section>
            <section>
              <h3 className="font-bold text-xl mb-2">5. Sus derechos</h3>
              <p className="text-[#052838]/80 leading-relaxed mb-3">
                Usted tiene derecho a:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#052838]/80 ml-4">
                <li>Acceder a su información personal</li>
                <li>Rectificar información inexacta</li>
                <li>Solicitar la eliminación de sus datos</li>
                <li>Oponerse al procesamiento de sus datos</li>
                <li>Portabilidad de sus datos</li>
              </ul>
            </section>
            <section>
              <h3 className="font-bold text-xl mb-2">6. Cookies y tecnologías similares</h3>
              <p className="text-[#052838]/80 leading-relaxed">
                Utilizamos cookies y tecnologías similares para recopilar información sobre su uso del sitio web. 
                Puede gestionar sus preferencias de cookies a través de la configuración de su navegador.
              </p>
            </section>
            <section>
              <h3 className="font-bold text-xl mb-2">7. Retención de datos</h3>
              <p className="text-[#052838]/80 leading-relaxed">
                Conservamos su información personal durante el tiempo necesario para cumplir con los propósitos 
                descritos en esta política, a menos que la ley requiera o permita un período de retención más largo.
              </p>
            </section>
            <section>
              <h3 className="font-bold text-xl mb-2">8. Cambios a esta política</h3>
              <p className="text-[#052838]/80 leading-relaxed">
                Podemos actualizar esta política de privacidad ocasionalmente. Le notificaremos sobre cambios 
                significativos publicando la nueva política en esta página y actualizando la fecha de &quot;Última actualización&quot;.
              </p>
            </section>
            <section>
              <h3 className="font-bold text-xl mb-2">9. Contacto</h3>
              <p className="text-[#052838]/80 leading-relaxed">
                Si tiene preguntas sobre esta política de privacidad o sobre cómo manejamos su información, 
                puede contactarnos en{" "}
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

