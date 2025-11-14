"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

type ActionCard = {
  id: string;
  title: string;
  desc: string;
  align?: "left" | "right";
  icon?: React.ReactNode;
};

type PlatformShowcaseProps = {
  title?: string;
  subtitle?: string;
  screenshots: { src: string; alt: string }[];
  cards: ActionCard[];
  intervalMs?: number;       // tiempo de rotación
  className?: string;
};

export default function PlatformShowcase({
  title = "Gestiona tu plataforma",
  subtitle = "Activa campañas, destaca platos estrella y mide resultados.",
  screenshots,
  cards,
  intervalMs = 3500,
  className,
}: PlatformShowcaseProps) {
  const [idx, setIdx] = useState(0);
  const [hover, setHover] = useState(false);
  const prefersReduced = useReducedMotion();
  const timerRef = useRef<number | null>(null);

  // rotación segura (pausa al cambiar de pestaña o al hacer hover)
  useEffect(() => {
    const onVis = () => {
      // pausa cuando la pestaña no está visible
      if (document.hidden) clear();
      else schedule();
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  useEffect(() => {
    if (hover || prefersReduced) {
      clear();
      return;
    }
    schedule();
    return clear;
  }, [idx, hover, prefersReduced]);

  function schedule() {
    clear();
    timerRef.current = window.setTimeout(() => {
      setIdx((p) => (p + 1) % screenshots.length);
    }, intervalMs) as unknown as number;
  }
  function clear() {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }

  const leftCards = useMemo(() => cards.filter(c => (c.align ?? "left") === "left"), [cards]);
  const rightCards = useMemo(() => cards.filter(c => (c.align ?? "left") === "right"), [cards]);

  return (
    <section
      className={`relative section-gap bg-white ${className ?? ""}`}
      aria-labelledby="platform-showcase-title"
    >
      <div className="container-outer">
        {/* Encabezado */}
        <div className="max-w-2xl mb-10">
          <h2 id="platform-showcase-title" className="text-[#052838] mb-2">{title}</h2>
          <p className="text-[15px] text-gray-600">{subtitle}</p>
        </div>

        {/* Zona central */}
        <div className="relative grid lg:grid-cols-[1fr_minmax(680px,820px)_1fr] items-center gap-6">
          {/* Cards izquierda */}
          <div className="hidden lg:flex flex-col gap-4">
            {leftCards.map((card, i) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-4 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  {card.icon && <div className="mt-0.5">{card.icon}</div>}
                  <div>
                    <div className="font-semibold text-[#052838]">{card.title}</div>
                    <p className="text-[13px] text-gray-600 mt-1">{card.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mockup ordenador + carrusel */}
          <div
            className="relative mx-auto w-full"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {/* “Dispositivo” – marco de portátil */}
            <div className="relative mx-auto max-w-[820px] rounded-[22px] bg-[#0f2235] p-3 shadow-2xl ring-1 ring-black/10">
              <div className="rounded-xl bg-black/70 p-1">
                <div className="relative rounded-[12px] overflow-hidden bg-white aspect-[16/10]">
                  {/* pantallazo con cross-fade */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={screenshots[idx].src}
                      initial={{ opacity: 0.0, scale: 1.01 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.995 }}
                      transition={{ duration: prefersReduced ? 0 : 0.5, ease: "easeOut" }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={screenshots[idx].src}
                        alt={screenshots[idx].alt}
                        fill
                        priority
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* indicadores */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                    {screenshots.map((_, i) => (
                      <button
                        key={i}
                        aria-label={`Ir a la captura ${i + 1}`}
                        className={`h-1.5 rounded-full transition-all ${i === idx ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/70"}`}
                        onClick={() => setIdx(i)}
                      />
                    ))}
                  </div>
                </div>
              </div>
              {/* “bisagra” del portátil */}
              <div className="mx-auto mt-1 h-2 w-48 rounded-full bg-black/20" />
            </div>
          </div>

          {/* Cards derecha */}
          <div className="hidden lg:flex flex-col gap-4">
            {rightCards.map((card, i) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-4 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  {card.icon && <div className="mt-0.5">{card.icon}</div>}
                  <div>
                    <div className="font-semibold text-[#052838]">{card.title}</div>
                    <p className="text-[13px] text-gray-600 mt-1">{card.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
