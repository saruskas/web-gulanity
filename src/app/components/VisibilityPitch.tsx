import { Fragment } from "react";

const VisibilityPitch = () => (
  <>
    <section id="visibility" className="py-12 sm:py-16 bg-white" aria-labelledby="visibility-title">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 id="visibility-title" className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#052838] mb-4 font-headings">
            Lleva tu restaurante a la <span className="text-[#FCDB7D]">máxima visibilidad</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-[#57636C] leading-relaxed max-w-3xl mx-auto">
            Aparece justo cuando un comensal busca <strong>lo que tú ofreces</strong>: el ambiente perfecto, el plato que anhela o la dieta que necesita.
          </p>
        </div>

        {/* Money Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {[
            { value: "3×", label: "Más visibilidad", note: "Frente a guías genéricas o redes sociales." },
            { value: "+25%", label: "Nuevas reservas", note: "Procedentes de búsquedas por plato o servicio." },
            { value: "0€", label: "Coste por aparecer", note: "La app es gratuita para restaurantes." },
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
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left hidden sm:table-cell">Valor Cliente</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Aparición destacada por relevancia", "Mayor flujo de clientes", "Encuentran justo lo que buscan"],
                  ["Menús y platos indexados", "Ventas incrementales", "Búsqueda por antojo o necesidad"],
                  ["Panel de métricas en tiempo real", "Decisiones basadas en datos", "Mejora continua de experiencia"],
                  ["Filtros ultra-precisos (+40 servicios)", "Match perfecto en búsquedas", "Experiencia personalizada"],
                  ["Modo Invitado & Registrado", "Ventajas para usuarios registrados", "Favoritos y seguimiento"],
                ].map(([name, impact, value], i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-[#FDF6EC] transition-colors">
                    <td className="px-3 sm:px-6 py-3 sm:py-4 font-medium text-[#052838]">{name}</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-[#FCDB7D] font-bold whitespace-nowrap">{impact}</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-[#57636C] hidden sm:table-cell">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {[
            { icon: "🔍", title: "Filtros ultra-precisos", desc: "Más de 40 servicios para que tu negocio sea el match perfecto." },
            { icon: "🍽️", title: "Búsqueda por plato", desc: "Los usuarios encuentran tu lasaña casera o opciones sin lactosa." },
            { icon: "👥", title: "Modo Invitado & Registrado", desc: "Visibilidad para todos con ventajas extra para registrados." },
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
            ¿Quieres que te encuentren primero?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 sm:mb-10 text-sm sm:text-base lg:text-lg text-[#57636C] leading-relaxed">
            Súmate hoy y multiplica tu visibilidad entre los comensales que ya buscan experiencias como la que ofreces.
          </p>
          <button
            type="button"
            className="bg-[#FCDB7D] hover:bg-[#052838] hover:text-[#FCDB7D] text-white font-medium py-3 px-6 sm:py-4 sm:px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 text-sm sm:text-base"
            aria-label="Solicitar demostración de visibilidad"
          >
            Solicitar Demo
          </button>
        </div>
      </div>
    </section>
  </>
);

export default VisibilityPitch;