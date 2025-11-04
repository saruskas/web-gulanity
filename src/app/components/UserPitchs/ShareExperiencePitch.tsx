import { Fragment } from "react";

const ShareExperiencePitch = () => (
  <Fragment>
    {/* Hero Section */}
    <section id="share-experience" className="py-12 sm:py-16 bg-white" aria-labelledby="share-experience-title">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 text-center">
        <h1 id="share-experience-title" className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#052838] mb-4 font-headings">
          Comparte en un <span className="text-[#FCDB7D]">Tap</span>
        </h1>
        <p className="max-w-3xl mx-auto text-sm sm:text-base lg:text-lg text-[#57636C] leading-relaxed">
          Publica tu reseña directa al plato desde la carta. Tu perfil se llena solo — ¡como un Instagram para foodies!
        </p>
      </div>
    </section>

    {/* Feature Cards */}
    <section className="py-8 bg-white">
<div className="container mx-auto max-w-4xl px-4 sm:px-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    <article className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="flex justify-center text-3xl mb-3">📸</div>
      <h3 className="text-xl font-bold text-[#052838] mb-2 text-center font-headings">
        Auto-Feed de Platos
      </h3>
      <p className="text-[#57636C] text-sm text-center">
        Cada vez que valoras un plato, aparece en tu muro y en el feed de tus seguidores. Influencia real y social proof automático.
      </p>
    </article>

    <article className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="flex justify-center text-3xl mb-3">🔗</div>
      <h3 className="text-xl font-bold text-[#052838] mb-2 text-center font-headings">
        Comparte y Filtra
      </h3>
      <p className="text-[#57636C] text-sm text-center">
        Etiqueta amigos, menciona influencers y crea rutas gastronómicas compartidas. Tu comunidad decide la próxima parada.
      </p>
    </article>
  </div>
</div>

    </section>
  </Fragment>
);

export default ShareExperiencePitch;

