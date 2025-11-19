import type { Metadata } from "next";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeHeroCtas from "./components/HomeHeroCtas";
import HomeWaitlistForm from "./components/HomeWaitlistForm";
import ScrollDepthTracker from "./components/ScrollDepthTracker";
import HeroRestaurantsDualShowcase from "./components/HeroRestaurantsDualShowcase";
import HeroRestaurantsShowcase from "./components/HeroRestaurantsShowcase";
import HeroUserShowcase from "./components/HeroUserShowcase";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Gulanity | Descubre dónde ir y crece sin comisiones",
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "Gulanity | Descubre dónde ir y crece sin comisiones",
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: `${siteConfig.url}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Gulanity plataforma para usuarios y restaurantes",
      },
    ],
  },
};

export default function HomePage() {
  const featureCards = [
    {
      title: "Visibilidad cualificada",
      description: "Muestra tus platos a foodies que ya saben lo que quieren pedir.",
    },
    {
      title: "Datos accionables",
      description: "Entiende qué platos funcionan y ajusta tu carta sin adivinar.",
    },
    {
      title: "Clientes sin comisiones",
      description: "Conecta con comensales recurrentes y conserva tu margen.",
    },
  ];
  const userHighlights = [
    {
      title: "Filtra por lo que importa",
      description: "Dieta, antojo, influencer favorito o alérgenos. Tú decides.",
    },
    {
      title: "Reservas honestas",
      description: "Lee opiniones de amigos e influencers verificados y evita sorpresas.",
    },
    {
      title: "Comparte en segundos",
      description: "Guarda tus platos favoritos y recomienda con un solo toque.",
    },
  ];
  return (
    <div className="bg-white text-[#052838]">
      <Header />
      <main>
        <ScrollDepthTracker page="home" />
        <section id="hero" className="hero-full flex items-center bg-gradient-to-b from-[#041522] to-[#062f45] text-white">
          <div className="container-outer grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/70 mb-4">Plataforma dual</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">Encuentra tu plato perfecto. Llena tu restaurante y cumple expectativas.</h1>
              <p className="text-white/80 mb-8">
                Foodies encuentran platos reales con la ayuda de su comunidad. Restaurantes llenan mesa con clientes que llegan listos para decidir. Gulanity alinea expectativas y experiencias.
              </p>
              <HomeHeroCtas />
            </div>
            <div className="relative" key="hero-dual-showcase">
              <HeroRestaurantsDualShowcase />
            </div>
          </div>
        </section>

        <section id="beneficios" className="section-gap bg-gradient-to-br from-white via-gray-50/50 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(212,191,166,0.08),transparent_60%)]" aria-hidden="true" />
          <div className="container-outer relative z-10">
            <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] items-center">
              <div className="order-1 lg:order-1">
                <div className="transform transition-transform duration-500 hover:scale-[1.02] will-change-transform">
                  <HeroRestaurantsShowcase />
                </div>
              </div>
              <div className="order-2 lg:order-2 lg:pl-8">
                <p className="text-xs uppercase tracking-[0.3em] text-[#052838]/50 mb-3">Restaurantes</p>
                <h2 className="font-display text-3xl md:text-4xl mb-4">Más ocupación sin intermediarios</h2>
                <p className="text-[#052838]/70 mb-8 leading-relaxed">
                  Gulanity combina cartas vivas, contenido generado por creadores y datos en tiempo real para atraer a los comensales que amarán tu propuesta.
                </p>
                <div className="space-y-4">
                  {featureCards.map((card) => (
                    <article
                      key={card.title}
                      className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:border-[#D4BFA6]/30 hover:-translate-y-1 transition-all duration-300 group"
                    >
                      <h3 className="text-lg font-semibold mb-1 text-[#052838] group-hover:text-[#D4BFA6] transition-colors">{card.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{card.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="usuarios" className="section-gap bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(244,191,0,0.06),transparent_60%)]" aria-hidden="true" />
          <div className="container-outer relative z-10">
            <div className="grid gap-16 lg:grid-cols-2 items-center">
              <div className="order-2 lg:order-1">
                <p className="text-xs uppercase tracking-[0.3em] text-[#052838]/50 mb-3">Usuarios</p>
                <h2 className="font-display text-3xl md:text-4xl mb-4">Platos que coinciden contigo</h2>
                <p className="text-[#052838]/70 mb-8 leading-relaxed">
                  Explora cartas ricas en contexto, con ingredientes, alérgenos y reseñas de personas en las que confías. Así eliges mejor y recomiendas con seguridad.
                </p>
                <div className="space-y-4">
                  {userHighlights.map((point) => (
                    <div
                      key={point.title}
                      className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-xl hover:border-[#F4BF00]/30 hover:-translate-y-1 transition-all duration-300 group"
                    >
                      <h3 className="font-semibold mb-1 text-[#052838] group-hover:text-[#F4BF00] transition-colors">{point.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{point.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <HeroUserShowcase />
              </div>
            </div>
          </div>
        </section>

        <section id="metricas" className="section-gap bg-white">
          <div className="container-outer grid gap-8 md:grid-cols-3">
            {[
              { value: "+18%", label: "Ticket medio en pruebas internas" },
              { value: "-27%", label: "Cancelaciones tras activar Gulanity" },
              { value: "+22%", label: "Reservas cualificadas por campaña" },
            ].map((metric) => (
              <div key={metric.label} className="text-center border border-gray-100 rounded-3xl p-8 shadow-sm">
                <p className="text-4xl md:text-5xl font-display text-[#D4BFA6] mb-3 metric">{metric.value}</p>
                <p className="text-sm text-gray-600">{metric.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="lista-espera" className="section-gap bg-[#041522] text-white">
          <div className="container-outer grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-3">Lista de espera</p>
              <h2 className="font-display text-3xl md:text-4xl mb-4">Recibe acceso prioritario</h2>
              <p className="text-white/70 mb-8">Te avisamos cuando lancemos oficialmente en tu ciudad y compartimos aprendizajes accionables mientras tanto.</p>
              <HomeWaitlistForm />
              <p className="text-xs text-white/60 mt-3">Sin spam. Compartimos novedades y aprendizajes útiles.</p>
            </div>
            <div className="bg-white text-[#052838] rounded-3xl p-8 shadow-2xl">
              <h3 className="font-display text-2xl mb-4">¿Cómo funciona?</h3>
              <ol className="space-y-4 text-sm text-gray-600">
                {[
                  "Conecta tu carta o envíanos un PDF y la activamos por ti.",
                  "Selecciona objetivos: visibilidad, reservas o lanzamientos.",
                  "Recibe feedback y métricas para ajustar campañas y platos.",
                ].map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span className="text-[#D4BFA6] font-bold">{index + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section id="recursos" className="section-gap bg-white">
          <div className="container-outer grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-gray-100 p-8 shadow-sm">
              <p className="text-xs uppercase tracking-[0.35em] text-[#052838]/60 mb-3">Blog</p>
              <h3 className="font-display text-2xl mb-3">Historias y datos que importan</h3>
              <p className="text-sm text-gray-600 mb-6">Tácticas para restaurantes, insights gastronómicos y novedades del producto.</p>
              <Link href="/blog" className="inline-flex items-center text-[#052838] font-semibold hover:underline">
                Visitar blog →
              </Link>
            </article>
            <article className="rounded-3xl border border-gray-100 p-8 shadow-sm">
              <p className="text-xs uppercase tracking-[0.35em] text-[#052838]/60 mb-3">Plataforma</p>
              <h3 className="font-display text-2xl mb-3">Restaurantes sin comisiones</h3>
              <p className="text-sm text-gray-600 mb-6">Accede al dashboard y gestiona tus campañas cuando recibas acceso.</p>
              <Link
                href={siteConfig.platforms.restaurantLogin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#052838] font-semibold hover:underline"
              >
                Entrar en la plataforma →
              </Link>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
