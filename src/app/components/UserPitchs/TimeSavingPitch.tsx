import { Fragment } from "react";

const TimeSavingPitch = () => (
  <Fragment>
    {/* Hero Section */}
    <section id="time-saving" className="py-12 sm:py-16 bg-white" aria-labelledby="time-saving-title">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 text-center">
        <h1 id="time-saving-title" className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#052838] mb-4 font-headings">
          Ahorra Tiempo <span className="text-[#FCDB7D]">Real</span>
        </h1>
        <p className="max-w-3xl mx-auto text-sm sm:text-base lg:text-lg text-[#57636C] leading-relaxed">
          Nada de búsquedas eternas: filtra por horario, reserva instantánea y descubre tu mesa en menos de un minuto.
        </p>
      </div>
    </section>

    {/* Feature Cards */}
    <section className="py-8 bg-white">
<div className="container mx-auto max-w-4xl px-4 sm:px-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    <article className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="flex justify-center text-3xl mb-3">⚡</div>
      <h3 className="text-xl font-bold text-[#052838] mb-2 text-center font-headings">
        Búsqueda Instantánea
      </h3>
      <p className="text-[#57636C] text-sm text-center">
        Encuentra cafeterías con tu café favorito, menús brunch o sushi + terraza en segundos.
      </p>
    </article>

    <article className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="flex justify-center text-3xl mb-3">📅</div>
      <h3 className="text-xl font-bold text-[#052838] mb-2 text-center font-headings">
        Reserva en un Tap
      </h3>
      <p className="text-[#57636C] text-sm text-center">
        Selecciona hora, mesas disponibles y confirma sin llamadas. Tu tiempo vale oro.
      </p>
    </article>
  </div>
</div>

    </section>
  </Fragment>
);

export default TimeSavingPitch;
