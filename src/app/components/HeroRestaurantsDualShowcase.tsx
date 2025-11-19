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
    title: "Reservas sincronizadas",
    desc: "Gestiona campañas en el dashboard y confirma desde el móvil en segundos.",
    variant: "light",
    position: "overlay-top",
  },
  {
    id: "insights",
    title: "Insights accionables",
    desc: "Tus métricas viven en desktop y viajan contigo en la app.",
    variant: "brand",
    position: "overlay-mid",
  },
  {
    id: "experiencias",
    title: "Experiencias memorables",
    desc: "Activa creadores y lista de espera directamente desde el teléfono.",
    variant: "light",
    position: "outer-bottom",
  },
];

const STEP_DURATION_MS = 2000;
const stageTimeline = [
  {
    desktopImage: "/dashboardMetrics.jpg",
    mobileImage: "/restaurant_mobile.png",
    focusCardId: "reservas",
  },
  {
    desktopImage: "/assets/restauran_background.jpeg",
    mobileImage: "/restaurant_details.png",
    focusCardId: "insights",
  },
  {
    desktopImage: "/dashboardMetrics.jpg",
    mobileImage: "/dish_details.png",
    focusCardId: "experiencias",
  },
];

const positionStyles = {
  "overlay-top": "absolute -right-6 -top-4 w-[260px]",
  "overlay-mid": "absolute -right-24 top-64 w-[300px]",
  "outer-bottom": "absolute left-0 bottom-0 w-[250px]",
};

const cardStyles = {
  light:
    "bg-white text-[#052838] border-white/60 shadow-[0_25px_70px_rgba(5,20,46,0.08)]",
  brand:
    "bg-[#D4BFA6] text-[#052838] border-[#c8ab8d]/60 shadow-[0_25px_70px_rgba(9,9,9,0.18)]",
};

export default function HeroRestaurantsDualShowcase() {
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
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="relative flex w-full items-end justify-center">
          <div className="relative rounded-[40px] bg-gradient-to-br from-[#050a14] via-[#070e1d] to-[#02040a] p-4 shadow-[0_50px_120px_rgba(1,4,9,0.85)] ring-1 ring-white/10 max-w-[640px] w-full">
            <div className="absolute top-5 left-1/2 h-1.5 w-28 -translate-x-1/2 rounded-full bg-white/20" />
            <div className="relative mt-6 rounded-[30px] overflow-hidden bg-black">
              <div className="relative aspect-[16/9]">
                <Image
                  src={currentStage.desktopImage}
                  alt="Métricas del dashboard de Gulanity"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 620px, 100vw"
                />
              </div>
            </div>
            <div className="mx-auto mt-8 h-24 w-8 rounded-full bg-[#040812] shadow-[0_25px_60px_rgba(0,0,0,0.55)]" />
            <div className="mx-auto mt-3 h-5 w-60 rounded-full bg-black/70 blur-sm opacity-70" />
          </div>

          <motion.div
            className="absolute -right-4 bottom-10 w-[160px] sm:w-[190px] lg:-right-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative rounded-[48px] bg-gradient-to-br from-[#050a14] via-[#070e1d] to-[#02040a] p-3 shadow-[0_35px_90px_rgba(1,4,9,0.85)] ring-1 ring-white/10">
              <div className="absolute top-4 left-1/2 h-5 w-20 -translate-x-1/2 rounded-full bg-black/80" />
              <div className="relative rounded-[42px] overflow-hidden bg-black">
                <div className="relative aspect-[9/19.5]">
                  <Image
                    src={currentStage.mobileImage}
                    alt="Experiencia móvil de Gulanity"
                    fill
                    priority
                    className="object-cover"
                    sizes="(min-width: 1024px) 190px, 50vw"
                  />
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                <span className="h-1 w-14 rounded-full bg-white/30" />
              </div>
            </div>
          </motion.div>
        </div>

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


