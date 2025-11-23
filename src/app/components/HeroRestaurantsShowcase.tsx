"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const STEP_DURATION_MS = 2000;

const highlightCards = [
  {
    id: "reservas",
    title: "Reservas verificadas",
    desc: "Foodies que ya conocen tu propuesta llegan listos para decidir.",
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

const stageTimeline = [
  {
    image: "/assets/restaurants/Dashboard_Platform.PNG",
    focusCardId: "reservas",
  },
  {
    image: "/assets/restaurants/Menu.PNG",
    focusCardId: "insights",
  },
  {
    image: "/assets/restaurants/Dishes.PNG",
    focusCardId: "experiencias",
  },
];

const positionStyles = {
  "overlay-top": "absolute left-auto right-auto -left-16 lg:-left-20 lg:right-auto xl:left-auto xl:-right-16 top-8 lg:top-20 xl:top-8 w-[280px] lg:w-[240px] xl:w-[280px]",
  "overlay-mid": "absolute left-auto right-auto -left-32 lg:-left-36 lg:right-auto xl:left-auto xl:-right-32 top-1/2 lg:top-[65%] xl:top-1/2 -translate-y-1/2 w-[300px] lg:w-[260px] xl:w-[300px]",
  "outer-bottom": "absolute left-6 lg:left-0 lg:right-auto xl:left-auto xl:right-6 bottom-6 lg:bottom-4 xl:bottom-6 w-[260px] lg:w-[220px] xl:w-[260px]",
};

const cardStyles = {
  light:
    "bg-white text-[#052838] border-white/60 shadow-[0_10px_25px_rgba(5,20,46,0.08)]",
  brand:
    "bg-[#D4BFA6] text-[#052838] border-[#c8ab8d]/60 shadow-[0_10px_25px_rgba(9,9,9,0.18)]",
};

type HeroRestaurantsShowcaseProps = {
  hideCards?: boolean;
};

export default function HeroRestaurantsShowcase({ hideCards = false }: HeroRestaurantsShowcaseProps) {
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
      <div className="relative mx-auto w-full max-w-[720px] sm:min-h-[700px] md:min-h-[700px] lg:min-h-[700px] xl:min-h-[700px] fhd:min-h-[700px] qhd:min-h-[700px] lg:mr-[-40px] xl:mr-0">
        <div className="relative w-full sm:mr-12 md:mr-12 lg:mr-12 xl:mr-12 fhd:mr-12 qhd:mr-12 flex justify-center items-start mt-24 sm:mt-24 md:mt-24 lg:mt-24 xl:mt-24 fhd:-mt-8 qhd:!mt-24 pb-8">
          <div className="relative group w-full max-w-[480px] sm:scale-90 md:scale-90 lg:scale-85 xl:scale-90 fhd:scale-90 qhd:scale-100 qhd:origin-bottom">
            <div className="absolute -inset-6 bg-gradient-to-br from-[#D4BFA6]/35 via-[#D4BFA6]/12 to-transparent rounded-[3.5rem] blur-2xl opacity-55" />
            <div className="relative transform transition-all duration-500" style={{
              filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.3)) drop-shadow(0 10px 20px rgba(212,191,166,0.15))",
            }}>
              <div className="relative w-full h-[720px] min-h-[720px]">
                {/* Halo blanco alrededor del dispositivo - Capa externa */}
                <div className="absolute -inset-1.5 bg-white rounded-[2.75rem] blur-md opacity-20"></div>
                {/* Halo blanco alrededor del dispositivo - Capa interna */}
                <div className="absolute -inset-0.5 bg-white rounded-[2.75rem] blur-xs opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-white rounded-[2.75rem] p-[8px] shadow-[0_0_15px_rgba(255,255,255,0.4),0_8px_25px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gray-700/90 rounded-b-md shadow-inner z-10"></div>
                  <div className="absolute inset-[8px] rounded-[2.5rem] overflow-hidden bg-black shadow-inner">
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
                          alt={`Dashboard de Gulanity - ${stageItem.focusCardId}`}
                          fill
                          loading={index === 0 ? "eager" : "lazy"}
                          className="object-cover w-full h-full"
                          sizes="(min-width: 1024px) 400px, 100vw"
                          priority={index === 0}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -inset-3 bg-gradient-to-r from-[#D4BFA6]/18 via-transparent to-[#D4BFA6]/18 rounded-[3rem] opacity-20 blur-xl transition-opacity duration-500" />
          </div>
        </div>

        {!hideCards && highlightCards.slice(0, visibleCount).map((card) => {
          const isFocused = currentStage.focusCardId === card.id;
          return (
            <motion.div
              key={card.id}
              className={`${positionStyles[card.position as keyof typeof positionStyles]} hidden sm:block md:block lg:block xl:block fhd:block qhd:block`}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{
                opacity: 1,
                y: isFocused ? -12 : 0,
                scale: isFocused ? 1.04 : 1,
              }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <div
                className={`rounded-2xl border px-4 py-4 transition-all duration-500 ${cardStyles[card.variant as keyof typeof cardStyles]} ${isFocused ? "ring-2 ring-[#D4BFA6]/70 shadow-[0_12px_30px_rgba(5,20,46,0.18)]" : ""
                  }`}
              >
                <p className="text-sm font-semibold">{card.title}</p>
                <p className="text-xs text-[#052838]/80">{card.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {!hideCards && (
        <div className="mt-6 grid gap-4 sm:hidden md:hidden lg:hidden xl:hidden fhd:hidden qhd:hidden">
          {highlightCards.slice(0, visibleCount).map((card) => {
            const isFocused = currentStage.focusCardId === card.id;
            return (
              <div
                key={`${card.id}-mobile`}
                className={`rounded-2xl border px-4 py-4 ${cardStyles[card.variant as keyof typeof cardStyles]} ${isFocused ? "ring-2 ring-[#D4BFA6]/60" : ""
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
