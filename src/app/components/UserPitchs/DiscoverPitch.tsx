import { Fragment } from "react";

const DiscoverPitch = () => (
  <Fragment>
    {/* Hero Section */}
    <section id="discover" className="py-12 sm:py-16 bg-white" aria-labelledby="discover-title">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 text-center">
        <h1 id="discover-title" className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#052838] mb-4 font-headings">
          Descubre Tu Plato <span className="text-[#FCDB7D]">Perfecto</span>
        </h1>
        <p className="max-w-3xl mx-auto text-sm sm:text-base lg:text-lg text-[#57636C] leading-relaxed">
          Filtra por ingredientes, alérgenos, precio, dieta… y encuentra en segundos ese bocado que llevas deseando. Nada queda al azar.
        </p>
      </div>
    </section>

    {/* Feature Cards */}
    <section className="py-8 bg-white">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    <article className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="flex justify-center text-3xl mb-3">🎯</div>
      <h3 className="font-semibold text-[#052838] mb-2 text-center">Búsqueda Nano-segmentada</h3>
      <p className="text-[#57636C] text-sm text-center">
        Di adiós al “¿qué cenamos?”: elige por etiquetas ultra-precisas (influencer, ocasión, mood) y acierta a la primera.
      </p>
    </article>

    <article className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="flex justify-center text-3xl mb-3">🌍</div>
      <h3 className="font-semibold text-[#052838] mb-2 text-center">Explora Tu Ciudad… y Más</h3>
      <p className="text-[#57636C] text-sm text-center">
        Restaurantes, food-trucks, pop-ups: todo en un mismo feed dinámico, filtrable y geolocalizado. El mundo al alcance de un scroll.
      </p>
    </article>
  </div>
</div>


    </section>
  </Fragment>
);

export default DiscoverPitch;

