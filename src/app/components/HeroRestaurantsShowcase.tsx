"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type HeroCard = {
  id: string;
  title: string;
  desc: string;
  variant: "light" | "brand";
  position: "overlay-top" | "overlay-mid" | "outer-bottom";
};

const highlightCards: HeroCard[] = [
  {
    id: "reservas",
    title: "Reservas verificadas",
    desc: "Foodies que ya conocen tu propuesta y llegan listos para decidir.",
    variant: "light",
    position: "overlay-top",
  },
  {
    id: "insights",
    title: "Insights accionables",
    desc: "Prioriza platos estrella con datos en tiempo real.",
    variant: "brand",
    position: "overlay-mid",
  },
  {
    id: "experiencias",
    title: "Experiencias memorables",
    desc: "Activa campañas con creadores que aman tu cocina.",
    variant: "light",
    position: "outer-bottom",
  },
];

const STEP_DURATION_MS = 2000;
const stageTimeline = [
  {
    image: "/dashboardMetrics.jpg",
    focusCardId: "reservas",
  },
  {
    image: "/assets/restauran_background.jpeg",
    focusCardId: "insights",
  },
  {
    image: "/dashboardMetrics.jpg",
    focusCardId: "experiencias",
  },
];

const positionStyles = {
  "overlay-top": "absolute -right-16 -top-16 w-[280px]",
  "overlay-mid": "absolute -right-32 top-60 w-[300px]",
  "outer-bottom": "absolute right-6 -bottom-10 w-[260px]",
};

const cardStyles = {
  light:
    "bg-white text-[#052838] border-white/60 shadow-[0_25px_70px_rgba(5,20,46,0.08)]",
  brand:
    "bg-[#D4BFA6] text-[#052838] border-[#c8ab8d]/60 shadow-[0_25px_70px_rgba(9,9,9,0.18)]",
};

export default function HeroRestaurantsShowcase() {
  const [stage, setStage] = useState(0);
  const [introComplete, setIntroComplete] = useState(false);
  const currentStage = stageTimeline[stage];
  const visibleCount = introComplete ? highlightCards.length : Math.min(stage + 1, highlightCards.length);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setStage((prev) => (prev + 1) % stageTimeline.length);
    }, STEP_DURATION_MS);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!introComplete && stage === stageTimeline.length - 1) {
      setIntroComplete(true);
    }
  }, [stage, introComplete]);

  return (
    <div className="relative w-full flex justify-center lg:mt-0 lg:mb-0">
      <motion.div
        className="relative mx-auto w-full max-w-[720px] lg:min-h-[560px]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Ordenador / mockup */}
        <div className="relative rounded-[40px] bg-gradient-to-br from-[#050a14] via-[#070e1d] to-[#02040a] p-4 shadow-[0_50px_120px_rgba(1,4,9,0.85)] ring-1 ring-white/10">
          {/* “Cámara” superior */}
          <div className="absolute top-5 left-1/2 h-1.5 w-28 -translate-x-1/2 rounded-full bg-white/20" />

          {/* Pantalla: la imagen ocupa toda la superficie */}
          <div className="relative mt-6 rounded-[30px] overflow-hidden bg-black">
            <div className="relative aspect-[16/9]">
              <Image
                src={currentStage.image}
                alt="Métricas del dashboard de Gulanity"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 720px, 100vw"
              />
            </div>
          </div>

          {/* “Peana” del ordenador */}
          <div className="mx-auto mt-8 h-24 w-8 rounded-full bg-[#040812] shadow-[0_25px_60px_rgba(0,0,0,0.55)]" />
          <div className="mx-auto mt-3 h-5 w-60 rounded-full bg-black/70 blur-sm opacity-70" />
        </div>

        {/* Cards flotantes en desktop */}
        {highlightCards.slice(0, visibleCount).map((card) => {
          const isFocused = currentStage.focusCardId === card.id;
          return (
            <motion.div
              key={card.id}
              className={`${positionStyles[card.position]} hidden lg:block`}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{
                opacity: 1,
                y: isFocused ? -12 : 0,
                scale: isFocused ? 1.04 : 1,
              }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <div
                className={`rounded-2xl border px-4 py-4 transition-all duration-500 ${cardStyles[card.variant]} ${
                  isFocused ? "ring-2 ring-[#D4BFA6]/70 shadow-[0_35px_80px_rgba(5,20,46,0.18)]" : ""
                }`}
              >
                <p className="text-sm font-semibold">{card.title}</p>
                <p className="text-xs text-[#052838]/80">{card.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Cards en mobile (debajo) */}
      <div className="mt-6 grid gap-4 lg:hidden">
        {highlightCards.slice(0, visibleCount).map((card) => {
          const isFocused = currentStage.focusCardId === card.id;
          return (
            <div
              key={`${card.id}-mobile`}
              className={`rounded-2xl border px-4 py-4 ${cardStyles[card.variant]} ${
                isFocused ? "ring-2 ring-[#D4BFA6]/60" : ""
              }`}
            >
              <p className="text-sm font-semibold">{card.title}</p>
              <p className="text-xs text-[#052838]/80">{card.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
