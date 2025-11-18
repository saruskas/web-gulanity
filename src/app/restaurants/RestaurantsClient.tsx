"use client";

import { FormEvent } from "react";
import { trackFormError, trackFormStart, trackFormSubmit } from "@/lib/track";

export default function RestaurantsClient() {
  const handleWaitlist = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    trackFormStart("restaurants_waitlist");
    try {
      trackFormSubmit("restaurants_waitlist", true, { email: formData.get("email") ?? undefined });
      event.currentTarget.reset();
    } catch (error) {
      trackFormError("restaurants_waitlist", (error as Error).message);
    }
  };
  const handleFeedback = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    trackFormStart("restaurants_feedback");
    try {
      trackFormSubmit("restaurants_feedback", true, {
        email: formData.get("email") ?? undefined,
        name: formData.get("name") ?? undefined,
      });
      event.currentTarget.reset();
    } catch (error) {
      trackFormError("restaurants_feedback", (error as Error).message);
    }
  };
  return (
    <>
      <section id="lista-espera" className="section-gap bg-white">
        <div className="container-outer max-w-2xl">
          <h2 className="text-[#052838] text-center mb-2">Únete a la lista de espera</h2>
          <p className="text-sm text-gray-600 text-center mb-8">Forma parte del futuro de la gastronomía.</p>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleWaitlist}>
              <div className="flex-1">
                <label htmlFor="waitlist-email" className="sr-only">
                  Email para lista de espera
                </label>
                <input
                  type="email"
                  id="waitlist-email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm text-[#052838] focus:outline-none focus:ring-2 focus:ring-[#D4BFA6]/50 focus:border-[#D4BFA6] transition-all"
                  placeholder="tu@email.com"
                  required
                />
              </div>
              <button type="submit" className="btn btn-md btn-gold whitespace-nowrap">
                Unirme
              </button>
            </form>
          </div>
        </div>
      </section>
      <section id="feedback" className="section-gap bg-gray-50">
        <div className="container-outer max-w-2xl">
          <h2 className="text-[#052838] text-center mb-2">Feedback</h2>
          <p className="text-sm text-gray-600 text-center mb-8">Comparte tu opinión y ayúdanos a mejorar.</p>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
            <form className="space-y-4" onSubmit={handleFeedback}>
              <div>
                <label htmlFor="feedback-name" className="sr-only">
                  Nombre
                </label>
                <input
                  type="text"
                  id="feedback-name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm text-[#052838] focus:outline-none focus:ring-2 focus:ring-[#D4BFA6]/50 focus:border-[#D4BFA6] transition-all"
                  placeholder="Nombre"
                />
              </div>
              <div>
                <label htmlFor="feedback-email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="feedback-email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm text-[#052838] focus:outline-none focus:ring-2 focus:ring-[#D4BFA6]/50 focus:border-[#D4BFA6] transition-all"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="feedback-message" className="sr-only">
                  Mensaje
                </label>
                <textarea
                  id="feedback-message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm text-[#052838] focus:outline-none focus:ring-2 focus:ring-[#D4BFA6]/50 focus:border-[#D4BFA6] transition-all resize-none"
                  placeholder="Mensaje"
                />
              </div>
              <div className="text-center pt-2">
                <button type="submit" className="btn btn-md btn-gold inline-flex">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

