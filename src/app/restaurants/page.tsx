"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroRestaurantsShowcase from "../components/HeroRestaurantsShowcase";
import { CheckCircle2, TrendingUp, Users, BarChart3, Zap, Sparkles, Target, Megaphone } from "lucide-react";

export default function RestaurantsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section id="hero" className="hero-full flex items-center">
        <div className="container-outer w-full py-10 md:py-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Columna izquierda: diseño centrado internamente */}
            <div className="justify-self-start">
              <div className="max-w-xl mx-0 md:mx-0 flex flex-col items-center text-center">
                {/* Toggle centrado */}
                <div className="mb-6">
                  <div className="inline-flex rounded-full p-1 bg-white/5 border border-white/10">
                    <a
                      href="/restaurants"
                      className="px-5 py-2 bg-[#D4BFA6] text-[#052838] rounded-full text-xs font-semibold transition-all"
                      aria-pressed="true"
                    >
                      Soy Restaurante
                    </a>
                    <a
                      href="/users"
                      className="px-5 py-2 text-white/85 hover:text-white rounded-full text-xs font-semibold transition-all"
                      aria-pressed="false"
                    >
                      Soy Usuario
                    </a>
                  </div>
                </div>

                {/* Title centrado (usa el scale global de h1) */}
                <h1 className="text-white font-display mb-4">
                  Elegir bien, siempre.
                  {/* Si lo quisieras “un punto” más grande, añade: md:text-6xl */}
                </h1>

                {/* Subtitle centrado */}
                <p className="text-white/70 leading-relaxed mb-8">
                  Gulanity conecta restaurantes y foodies para que lo que esperas sea
                  exactamente lo que encuentras.
                </p>

                {/* Botones centrados */}
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a href="#lista-espera" className="btn btn-md btn-gold">
                    Únete a la lista de espera
                  </a>
                  <a href="mailto:hola@gulanity.com" className="btn btn-md btn-outline">
                    Reserva una demo
                  </a>
                </div>
              </div>
            </div>

            {/* Columna derecha: Platform Mockup */}
            <div className="relative w-full max-w-md md:max-w-none mx-auto">
              <HeroRestaurantsShowcase />
            </div>
          </div>
        </div>
      </section>

      {/* Qué ganas */}
      <section id="que-ganas" className="section-gap bg-white">
        <div className="container-outer">
          <h2 className="text-[#052838] text-center mb-10 md:mb-12">Qué ganas</h2>

          <div className="grid gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: <TrendingUp className="w-6 h-6" />, title: "Más mesas ocupadas", desc: "Visibilidad por recomendaciones reales de foodies." },
              { icon: <Users className="w-6 h-6" />, title: "Clientes que repiten", desc: "Expectativa alineada con experiencia." },
              { icon: <BarChart3 className="w-6 h-6" />, title: "Datos que importan", desc: "Lo que convence a tus clientes, en números." },
              { icon: <Zap className="w-6 h-6" />, title: "Sin fricción", desc: "Integra tu carta y empieza en minutos." },
            ].map((item, i) => (
              <article key={i} className="card-compact hover:shadow-lg transition-all">
                <div className="mb-3 text-[#D4BFA6]">{item.icon}</div>
                <h4 className="text-[#052838] mb-2">{item.title}</h4>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios que se notan */}
      <section id="beneficios" className="section-gap bg-gray-50">
        <div className="container-outer">
          <h2 className="text-[#052838] text-center mb-2">Beneficios que se notan</h2>
          <p className="text-sm text-gray-500 text-center mb-10 md:mb-12">
            Datos orientativos basados en pruebas internas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { value: "+18%", label: "Ticket medio" },
              { value: "−27%", label: "Cancelaciones" },
              { value: "+22%", label: "Reservas cualificadas" },
            ].map((metric, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl md:text-6xl font-display font-bold text-[#D4BFA6] mb-3 metric">
                  {metric.value}
                </div>
                <p className="text-base text-[#052838]">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* El impacto en tu bolsillo */}
      <section id="impacto" className="section-gap bg-gray-50">
        <div className="container-outer max-w-4xl">
          <h2 className="text-[#052838] text-center mb-10 md:mb-12">
            El impacto en tu bolsillo
          </h2>

          <div className="bg-gradient-to-br from-[#D4BFA6]/10 to-transparent border border-[#D4BFA6]/20 rounded-3xl p-6 md:p-10">
            <div className="text-center mb-6">
              <p className="text-xl md:text-2xl font-display text-[#052838] leading-relaxed">
                Más visibilidad cualificada → más ocupación → más ingresos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {[
                "Control de campañas con foodies",
                "Enfoque en platos estrella",
                "Optimización de turnos",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D4BFA6] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section id="como-funciona" className="section-gap bg-white">
        <div className="container-outer">
          <h2 className="text-[#052838] text-center mb-10 md:mb-12">
            Cómo funciona
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { num: "1", title: "Date de alta", desc: "Date de alta en Gulanity Platform." },
              { num: "2", title: "Publica tu carta", desc: "Publica tu carta y activa tus objetivos." },
              { num: "3", title: "Conecta y mide", desc: "Conecta con foodies y mide resultados." },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-[#D4BFA6] text-[#052838] w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg mb-4">
                  {step.num}
                </div>
                <h3 className="text-[#052838] mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="section-gap bg-gray-50">
        <div className="container-outer max-w-3xl">
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-6 md:p-10">
            <p className="text-xl md:text-2xl font-display text-[#052838] mb-5 leading-relaxed">
              "Gulanity nos trae clientes que vienen a lo seguro. Se nota en caja."
            </p>
            <div>
              <p className="text-[#D4BFA6] font-semibold text-sm">Marta</p>
              <p className="text-gray-500 text-xs">Propietaria</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lista de espera */}
      <section id="lista-espera" className="section-gap bg-white">
        <div className="container-outer max-w-3xl text-center">
          <h2 className="text-[#052838] mb-3">Únete a la lista de espera</h2>
          <p className="text-base text-gray-600 mb-10">
            Forma parte del futuro de la gastronomía.
          </p>

          <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-10">
            <p className="text-gray-600 mb-6 text-sm">
              Formulario de registro próximamente disponible.
            </p>
            <a href="mailto:hola@gulanity.com" className="btn btn-md btn-gold inline-flex">
              Contactar por email
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
