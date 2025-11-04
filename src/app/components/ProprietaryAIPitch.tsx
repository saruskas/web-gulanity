import { Fragment } from "react";

const ProprietaryAIPitch = () => (
  <>
    <section id="proprietary-ai" className="py-12 sm:py-16 bg-white" aria-labelledby="proprietary-ai-title">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 id="proprietary-ai-title" className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#052838] mb-4 font-headings">
            Potencia tu negocio con <span className="text-[#FCDB7D]">IA propietario</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-[#57636C] leading-relaxed max-w-3xl mx-auto">
            Nuestra IA exclusiva analiza reseñas, información interna y tendencias gastronómicas para indicarte qué platos sustituir, mejorar o introducir antes que la competencia.
          </p>
        </div>

        {/* Money Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {[
            { value: "+12%", label: "Margen beneficio", note: "Optimización de costes y precios." },
            { value: "‑20%", label: "Stock caducado", note: "Predicciones precisas de demanda." },
            { value: "2×", label: "Velocidad lanzamiento", note: "A/B testing acelera innovación." },
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
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left">Funcionalidad IA</th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left whitespace-nowrap">Impacto Negocio</th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left hidden sm:table-cell">Ventaja Competitiva</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Análisis de reseñas automático", "Mejora continua menú", "Detecta tendencias antes"],
                  ["Optimización de carta dinámica", "Elimina platos perdedores", "Maximiza rentabilidad"],
                  ["Predicción de ventas", "Reduce desperdicio", "Compras más precisas"],
                  ["Radar de tendencias", "Lanza sabores virales", "Primero en el mercado"],
                  ["A/B testing de platos", "Valida antes de invertir", "Decisiones basadas en datos"],
                ].map(([functionality, impact, advantage], i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-[#FDF6EC] transition-colors">
                    <td className="px-3 sm:px-6 py-3 sm:py-4 font-medium text-[#052838]">{functionality}</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-[#FCDB7D] font-bold whitespace-nowrap">{impact}</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-[#57636C] hidden sm:table-cell">{advantage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {[
            { icon: "📝", title: "Análisis Reseñas", desc: "Detecta keywords de sabor, textura y presentación." },
            { icon: "🔄", title: "Optimización Carta", desc: "Reemplaza platos de baja demanda por rentables." },
            { icon: "📈", title: "Predicción Ventas", desc: "Proyecta demanda por día y ajusta compras." },
            { icon: "🌐", title: "Radar Tendencias", desc: "Identifica sabores virales en tu zona." },
            { icon: "⚖️", title: "A/B Testing", desc: "Lanza dos versiones y elige la ganadora." },
            { icon: "🤖", title: "IA Propietaria", desc: "Algoritmos exclusivos para restaurantes." },
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
            ¿Listo para poner la IA a cocinar beneficios?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 sm:mb-10 text-sm sm:text-base lg:text-lg text-[#57636C] leading-relaxed">
            Solicita tu demo y descubre cómo nuestra IA propietaria convierte datos en platos ganadores y más ganancias.
          </p>
          <button
            type="button"
            className="bg-[#FCDB7D] hover:bg-[#052838] hover:text-[#FCDB7D] text-white font-medium py-3 px-6 sm:py-4 sm:px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 text-sm sm:text-base"
            aria-label="Solicitar demostración de IA propietaria"
          >
            Solicitar Demo
          </button>
        </div>
      </div>
    </section>
  </>
);

export default ProprietaryAIPitch;