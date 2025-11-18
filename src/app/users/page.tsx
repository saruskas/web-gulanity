import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollDepthTracker from "../components/ScrollDepthTracker";
import { HeroShowcaseSkeleton, ContentSectionSkeleton } from "../components/Skeleton";
import UsersHeroActions from "./UsersHeroActions";
import UsersDownloadCard from "./UsersDownloadCard";
import { CheckCircle2, Heart, Sparkles, Shield, Star } from "lucide-react";
import { siteConfig } from "@/lib/config";

const HeroUserShowcase = dynamic(() => import("../components/HeroUserShowcase"), {
  loading: () => <HeroShowcaseSkeleton />,
});

const UsersClient = dynamic(() => import("./UsersClient"), {
  loading: () => (
    <>
      <section className="section-gap bg-white">
        <div className="container-outer max-w-4xl">
          <ContentSectionSkeleton />
        </div>
      </section>
      <section className="section-gap bg-gray-100">
        <div className="container-outer max-w-4xl">
          <ContentSectionSkeleton />
        </div>
      </section>
    </>
  ),
});

export const metadata: Metadata = {
  title: "Usuarios - Gulanity | Descubre platos sin sorpresas",
  description: "App gratuita para encontrar restaurantes y platos según tus gustos, dieta y influencers favoritos. Descarga Gulanity en iOS y Android.",
  openGraph: {
    title: "Usuarios - Gulanity | Descubre platos sin sorpresas",
    description: "App gratuita para encontrar restaurantes y platos según tus gustos.",
    url: "https://gulanity.com/users",
    type: "website",
    images: [{ url: "https://gulanity.com/users/opengraph-image", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://gulanity.com/users",
  },
};

export default function UsersPage() {
  const gainCards = [
    { icon: <Heart className="w-6 h-6" />, title: "Experiencias auténticas", desc: "Descubre lugares recomendados por personas reales." },
    { icon: <Sparkles className="w-6 h-6" />, title: "Encuentra tu match", desc: "Filtros que van más allá del rating." },
    { icon: <Shield className="w-6 h-6" />, title: "Sin sorpresas", desc: "Lo que ves es lo que encuentras." },
    { icon: <Star className="w-6 h-6" />, title: "Súper fácil", desc: "Busca, reserva y disfruta en segundos." },
  ];
  const impactItems = ["Foodies verificados que comparten tu gusto", "Filtros por preferencias, no solo ubicación", "Información clara antes de reservar"];
  const steps = [
    { num: "1", title: "Explora", desc: "Decenas de filtros para encontrar lo que buscas en segundos." },
    { num: "2", title: "Confía", desc: "Opiniones de amigos e influencers para pedir sin dudas." },
    { num: "3", title: "Comparte", desc: "Guarda y recomienda tus platos favoritos en dos clics." },
  ];
  return (
    <div className="min-h-screen bg-white text-[#052838]">
      <Header />
      <main>
        <ScrollDepthTracker page="users" />
        <section id="hero" className="bg-white pt-28 pb-16">
          <div className="container-outer grid md:grid-cols-2 gap-10 items-center">
            <div className="justify-self-start">
              <div className="max-w-xl mx-auto flex flex-col items-center text-center">
                <div className="mb-6">
                  <div className="inline-flex rounded-full p-1 bg-gray-100 border border-gray-200">
                    <Link href="/restaurants" className="px-5 py-2 text-[#052838]/70 hover:text-[#052838] rounded-full text-xs font-semibold transition-all">
                      Soy Restaurante
                    </Link>
                    <Link href="/users" className="px-5 py-2 bg-[#F4BF00] text-[#052838] rounded-full text-xs font-semibold transition-all">
                      Soy Usuario
                    </Link>
                  </div>
                </div>
                <h1 className="text-[#052838] font-display mb-4">Descubre platos sin sorpresas con Gulanity</h1>
                <p className="text-[#052838]/70 leading-relaxed mb-8">
                  Encuentra platos y restaurantes que encajan contigo gracias a recomendaciones reales de tu comunidad.
                </p>
                <UsersHeroActions />
                <UsersDownloadCard />
              </div>
            </div>
            <div className="relative w-full max-w-md md:max-w-none mx-auto">
              <HeroUserShowcase />
            </div>
          </div>
        </section>

        <section id="que-ganas" className="section-gap bg-gray-50">
          <div className="container-outer">
            <h2 className="text-[#052838] text-center mb-10 md:mb-12">Qué ganas</h2>
            <div className="grid gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {gainCards.map((item) => (
                <article key={item.title} className="card-compact hover:shadow-lg transition-all">
                  <div className="mb-3 text-[#F4BF00]">{item.icon}</div>
                  <h3 className="text-[#052838] mb-2">{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="beneficios" className="section-gap bg-white">
          <div className="container-outer">
            <h2 className="text-[#052838] text-center mb-2">La diferencia es clara</h2>
            <p className="text-sm text-gray-500 text-center mb-10 md:mb-12">Datos orientativos basados en pruebas internas.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                { value: "92%", label: "Satisfacción con la elección" },
                { value: "4.2x", label: "Más probabilidad de repetir" },
                { value: "−68%", label: "Decepciones evitadas" },
              ].map((metric) => (
                <div key={metric.label} className="text-center">
                  <div className="text-5xl md:text-6xl font-display font-bold text-[#F4BF00] mb-3 metric">{metric.value}</div>
                  <p className="text-base text-[#052838]">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="impacto" className="section-gap bg-gray-50">
          <div className="container-outer max-w-4xl">
            <h2 className="text-[#052838] text-center mb-10 md:mb-12">Por qué es diferente</h2>
            <div className="bg-gradient-to-br from-[#F4BF00]/10 to-transparent border border-[#F4BF00]/20 rounded-3xl p-6 md:p-10">
              <p className="text-xl md:text-2xl font-display text-[#052838] text-center leading-relaxed">
                Recomendaciones reales → decisiones informadas → experiencias que coinciden
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {impactItems.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#F4BF00] flex-shrink-0 mt-0.5" />
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
                  <div className="bg-[#FCDB7D] text-[#052838] w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-[#052838] mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-gap bg-gray-50">
          <div className="container-outer max-w-3xl">
            <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-10 text-center">
              <p className="text-xs uppercase tracking-[0.4em] text-[#052838]/50 mb-4">Disponible muy pronto</p>
              <h2 className="text-[#052838] font-display text-3xl md:text-4xl mb-4">Descarga gratis en iOS y Android</h2>
              <p className="text-[#052838]/70 leading-relaxed mb-8">Regístrate para acceder en primicia a la beta y recibir actualizaciones.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href={siteConfig.platforms.appStore} target="_blank" rel="noopener noreferrer" className="btn btn-md btn-yellow min-w-[200px] text-center">
                  App Store
                </Link>
                <Link
                  href={siteConfig.platforms.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-md border border-[#052838]/20 bg-white text-[#052838] hover:bg-gray-50 min-w-[200px] text-center"
                >
                  Google Play
                </Link>
              </div>
            </div>
          </div>
        </section>

        <UsersClient />
      </main>
      <Footer />
    </div>
  );
}

