"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type HeroCard = {
  id: string;
  title: string;
  desc: string;
  variant: "light" | "brand";
  position: "overlay-top" | "overlay-mid" | "outer-bottom";
};

const highlightCards: HeroCard[] = [
  {
    id: "match",
    title: "Tu match perfecto",
    desc: "Descubre platos y restaurantes que encajan contigo.",
    variant: "light",
    position: "overlay-top",
  },
  {
    id: "recomendaciones",
    title: "Recomendaciones reales",
    desc: "Foodies verificados comparten sus experiencias.",
    variant: "brand",
    position: "overlay-mid",
  },
  {
    id: "reservas",
    title: "Reserva en segundos",
    desc: "Sin sorpresas. Lo que ves es lo que encuentras.",
    variant: "light",
    position: "outer-bottom",
  },
];

const STEP_DURATION_MS = 2000;

const stageTimeline = [
  {
    image: "/restaurant_mobile.webp",
    focusCardId: "match",
  },
  {
    image: "/restaurant_details.webp",
    focusCardId: "recomendaciones",
  },
  {
    image: "/dish_details.webp",
    focusCardId: "reservas",
  },
];

const positionStyles = {
  "overlay-top": "absolute left-auto right-auto -left-16 lg:-left-20 lg:right-auto xl:left-auto xl:-right-16 top-12 lg:top-12 xl:top-12 w-[280px] lg:w-[240px] xl:w-[280px]",
  "overlay-mid": "absolute left-auto right-auto -left-32 lg:-left-36 lg:right-auto xl:left-auto xl:-right-32 top-1/2 -translate-y-1/2 w-[300px] lg:w-[260px] xl:w-[300px]",
  "outer-bottom": "absolute left-6 lg:left-0 lg:right-auto xl:left-auto xl:right-6 bottom-12 lg:bottom-14 xl:bottom-12 w-[260px] lg:w-[220px] xl:w-[260px]",
};

const cardStyles = {
  light:
    "bg-white text-[#052838] border-white/60 shadow-[0_25px_70px_rgba(5,20,46,0.08)]",
  brand:
    "bg-[#F4BF00] text-[#052838] border-[#e5b000]/60 shadow-[0_25px_70px_rgba(9,9,9,0.18)]",
};

type HeroUserShowcaseProps = {
  hideCards?: boolean;
};

export default function HeroUserShowcase({ hideCards = false }: HeroUserShowcaseProps) {
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
    <div className="relative w-full flex justify-center sm:mt-0 sm:mb-0 md:mt-0 md:mb-0 lg:mt-0 lg:mb-0 xl:mt-0 xl:mb-0 fhd:mt-0 fhd:mb-0 qhd:mt-0 qhd:mb-0">
      <div className="relative mx-auto w-full max-w-[720px] sm:min-h-[520px] md:min-h-[520px] lg:min-h-[520px] xl:min-h-[520px] fhd:min-h-[520px] qhd:min-h-[520px] lg:mr-[-80px] xl:mr-0">
        {/* Mockup de móvil genérico */}
        <div className="relative mx-auto max-w-[250px] flex justify-center items-end py-8">
          <div className="relative group w-full max-w-[250px] sm:scale-90 md:scale-90 lg:scale-85 xl:scale-90 fhd:scale-90 qhd:scale-100 qhd:origin-bottom">
            <div className="absolute -inset-6 bg-gradient-to-br from-[#F4BF00]/25 via-[#F4BF00]/10 to-transparent rounded-[3.5rem] blur-2xl opacity-55" />
            <div className="relative transform transition-all duration-500" style={{
              filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.3)) drop-shadow(0 10px 20px rgba(212,191,166,0.15))",
            }}>
              <div className="relative w-full h-[520px] min-h-[520px]">
                {/* Halo blanco alrededor del dispositivo - Capa externa */}
                <div className="absolute -inset-1.5 bg-white rounded-[3.5rem] blur-md opacity-20"></div>
                {/* Halo blanco alrededor del dispositivo - Capa interna */}
                <div className="absolute -inset-0.5 bg-white rounded-[3.5rem] blur-xs opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-white rounded-[3rem] p-[8px] shadow-[0_0_15px_rgba(255,255,255,0.4),0_8px_25px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-gray-700/90 rounded-b-md shadow-inner z-10"></div>
                  <div className="absolute inset-[8px] rounded-[2.75rem] overflow-hidden bg-black shadow-inner">
                    {stageTimeline.map((stageItem, index) => (
                      <motion.div
                        key={`${stageItem.image}-${index}`}
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: stage === index ? 1 : 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      >
                        <Image
                          src={stageItem.image}
                          alt={`App de Gulanity - ${stageItem.focusCardId}`}
                          fill
                          loading={index === 0 ? "eager" : "lazy"}
                          className="object-cover w-full h-full"
                          sizes="(min-width: 1024px) 240px, 100vw"
                          priority={index === 0}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -inset-3 bg-gradient-to-r from-[#F4BF00]/18 via-transparent to-[#F4BF00]/18 rounded-[3rem] opacity-20 blur-xl transition-opacity duration-500" />
          </div>
        </div>

        {/* Cards flotantes en desktop */}
        {!hideCards && highlightCards.slice(0, visibleCount).map((card) => {
          const isFocused = currentStage.focusCardId === card.id;
          return (
            <motion.div
              key={card.id}
              className={`${positionStyles[card.position]} hidden sm:block md:block lg:block xl:block fhd:block qhd:block`}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{
                opacity: 1,
                y: isFocused ? -12 : 0,
                scale: isFocused ? 1.04 : 1,
              }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <div
                className={`rounded-2xl border px-4 py-4 transition-all duration-500 ${cardStyles[card.variant]} ${isFocused ? "ring-2 ring-[#F4BF00]/70 shadow-[0_35px_80px_rgba(5,20,46,0.18)] animate-pulse-border" : ""
                  }`}
              >
                <p className="text-sm font-semibold">{card.title}</p>
                <p className="text-xs text-[#052838]/80">{card.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Cards en mobile (debajo) */}
      {!hideCards && (
        <div className="mt-6 grid gap-4 sm:hidden md:hidden lg:hidden xl:hidden fhd:hidden qhd:hidden">
          {highlightCards.slice(0, visibleCount).map((card) => {
            const isFocused = currentStage.focusCardId === card.id;
            return (
              <div
                key={`${card.id}-mobile`}
                className={`rounded-2xl border px-4 py-4 ${cardStyles[card.variant]} ${isFocused ? "ring-2 ring-[#F4BF00]/60" : ""
                  }`}
              >
                <p className="text-sm font-semibold">{card.title}</p>
                <p className="text-xs text-[#052838]/80">{card.desc}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
