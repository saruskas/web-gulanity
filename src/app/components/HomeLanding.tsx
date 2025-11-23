"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, CheckCircle2, MapPin, ShieldCheck, Sparkles, UtensilsCrossed, TrendingUp, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import LightRays from "./LightRays";
import HeroUserShowcase from "./HeroUserShowcase";
import HeroRestaurantsShowcase from "./HeroRestaurantsShowcase";
import "./HomeLanding.css";

export default function HomeLanding() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-x-hidden bg-[#031526]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_5%,rgba(255,255,255,0.18),rgba(3,21,38,0.85))]" />
      <LightRays
        className="opacity-90"
        raysOrigin="top-center"
        raysColor="#d2f2ff"
        raysSpeed={1.65}
        lightSpread={0.7}
        rayLength={2.2}
        followMouse
        mouseInfluence={0.14}
        noiseAmount={0.04}
        distortion={0.035}
      />

      <header className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            animate={{
              rotate: [0, 0.08, -0.08, 0.05, -0.05, 0],
              x: [0, 0.2, -0.2, 0.12, -0.12, 0],
              y: [0, 0.12, -0.12, 0.08, -0.08, 0],
            }}
            transition={{
              rotate: {
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              },
              x: {
                duration: 11,
                repeat: Infinity,
                ease: "easeInOut",
              },
              y: {
                duration: 10.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <Image
              src="/logo_rest.png"
              alt="Gulanity"
              width={360}
              height={60}
              sizes="360px"
              quality={100}
              priority
              className="h-[60px] w-auto drop-shadow-[0_6px_14px_rgba(0,0,0,0.45)]"
            />
          </motion.div>
        </motion.div>
      </header>

      <div className="relative z-10 w-full max-w-[1200px] qhd:max-w-[1600px] mx-auto min-h-screen flex flex-col">
        <motion.h1
          className="hero-main-title max-w-4xl lg:max-w-3xl mx-auto px-4 lg:px-6 font-display text-white text-center"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          Software gastronómico inteligente para restaurantes exigentes y foodies que no improvisan
        </motion.h1>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-0 lg:gap-6 xl:gap-8 relative">
          <div className="absolute inset-y-0 left-1/2 w-[2px] bg-gradient-to-b from-transparent via-white/35 to-transparent z-10 hidden sm:block" />
          <motion.div
            className="relative flex flex-col items-center justify-end sm:justify-center px-6 lg:px-8 xl:px-10 py-12 text-white min-h-[500px]"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="max-w-md xl:max-w-lg qhd:max-w-xl w-full flex-shrink-0 relative z-10">
              <div className="mb-8">
                <span className="inline-block px-4 py-1 rounded-full bg-[#D4BFA6]/15 border border-[#D4BFA6]/25 text-[#D4BFA6] text-xs font-semibold uppercase tracking-wider backdrop-blur-sm relative group cursor-help">
                  B2B
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-white text-[#052838] text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-50 border border-[#e5e7eb] normal-case">
                    orientado a los restaurantes u otros negocios
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-white"></div>
                  </div>
                </span>
              </div>
              <h2 className="text-3xl lg:text-3xl xl:text-4xl qhd:text-[42px] qhd:leading-[48px] font-display mb-5 text-white leading-tight">
                Llena tus mesas con clientes informados
              </h2>
              <p className="text-white/75 mb-8 leading-relaxed text-base xl:text-lg qhd:text-xl">
                Gulanity combina datos, creadores y reservas verificadas sin comisiones.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4BFA6]/30 bg-[#D4BFA6]/10 flex-shrink-0 backdrop-blur-sm">
                    <CheckCircle2 className="h-5 w-5 text-[#D4BFA6]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">Reservas fiables</p>
                    <p className="text-xs text-white/65 leading-relaxed">Foodies llegan sabiendo qué pedir.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4BFA6]/30 bg-[#D4BFA6]/10 flex-shrink-0 backdrop-blur-sm">
                    <BarChart3 className="h-5 w-5 text-[#D4BFA6]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">Datos accionables</p>
                    <p className="text-xs text-white/65 leading-relaxed">Ticket medio, cancelaciones, platos top.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4BFA6]/30 bg-[#D4BFA6]/10 flex-shrink-0 backdrop-blur-sm">
                    <Sparkles className="h-5 w-5 text-[#D4BFA6]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">Activaciones privadas</p>
                    <p className="text-xs text-white/65 leading-relaxed">Campañas con micro influenciadores gastronómicos.</p>
                  </div>
                </li>
              </ul>
              <Button
                asChild
                size="lg"
                className="w-full rounded-xl py-4 text-base font-semibold bg-[#D4BFA6] text-[#052838] hover:bg-[#D4BFA6]/90 transition-all shadow-lg shadow-[#D4BFA6]/20"
              >
                <Link href="/restaurants" className="flex items-center justify-center gap-2">
                  Soy restaurante
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative w-full max-w-md mx-auto flex-shrink-0 mt-12 sm:hidden">
              <HeroRestaurantsShowcase hideCards={true} />
            </div>
          </motion.div>

          <motion.div
            className="relative flex flex-col items-center justify-center px-6 lg:px-8 xl:px-10 py-12 text-white min-h-[500px]"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <div className="max-w-md xl:max-w-lg qhd:max-w-xl w-full flex-shrink-0 relative z-10">
              <div className="mb-8">
                <span className="inline-block px-4 py-1 rounded-full bg-white/15 border border-white/25 text-white text-xs font-semibold uppercase tracking-wider backdrop-blur-sm relative group cursor-help">
                  B2C
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-white text-[#052838] text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-50 border border-[#e5e7eb] normal-case">
                    orientado a clientes y consumidores
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-white"></div>
                  </div>
                </span>
              </div>
              <h2 className="text-3xl lg:text-3xl xl:text-4xl qhd:text-[42px] qhd:leading-[48px] font-display mb-5 text-white leading-tight">
                Encuentra dónde comer sin perder tiempo
              </h2>
              <p className="text-white/75 mb-8 leading-relaxed text-base xl:text-lg qhd:text-xl">
                Explora cartas vivas, reseñas reales y mapas curados por tu comunidad.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 flex-shrink-0 backdrop-blur-sm">
                    <UtensilsCrossed className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">Filtros obsesivos</p>
                    <p className="text-xs text-white/65 leading-relaxed">Dieta, gustos, mood o plan en grupo.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 flex-shrink-0 backdrop-blur-sm">
                    <ShieldCheck className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">Reseñas verificadas</p>
                    <p className="text-xs text-white/65 leading-relaxed">Sigue amigos e influencers con criterio.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 flex-shrink-0 backdrop-blur-sm">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">Mapas y listas</p>
                    <p className="text-xs text-white/65 leading-relaxed">Tu guía personal, lista para compartir.</p>
                  </div>
                </li>
              </ul>
              <Button
                asChild
                size="lg"
                className="w-full rounded-xl py-4 text-base font-semibold bg-[#F4BF00] text-[#052838] hover:bg-[#f6c63d] transition-all shadow-lg shadow-[#F4BF00]/20"
              >
                <Link href="/users" className="flex items-center justify-center gap-2">
                  Soy usuario
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative w-full max-w-md mx-auto flex-shrink-0 mt-12 sm:hidden">
              <HeroUserShowcase hideCards={true} />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="relative z-10 py-4 px-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="max-w-2xl mx-auto">
            <p className="text-white/60 text-sm mb-4">Dos mundos, una plataforma</p>
            <div className="flex items-center justify-center gap-4 text-white/40">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                <span className="text-xs">Más ocupación</span>
              </div>
              <div className="h-4 w-px bg-white/20" />
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span className="text-xs">Clientes informados</span>
              </div>
              <div className="h-4 w-px bg-white/20" />
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                <span className="text-xs">Experiencias auténticas</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

