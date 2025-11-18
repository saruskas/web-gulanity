import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollDepthTracker from "../../components/ScrollDepthTracker";

export const metadata: Metadata = {
  title: "El futuro de la carta digital con IA | Gulanity Blog",
  description: "Explora cómo la inteligencia artificial está revolucionando las cartas digitales, mejorando la experiencia del cliente y optimizando las ventas.",
  authors: [{ name: "Equipo Gulanity" }],
  openGraph: {
    title: "El futuro de la carta digital con IA",
    description: "Explora cómo la inteligencia artificial está revolucionando las cartas digitales, mejorando la experiencia del cliente y optimizando las ventas.",
    type: "article",
    url: "https://gulanity.com/blog/futuro-carta-digital-ia",
    publishedTime: "2025-08-01T10:00:00.000Z",
    authors: ["Equipo Gulanity"],
    images: [{ url: "https://gulanity.com/blog/futuro-carta-digital-ia/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "El futuro de la carta digital con IA",
    description: "Explora cómo la inteligencia artificial está revolucionando las cartas digitales, mejorando la experiencia del cliente y optimizando las ventas.",
    images: ["https://gulanity.com/blog/futuro-carta-digital-ia/opengraph-image"],
  },
  alternates: {
    canonical: "https://gulanity.com/blog/futuro-carta-digital-ia",
  },
};

export default function BlogPost() {
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "El futuro de la carta digital con IA",
    description:
      "Explora cómo la inteligencia artificial está revolucionando las cartas digitales, mejorando la experiencia del cliente y optimizando las ventas.",
    image: {
      "@type": "ImageObject",
      url: "https://gulanity.com/blog/futuro-carta-digital-ia/opengraph-image",
      width: 1200,
      height: 630,
      caption: "Ilustración de carta digital con inteligencia artificial",
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
      logo: {
        "@type": "ImageObject",
        url: "https://gulanity.com/logo.png",
        width: 500,
        height: 500,
      },
    },
    datePublished: "2025-08-01T10:00:00.000Z",
    dateModified: "2025-08-01T10:00:00.000Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://gulanity.com/blog/futuro-carta-digital-ia",
    },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://gulanity.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://gulanity.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "El futuro de la carta digital con IA",
        item: "https://gulanity.com/blog/futuro-carta-digital-ia",
      },
    ],
  };
  return (
    <div className="min-h-screen bg-white text-[#052838]">
      <Header />
      <main>
        <ScrollDepthTracker page="blog-futuro-carta-digital-ia" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <nav className="bg-white border-b border-gray-100">
          <div className="container-outer py-4 text-sm text-[#052838]/70 flex flex-wrap items-center gap-1">
            <Link href="/" className="hover:text-[#052838]">Inicio</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#052838]">Blog</Link>
            <span>/</span>
            <span className="text-[#052838]">El futuro de la carta digital con IA</span>
          </div>
        </nav>
        <section className="section-gap bg-white">
          <div className="container-outer max-w-4xl text-center space-y-4">
            <span className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-[#D4BFA6]/20 text-xs font-semibold uppercase tracking-[0.2em] text-[#052838]">Tecnología</span>
            <h1 className="text-4xl md:text-5xl font-display text-[#052838]">El futuro de la carta digital con IA</h1>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[#052838]/70">
              <time dateTime="2025-08-01">1 de agosto, 2025</time>
              <span>•</span>
              <span>6 min de lectura</span>
              <span>•</span>
              <span>Equipo Gulanity</span>
            </div>
          </div>
        </section>
        <section className="section-gap bg-gray-50">
          <div className="container-outer">
            <article className="max-w-4xl mx-auto bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-[#F5E6D2] via-[#FBEFD9] to-[#F9E5C8] mb-8 flex items-center justify-center">
                <p className="text-[#052838] font-semibold text-center px-6">Imagen conceptual de una carta digital inteligente potenciada por IA</p>
              </div>
              <div className="space-y-6 text-[#052838]/80 leading-relaxed">
                <p>
                  La inteligencia artificial está transformando la industria gastronómica de maneras que apenas comenzamos a imaginar. Las cartas digitales potenciadas por IA no son solo una evolución tecnológica, sino una revolución que redefine cómo los restaurantes interactúan con sus clientes y optimizan sus operaciones.
                </p>
                <h2 className="text-2xl font-bold text-[#052838]">¿Qué son las cartas digitales con IA?</h2>
                <p>
                  Una carta digital con IA utiliza algoritmos de aprendizaje automático para analizar datos del cliente, patrones de pedidos, preferencias dietéticas y contexto situacional y así ofrecer recomendaciones personalizadas en tiempo real. Estas plataformas adaptan contenido, precios y sugerencias según la hora, el clima, la disponibilidad de ingredientes y el historial de pedidos.
                </p>
                <h2 className="text-2xl font-bold text-[#052838]">Beneficios para los clientes</h2>
                <p>La IA crea experiencias más personalizadas para los comensales:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Recomendaciones basadas en preferencias y restricciones.</li>
                  <li>Información nutricional precisa y detallada.</li>
                  <li>Experiencia multiidioma con adaptación cultural.</li>
                  <li>Búsqueda inteligente por ingredientes, cocina o características.</li>
                  <li>Precios dinámicos y promociones relevantes.</li>
                </ul>
                <div className="bg-[#D4BFA6]/15 border-l-4 border-[#D4BFA6] p-6">
                  <h3 className="text-lg font-semibold text-[#052838] mb-2">🚀 Caso de éxito</h3>
                  <p>Un restaurante en Barcelona implementó cartas digitales con IA y aumentó un 23% el ticket promedio y un 35% la satisfacción del cliente en solo tres meses.</p>
                </div>
                <h2 className="text-2xl font-bold text-[#052838]">Ventajas para los restaurantes</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Optimización de inventario y reducción de desperdicios.</li>
                  <li>Insights profundos del comportamiento del cliente.</li>
                  <li>Gestión dinámica de precios según demanda.</li>
                  <li>Reducción de costos operativos y marketing dirigido.</li>
                </ul>
                <h2 className="text-2xl font-bold text-[#052838]">Tecnologías clave</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Machine Learning y análisis predictivo.</li>
                  <li>Procesamiento de lenguaje natural.</li>
                  <li>Visión por computadora.</li>
                  <li>IoT y sensores conectados.</li>
                </ul>
                <h2 className="text-2xl font-bold text-[#052838]">Implementación práctica</h2>
                <p>La adopción puede ser gradual:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Evalúa necesidades y objetivos.</li>
                  <li>Digitaliza el menú.</li>
                  <li>Recopila datos de clientes.</li>
                  <li>Integra funciones de IA progresivamente.</li>
                  <li>Capacita al equipo y optimiza con feedback.</li>
                </ol>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-[#052838] mb-2">💡 Consejo</h3>
                  <p>Comienza con recomendaciones simples y análisis de popularidad; escala a funcionalidades avanzadas conforme obtienes más datos.</p>
                </div>
                <h2 className="text-2xl font-bold text-[#052838]">Desafíos y consideraciones</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Privacidad y protección de datos.</li>
                  <li>Curva de aprendizaje del personal.</li>
                  <li>Inversión inicial y mantenimiento.</li>
                  <li>Plan de contingencia tecnológica.</li>
                </ul>
                <h2 className="text-2xl font-bold text-[#052838]">El papel de Gulanity</h2>
                <p>
                  Plataformas como Gulanity acercan la IA a restaurantes de todos los tamaños con soluciones que combinan recomendaciones, análisis predictivo y gestión de inventario desde una interfaz intuitiva.
                </p>
                <h2 className="text-2xl font-bold text-[#052838]">Mirando hacia el futuro</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Realidad aumentada para visualizar platos.</li>
                  <li>Integración con wearables para recomendaciones de salud.</li>
                  <li>Asistentes conversacionales para pedidos.</li>
                  <li>Análisis emocional para adaptar sugerencias.</li>
                  <li>Sostenibilidad inteligente con sugerencias eco-friendly.</li>
                </ul>
                <h2 className="text-2xl font-bold text-[#052838]">Conclusión</h2>
                <p>
                  El futuro de la carta digital con IA ya está aquí. Los restaurantes que adopten estas tecnologías obtendrán ventaja competitiva en eficiencia, satisfacción y rentabilidad. La pregunta no es si llegará, sino cuándo estarás listo para aprovecharla.
                </p>
              </div>
              <div className="border-t border-gray-100 pt-8 mt-12 flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#D4BFA6]/40 flex items-center justify-center font-display text-xl text-[#052838]">G</div>
                <div>
                  <h3 className="text-lg font-semibold text-[#052838]">Equipo Gulanity</h3>
                  <p className="text-sm text-[#052838]/70">Pioneros en tecnología gastronómica e inteligencia artificial aplicada a restaurantes.</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 mt-10 text-center">
                <h3 className="text-2xl font-bold text-[#052838] mb-4">¿Listo para el futuro digital?</h3>
                <p className="text-[#052838]/70 mb-6">Descubre más sobre innovación gastronómica en nuestro blog.</p>
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