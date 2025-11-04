import { Fragment } from "react";

const CustomerInsightsPitch = () => (
  <>
    <section id="customer-insights" className="py-12 sm:py-16 bg-white" aria-labelledby="customer-insights-title">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 id="customer-insights-title" className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#052838] mb-4 font-headings">
            Conoce a tus clientes como <span className="text-[#FCDB7D]">nunca antes</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-[#57636C] leading-relaxed max-w-3xl mx-auto">
            Descubre patrones de consumo, preferencias dietéticas y comportamientos que te ayudarán a personalizar cada experiencia y aumentar la fidelización.
          </p>
        </div>

        {/* Money Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {[
            { value: "+34%", label: "Clientes que repiten", note: "Gracias a personalización basada en datos." },
            { value: "+18%", label: "Ticket medio", note: "Recomendaciones precisas aumentan ventas." },
            { value: "92%", label: "Satisfacción cliente", note: "Experiencias adaptadas a sus gustos." },
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
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left">Insight</th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left whitespace-nowrap">Acción Comercial</th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left hidden sm:table-cell">Resultado</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Patrones de consumo por horario", "Ofertas específicas", "Mayor conversión"],
                  ["Preferencias dietéticas", "Menús personalizados", "Clientes más satisfechos"],
                  ["Platos favoritos por cliente", "Recomendaciones precisas", "Aumento ticket medio"],
                  ["Frecuencia de visitas", "Programas de fidelización", "Mayor retención"],
                  ["Feedback en tiempo real", "Mejoras inmediatas", "Experiencia optimizada"],
                ].map(([insight, action, result], i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-[#FDF6EC] transition-colors">
                    <td className="px-3 sm:px-6 py-3 sm:py-4 font-medium text-[#052838]">{insight}</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-[#FCDB7D] font-bold whitespace-nowrap">{action}</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-[#57636C] hidden sm:table-cell">{result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {[
            { icon: "📊", title: "Analytics Avanzados", desc: "Dashboards intuitivos con métricas clave de comportamiento." },
            { icon: "🎯", title: "Segmentación Inteligente", desc: "Agrupa clientes por patrones y preferencias similares." },
            { icon: "🔮", title: "Predicción de Demanda", desc: "Anticipa qué platos serán populares cada día." },
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
            ¿Listo para conocer realmente a tus clientes?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 sm:mb-10 text-sm sm:text-base lg:text-lg text-[#57636C] leading-relaxed">
            Descubre insights que transformarán tu negocio y crearán experiencias únicas para cada cliente.
          </p>
          <button
            type="button"
            className="bg-[#FCDB7D] hover:bg-[#052838] hover:text-[#FCDB7D] text-white font-medium py-3 px-6 sm:py-4 sm:px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 text-sm sm:text-base"
            aria-label="Solicitar demostración de customer insights"
          >
            Solicitar Demo
          </button>
        </div>
      </div>
    </section>
  </>
);

export default CustomerInsightsPitch;