import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "5 formas de fidelizar clientes en tu restaurante | Gulanity Blog",
  description: "Estrategias probadas para convertir visitantes ocasionales en clientes habituales. Desde programas de lealtad hasta experiencias personalizadas.",
  keywords: ["fidelización clientes restaurante", "marketing restaurantes", "programas lealtad", "retención clientes", "estrategias restaurante"],
  authors: [{ name: "Equipo Gulanity" }],
  openGraph: {
    title: "5 formas de fidelizar clientes en tu restaurante",
    description: "Estrategias probadas para convertir visitantes ocasionales en clientes habituales. Desde programas de lealtad hasta experiencias personalizadas.",
    type: "article",
    publishedTime: "2025-08-03T10:00:00.000Z",
    authors: ["Equipo Gulanity"],
  },
  twitter: {
    card: "summary_large_image",
    title: "5 formas de fidelizar clientes en tu restaurante",
    description: "Estrategias probadas para convertir visitantes ocasionales en clientes habituales. Desde programas de lealtad hasta experiencias personalizadas.",
  },
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4 pt-[76px]">
        <div className="max-w-4xl mx-auto px-6">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-[#FCDB7D]">Inicio</Link></li>
            <li><span className="mx-2">/</span></li>
            <li><Link href="/blog" className="hover:text-[#FCDB7D]">Blog</Link></li>
            <li><span className="mx-2">/</span></li>
            <li className="text-gray-900">5 formas de fidelizar clientes en tu restaurante</li>
          </ol>
        </div>
      </nav>

      {/* Article Header */}
      <header className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-[#052838] bg-[#FCDB7D] rounded-full mb-4">
              Marketing
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#052838] mb-6">
              5 formas de fidelizar clientes en tu restaurante
            </h1>
            <div className="flex items-center justify-center space-x-6 text-gray-600">
              <time dateTime="2025-08-03">3 de agosto, 2025</time>
              <span>•</span>
              <span>7 min de lectura</span>
              <span>•</span>
              <span>Por Equipo Gulanity</span>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Featured Image Placeholder */}
          <div className="aspect-video bg-gradient-to-br from-[#FCDB7D] to-yellow-300 rounded-xl mb-8 flex items-center justify-center">
            <div className="text-[#052838] font-semibold text-xl text-center px-6">
              Imagen: Clientes felices en un restaurante acogedor
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              En el competitivo mundo de la restauración, atraer nuevos clientes es importante, pero retener a los existentes 
              es fundamental para el éxito a largo plazo. Un cliente fiel no solo genera ingresos recurrentes, sino que también 
              se convierte en embajador de tu marca. Descubre estas cinco estrategias probadas para transformar visitantes 
              ocasionales en clientes habituales.
            </p>

            <h2 className="text-2xl font-bold text-[#052838] mt-8 mb-4">1. Crea un programa de lealtad atractivo</h2>
            <p className="text-gray-700 mb-6">
              Los programas de lealtad son una de las herramientas más efectivas para fidelizar clientes. 
              No se trata solo de ofrecer descuentos, sino de crear una experiencia que haga sentir especiales a tus clientes.
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Sistema de puntos:</strong> Cada euro gastado equivale a puntos canjeables</li>
              <li><strong>Recompensas por frecuencia:</strong> Beneficios especiales para visitas regulares</li>
              <li><strong>Ofertas personalizadas:</strong> Descuentos en los platos favoritos del cliente</li>
              <li><strong>Acceso exclusivo:</strong> Eventos privados o degustaciones para miembros</li>
            </ul>

            <div className="bg-[#FCDB7D] bg-opacity-20 border-l-4 border-[#FCDB7D] p-6 my-8">
              <h3 className="text-lg font-semibold text-[#052838] mb-2">📊 Dato clave</h3>
              <p className="text-gray-700">
                Los clientes inscritos en programas de lealtad gastan un 12-18% más por visita 
                y tienen un 67% más de probabilidades de volver en los próximos 30 días.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-[#052838] mt-8 mb-4">2. Personaliza la experiencia del cliente</h2>
            <p className="text-gray-700 mb-6">
              La personalización va más allá de recordar el nombre del cliente. Se trata de entender sus preferencias, 
              restricciones dietéticas y ocasiones especiales para ofrecer un servicio verdaderamente memorable.
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Mantén un registro de preferencias y alergias</li>
              <li>Recuerda fechas importantes (cumpleaños, aniversarios)</li>
              <li>Sugiere platos basados en pedidos anteriores</li>
              <li>Adapta el ambiente según las preferencias del cliente</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#052838] mt-8 mb-4">3. Invierte en un servicio al cliente excepcional</h2>
            <p className="text-gray-700 mb-6">
              El servicio al cliente es el corazón de cualquier estrategia de fidelización. Un servicio excepcional 
              puede convertir una experiencia ordinaria en extraordinaria y generar recomendaciones boca a boca.
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Capacitación continua:</strong> Personal bien informado sobre el menú y vinos</li>
              <li><strong>Atención proactiva:</strong> Anticiparse a las necesidades del cliente</li>
              <li><strong>Resolución rápida:</strong> Manejar quejas de manera eficiente y empática</li>
              <li><strong>Seguimiento post-visita:</strong> Contactar para asegurar satisfacción</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#052838] mt-8 mb-4">4. Utiliza la tecnología para mejorar la experiencia</h2>
            <p className="text-gray-700 mb-6">
              La tecnología puede ser tu aliada para crear experiencias más fluidas y personalizadas. 
              Desde reservas online hasta cartas digitales, cada punto de contacto es una oportunidad para impresionar.
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Sistema de reservas inteligente:</strong> Recordatorios automáticos y confirmaciones</li>
              <li><strong>Cartas digitales interactivas:</strong> Con fotos, ingredientes y recomendaciones</li>
              <li><strong>App móvil:</strong> Para pedidos, reservas y programa de lealtad</li>
              <li><strong>Análisis de datos:</strong> Para entender patrones de consumo y preferencias</li>
            </ul>

            <p className="text-gray-700 mb-6">
              Plataformas como Gulanity pueden ayudarte a implementar estas tecnologías de manera integrada, 
              mejorando tanto la experiencia del cliente como la eficiencia operativa de tu restaurante.
            </p>

            <h2 className="text-2xl font-bold text-[#052838] mt-8 mb-4">5. Mantén una comunicación constante y valiosa</h2>
            <p className="text-gray-700 mb-6">
              La comunicación regular con tus clientes los mantiene conectados con tu marca, incluso cuando no están 
              físicamente en tu restaurante. La clave está en proporcionar valor en cada interacción.
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Newsletter mensual:</strong> Con nuevos platos, eventos y ofertas exclusivas</li>
              <li><strong>Redes sociales activas:</strong> Contenido detrás de escenas y historias del chef</li>
              <li><strong>Invitaciones especiales:</strong> A cenas temáticas o degustaciones</li>
              <li><strong>Encuestas de satisfacción:</strong> Para mostrar que valoras su opinión</li>
            </ul>

            <div className="bg-gray-50 rounded-xl p-6 my-8">
              <h3 className="text-lg font-semibold text-[#052838] mb-3">🎯 Plan de acción</h3>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>Evalúa tu programa de lealtad actual (o crea uno nuevo)</li>
                <li>Implementa un sistema de gestión de clientes (CRM)</li>
                <li>Capacita a tu equipo en técnicas de servicio personalizado</li>
                <li>Invierte en tecnología que mejore la experiencia del cliente</li>
                <li>Desarrolla un calendario de comunicación regular</li>
              </ol>
            </div>

            <h2 className="text-2xl font-bold text-[#052838] mt-8 mb-4">Conclusión</h2>
            <p className="text-gray-700 mb-6">
              La fidelización de clientes no es un evento único, sino un proceso continuo que requiere dedicación, 
              creatividad y una comprensión profunda de las necesidades de tus clientes. Al implementar estas cinco 
              estrategias de manera consistente, no solo aumentarás la frecuencia de visitas, sino que también 
              construirás una base sólida de clientes leales que impulsarán el crecimiento sostenible de tu restaurante.
            </p>
            <p className="text-gray-700">
              Recuerda que cada cliente fidelizado es una inversión en el futuro de tu negocio. 
              La lealtad se construye día a día, plato a plato, y experiencia a experiencia.
            </p>
          </div>

          {/* Author Bio */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FCDB7D] to-yellow-300 rounded-full flex items-center justify-center mr-4">
                <span className="text-[#052838] font-bold text-lg">G</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#052838]">Equipo Gulanity</h3>
                <p className="text-gray-600">
                  Expertos en marketing gastronómico y tecnología para restaurantes, 
                  ayudando a conectar establecimientos con sus clientes ideales.
                </p>
              </div>
            </div>
          </div>

          {/* Related Posts CTA */}
          <div className="bg-gray-50 rounded-xl p-8 mt-12">
            <h3 className="text-2xl font-bold text-[#052838] mb-4 text-center">
              ¿Quieres más consejos para tu restaurante?
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Descubre más estrategias de marketing y gestión en nuestro blog
            </p>
            <div className="text-center">
              <Link
                href="/blog"
                className="inline-block px-8 py-3 bg-gradient-to-r from-[#FCDB7D] to-yellow-300 text-[#052838] font-semibold rounded-full hover:opacity-90 transition-opacity"
              >
                Ver más artículos
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}