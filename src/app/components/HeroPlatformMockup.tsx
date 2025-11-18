"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

type ActionCard = {
  id: string;
  title: string;
  desc: string;
  icon?: React.ReactNode;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
};

type ScreenSlide = {
  src: string;
  alt: string;
  cards: ActionCard[];
};

type HeroPlatformMockupProps = {
  slides: ScreenSlide[];
  intervalMs?: number;
};

export default function HeroPlatformMockup({
  slides,
  intervalMs = 3500,
}: HeroPlatformMockupProps) {
  const [idx, setIdx] = useState(0);
  const [hover, setHover] = useState(false);
  const prefersReduced = useReducedMotion();
  const timerRef = useRef<number | null>(null);

  const clear = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const schedule = useCallback(() => {
    clear();
    timerRef.current = window.setTimeout(() => {
      setIdx((p) => (p + 1) % slides.length);
    }, intervalMs) as unknown as number;
  }, [clear, intervalMs, slides.length]);

  // rotación con pausa en hover y cuando pestaña oculta
  useEffect(() => {
    const onVis = () => {
      if (document.hidden) clear();
      else schedule();
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [clear, schedule]);

  useEffect(() => {
    if (hover || prefersReduced) {
      clear();
      return;
    }
    schedule();
    return clear;
  }, [idx, hover, prefersReduced, schedule, clear]);

  const currentSlide = slides[idx];

  // Posición de las cards flotantes
  const cardPositions = {
    "top-left": "absolute top-0 left-0 -translate-x-[110%] translate-y-[0%]",
    "top-right": "absolute top-0 right-0 translate-x-[110%] translate-y-[0%]",
    "bottom-left": "absolute bottom-0 left-0 -translate-x-[110%] -translate-y-[0%]",
    "bottom-right": "absolute bottom-0 right-0 translate-x-[110%] -translate-y-[0%]",
  };

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative mx-auto max-w-[640px]">
        {/* Mockup portátil */}
        <div className="relative rounded-[18px] bg-[#0f2235] p-2.5 shadow-2xl ring-1 ring-white/10">
          <div className="rounded-lg bg-black/60 p-1">
            <div className="relative rounded-lg overflow-hidden bg-white aspect-[16/10]">
              {/* Cross-fade entre capturas */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide.src}
                  initial={{ opacity: 0, scale: 1.01 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.995 }}
                  transition={{ duration: prefersReduced ? 0 : 0.5, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={currentSlide.src}
                    alt={currentSlide.alt}
                    fill
                    priority
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Indicadores */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Ir a captura ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === idx ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
                    }`}
                    onClick={() => setIdx(i)}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* Bisagra */}
          <div className="mx-auto mt-1 h-1.5 w-40 rounded-full bg-black/20" />
        </div>

        {/* Cards flotantes sincronizadas con el slide actual */}
        <AnimatePresence mode="wait">
          {currentSlide.cards.map((card, i) => (
            <motion.div
              key={`${idx}-${card.id}`}
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                duration: prefersReduced ? 0 : 0.4,
                delay: prefersReduced ? 0 : i * 0.1,
                ease: "easeOut"
              }}
              className={`${cardPositions[card.position]} hidden lg:block w-56`}
            >
              <div className="rounded-xl border border-white/15 bg-white/10 backdrop-blur-md p-4 shadow-lg">
                <div className="flex items-start gap-3">
                  {card.icon && <div className="mt-0.5 flex-shrink-0">{card.icon}</div>}
                  <div>
                    <div className="font-semibold text-white text-sm mb-1">{card.title}</div>
                    <p className="text-[13px] text-white/70 leading-snug">{card.desc}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
