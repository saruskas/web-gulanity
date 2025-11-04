import { Fragment } from "react";

const ExpectationManagementPitch = () => (
  <>
    <section id="expectation-management" className="py-12 sm:py-16 bg-white" aria-labelledby="expectation-management-title">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 id="expectation-management-title" className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#052838] mb-4 font-headings">
            Entrega <span className="text-[#FCDB7D]">exactamente</span> lo que promete tu carta
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-[#57636C] leading-relaxed max-w-3xl mx-auto">
            Transparencia total en ingredientes, alérgenos, fotos 4K y vídeos: menos dudas, más confianza y experiencias que superan expectativas.
          </p>
        </div>

        {/* Money Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {[
            { value: "‑50%", label: "Devoluciones", note: "Por expectativas no cumplidas." },
            { value: "+22%", label: "Reseñas 5★", note: "Gracias a transparencia visual." },
            { value: "‑30%", label: "Tiempo camarero", note: "Menos dudas sobre platos." },
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
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left whitespace-nowrap">Impacto Económico</th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left hidden sm:table-cell">Experiencia Cliente</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Transparencia de ingredientes", "Menos reclamaciones", "Confianza instantánea"],
                  ["Medios visuales reales", "Upselling natural", "Antojo garantizado"],
                  ["Actualización instantánea", "Evita ventas imposibles", "No hay decepciones"],
                  ["Filtros de alérgenos", "Pedidos más precisos", "Experiencia sin dudas"],
                  ["Memoria de plato", "Boca-oreja digital", "Fidelización automática"],
                ].map(([advantage, economic, experience], i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-[#FDF6EC] transition-colors">
                    <td className="px-3 sm:px-6 py-3 sm:py-4 font-medium text-[#052838]">{advantage}</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-[#FCDB7D] font-bold whitespace-nowrap">{economic}</td>
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
            { icon: "🔍", title: "Transparencia Total", desc: "Ingredientes y alérgenos siempre visibles sin sorpresas." },
            { icon: "🎥", title: "Visual Storytelling", desc: "Fotos 4K y vídeos que muestran la realidad del plato." },
            { icon: "✅", title: "Pedido Sin Dudas", desc: "Filtros automáticos evitan preguntas al camarero." },
            { icon: "📝", title: "Memoria de Plato", desc: "El cliente revisa qué comió y comparte con amigos." },
            { icon: "🔄", title: "Actualizaciones Vivo", desc: "La carta se actualiza al instante sin decepciones." },
            { icon: "💬", title: "Comentario Express", desc: "Feedback inmediato para mejoras continuas." },
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
            ¿Listo para superar expectativas en cada plato?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 sm:mb-10 text-sm sm:text-base lg:text-lg text-[#57636C] leading-relaxed">
            Únete hoy y conviértete en el restaurante que siempre entrega lo prometido… y algo más.
          </p>
          <button
            type="button"
            className="bg-[#FCDB7D] hover:bg-[#052838] hover:text-[#FCDB7D] text-white font-medium py-3 px-6 sm:py-4 sm:px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 text-sm sm:text-base"
            aria-label="Solicitar demostración de gestión de expectativas"
          >
            Solicitar Demo
          </button>
        </div>
      </div>
    </section>
  </>
);

export default ExpectationManagementPitch;