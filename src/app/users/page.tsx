"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { CheckCircle2, Heart, Sparkles, Shield, Star } from "lucide-react";

export default function UsersPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section (Users) */}
      <section id="hero" className="hero-full flex items-center">
        <div className="container-outer w-full py-10 md:py-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              {/* Toggle en el hero */}
              <div className="mb-5">
                <div className="inline-flex rounded-full p-1 bg-white/5 border border-white/10">
                  <a
                    href="/restaurants"
                    className="px-4 py-1.5 text-white/85 hover:text-white rounded-full text-xs font-semibold transition-all"
                    aria-pressed="false"
                  >
                    Soy Restaurante
                  </a>
                  <a
                    href="/users"
                    className="px-4 py-1.5 bg-[#F4BF00] text-[#052838] rounded-full text-xs font-semibold transition-all"
                    aria-pressed="true"
                  >
                    Soy Usuario
                  </a>
                </div>
              </div>

              <h1 className="text-white font-display mb-4">
                Elegir bien, siempre.
              </h1>

              <p className="text-white/70 max-w-xl mb-7 leading-relaxed">
                Encuentra platos y restaurantes que encajan contigo gracias a recomendaciones reales.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a href="#lista-espera" className="btn btn-md btn-yellow">
                  Únete a la lista de espera
                </a>
                <a href="#que-ganas" className="btn btn-md btn-outline">
                  Saber más
                </a>
              </div>
            </div>

            <figure className="relative w-full max-w-md md:max-w-none mx-auto">
              <img
                src="/hero-users.png"
                alt="Gulanity para usuarios"
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
              { icon: <Heart className="w-6 h-6" />, title: "Experiencias auténticas", desc: "Descubre lugares recomendados por personas reales." },
              { icon: <Sparkles className="w-6 h-6" />, title: "Encuentra tu match", desc: "Filtros que van más allá del rating." },
              { icon: <Shield className="w-6 h-6" />, title: "Sin sorpresas", desc: "Lo que ves es lo que encuentras." },
              { icon: <Star className="w-6 h-6" />, title: "Súper fácil", desc: "Busca, reserva y disfruta en segundos." },
            ].map((item, i) => (
              <article key={i} className="card-compact hover:shadow-lg transition-all">
                <div className="mb-3 text-[#F4BF00]">{item.icon}</div>
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
          <h2 className="text-[#052838] text-center mb-2">La diferencia es clara</h2>
          <p className="text-sm text-gray-500 text-center mb-10 md:mb-12">
            Datos orientativos basados en pruebas internas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { value: "92%", label: "Satisfacción con la elección" },
              { value: "4.2x", label: "Más probabilidad de repetir" },
              { value: "−68%", label: "Decepciones evitadas" },
            ].map((metric, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl md:text-6xl font-display font-bold text-[#F4BF00] mb-3 metric">
                  {metric.value}
                </div>
                <p className="text-base text-[#052838]">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué es diferente */}
      <section id="impacto" className="section-gap bg-white">
        <div className="container-outer max-w-4xl">
          <h2 className="text-[#052838] text-center mb-10 md:mb-12">
            Por qué es diferente
          </h2>

          <div className="bg-gradient-to-br from-[#F4BF00]/10 to-transparent border border-[#F4BF00]/20 rounded-3xl p-6 md:p-10">
            <div className="text-center mb-6">
              <p className="text-xl md:text-2xl font-display text-[#052838] leading-relaxed">
                Recomendaciones reales → decisiones informadas → experiencias que coinciden
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {[
                "Foodies verificados que comparten tu gusto",
                "Filtros por preferencias, no solo ubicación",
                "Información clara antes de reservar",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F4BF00] flex-shrink-0 mt-0.5" />
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
              { num: "1", title: "Crea tu perfil", desc: "Dinos qué te gusta y qué buscas." },
              { num: "2", title: "Explora y descubre", desc: "Navega recomendaciones hechas para ti." },
              { num: "3", title: "Reserva y disfruta", desc: "Confirma tu mesa y vive la experiencia." },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-[#F4BF00] text-[#052838] w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg mb-4">
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
              "Encontré mi restaurante favorito gracias a Gulanity. Ahora sé que no me van a decepcionar."
            </p>
            <div>
              <p className="text-[#F4BF00] font-semibold text-sm">Laura</p>
              <p className="text-gray-500 text-xs">Foodie</p>
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
            Sé de los primeros en descubrir una nueva forma de elegir restaurante.
          </p>

          <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-10">
            <p className="text-gray-600 mb-6 text-sm">
              Formulario de registro próximamente disponible.
            </p>
            <a
              href="mailto:hola@gulanity.com"
              className="btn btn-md btn-yellow inline-flex"
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
