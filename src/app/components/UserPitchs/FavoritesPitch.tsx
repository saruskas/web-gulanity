import { Fragment } from "react";

const FavoritesPitch = () => (
  <Fragment>
    {/* Hero Section */}
    <section id="favorites" className="py-12 sm:py-16 bg-white" aria-labelledby="favorites-title">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 text-center">
        <h1 id="favorites-title" className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#052838] mb-4 font-headings">
          Tus Favoritos, Siempre <span className="text-[#FCDB7D]">a Mano</span>
        </h1>
        <p className="max-w-3xl mx-auto text-sm sm:text-base lg:text-lg text-[#57636C] leading-relaxed">
          Guarda restaurantes y platos que amas. Tu feed se llena de recomendaciones personalizadas.
        </p>
      </div>
    </section>

    {/* Feature Cards */}
    <section className="py-8 bg-white">
<div className="container mx-auto max-w-4xl px-4 sm:px-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 space-y-0 mb-8">
    <article className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="flex justify-center text-3xl mb-3">⭐</div>
      <h3 className="font-semibold text-[#052838] mb-2 text-center font-headings">
        Listas Personalizadas
      </h3>
      <p className="text-[#57636C] text-sm text-center">
        Organiza tus descubrimientos en “Brunch”, “Cena romántica” o “Tapas con amigos”. Tu app, tu estilo.
      </p>
    </article>

    <article className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="flex justify-center text-3xl mb-3">🔔</div>
      <h3 className="font-semibold text-[#052838] mb-2 text-center font-headings">
        Alertas de Re-apertura
      </h3>
      <p className="text-[#57636C] text-sm text-center">
        El restaurante que tanto te gustó vuelve a abrir, o tu plato favorito está en especial: te avisamos al instante.
      </p>
    </article>
  </div>
</div>

    </section>
  </Fragment>
);

export default FavoritesPitch;
