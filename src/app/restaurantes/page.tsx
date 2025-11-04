import { Metadata } from "next";
import React, { Fragment } from "react";
import SaberMasSection from "./SaberMasRestaurantSection";
import RestaurantFeatures from "../components/RestaurantFeatures";
import HeroRestaurants from "../components/HeroRestaurants";
import FAQAccordion from "../components/Marketing/FAQAccordion";
import { ImpactGrid } from "../components/Marketing/ImpactGrid";
import { BenefitsGrid } from "../components/Marketing/BenefitsGrid";

export const metadata: Metadata = {
  title: "Haz crecer tu restaurante sin comisiones – Gulanity",
  description:
    "Atrae clientes ideales, aumenta ticket medio y fideliza automáticamente. Sin comisiones. Empieza gratis hoy.",
  openGraph: {
    title: "Haz crecer tu restaurante sin comisiones – Gulanity",
    description: "Atrae clientes ideales, aumenta ticket medio y fideliza automáticamente. Sin comisiones. Empieza gratis hoy.",
    url: "https://gulanity.com/restaurantes",
    siteName: "Gulanity",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://gulanity.com/restaurantes",
  },
};

export default function RestaurantesPage() {
  return (
    <div className="w-full">
      <HeroRestaurants />

      {/* Beneficios → Resultados */}
      <section id="que-ganas" className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl lg:text-4xl font-semibold text-[#052838] mb-12 text-center font-headings">
            ¿Qué ganas con Gulanity?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "📈", title: "Digitaliza carta", desc: "Carta interactiva → Menos fricción → +15% ticket medio" },
              { icon: "🎯", title: "Atrae clientes ideales", desc: "Filtros avanzados → Usuarios que buscan TU plato → +40% retención" },
              { icon: "🤖", title: "Fideliza con IA", desc: "Programas automáticos → Clientes recurrentes → +25% frecuencia visitas" },
              { icon: "📊", title: "Analíticas accionables", desc: "Datos reales → Decisiones informadas → Optimiza tu carta" },
              { icon: "♻️", title: "Reduce desperdicio", desc: "Feedback directo → Ajusta oferta → -20% merma" },
              { icon: "💰", title: "Sin comisiones", desc: "Cero % por pedido → Más margen → Más rentabilidad" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <span className="text-5xl block mb-4" role="img" aria-label={item.title}>{item.icon}</span>
                <h3 className="text-xl font-bold text-[#052838] mb-2 font-headings">{item.title}</h3>
                <p className="text-[#57636C] leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RestaurantFeatures />

      {/* Beneficios (cards shadcn) */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
              Beneficios que <span className="text-[var(--brand-gold)]">sí se notan</span>
            </h2>
            <p className="text-[#0f1417]/70 max-w-3xl mx-auto">
              Mejora tus márgenes y la experiencia del cliente con decisiones claras y datos reales.
            </p>
          </div>
          <BenefitsGrid
            items={[
              {
                title: 'Potencia tu negocio con IA propietaria',
                desc: 'Recomendaciones sobre qué platos introducir, modificar o retirar para maximizar beneficio y satisfacción.',
              },
              {
                title: 'Conoce tus métricas para mejorar',
                desc: 'Comentarios y señales útiles para identificar puntos fuertes y débiles y tomar decisiones con confianza.',
              },
              {
                title: 'Mejora tu reputación',
                desc: 'Menos papel, más sostenibilidad y una imagen de marca alineada con tus valores.',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-16 md:py-24 surface-light">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
              El impacto <span className="text-[var(--brand-gold)]">en tu bolsillo</span>
            </h2>
            <p className="text-[#0f1417]/70 max-w-3xl mx-auto">
              No es teoría: estos son los euros que puedes ahorrar, ganar o dejar de perder al unirte a nuestra plataforma.
            </p>
          </div>
          <ImpactGrid
            items={[
              { stat: '+21 %', title: 'Ticket medio', desc: 'Upselling y sugerencias personalizadas.' },
              { stat: '-25 %', title: 'Compra de materia prima', desc: 'Menos desperdicio = menos gasto semanal.' },
              { stat: '+34 %', title: 'Clientes que repiten', desc: 'Fidelización basada en datos y expectativas cumplidas.' },
            ]}
          />
        </div>
      </section>

      <section id="como-funciona" className="py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#052838] mb-6 font-headings">
              Cómo funciona
            </h2>
            <p className="text-base lg:text-lg text-[#57636C] max-w-2xl mx-auto leading-relaxed">
              <strong className="text-[#052838]">Tres pasos simples</strong> para usar la plataforma
            </p>
          </div>

          <div className="flex flex-col items-center lg:flex-row lg:items-start justify-center space-y-8 lg:space-y-0">
            {[
              {
                step: "1",
                title: "Date de alta",
                description: "Registra tu restaurante de forma rápida y sencilla.",
                badges: ["Sin integración", "Fácil usabilidad"],
                button: { text: "Darme de alta", href: "/signup", style: "bg-[#FCDB7D] text-[#052838]" }
              },
              {
                step: "2",
                title: "Registra tu carta",
                description:
                  "La plataforma sencilla e intuitiva hará el proceso fácil y rápido. También puedes enviarnos tus cartas y nosotros las registraremos por ti.",
                email: "info@gulanity.com",
                button: { text: "Solicita una demo", href: "/demo", style: "bg-[#052838] text-white" }
              },
              {
                step: "3",
                title: "¡Recibe y fideliza clientes!",
                description:
                  "",
              },
            ].map((item, idx) => (
              <Fragment key={idx}>
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

                  {item.badges && (
                    <div className="flex items-center space-x-2 mb-4">
                      {item.badges.map((badge, i) => (
                        <span
                          key={i}
                          className="bg-gray-200 text-[#052838] text-xs font-medium px-3 py-1 rounded-full"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}

                  {item.button && (
                    <a
                      href={item.button.href}
                      className={`inline-block px-6 py-2 rounded-lg font-medium ${item.button.style} hover:opacity-90 mb-4`}
                    >
                      {item.button.text}
                    </a>
                  )}

                  {item.email && (
                    <p className="text-[#57636C] text-sm mt-2">
                      Contacta con nosotros en{' '}
                      <a href={`mailto:${item.email}`} className="text-[#FCDB7D]">
                        {item.email}
                      </a>
                    </p>
                  )}
                </div>

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

      <SaberMasSection />

      {/* FAQ con Accordion shadcn */}
      <section id="faq" className="py-24 bg-gray-100">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#052838] mb-4 font-headings">
              Preguntas frecuentes
            </h2>
            <p className="text-base lg:text-lg text-[#57636C] leading-relaxed">
              Resolvemos las dudas más comunes sobre nuestra plataforma
            </p>
          </div>
          <FAQAccordion
            items={[
              {
                question: "¿Cobra Gulanity por registrarse o utilizar la plataforma?",
                answer: "No, Gulanity no cobra ni por alta ni por uso. Nuestro modelo se basa en servicios de valor añadido.",
              },
              {
                question: "¿Qué tipo de analíticas obtengo?",
                answer: "Accedes a datos sobre interacciones con tu perfil, origen de clientes, preferencias gastronómicas, horarios de mayor actividad y mucho más.",
              },
              {
                question: "¿Cómo funciona el programa de fidelización?",
                answer: "Creamos automáticamente programas personalizados basados en los patrones de consumo de tus clientes, optimizando la retención y frecuencia de visitas.",
              },
              {
                question: "¿Puedo gestionar múltiples restaurantes?",
                answer: "Sí, nuestra plataforma está diseñada para grupos restauranteros. Puedes gestionar múltiples ubicaciones desde un solo dashboard.",
              },
              {
                question: "¿Hay contratos de permanencia?",
                answer: "No hay contratos de permanencia. Puedes darte de baja cuando quieras sin penalizaciones.",
              },
              {
                question: "¿Cómo contacto soporte?",
                answer: "Puedes enviarnos un correo a soporte@gulanity.com o chatear en vivo con uno de nuestros agentes durante horario de oficina.",
              },
            ]}
          />
        </div>
      </section>

      <section id="waitlist" className="py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#052838] mb-6 font-headings">
              Únete a la lista de espera
            </h2>
            <p className="text-base lg:text-lg text-[#57636C] mb-8 leading-relaxed">
              Sé de los primeros en acceder cuando lancemos oficialmente. Te mantendremos informado del proceso.
            </p>

            <form className="space-y-6 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nombre del contacto"
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent text-lg"
                  required
                />
                <input
                  type="email"
                  placeholder="Email de contacto"
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent text-lg"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Nombre del restaurante"
                className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent text-lg"
                required
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#FCDB7D] hover:bg-[#052838] hover:text-[#FCDB7D] text-white font-medium py-2 px-6 rounded-lg transition ease-in-out duration-200"
              >
                Únete a la lista de espera
              </button>
            </form>

            <p className="text-sm text-gray-500 mt-4">
              Sin spam. Solo te contactaremos cuando tengamos novedades importantes.
            </p>
          </div>
        </div>
      </section>

      <section id="feedback" className="py-24 bg-gray-100">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#052838] mb-6 font-headings">
              Ayúdanos a mejorar tu restaurante
            </h2>
            <p className="text-base lg:text-lg text-[#57636C] mb-8 leading-relaxed">
              Tu feedback es clave para crear la mejor plataforma para restaurantes
            </p>

            <form className="space-y-6 max-w-2xl mx-auto">
              <div>
                <input
                  type="email"
                  placeholder="Tu email (opcional)"
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent text-lg"
                />
              </div>
              <div>
                <textarea
                  placeholder="Cuéntanos qué necesitas para tu restaurante..."
                  rows={6}
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent text-lg resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#FCDB7D] hover:bg-[#052838] hover:text-[#FCDB7D] text-white font-medium py-2 px-6 rounded-lg transition ease-in-out duration-200"
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
