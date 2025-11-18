import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollDepthTracker from "../../components/ScrollDepthTracker";

export const metadata: Metadata = {
  title: "5 formas de fidelizar clientes en tu restaurante | Gulanity Blog",
  description: "Estrategias probadas para convertir visitantes ocasionales en clientes habituales. Desde programas de lealtad hasta experiencias personalizadas.",
  authors: [{ name: "Equipo Gulanity" }],
  openGraph: {
    title: "5 formas de fidelizar clientes en tu restaurante",
    description: "Estrategias probadas para convertir visitantes ocasionales en clientes habituales. Desde programas de lealtad hasta experiencias personalizadas.",
    type: "article",
    url: "https://gulanity.com/blog/5-formas-fidelizar-clientes-restaurante",
    publishedTime: "2025-08-03T10:00:00.000Z",
    authors: ["Equipo Gulanity"],
    images: [{ url: "https://gulanity.com/blog/5-formas-fidelizar-clientes-restaurante/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "5 formas de fidelizar clientes en tu restaurante",
    description: "Estrategias probadas para convertir visitantes ocasionales en clientes habituales. Desde programas de lealtad hasta experiencias personalizadas.",
    images: ["https://gulanity.com/blog/5-formas-fidelizar-clientes-restaurante/opengraph-image"],
  },
  alternates: {
    canonical: "https://gulanity.com/blog/5-formas-fidelizar-clientes-restaurante",
  },
};

export default function BlogPost() {
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "5 formas de fidelizar clientes en tu restaurante",
    description:
      "Estrategias probadas para convertir visitantes ocasionales en clientes habituales. Desde programas de lealtad hasta experiencias personalizadas.",
    image: {
      "@type": "ImageObject",
      url: "https://gulanity.com/blog/5-formas-fidelizar-clientes-restaurante/opengraph-image",
      width: 1200,
      height: 630,
      caption: "Ilustración de clientes fidelizados en un restaurante",
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
    datePublished: "2025-08-03T10:00:00.000Z",
    dateModified: "2025-08-03T10:00:00.000Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://gulanity.com/blog/5-formas-fidelizar-clientes-restaurante",
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
        name: "5 formas de fidelizar clientes en tu restaurante",
        item: "https://gulanity.com/blog/5-formas-fidelizar-clientes-restaurante",
      },
    ],
  };
  return (
    <div className="min-h-screen bg-white text-[#052838]">
      <Header />
      <main>
        <ScrollDepthTracker page="blog-5-formas-fidelizar-clientes-restaurante" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <nav className="bg-white border-b border-gray-100">
          <div className="container-outer py-4 text-sm text-[#052838]/70 flex flex-wrap items-center gap-1">
            <Link href="/" className="hover:text-[#052838]">Inicio</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#052838]">Blog</Link>
            <span>/</span>
            <span className="text-[#052838]">5 formas de fidelizar clientes en tu restaurante</span>
          </div>
        </nav>
        <section className="section-gap bg-white">
          <div className="container-outer max-w-4xl text-center space-y-4">
            <span className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-[#D4BFA6]/20 text-xs font-semibold uppercase tracking-[0.2em] text-[#052838]">Marketing</span>
            <h1 className="text-4xl md:text-5xl font-display text-[#052838]">5 formas de fidelizar clientes en tu restaurante</h1>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[#052838]/70">
              <time dateTime="2025-08-03">3 de agosto, 2025</time>
              <span>•</span>
              <span>7 min de lectura</span>
              <span>•</span>
              <span>Equipo Gulanity</span>
            </div>
          </div>
        </section>
        <section className="section-gap bg-gray-50">
          <div className="container-outer">
            <article className="max-w-4xl mx-auto bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-[#F5E6D2] via-[#FBEFD9] to-[#F9E5C8] mb-8 flex items-center justify-center">
                <p className="text-[#052838] font-semibold text-center px-6">Imagen conceptual de clientes felices en un restaurante acogedor</p>
              </div>
              <div className="prose prose-lg max-w-none text-[#052838]/80">
                <p className="text-xl text-[#052838]/80 mb-8 leading-relaxed">
                  En el competitivo mundo de la restauración, atraer nuevos clientes es importante, pero retener a los existentes es fundamental para el éxito a largo plazo. Un cliente fiel no solo genera ingresos recurrentes, sino que también se convierte en embajador de tu marca. Descubre estas cinco estrategias probadas para transformar visitantes ocasionales en clientes habituales.
                </p>
                <h2 className="text-2xl font-bold text-[#052838] mt-8 mb-4">1. Crea un programa de lealtad atractivo</h2>
                <p className="text-[#052838]/80 mb-6">
                  Los programas de lealtad son una de las herramientas más efectivas para fidelizar clientes. No se trata solo de ofrecer descuentos, sino de crear una experiencia que haga sentir especiales a tus clientes.
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Sistema de puntos:</strong> Cada euro gastado equivale a puntos canjeables</li>
                  <li><strong>Recompensas por frecuencia:</strong> Beneficios especiales para visitas regulares</li>
                  <li><strong>Ofertas personalizadas:</strong> Descuentos en los platos favoritos del cliente</li>
                  <li><strong>Acceso exclusivo:</strong> Eventos privados o degustaciones para miembros</li>
                </ul>
                <div className="bg-[#D4BFA6]/15 border-l-4 border-[#D4BFA6] p-6 my-8">
                  <h3 className="text-lg font-semibold text-[#052838] mb-2">📊 Dato clave</h3>
                  <p className="text-[#052838]/80">
                    Los clientes inscritos en programas de lealtad gastan un 12-18% más por visita y tienen un 67% más de probabilidades de volver en los próximos 30 días.
                  </p>
                </div>
                <h2 className="text-2xl font-bold text-[#052838] mt-8 mb-4">2. Personaliza la experiencia del cliente</h2>
                <p className="text-[#052838]/80 mb-6">
                  La personalización va más allá de recordar el nombre del cliente. Se trata de entender sus preferencias, restricciones dietéticas y ocasiones especiales para ofrecer un servicio verdaderamente memorable.
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Mantén un registro de preferencias y alergias</li>
                  <li>Recuerda fechas importantes (cumpleaños, aniversarios)</li>
                  <li>Sugiere platos basados en pedidos anteriores</li>
                  <li>Adapta el ambiente según las preferencias del cliente</li>
                </ul>
                <h2 className="text-2xl font-bold text-[#052838] mt-8 mb-4">3. Invierte en un servicio al cliente excepcional</h2>
                <p className="text-[#052838]/80 mb-6">
                  El servicio al cliente es el corazón de cualquier estrategia de fidelización. Un servicio excepcional puede convertir una experiencia ordinaria en extraordinaria y generar recomendaciones boca a boca.
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Capacitación continua:</strong> Personal bien informado sobre el menú y vinos</li>
                  <li><strong>Atención proactiva:</strong> Anticiparse a las necesidades del cliente</li>
                  <li><strong>Resolución rápida:</strong> Manejar quejas de manera eficiente y empática</li>
                  <li><strong>Seguimiento post-visita:</strong> Contactar para asegurar satisfacción</li>
                </ul>
                <h2 className="text-2xl font-bold text-[#052838] mt-8 mb-4">4. Utiliza la tecnología para mejorar la experiencia</h2>
                <p className="text-[#052838]/80 mb-6">
                  La tecnología puede ser tu aliada para crear experiencias más fluidas y personalizadas. Desde reservas online hasta cartas digitales, cada punto de contacto es una oportunidad para impresionar.
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Sistema de reservas inteligente:</strong> Recordatorios automáticos y confirmaciones</li>
                  <li><strong>Cartas digitales interactivas:</strong> Con fotos, ingredientes y recomendaciones</li>
                  <li><strong>App móvil:</strong> Para pedidos, reservas y programa de lealtad</li>
                  <li><strong>Análisis de datos:</strong> Para entender patrones de consumo y preferencias</li>
                </ul>
                <p className="text-[#052838]/80 mb-6">
                  Plataformas como Gulanity pueden ayudarte a implementar estas tecnologías de manera integrada, mejorando tanto la experiencia del cliente como la eficiencia operativa de tu restaurante.
                </p>
                <h2 className="text-2xl font-bold text-[#052838] mt-8 mb-4">5. Mantén una comunicación constante y valiosa</h2>
                <p className="text-[#052838]/80 mb-6">
                  La comunicación regular con tus clientes los mantiene conectados con tu marca. La clave está en proporcionar valor en cada interacción.
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Newsletter mensual:</strong> Con nuevos platos, eventos y ofertas exclusivas</li>
                  <li><strong>Redes sociales activas:</strong> Contenido detrás de escenas y historias del chef</li>
                  <li><strong>Invitaciones especiales:</strong> A cenas temáticas o degustaciones</li>
                  <li><strong>Encuestas de satisfacción:</strong> Para mostrar que valoras su opinión</li>
                </ul>
                <div className="bg-gray-50 rounded-xl p-6 my-8">
                  <h3 className="text-lg font-semibold text-[#052838] mb-3">🎯 Plan de acción</h3>
                  <ol className="list-decimal pl-6 space-y-2 text-[#052838]/80">
                    <li>Evalúa tu programa de lealtad actual (o crea uno nuevo)</li>
                    <li>Implementa un sistema de gestión de clientes (CRM)</li>
                    <li>Capacita a tu equipo en técnicas de servicio personalizado</li>
                    <li>Invierte en tecnología que mejore la experiencia del cliente</li>
                    <li>Desarrolla un calendario de comunicación regular</li>
                  </ol>
                </div>
                <h2 className="text-2xl font-bold text-[#052838] mt-8 mb-4">Conclusión</h2>
                <p className="text-[#052838]/80 mb-6">
                  La fidelización de clientes no es un evento único, sino un proceso continuo que requiere dedicación, creatividad y una comprensión profunda de las necesidades de tus clientes. Al implementar estas cinco estrategias de manera consistente, construirás una base sólida de clientes leales.
                </p>
                <p className="text-[#052838]/80">
                  Recuerda que cada cliente fidelizado es una inversión en el futuro de tu negocio. La lealtad se construye día a día, plato a plato, y experiencia a experiencia.
                </p>
              </div>
              <div className="border-t border-gray-100 pt-8 mt-12 flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#D4BFA6]/40 flex items-center justify-center font-display text-xl text-[#052838]">G</div>
                <div>
                  <h3 className="text-lg font-semibold text-[#052838]">Equipo Gulanity</h3>
                  <p className="text-sm text-[#052838]/70">
                    Expertos en marketing gastronómico y tecnología para restaurantes, ayudando a conectar establecimientos con sus clientes ideales.
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 mt-10 text-center">
                <h3 className="text-2xl font-bold text-[#052838] mb-4">¿Quieres más consejos para tu restaurante?</h3>
                <p className="text-[#052838]/70 mb-6">Descubre más estrategias de marketing y gestión en nuestro blog.</p>
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