import { Fragment } from "react";

const MoneyImpactPitch = () => (
  <>
    <section id="money-impact" className="py-12 sm:py-16 bg-white" aria-labelledby="money-impact-title">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 id="money-impact-title" className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#052838] mb-4 font-headings">
            El impacto <span className="text-[#FCDB7D]">en tu bolsillo</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-[#57636C] leading-relaxed max-w-3xl mx-auto">
            No es teoría: estos son los euros que puedes <strong>ahorrar, ganar</strong> o dejar de perder al
            unirte a nuestra plataforma.
          </p>
        </div>

        {/* Money Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {[
            { value: "+21 %", label: "Ticket medio", note: "Gracias a upselling y sugerencias personalizadas." },
            { value: "‑25 %", label: "Compra de materia prima", note: "Menos desperdicio = menos gasto semanal." },
            { value: "+34 %", label: "Clientes que repiten", note: "Fidelización basada en datos y expectativas cumplidas." },
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
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left">Palanca</th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left whitespace-nowrap">€ Ganados / Ahorrados* (año)</th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left hidden sm:table-cell">Cómo lo logramos</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Upselling inteligente", "+16 000 €", "Recomendaciones de maridaje y postres."],
                  ["Reducción de desperdicio", "+12 500 €", "Compra ajustada a demanda real."],
                  ["Ahorro en impresión de cartas", "+2 000 €", "Carta 100 % digital, sin reimpresiones."],
                  ["Multas evitadas Ley 1/2025", "+60 000 €", "Cumplimiento automático jerarquía anti‑desperdicio."],
                  ["Marketing verde & reseñas", "+8 400 €", "Aumento de tráfico por reputación sostenible."],
                ].map(([name, value, desc], i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-[#FDF6EC] transition-colors">
                    <td className="px-3 sm:px-6 py-3 sm:py-4 font-medium text-[#052838]">{name}</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-[#FCDB7D] font-bold whitespace-nowrap">{value}</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-[#57636C] hidden sm:table-cell">{desc}</td>
                  </tr>
                ))}
                <tr className="font-headings text-[#052838]">
                  <td className="px-3 sm:px-6 py-3 sm:py-4 font-semibold">Total estimado</td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-xl sm:text-2xl font-black text-[#FCDB7D]">+98 900 €</td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-[#57636C] hidden sm:table-cell text-xs">*Restaurante medio de 100 cubiertos/día.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center px-4 sm:px-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-[#052838] font-headings">
            ¿Quieres sumar casi 100 000 € al año?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 sm:mb-10 text-sm sm:text-base lg:text-lg text-[#57636C] leading-relaxed">
            Reserva tu demo y descubre cómo estas cifras pueden ser tuyas en menos de 30 días.
          </p>
          <button
            type="button"
            className="bg-[#FCDB7D] hover:bg-[#052838] hover:text-[#FCDB7D] text-white font-medium py-3 px-6 sm:py-4 sm:px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 text-sm sm:text-base"
            aria-label="Solicitar demostración de impacto financiero"
          >
            Solicitar Demo
          </button>
        </div>
      </div>
    </section>
  </>
);

export default MoneyImpactPitch;