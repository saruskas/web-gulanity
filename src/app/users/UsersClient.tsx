"use client";

import { FormEvent } from "react";
import { trackFormError, trackFormStart, trackFormSubmit } from "@/lib/track";

export default function UsersClient() {
  const handleNewsletter = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    trackFormStart("users_newsletter");
    try {
      trackFormSubmit("users_newsletter", true, { email: formData.get("email") ?? undefined });
      event.currentTarget.reset();
    } catch (error) {
      trackFormError("users_newsletter", (error as Error).message);
    }
  };
  const handleFeedback = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    trackFormStart("users_feedback");
    try {
      trackFormSubmit("users_feedback", true, { email: formData.get("email") ?? undefined });
      event.currentTarget.reset();
    } catch (error) {
      trackFormError("users_feedback", (error as Error).message);
    }
  };
  return (
    <>
      <section id="newsletter" className="section-gap bg-white">
        <div className="container-outer max-w-7xl px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#052838] mb-6 font-display">Mantente al día</h2>
            <p className="text-base lg:text-lg text-[#57636C] mb-8 leading-relaxed">
              Recibe en tu email las mejores ofertas y descubrimientos gastronómicos.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={handleNewsletter}>
              <div className="flex-1">
                <label htmlFor="users-newsletter-email" className="sr-only">
                  Email para recibir novedades
                </label>
                <input
                  id="users-newsletter-email"
                  name="email"
                  type="email"
                  placeholder="Tu email"
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-accent text-lg"
                  required
                />
              </div>
              <button type="submit" className="bg-[#FCDB7D] hover:bg-[#052838] hover:text-[#FCDB7D] text-white font-medium py-4 px-8 rounded-lg transition duration-200">
                Suscribirse
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4">Sin spam. Date de baja cuando quieras.</p>
          </div>
        </div>
      </section>

      <section id="feedback" className="section-gap bg-gray-100">
        <div className="container-outer max-w-7xl px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#052838] mb-6 font-display">Ayúdanos a mejorar</h2>
            <p className="text-base lg:text-lg text-[#57636C] mb-8 leading-relaxed">
              Tu opinión define nuestro rumbo. ¡Cuéntanos tus ideas!
            </p>
            <form className="space-y-6 max-w-2xl mx-auto" onSubmit={handleFeedback}>
              <div>
                <label htmlFor="users-feedback-email" className="sr-only">
                  Tu email
                </label>
                <input
                  id="users-feedback-email"
                  name="email"
                  type="email"
                  placeholder="Tu email (opcional)"
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-accent text-lg"
                />
              </div>
              <div>
                <label htmlFor="users-feedback-message" className="sr-only">
                  Tus sugerencias
                </label>
                <textarea
                  id="users-feedback-message"
                  name="message"
                  placeholder="Tus sugerencias..."
                  rows={6}
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-accent text-lg resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#FCDB7D] hover:bg-[#052838] hover:text-[#FCDB7D] text-white font-medium py-4 px-8 rounded-lg transition duration-200"
              >
                Enviar feedback
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

