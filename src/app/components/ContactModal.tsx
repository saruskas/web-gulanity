"use client";
import { useState, FormEvent } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { siteConfig } from "@/lib/config";
import { toast } from "sonner";
import { trackFormError, trackFormStart, trackFormSubmit } from "@/lib/track";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    trackFormStart("users_contact");
    setIsSubmitting(true);
    try {
      trackFormSubmit("users_contact", true, {
        email: formData.get("email") ?? undefined,
        name: formData.get("name") ?? undefined,
        message: formData.get("message") ?? undefined,
      });
      toast.success("¡Mensaje enviado! Te responderemos pronto.");
      event.currentTarget.reset();
      onOpenChange(false);
    } catch (error) {
      trackFormError("users_contact", (error as Error).message);
      toast.error("No se pudo enviar el mensaje. Inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md md:max-w-md lg:max-w-md xl:max-w-md fhd:max-w-md qhd:max-w-md">
        <SheetHeader>
          <SheetTitle className="text-[#052838]">Contacta con nosotros</SheetTitle>
          <SheetDescription>
            ¿Tienes alguna pregunta? Escríbenos y te responderemos lo antes posible.
          </SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-[#052838] mb-1">
              Nombre
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm text-[#052838] focus:outline-none focus:ring-2 focus:ring-[#F4BF00]/50 focus:border-[#F4BF00] transition-all"
              placeholder="Tu nombre"
              required
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium text-[#052838] mb-1">
              Email
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm text-[#052838] focus:outline-none focus:ring-2 focus:ring-[#F4BF00]/50 focus:border-[#F4BF00] transition-all"
              placeholder="tu@email.com"
              required
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium text-[#052838] mb-1">
              Mensaje
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm text-[#052838] focus:outline-none focus:ring-2 focus:ring-[#F4BF00]/50 focus:border-[#F4BF00] transition-all resize-none"
              placeholder="Tu mensaje..."
              required
            />
          </div>
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-md btn-yellow w-full"
            >
              {isSubmitting ? "Enviando..." : "Enviar mensaje"}
            </button>
          </div>
        </form>
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-2">O contáctanos directamente:</p>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="text-sm text-[#052838] hover:text-[#F4BF00] transition-colors"
          >
            {siteConfig.contact.email}
          </a>
          <p className="text-sm text-gray-600 mt-1">{siteConfig.contact.phoneFormatted}</p>
        </div>
      </SheetContent>
    </Sheet>
  );
}

