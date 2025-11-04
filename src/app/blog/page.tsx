import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog - Gulanity",
  description: "Descubre consejos sobre restaurantes, gastronomía y tecnología alimentaria. Guías para foodies y restaurantes en el blog de Gulanity.",
  keywords: ["blog gastronomía", "consejos restaurantes", "tecnología alimentaria", "guías foodies", "marketing restaurantes"],
  openGraph: {
    title: "Blog - Gulanity",
    description: "Descubre consejos sobre restaurantes, gastronomía y tecnología alimentaria. Guías para foodies y restaurantes en el blog de Gulanity.",
    type: "website",
  },
};

// Blog posts data - in a real app, this would come from a CMS or database
const blogPosts = [
  {
    slug: "como-elegir-plato-perfecto-segun-dieta",
    title: "Cómo elegir el plato perfecto según tu dieta",
    summary: "Descubre las claves para seleccionar platos que se adapten perfectamente a tus necesidades dietéticas, desde vegano hasta keto, sin renunciar al sabor.",
    date: "2025-08-05",
    readTime: "5 min",
    category: "Guías",
    image: "/blog/plato-perfecto-dieta.jpg"
  },
  {
    slug: "5-formas-fidelizar-clientes-restaurante",
    title: "5 formas de fidelizar clientes en tu restaurante",
    summary: "Estrategias probadas para convertir visitantes ocasionales en clientes habituales. Desde programas de lealtad hasta experiencias personalizadas.",
    date: "2025-08-03",
    readTime: "7 min",
    category: "Marketing",
    image: "/blog/fidelizar-clientes-restaurante.jpg"
  },
  {
    slug: "futuro-carta-digital-ia",
    title: "El futuro de la carta digital con IA",
    summary: "Explora cómo la inteligencia artificial está revolucionando las cartas digitales, mejorando la experiencia del cliente y optimizando las ventas.",
    date: "2025-08-01",
    readTime: "6 min",
    category: "Tecnología",
    image: "/blog/carta-digital-ia.jpg"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#052838] to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog de <span className="text-[#FCDB7D]">Gulanity</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Descubre consejos, tendencias y guías sobre gastronomía, tecnología alimentaria 
              y estrategias para restaurantes. Tu fuente de conocimiento culinario.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
              >
                {/* Post Image */}
                <div className="aspect-video bg-gradient-to-br from-[#FCDB7D] to-yellow-300 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-[#052838] font-semibold text-lg text-center px-4">
                      {post.title}
                    </div>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-[#052838] bg-[#FCDB7D] rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-[#052838] mb-3 line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.summary}
                  </p>

                  <div className="flex items-center justify-between">
                    <time className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-[#052838] hover:text-[#FCDB7D] font-semibold transition-colors"
                    >
                      Leer más
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#052838] mb-4">
            ¿Te gustó nuestro contenido?
          </h2>
          <p className="text-gray-600 mb-8">
            Suscríbete a nuestro newsletter y recibe los últimos artículos, 
            consejos y novedades directamente en tu bandeja de entrada.
          </p>
          <Link
            href="#newsletter"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#FCDB7D] to-yellow-300 text-[#052838] font-semibold rounded-full hover:opacity-90 transition-opacity"
          >
            Suscribirse al Newsletter
          </Link>
        </div>
      </section>
    </div>
  );
}