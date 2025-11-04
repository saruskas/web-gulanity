import { Fragment } from "react";

const DigitalMenuPitch = () => (
  <>
    <section id="digital-menu" className="py-12 sm:py-16 bg-white" aria-labelledby="digital-menu-title">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 id="digital-menu-title" className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#052838] mb-4 font-headings">
            Carta Digital <span className="text-[#FCDB7D]">Única</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-[#57636C] leading-relaxed max-w-3xl mx-auto">
            Transforma la elección de un plato en una <strong>experiencia inmersiva</strong> y demuestra por qué tu
            restaurante destaca sobre cualquier otro.
          </p>
        </div>

        {/* Money Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {[
            { value: "+18%", label: "Ticket medio", note: "Gracias a recomendaciones y upselling automático." },
            { value: "‑40%", label: "Dudas al camarero", note: "Sobre alérgenos o ingredientes." },
            { value: "+30%", label: "Tiempo exploración", note: "Frente a menús estáticos." },
          ].map((stat, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-6 sm:p-8 md:p-10 shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FCDB7D] mb-2">{stat.value}</h2>
              <p className="text-[#052838] font-semibold mb-1 text-sm sm:text-base">{stat.label}</p>
              <p className="text-xs sm:text-sm text-[#57636C]">{stat.note}</p>
            </div>
          ))}
        </div>

        {/* ROI Table */}
        <div className="overflow-x-auto mb-12 sm:mb-16 -mx-4 sm:mx-0">
          <div className="min-w-[640px] px-4 sm:px-0">
            <table className="w-full bg-gray-50 rounded-2xl shadow-lg text-xs sm:text-sm" role="table">
              <thead>
                <tr className="border-b border-gray-200 text-[#052838] font-headings">
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left">Ventaja</th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left whitespace-nowrap">Impacto Comercial</th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left hidden sm:table-cell">Experiencia Cliente</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Carta dinámica con filtros", "Más reservas afinadas", "Elección rápida y segura"],
                  ["Multimedia inmersiva", "Aumenta ticket medio", "Más confianza del cliente"],
                  ["Actualización instantánea", "Sin stock erróneo", "Sin decepciones"],
                  ["Cumplimiento automático", "Reduce preguntas", "Experiencia fluida"],
                  ["Social & Influencers", "Marketing viral", "Descubrimiento social"],
                ].map(([advantage, commercial, experience], i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-[#FDF6EC] transition-colors">
                    <td className="px-3 sm:px-6 py-3 sm:py-4 font-medium text-[#052838]">{advantage}</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-[#FCDB7D] font-bold whitespace-nowrap">{commercial}</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-[#57636C] hidden sm:table-cell">{experience}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {[
            { icon: "🎚️", title: "Filtros Hiper-personalizados", desc: "Alérgenos, dietas, precios, ingredientes y platos virales." },
            { icon: "🎥", title: "Multimedia que Vende", desc: "Fotos 4K y vídeos cortos que despiertan el apetito." },
            { icon: "🤳", title: "Social & Influencers", desc: "Etiquetas a amigos y recomendaciones de influencers." },
            { icon: "🔄", title: "Actualización Instantánea", desc: "Cambios en tiempo real sin reimpresiones." },
            { icon: "🛡️", title: "Cumplimiento sin Estrés", desc: "Ingredientes y alérgenos siempre visibles." },
            { icon: "📱", title: "Experiencia Digital", desc: "Interfaz intuitiva que convierte curiosos en clientes." },
          ].map((feature, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center">
              <div className="text-2xl sm:text-3xl mb-3">{feature.icon}</div>
              <h3 className="font-semibold text-[#052838] mb-2 text-sm sm:text-base">{feature.title}</h3>
              <p className="text-[#57636C] text-xs sm:text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center px-4 sm:px-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-[#052838] font-headings">
            ¿Listo para conquistar el paladar digital?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 sm:mb-10 text-sm sm:text-base lg:text-lg text-[#57636C] leading-relaxed">
            Reserva tu demo y descubre cómo nuestra carta digital única convierte curiosos en clientes fieles.
          </p>
          <button
            type="button"
            className="bg-[#FCDB7D] hover:bg-[#052838] hover:text-[#FCDB7D] text-white font-medium py-3 px-6 sm:py-4 sm:px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 text-sm sm:text-base"
            aria-label="Solicitar demostración de carta digital"
          >
            Solicitar Demo
          </button>
        </div>
      </div>
    </section>
  </>
);

export default DigitalMenuPitch;

