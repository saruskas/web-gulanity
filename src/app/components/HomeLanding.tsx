"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, CheckCircle2, MapPin, ShieldCheck, Sparkles, UtensilsCrossed } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import LightRays from "./LightRays";

type AudienceCard = {
  id: string;
  badge: string;
  title: string;
  description: string;
  bullets: { title: string; description: string; icon: LucideIcon }[];
  cta: string;
  href: string;
  tone: "b2b" | "b2c";
};

const audienceCards: AudienceCard[] = [
  {
    id: "restaurants",
    badge: "B2B • Restaurantes",
    title: "Llena tus mesas con clientes informados",
    description: "Gulanity combina datos, creadores y reservas verificadas sin comisiones.",
    bullets: [
      { title: "Reservas fiables", description: "Foodies llegan sabiendo qué pedir.", icon: CheckCircle2 },
      { title: "Datos accionables", description: "Ticket medio, cancelaciones, platos top.", icon: BarChart3 },
      { title: "Activaciones privadas", description: "Campañas con micro influenciadores gastronómicos.", icon: Sparkles },
    ],
    cta: "Soy un restaurante",
    href: "/restaurants",
    tone: "b2b",
  },
  {
    id: "users",
    badge: "B2C • Foodies",
    title: "Encuentra dónde comer sin perder tiempo",
    description: "Explora cartas vivas, reseñas reales y mapas curados por tu comunidad.",
    bullets: [
      { title: "Filtros obsesivos", description: "Dieta, gustos, mood o plan en grupo.", icon: UtensilsCrossed },
      { title: "Reseñas verificadas", description: "Sigue amigos e influencers con criterio.", icon: ShieldCheck },
      { title: "Mapas y listas", description: "Tu guía personal, lista para compartir.", icon: MapPin },
    ],
    cta: "Soy usuario",
    href: "/users",
    tone: "b2c",
  },
];

export default function HomeLanding() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#031526] px-4 pt-6 pb-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_5%,rgba(255,255,255,0.18),rgba(3,21,38,0.85))]" />
      <LightRays
        className="opacity-90"
        raysOrigin="top-center"
        raysColor="#d2f2ff"
        raysSpeed={1.65}
        lightSpread={0.7}
        rayLength={1.35}
        followMouse
        mouseInfluence={0.14}
        noiseAmount={0.04}
        distortion={0.035}
      />
      <header className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-center pt-4">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Image src="/logo_rest.png" alt="Gulanity" width={100} height={24} priority className="h-7 w-auto drop-shadow-[0_6px_14px_rgba(0,0,0,0.45)]" />
        </motion.div>
      </header>
      <div className="container-outer relative z-10 mt-14 flex max-w-3xl flex-col items-center text-center">
        <motion.h1
          className="mt-7 font-display text-2xl md:text-3xl lg:text-4xl text-white"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          Software gastronómico inteligente para restaurantes exigentes y foodies que no improvisan.
        </motion.h1>
        <motion.div className="mt-6 w-full" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}>
          <div className="grid gap-5 md:grid-cols-2">
            {audienceCards.map((card, index) => (
            <motion.article
              key={card.id}
                className="group relative overflow-hidden rounded-[24px] border border-slate-200 bg-white/95 p-6 text-left shadow-[0_20px_60px_rgba(5,40,56,0.08)] backdrop-blur"
              initial={{ opacity: 0, y: 26, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.55, delay: 0.1 * index }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.985 }}
            >
              <span
                className={`pointer-events-none absolute inset-0 opacity-0 blur-3xl transition duration-500 group-hover:opacity-70 ${card.tone === "b2b" ? "bg-[radial-gradient(circle_at_top,rgba(244,191,0,0.45),transparent_55%)]" : "bg-[radial-gradient(circle_at_top,rgba(0,163,255,0.45),transparent_60%)]"}`}
                aria-hidden="true"
              />
              <div className="relative flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-[#0C1B2A]/40">
                <span className="h-px w-8 bg-[#0C1B2A]/20" />
                {card.badge}
              </div>
              <h3 className="relative mt-6 text-2xl font-semibold text-[#052838]">{card.title}</h3>
              <p className="relative mt-3 text-sm text-[#0C1B2A]/70">{card.description}</p>
              <ul className="relative mt-8 space-y-4">
                {card.bullets.map((bullet) => (
                  <li key={bullet.title} className="flex gap-3">
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-2xl border ${card.tone === "b2b" ? "border-[#F4BF00]/40 bg-[#FDF6DE]" : "border-[#00A3FF]/25 bg-[#E6F6FF]"}`}
                    >
                      <bullet.icon className="h-5 w-5 text-[#052838]" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[#052838]">{bullet.title}</p>
                      <p className="text-xs text-[#0C1B2A]/60">{bullet.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="relative mt-10">
                <Button
                  asChild
                  size="lg"
                  className={`w-full rounded-2xl py-4 text-base font-semibold ${card.tone === "b2b" ? "bg-[#052838] text-white hover:bg-[#03182A]" : "bg-[#F4BF00] text-[#052838] hover:bg-[#f6c63d]"}`}
                >
                  <Link href={card.href} className="flex items-center justify-center gap-2">
                    {card.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

