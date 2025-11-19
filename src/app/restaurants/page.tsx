import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollDepthTracker from "../components/ScrollDepthTracker";
import { HeroShowcaseSkeleton, ContentSectionSkeleton } from "../components/Skeleton";
import RestaurantsHeroActions from "./RestaurantsHeroActions";
import { CheckCircle2, TrendingUp, Users, BarChart3, Zap } from "lucide-react";

const HeroRestaurantsShowcase = dynamic(() => import("../components/HeroRestaurantsShowcase"), {
  loading: () => <HeroShowcaseSkeleton variant="dark" />,
});

const RestaurantsClient = dynamic(() => import("./RestaurantsClient"), {
  loading: () => (
    <>
      <section className="section-gap bg-white">
        <div className="container-outer max-w-2xl">
          <ContentSectionSkeleton />
        </div>
      </section>
      <section className="section-gap bg-gray-50">
        <div className="container-outer max-w-2xl">
          <ContentSectionSkeleton />
        </div>
      </section>
    </>
  ),
});

export const metadata: Metadata = {
  title: "Restaurantes - Gulanity | Crece sin comisiones",
  description: "Plataforma para restaurantes que quieren atraer clientes cualificados sin comisiones. Conecta con foodies y aumenta tu ocupación.",
  openGraph: {
    title: "Restaurantes - Gulanity | Crece sin comisiones",
    description: "Plataforma para restaurantes que quieren atraer clientes cualificados sin comisiones.",
    url: "https://gulanity.com/restaurants",
    type: "website",
    images: [{ url: "https://gulanity.com/restaurants/opengraph-image", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://gulanity.com/restaurants",
  },
};

export default function RestaurantsPage() {
  const gainCards = [
    { icon: <TrendingUp className="w-6 h-6" />, title: "Más mesas ocupadas", desc: "Visibilidad por recomendaciones reales de foodies." },
    { icon: <Users className="w-6 h-6" />, title: "Clientes que repiten", desc: "Expectativa alineada con experiencia." },
    { icon: <BarChart3 className="w-6 h-6" />, title: "Datos que importan", desc: "Lo que convence a tus clientes, en números." },
    { icon: <Zap className="w-6 h-6" />, title: "Sin fricción", desc: "Integra tu carta y empieza en minutos." },
  ];
  const checklist = ["Control de campañas con foodies", "Enfoque en platos estrella", "Optimización de turnos"];
  const steps = [
    { num: "1", title: "Date de alta", desc: "Activa tu cuenta desde Gulanity Platform en minutos." },
    { num: "2", title: "Publica tu carta", desc: "Importa tu carta y define objetivos comerciales." },
    { num: "3", title: "Conecta y mide", desc: "Atiende campañas y consulta indicadores clave." },
  ];
  return (
    <div className="min-h-screen bg-white text-[#052838]">
      <Header />
      <main>
        <ScrollDepthTracker page="restaurants" />
        <section id="hero" className="hero-full flex items-center">
          <div className="container-outer w-full py-10 md:py-12">
            <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 items-center">
              <div className="justify-self-start max-w-xl">
                <div className="flex flex-col items-start text-left">
                  <div className="mb-6">
                    <div className="inline-flex rounded-full p-1 bg-white/5 border border-white/10">
                      <Link href="/restaurants" className="px-5 py-2 bg-[#D4BFA6] text-[#052838] rounded-full text-xs font-semibold transition-all">
                        Soy Restaurante
                      </Link>
                      <Link href="/users" className="px-5 py-2 text-white/85 hover:text-white rounded-full text-xs font-semibold transition-all">
                        Soy Usuario
                      </Link>
                    </div>
                  </div>
                  <h1 className="text-white font-display mb-4">Más clientes. Cero comisiones. Total control.</h1>
                  <p className="text-white/70 leading-relaxed mb-8">
                    Gulanity conecta restaurantes y foodies para que lo que esperan sea exactamente lo que encuentran.
                  </p>
                  <RestaurantsHeroActions />
                </div>
              </div>
              <div className="relative w-full justify-self-end">
                <HeroRestaurantsShowcase />
              </div>
            </div>
          </div>
        </section>

        <section id="que-ganas" className="section-gap bg-white">
          <div className="container-outer">
            <h2 className="text-[#052838] text-center mb-10 md:mb-12">Qué ganas</h2>
            <div className="grid gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {gainCards.map((item) => (
                <article key={item.title} className="card-compact hover:shadow-lg transition-all">
                  <div className="mb-3 text-[#D4BFA6]">{item.icon}</div>
                  <h3 className="text-[#052838] mb-2">{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="beneficios" className="section-gap bg-gray-50">
          <div className="container-outer">
            <h2 className="text-[#052838] text-center mb-2">Beneficios que se notan</h2>
            <p className="text-sm text-gray-500 text-center mb-10 md:mb-12">Datos orientativos basados en pruebas internas.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                { value: "+18%", label: "Ticket medio" },
                { value: "−27%", label: "Cancelaciones" },
                { value: "+22%", label: "Reservas cualificadas" },
              ].map((metric) => (
                <div key={metric.label} className="text-center">
                  <div className="text-5xl md:text-6xl font-display font-bold text-[#D4BFA6] mb-3 metric">{metric.value}</div>
                  <p className="text-base text-[#052838]">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="impacto" className="section-gap bg-gray-50">
          <div className="container-outer max-w-4xl">
            <h2 className="text-[#052838] text-center mb-10 md:mb-12">El impacto en tu bolsillo</h2>
            <div className="bg-gradient-to-br from-[#D4BFA6]/10 to-transparent border border-[#D4BFA6]/20 rounded-3xl p-6 md:p-10">
              <p className="text-xl md:text-2xl font-display text-center text-[#052838] leading-relaxed">
                Más visibilidad cualificada → más ocupación → más ingresos
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {checklist.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D4BFA6] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="como-funciona" className="section-gap bg-white">
          <div className="container-outer">
            <h2 className="text-[#052838] text-center mb-10 md:mb-12">Cómo funciona</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {steps.map((step) => (
                <article key={step.num} className="border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <div className="bg-[#D4BFA6] text-[#052838] w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-[#052838] mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <RestaurantsClient />
      </main>
      <Footer />
    </div>
  );
}
