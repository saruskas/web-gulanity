import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollDepthTracker from "../../components/ScrollDepthTracker";

export const metadata: Metadata = {
  title: "Cómo elegir el plato perfecto según tu dieta | Gulanity Blog",
  description: "Descubre las claves para seleccionar platos que se adapten perfectamente a tus necesidades dietéticas, desde vegano hasta keto, sin renunciar al sabor.",
  authors: [{ name: "Equipo Gulanity" }],
  openGraph: {
    title: "Cómo elegir el plato perfecto según tu dieta",
    description: "Descubre las claves para seleccionar platos que se adapten perfectamente a tus necesidades dietéticas, desde vegano hasta keto, sin renunciar al sabor.",
    type: "article",
    url: "https://gulanity.com/blog/como-elegir-plato-perfecto-segun-dieta",
    publishedTime: "2025-08-05T10:00:00.000Z",
    authors: ["Equipo Gulanity"],
    images: [{ url: "https://gulanity.com/blog/como-elegir-plato-perfecto-segun-dieta/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cómo elegir el plato perfecto según tu dieta",
    description: "Descubre las claves para seleccionar platos que se adapten perfectamente a tus necesidades dietéticas, desde vegano hasta keto, sin renunciar al sabor.",
    images: ["https://gulanity.com/blog/como-elegir-plato-perfecto-segun-dieta/opengraph-image"],
  },
  alternates: {
    canonical: "https://gulanity.com/blog/como-elegir-plato-perfecto-segun-dieta",
  },
};

export default function BlogPost() {
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Cómo elegir el plato perfecto según tu dieta",
    description:
      "Descubre las claves para seleccionar platos que se adapten perfectamente a tus necesidades dietéticas, desde vegano hasta keto, sin renunciar al sabor.",
    image: {
      "@type": "ImageObject",
      url: "https://gulanity.com/blog/como-elegir-plato-perfecto-segun-dieta/opengraph-image",
      width: 1200,
      height: 630,
      caption: "Selección de platos adaptados a diferentes dietas",
    },
    author: {
      "@type": "Organization",
      name: "Gulanity",
      url: "https://gulanity.com",
      logo: {
        "@type": "ImageObject",
        url: "https://gulanity.com/logo.png",
        width: 500,
        height: 500,
      },
    },
    publisher: {
      "@type": "Organization",
      name: "Gulanity",
      logo: { "@type": "ImageObject", url: "https://gulanity.com/logo.png", width: 500, height: 500 },
    },
    datePublished: "2025-08-05T10:00:00.000Z",
    dateModified: "2025-08-05T10:00:00.000Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://gulanity.com/blog/como-elegir-plato-perfecto-segun-dieta",
    },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://gulanity.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://gulanity.com/blog" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Cómo elegir el plato perfecto según tu dieta",
        item: "https://gulanity.com/blog/como-elegir-plato-perfecto-segun-dieta",
      },
    ],
  };
  return (
    <div className="min-h-screen bg-white text-[#052838]">
      <Header />
      <main>
        <ScrollDepthTracker page="blog-como-elegir-plato-perfecto-segun-dieta" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <nav className="bg-white border-b border-gray-100">
          <div className="container-outer py-4 text-sm text-[#052838]/70 flex flex-wrap items-center gap-1">
            <Link href="/" className="hover:text-[#052838]">Inicio</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#052838]">Blog</Link>
            <span>/</span>
            <span className="text-[#052838]">Cómo elegir el plato perfecto según tu dieta</span>
          </div>
        </nav>
        <section className="section-gap bg-white">
          <div className="container-outer max-w-4xl text-center space-y-4">
            <span className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-[#D4BFA6]/20 text-xs font-semibold uppercase tracking-[0.2em] text-[#052838]">Guías</span>
            <h1 className="text-4xl md:text-5xl font-display text-[#052838]">Cómo elegir el plato perfecto según tu dieta</h1>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[#052838]/70">
              <time dateTime="2025-08-05">5 de agosto, 2025</time>
              <span>•</span>
              <span>5 min de lectura</span>
              <span>•</span>
              <span>Equipo Gulanity</span>
            </div>
          </div>
        </section>
        <section className="section-gap bg-gray-50">
          <div className="container-outer">
            <article className="max-w-4xl mx-auto bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-[#F5E6D2] via-[#FBEFD9] to-[#F9E5C8] mb-8 flex items-center justify-center">
                <p className="text-[#052838] font-semibold text-center px-6">Imagen conceptual de platos variados que representan diferentes tipos de dietas</p>
              </div>
              <div className="prose prose-lg max-w-none text-[#052838]/80">
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              En la era de la personalización alimentaria, elegir el plato adecuado según tus necesidades dietéticas 
              se ha convertido en una habilidad esencial. Ya sea que sigas una dieta específica por salud, 
              ética o preferencia personal, esta guía te ayudará a tomar decisiones informadas sin sacrificar el placer culinario.
            </p>

            <h2 className="text-2xl font-bold text-[#052838] mt-8 mb-4">1. Conoce tu tipo de dieta</h2>
            <p className="text-gray-700 mb-6">
              Antes de elegir cualquier plato, es fundamental entender las características de tu dieta:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Dieta vegana:</strong> Excluye todos los productos de origen animal</li>
              <li><strong>Dieta vegetariana:</strong> Permite lácteos y huevos, pero no carne ni pescado</li>
              <li><strong>Dieta keto:</strong> Alta en grasas, moderada en proteínas, muy baja en carbohidratos</li>
              <li><strong>Dieta mediterránea:</strong> Rica en aceite de oliva, pescado, frutas y verduras</li>
              <li><strong>Dieta sin gluten:</strong> Elimina trigo, cebada, centeno y sus derivados</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#052838] mt-8 mb-4">2. Lee los ingredientes cuidadosamente</h2>
            <p className="text-gray-700 mb-6">
              La clave está en los detalles. Muchos platos pueden parecer compatibles con tu dieta, 
              pero contener ingredientes ocultos que no lo son. Siempre pregunta al personal del restaurante 
              sobre los métodos de preparación y los ingredientes específicos.
            </p>

            <h2 className="text-2xl font-bold text-[#052838] mt-8 mb-4">3. Busca opciones de personalización</h2>
            <p className="text-gray-700 mb-6">
              Los mejores restaurantes ofrecen flexibilidad en sus platos. No dudes en preguntar por:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Sustituciones de ingredientes</li>
              <li>Preparaciones alternativas (al vapor en lugar de frito)</li>
              <li>Salsas y aderezos servidos por separado</li>
              <li>Porciones ajustadas según tus necesidades</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#052838] mt-8 mb-4">4. Utiliza la tecnología a tu favor</h2>
            <p className="text-gray-700 mb-6">
              Aplicaciones como Gulanity te permiten filtrar restaurantes y platos según tus preferencias dietéticas, 
              ahorrándote tiempo y garantizando que encuentres opciones que se adapten perfectamente a tus necesidades.
            </p>

            <h2 className="text-2xl font-bold text-[#052838] mt-8 mb-4">5. No tengas miedo de preguntar</h2>
            <p className="text-gray-700 mb-6">
              El personal de restaurante está ahí para ayudarte. Una comunicación clara sobre tus restricciones 
              dietéticas no solo te asegura una mejor experiencia, sino que también ayuda al restaurante a 
              mejorar su servicio para futuros clientes con necesidades similares.
            </p>

            <div className="bg-[#F4BF00] bg-opacity-20 border-l-4 border-[#F4BF00] p-6 my-8">
              <h3 className="text-lg font-semibold text-[#052838] mb-2">💡 Consejo Pro</h3>
              <p className="text-gray-700">
                Mantén una lista en tu teléfono con tus restricciones dietéticas y alergias. 
                Esto te ayudará a comunicarte de manera más efectiva con el personal del restaurante 
                y evitará malentendidos.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-[#052838] mt-8 mb-4">Conclusión</h2>
            <p className="text-gray-700 mb-6">
              Elegir el plato perfecto según tu dieta no tiene por qué ser complicado. Con la información adecuada, 
              las herramientas correctas y una comunicación clara, puedes disfrutar de experiencias culinarias 
              increíbles que se alineen perfectamente con tus necesidades y valores.
            </p>
            <p className="text-gray-700">
              Recuerda que cada salida a comer es una oportunidad para descubrir nuevos sabores y apoyar 
              restaurantes que valoran la diversidad dietética de sus clientes.
            </p>
          </div>
              <div className="border-t border-gray-100 pt-8 mt-12 flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#D4BFA6]/40 flex items-center justify-center font-display text-xl text-[#052838]">G</div>
                <div>
                  <h3 className="text-lg font-semibold text-[#052838]">Equipo Gulanity</h3>
                  <p className="text-sm text-[#052838]/70">Expertos en gastronomía y tecnología alimentaria, comprometidos con conectar foodies y restaurantes de manera inteligente.</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 mt-10 text-center">
                <h3 className="text-2xl font-bold mb-4 text-[#052838]">¿Te gustó este artículo?</h3>
                <p className="text-[#052838]/70 mb-6">Descubre más consejos y guías en nuestro blog.</p>
                <Link href="/blog" className="inline-flex items-center justify-center rounded-full bg-[#D4BFA6] px-8 py-3 font-semibold text-[#052838] hover:opacity-90 transition-opacity">
                  Ver más artículos
                </Link>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}