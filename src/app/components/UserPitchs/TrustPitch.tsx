import { Fragment } from "react";

const TrustPitch = () => (
  <Fragment>
    {/* Hero Section */}
    <section id="trust" className="py-12 sm:py-16 bg-white" aria-labelledby="trust-title">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 text-center">
        <h1 id="trust-title" className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#052838] mb-4 font-headings">
          Confianza Total con <span className="text-[#FCDB7D]">Tu Red</span>
        </h1>
        <p className="max-w-3xl mx-auto text-sm sm:text-base lg:text-lg text-[#57636C] leading-relaxed">
          Sigue a tus amigos e influencers favoritos. Sus reseñas y fotos reales te garantizan que cada elección sea un acierto.
        </p>
      </div>
    </section>

    {/* Feature Cards */}
    <section className="py-8 bg-white">
<div className="container mx-auto max-w-4xl px-4 sm:px-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 space-y-0 mb-8">
    <article className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="flex justify-center text-3xl mb-3">🤳</div>
      <h3 className="text-xl font-bold text-[#052838] mb-2 text-center font-headings">
        Influencers al Plato
      </h3>
      <p className="text-[#57636C] text-sm text-center">
        Ve en un click qué platos recomiendan tus food-influencers preferidos. Su feed se integra en tu carta.
      </p>
    </article>

    <article className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="flex justify-center text-3xl mb-3">🔒</div>
      <h3 className="text-xl font-bold text-[#052838] mb-2 text-center font-headings">
        Opiniones Verificadas
      </h3>
      <p className="text-[#57636C] text-sm text-center">
        Cada comentario está ligado a un perfil real. Olvida los trolls: confía en experiencias genuinas.
      </p>
    </article>
  </div>
</div>

    </section>
  </Fragment>
);

export default TrustPitch;

