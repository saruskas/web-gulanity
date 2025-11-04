import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cómo elegir el plato perfecto según tu dieta | Gulanity Blog",
  description: "Descubre las claves para seleccionar platos que se adapten perfectamente a tus necesidades dietéticas, desde vegano hasta keto, sin renunciar al sabor.",
  keywords: ["dieta personalizada", "elegir platos", "alimentación saludable", "dieta vegana", "dieta keto", "nutrición restaurantes"],
  authors: [{ name: "Equipo Gulanity" }],
  openGraph: {
    title: "Cómo elegir el plato perfecto según tu dieta",
    description: "Descubre las claves para seleccionar platos que se adapten perfectamente a tus necesidades dietéticas, desde vegano hasta keto, sin renunciar al sabor.",
    type: "article",
    publishedTime: "2025-08-05T10:00:00.000Z",
    authors: ["Equipo Gulanity"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cómo elegir el plato perfecto según tu dieta",
    description: "Descubre las claves para seleccionar platos que se adapten perfectamente a tus necesidades dietéticas, desde vegano hasta keto, sin renunciar al sabor.",
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
            <li className="text-gray-900">Cómo elegir el plato perfecto según tu dieta</li>
          </ol>
        </div>
      </nav>

      {/* Article Header */}
      <header className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-[#052838] bg-[#FCDB7D] rounded-full mb-4">
              Guías
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#052838] mb-6">
              Cómo elegir el plato perfecto según tu dieta
            </h1>
            <div className="flex items-center justify-center space-x-6 text-gray-600">
              <time dateTime="2025-08-05">5 de agosto, 2025</time>
              <span>•</span>
              <span>5 min de lectura</span>
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
              Imagen: Platos variados representando diferentes tipos de dietas
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
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

            <div className="bg-[#FCDB7D] bg-opacity-20 border-l-4 border-[#FCDB7D] p-6 my-8">
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

          {/* Author Bio */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FCDB7D] to-yellow-300 rounded-full flex items-center justify-center mr-4">
                <span className="text-[#052838] font-bold text-lg">G</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#052838]">Equipo Gulanity</h3>
                <p className="text-gray-600">
                  Expertos en gastronomía y tecnología alimentaria, comprometidos con conectar 
                  foodies y restaurantes de manera inteligente.
                </p>
              </div>
            </div>
          </div>

          {/* Related Posts CTA */}
          <div className="bg-gray-50 rounded-xl p-8 mt-12">
            <h3 className="text-2xl font-bold text-[#052838] mb-4 text-center">
              ¿Te gustó este artículo?
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Descubre más consejos y guías en nuestro blog
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