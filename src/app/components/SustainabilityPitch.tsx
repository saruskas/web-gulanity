import { Fragment } from "react";

const SustainabilityPitch = () => (
  <>
    <section id="sustainability" className="py-12 sm:py-16 bg-white" aria-labelledby="sustainability-title">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 id="sustainability-title" className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#052838] mb-4 font-headings">
            Sostenibilidad que <span className="text-[#FCDB7D]">brilla</span> en tu marca
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-[#57636C] leading-relaxed max-w-3xl mx-auto">
            Digitaliza tu carta, reduce desperdicio y demuestra tu compromiso con el planeta: gana la lealtad de los comensales más conscientes y mejora tu reputación online.
          </p>
        </div>

        {/* Money Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {[
            { value: "10kg", label: "Papel ahorrado", note: "Al año por cada 100 mesas." },
            { value: "‑18%", label: "Emisiones", note: "Asociadas al desperdicio alimentario." },
            { value: "+32%", label: "Menciones positivas", note: "En redes por compromiso eco." },
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
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left">Práctica Sostenible</th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left whitespace-nowrap">Impacto Ambiental</th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left hidden sm:table-cell">Beneficio Comercial</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Carta 100% digital", "Cero papel y tinta", "Ahorro costes impresión"],
                  ["Reducción desperdicio", "Menos residuos orgánicos", "Cumplimiento Ley 1/2025"],
                  ["Valores ESG visibles", "Transparencia ambiental", "Atrae clientes conscientes"],
                  ["Fidelización eco-clientes", "Compromiso demostrado", "+25% repetición visitas"],
                  ["Sellos sostenibilidad", "Certificación verde", "Diferenciación competitiva"],
                ].map(([practice, environmental, commercial], i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-[#FDF6EC] transition-colors">
                    <td className="px-3 sm:px-6 py-3 sm:py-4 font-medium text-[#052838]">{practice}</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-[#FCDB7D] font-bold whitespace-nowrap">{environmental}</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-[#57636C] hidden sm:table-cell">{commercial}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {[
            { icon: "📱", title: "Carta Digital", desc: "Elimina impresiones y reduce huella de carbono." },
            { icon: "🍽️", title: "Menos Desperdicio", desc: "Previsión de demanda y platos de aprovechamiento." },
            { icon: "🌱", title: "Valores ESG", desc: "Sellos de cero papel y anti-desperdicio visibles." },
            { icon: "🤝", title: "Eco-Fidelización", desc: "Los clientes conscientes repiten 25% más." },
            { icon: "♻️", title: "Economía Circular", desc: "Aprovecha ingredientes y reduce residuos." },
            { icon: "🏆", title: "Certificación Verde", desc: "Demuestra compromiso real con el planeta." },
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
            ¿Listo para ser el favorito de los eco-foodies?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 sm:mb-10 text-sm sm:text-base lg:text-lg text-[#57636C] leading-relaxed">
            Únete hoy y deja que tus buenas prácticas hablen más alto que cualquier campaña publicitaria.
          </p>
          <button
            type="button"
            className="bg-[#FCDB7D] hover:bg-[#052838] hover:text-[#FCDB7D] text-white font-medium py-3 px-6 sm:py-4 sm:px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 text-sm sm:text-base"
            aria-label="Solicitar demostración de sostenibilidad"
          >
            Solicitar Demo
          </button>
        </div>
      </div>
    </section>
  </>
);

export default SustainabilityPitch;