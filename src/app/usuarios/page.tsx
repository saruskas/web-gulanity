import { Metadata } from "next";
import React, { Fragment } from "react";
import HeroUsers from "../components/HeroUsers";
import SaberMasUserSection from "../components/SaberMasUserSection";
import HomePageClient from "../components/HomePageClient";

export const metadata: Metadata = {
  title: "Descarga Gulanity – Platos ideales en segundos",
  description:
    "Filtra por plato, dieta, influencer. Confía en opiniones de amigos. Descarga gratis en iOS y Android y encuentra tu próximo restaurante favorito.",
  openGraph: {
    title: "Descarga Gulanity – Encuentra platos sin sorpresas",
    description:
      "Filtra por plato, dieta, influencer. Confía en opiniones de amigos. Descarga gratis en iOS y Android.",
    url: "https://gulanity.com/usuarios",
    siteName: "Gulanity",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://gulanity.com/usuarios",
  },
};

export default function UsuariosPage() {
  return (
    <div className="w-full">
      <HeroUsers />

      {/* Beneficios → Resultados */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-5xl px-6">
          <h2 className="text-3xl lg:text-4xl font-semibold text-[#052838] mb-12 text-center font-headings">
            ¿Por qué usar Gulanity?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: "🎯", title: "Filtros avanzados", desc: "Plato, dieta, influencer, servicio → Encuentra lo que buscas en segundos" },
              { icon: "👥", title: "Opiniones de confianza", desc: "Red de amigos e influencers → Pide sabiendo qué llegará a tu mesa" },
              { icon: "📋", title: "Cartas interactivas", desc: "Fotos, ingredientes, alérgenos → Cero sorpresas, máxima transparencia" },
              { icon: "⚡", title: "Rápido y gratis", desc: "Sin registro pesado → Descarga, explora y disfruta al instante" },
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-4">
                <span className="text-4xl" role="img" aria-label={item.title}>{item.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-[#052838] mb-2 font-headings">{item.title}</h3>
                  <p className="text-[#57636C] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomePageClient />

      <section id="como-funciona" className="py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#052838] mb-4 font-headings">
              Cómo funciona
            </h2>
            <p className="text-base lg:text-lg text-[#57636C] max-w-2xl mx-auto leading-relaxed">
              Tres pasos para disfrutar sin sorpresas
            </p>
          </div>

<div className="flex flex-col items-center lg:flex-row lg:items-start justify-center space-y-8 lg:space-y-0">
  {[
    {
      step: "1",
      title: "Explora",
      description: "Decenas de filtros para encontrar lo que buscas en segundos.",
      badges: ["influencer", "ingrediente", ">100"],
    },
    {
      step: "2",
      title: "Confía",
      description:
        "Elige con la garantía que te dan las opiniones de tus amigos e influencers. Pide sabiendo exactamente qué llegará a tu mesa.",
    },
    {
      step: "3",
      title: "Comparte",
      description: "Disfruta y compártelo en dos clics. Tus amigos y seguidores te lo agradecerán!",
    },
  ].map((item, idx) => (
    <Fragment key={idx}>
      {/* Paso */}
      <div className="flex flex-col items-center text-center max-w-sm">
        <div className="w-16 h-16 bg-[#FCDB7D] rounded-full flex items-center justify-center text-[#052838] font-bold text-xl mb-6 shadow-lg">
          {item.step}
        </div>
        <h3 className="text-2xl font-bold text-[#052838] mb-4 font-headings">
          {item.title}
        </h3>
        <p className="text-[#57636C] leading-relaxed mb-4">
          {item.description}
        </p>

        {/* Badges en Paso 1 */}
        {item.badges && (
          <div className="flex items-center space-x-2 mb-4">
            {item.badges.map((badge, i) => (
              <span
                key={i}
                className="flex items-center bg-gray-200 text-[#052838] text-xs font-medium px-3 py-1 rounded-full"
              >
                {/* Icono filtro */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 mr-1 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L14 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 018 21v-7.586L3.293 6.707A1 1 0 013 6V4z"
                  />
                </svg>
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Flecha centrada entre pasos */}
      {idx < 2 && (
        <div className="hidden lg:flex mx-8 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-[#052838]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </Fragment>
  ))}
</div>

        </div>
      </section>

      <SaberMasUserSection />

      <section id="newsletter" className="py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#052838] mb-6 font-headings">
              Mantente al día
            </h2>
            <p className="text-base lg:text-lg text-[#57636C] mb-8 leading-relaxed">
              Recibe en tu email las mejores ofertas y descubrimientos gastronómicos.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-6 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-accent text-lg"
                required
              />
              <button
                type="submit"
                className="bg-[#FCDB7D] hover:bg-[#052838] hover:text-[#FCDB7D] text-white font-medium py-4 px-8 rounded-lg transition duration-200"
              >
                Suscribirse
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              Sin spam. Date de baja cuando quieras.
            </p>
          </div>
        </div>
      </section>

      <section id="feedback" className="py-24 bg-gray-100">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#052838] mb-6 font-headings">
              Ayúdanos a mejorar
            </h2>
            <p className="text-base lg:text-lg text-[#57636C] mb-8 leading-relaxed">
              Tu opinión define nuestro rumbo. ¡Cuéntanos tus ideas!
            </p>
            <form className="space-y-6 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Tu email (opcional)"
                className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-accent text-lg"
              />
              <textarea
                placeholder="Tus sugerencias..."
                rows={6}
                className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-accent text-lg resize-none"
                required
              />
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
    </div>
  );
}
