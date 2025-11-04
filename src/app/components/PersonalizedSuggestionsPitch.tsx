import { Fragment } from "react";

const PersonalizedSuggestionsPitch = () => (
  <>
    <section id="personalized-suggestions" className="py-12 sm:py-16 bg-white" aria-labelledby="personalized-suggestions-title">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 id="personalized-suggestions-title" className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#052838] mb-4 font-headings">
            Cada cliente recibe <span className="text-[#FCDB7D]">su recomendación perfecta</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-[#57636C] leading-relaxed max-w-3xl mx-auto">
            IA que aprende gustos, restricciones y patrones de consumo para sugerir exactamente lo que cada comensal desea, aumentando satisfacción y ticket medio.
          </p>
        </div>

        {/* Money Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {[
            { value: "+28%", label: "Ticket medio", note: "Sugerencias precisas aumentan pedidos." },
            { value: "94%", label: "Acierto recomendaciones", note: "IA aprende de cada interacción." },
            { value: "+45%", label: "Satisfacción cliente", note: "Experiencias verdaderamente personalizadas." },
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
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left">Tipo de Sugerencia</th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left whitespace-nowrap">Impacto Ventas</th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left hidden sm:table-cell">Beneficio Cliente</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Basada en historial personal", "Upselling natural", "Encuentra sus favoritos"],
                  ["Según restricciones dietéticas", "Evita devoluciones", "Experiencia sin riesgos"],
                  ["Por patrones de consumo", "Optimiza inventario", "Sugerencias en momento ideal"],
                  ["Maridajes inteligentes", "Aumenta ticket medio", "Descubre nuevas combinaciones"],
                  ["Recomendaciones estacionales", "Rota productos frescos", "Platos de temporada perfectos"],
                ].map(([suggestion, sales, benefit], i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-[#FDF6EC] transition-colors">
                    <td className="px-3 sm:px-6 py-3 sm:py-4 font-medium text-[#052838]">{suggestion}</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-[#FCDB7D] font-bold whitespace-nowrap">{sales}</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-[#57636C] hidden sm:table-cell">{benefit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {[
            { icon: "🧠", title: "IA Adaptativa", desc: "Aprende de cada pedido para mejorar recomendaciones." },
            { icon: "🎯", title: "Sugerencias Contextuales", desc: "Considera hora, clima y ocasión especial." },
            { icon: "🔄", title: "Aprendizaje Continuo", desc: "Se perfecciona con cada interacción del cliente." },
            { icon: "🍷", title: "Maridajes Inteligentes", desc: "Sugiere bebidas y acompañamientos perfectos." },
            { icon: "⚡", title: "Tiempo Real", desc: "Recomendaciones instantáneas basadas en disponibilidad." },
            { icon: "📊", title: "Analytics Predictivos", desc: "Anticipa qué querrá cada cliente antes de llegar." },
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
            ¿Listo para que cada cliente se sienta único?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 sm:mb-10 text-sm sm:text-base lg:text-lg text-[#57636C] leading-relaxed">
            Descubre cómo la personalización inteligente transforma cada visita en una experiencia memorable.
          </p>
          <button
            type="button"
            className="bg-[#FCDB7D] hover:bg-[#052838] hover:text-[#FCDB7D] text-white font-medium py-3 px-6 sm:py-4 sm:px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 text-sm sm:text-base"
            aria-label="Solicitar demostración de sugerencias personalizadas"
          >
            Solicitar Demo
          </button>
        </div>
      </div>
    </section>
  </>
);

export default PersonalizedSuggestionsPitch;