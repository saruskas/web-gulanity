import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollDepthTracker from "../components/ScrollDepthTracker";
import BlogNewsletterForm from "../components/BlogNewsletterForm";

export const metadata: Metadata = {
  title: "Blog - Gulanity",
  description: "Descubre consejos sobre restaurantes, gastronomía y tecnología alimentaria. Guías para foodies y restaurantes en el blog de Gulanity.",
  openGraph: {
    title: "Blog - Gulanity",
    description: "Descubre consejos sobre restaurantes, gastronomía y tecnología alimentaria. Guías para foodies y restaurantes en el blog de Gulanity.",
    type: "website",
    url: "https://gulanity.com/blog",
    images: [{ url: "https://gulanity.com/blog/opengraph-image", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://gulanity.com/blog",
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
    <div className="min-h-screen bg-white text-[#052838]">
      <Header />
      <main>
        <ScrollDepthTracker page="blog" />
        <section className="section-gap bg-white border-b border-gray-100 pt-24 md:pt-28">
          <div className="container-outer">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs tracking-[0.4em] uppercase text-[#052838]/60 mb-4">Historias Gulanity</p>
              <h1 className="text-[#052838] font-display mb-6">Blog de Gulanity</h1>
              <p className="text-[#052838]/70 leading-relaxed">
                Tendencias, aprendizajes y tácticas para que restaurantes y foodies tomen mejores decisiones. Seleccionamos historias con la misma curaduría que aplicamos en cada experiencia de la plataforma.
              </p>
            </div>
          </div>
        </section>
        <section className="section-gap bg-gray-50">
          <div className="container-outer">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <h2 className="text-[#052838] font-display text-3xl md:text-4xl mb-3">Últimos artículos</h2>
              <p className="text-[#052838]/70">Selección de historias recientes para restaurantes y foodies.</p>
            </div>
            <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <article key={post.slug} className="rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_20px_45px_rgba(5,20,46,0.08)] flex flex-col gap-4">
                  <div className="text-xs uppercase tracking-wide text-[#052838]/60 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#D4BFA6]/40 bg-[#D4BFA6]/10 px-3 py-1 text-[#052838] font-semibold">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-[#052838]">{post.title}</h3>
                  <p className="text-sm leading-relaxed text-[#052838]/70 flex-1">{post.summary}</p>
                  <div className="flex items-center justify-between text-sm text-[#052838]/60">
                    <time>
                      {new Date(post.date).toLocaleDateString("es-ES", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-[#052838] font-semibold hover:gap-3 transition-all">
                      Leer más
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section-gap bg-white">
          <div className="container-outer">
            <div className="rounded-[32px] border border-gray-100 bg-gray-50 p-10 text-center shadow-sm space-y-5">
              <p className="text-xs uppercase tracking-[0.4em] text-[#052838]/50">Newsletter</p>
              <h2 className="text-[#052838] font-display text-3xl">¿Te gustó nuestro contenido?</h2>
              <p className="text-[#052838]/70 max-w-2xl mx-auto">
                Suscríbete para recibir historias relevantes sobre data gastronómica, fidelización e innovación sin ruido y con el tono cercano de Gulanity.
              </p>
              <BlogNewsletterForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}