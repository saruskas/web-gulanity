import { Fragment } from "react";

const InteractiveMenuPitch = () => (
  <Fragment>
    {/* Hero Section */}
    <section id="interactive-menu" className="py-12 sm:py-16 bg-white" aria-labelledby="interactive-menu-title">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 text-center">
        <h1 id="interactive-menu-title" className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#052838] mb-4 font-headings">
          Carta <span className="text-[#FCDB7D]">Interáctiva</span>
        </h1>
        <p className="max-w-3xl mx-auto text-sm sm:text-base lg:text-lg text-[#57636C] leading-relaxed">
          Fotos 4K, vídeos cortos y datos de alérgenos en cada plato. Descubre textura, tamaño y sabor antes de pedir.
        </p>
      </div>
    </section>

    {/* Feature Cards */}
    <section className="py-8 bg-white">
<div className="container mx-auto max-w-4xl px-4 sm:px-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    <article className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="flex justify-center text-3xl mb-3">🎥</div>
      <h3 className="text-xl font-bold text-[#052838] mb-2 text-center font-headings">
        Vídeos que Abren el Apetito
      </h3>
      <p className="text-[#57636C] text-sm text-center">
        Muestra el corte, el emplatado y el hilo del queso fundido. Un pequeño clip que multiplica el deseo.
      </p>
    </article>

    <article className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="flex justify-center text-3xl mb-3">🔍</div>
      <h3 className="text-xl font-bold text-[#052838] mb-2 text-center font-headings">
        Información al Detalle
      </h3>
      <p className="text-[#57636C] text-sm text-center">
        Alérgenos, macros, origen de ingredientes y recomendaciones de maridaje en la palma de tu mano.
      </p>
    </article>
  </div>
</div>

    </section>
  </Fragment>
);

export default InteractiveMenuPitch;

