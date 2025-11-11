"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { CheckCircle2, TrendingUp, Users, BarChart3, Zap } from "lucide-react";

export default function RestaurantsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section id="hero" className="hero-full flex items-center">
        <div className="container-outer w-full py-10 md:py-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Texto */}
            <div>
              <h1 className="text-white">Elegir bien, siempre.</h1>
              <p className="mt-4 text-white/85 max-w-xl">
                Gulanity conecta restaurantes y foodies para que lo que esperas sea exactamente lo que encuentras.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#lista-espera" className="btn btn-md btn-outline">Reservar una demo</a>
                <a href="mailto:hola@gulanity.com" className="btn btn-md btn-gold">Contactar por email</a>
              </div>
            </div>

            {/* Imagen */}
            <figure className="relative w-full max-w-md md:max-w-none mx-auto">
              <img
                src="/hero-restaurants.png"
                alt="Gulanity para restaurantes"
                className="w-full h-auto object-contain"
                loading="eager"
              />
            </figure>
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
      <section id="impacto" className="section-gap bg-white">
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
      <section id="como-funciona" className="section-gap bg-gray-50">
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
                <h3 className="text-[#052838] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="section-gap bg-white">
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
      <section id="lista-espera" className="section-gap bg-gray-50">
        <div className="container-outer max-w-3xl text-center">
          <h2 className="text-[#052838] mb-3">
            Únete a la lista de espera
          </h2>
          <p className="text-base text-gray-600 mb-10">
            Forma parte del futuro de la gastronomía.
          </p>

          <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-10">
            <p className="text-gray-600 mb-6 text-sm">
              Formulario de registro próximamente disponible.
            </p>
            <a
              href="mailto:hola@gulanity.com"
              className="btn btn-md btn-gold inline-flex"
            >
              Contactar por email
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
