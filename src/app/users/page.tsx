"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroUserShowcase from "../components/HeroUserShowcase";
import { CheckCircle2, Heart, Sparkles, Shield, Star } from "lucide-react";

export default function UsersPage() {
  const [selectedPlatform, setSelectedPlatform] = useState<"ios" | "android">("ios");

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section (Users) */}
      <section id="hero" className="hero-full flex items-center" style={{ background: 'white' }}>
        <div className="container-outer w-full py-10 md:py-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Columna izquierda: diseño centrado internamente */}
            <div className="justify-self-start">
              <div className="max-w-xl mx-0 md:mx-0 flex flex-col items-center text-center">
                {/* Toggle centrado */}
                <div className="mb-6">
                  <div className="inline-flex rounded-full p-1 bg-gray-100 border border-gray-200">
                    <a
                      href="/restaurants"
                      className="px-5 py-2 text-[#052838]/70 hover:text-[#052838] rounded-full text-xs font-semibold transition-all"
                      aria-pressed="false"
                    >
                      Soy Restaurante
                    </a>
                    <a
                      href="/users"
                      className="px-5 py-2 bg-[#F4BF00] text-[#052838] rounded-full text-xs font-semibold transition-all"
                      aria-pressed="true"
                    >
                      Soy Usuario
                    </a>
                  </div>
                </div>

                {/* Title centrado */}
                <h1 className="text-[#052838] font-display mb-4">
                  Elegir bien, siempre.
                </h1>

                {/* Subtitle centrado */}
                <p className="text-[#052838]/70 leading-relaxed mb-8">
                  Encuentra platos y restaurantes que encajan contigo gracias a recomendaciones reales.
                </p>

                {/* Botones centrados */}
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a href="#que-ganas" className="btn btn-md btn-yellow">
                    Qué ganas
                  </a>
                  <a href="#impacto" className="btn btn-md border border-[#052838]/20 bg-white text-[#052838] hover:bg-gray-50">
                    Saber más
                  </a>
                </div>

                {/* Bloque de descarga con QR */}
                <div className="w-full max-w-xs mt-10">
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
                    <p className="text-[#052838] text-xs font-semibold mb-3 text-center">Descarga la app</p>

                    {/* Toggle iOS / Android */}
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <button
                        onClick={() => setSelectedPlatform("ios")}
                        className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                          selectedPlatform === "ios"
                            ? "bg-[#F4BF00] text-[#052838]"
                            : "bg-gray-200 text-[#052838]/70 hover:text-[#052838]"
                        }`}
                        aria-pressed={selectedPlatform === "ios"}
                      >
                        iOS
                      </button>
                      <button
                        onClick={() => setSelectedPlatform("android")}
                        className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                          selectedPlatform === "android"
                            ? "bg-[#F4BF00] text-[#052838]"
                            : "bg-gray-200 text-[#052838]/70 hover:text-[#052838]"
                        }`}
                        aria-pressed={selectedPlatform === "android"}
                      >
                        Android
                      </button>
                    </div>

                    {/* QR Code */}
                    <div className="flex justify-center">
                      <div className="bg-white rounded-lg p-2 w-24 h-24 flex items-center justify-center">
                        <img
                          src={selectedPlatform === "ios" ? "/qr-ios-mock.jpeg" : "/qr-android-mock.jpeg"}
                          alt={`QR code para descargar Gulanity en ${selectedPlatform === "ios" ? "iOS" : "Android"}`}
                          className="w-full h-full object-contain rounded"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna derecha: Mobile Mockup */}
            <div className="relative w-full max-w-md md:max-w-none mx-auto">
              <HeroUserShowcase />
            </div>
          </div>
        </div>
      </section>

      {/* Qué ganas */}
      <section id="que-ganas" className="section-gap bg-gray-50">
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
      <section id="beneficios" className="section-gap bg-white">
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
      <section id="impacto" className="section-gap bg-gray-50">
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
      <section id="como-funciona" className="section-gap bg-white">
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
      <section className="section-gap bg-gray-50">
        <div className="container-outer max-w-3xl">
          <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-10">
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
      <section id="lista-espera" className="section-gap bg-white">
        <div className="container-outer max-w-2xl">
          <h2 className="text-[#052838] text-center mb-2">Únete a la lista de espera</h2>
          <p className="text-sm text-gray-600 text-center mb-8">
            Sé de los primeros en descubrir una nueva forma de elegir restaurante.
          </p>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
            <form className="flex gap-3 justify-center" onSubmit={(e) => { e.preventDefault(); }}>
              <input
                type="email"
                id="waitlist-email"
                name="email"
                className="w-64 max-w-full px-4 py-2 border border-gray-200 rounded-lg text-sm text-[#052838] focus:outline-none focus:ring-2 focus:ring-[#F4BF00]/50 focus:border-[#F4BF00] transition-all"
                placeholder="tu@email.com"
                required
              />
              <button
                type="submit"
                className="btn btn-md btn-yellow whitespace-nowrap"
              >
                Unirme
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Feedback */}
      <section id="feedback" className="section-gap bg-gray-50">
        <div className="container-outer max-w-2xl">
          <h2 className="text-[#052838] text-center mb-2">Feedback</h2>
          <p className="text-sm text-gray-600 text-center mb-8">
            Comparte tu opinión y ayúdanos a mejorar.
          </p>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); }}>
              <div>
                <input
                  type="text"
                  id="feedback-name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm text-[#052838] focus:outline-none focus:ring-2 focus:ring-[#F4BF00]/50 focus:border-[#F4BF00] transition-all"
                  placeholder="Nombre"
                />
              </div>
              <div>
                <input
                  type="email"
                  id="feedback-email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm text-[#052838] focus:outline-none focus:ring-2 focus:ring-[#F4BF00]/50 focus:border-[#F4BF00] transition-all"
                  placeholder="Email"
                />
              </div>
              <div>
                <textarea
                  id="feedback-message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm text-[#052838] focus:outline-none focus:ring-2 focus:ring-[#F4BF00]/50 focus:border-[#F4BF00] transition-all resize-none"
                  placeholder="Mensaje"
                />
              </div>
              <div className="text-center pt-2">
                <button
                  type="submit"
                  className="btn btn-md btn-yellow inline-flex"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
