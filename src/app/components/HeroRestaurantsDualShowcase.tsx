"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const STEP_DURATION_MS = 2000;

type StageStep = {
  desktopImage: string;
  mobileImage: string;
  focusCardId: string;
  preload: boolean;
};

const stageTimeline: StageStep[] = [
  {
    desktopImage: "/assets/restaurants/Dashboard_Platform.PNG",
    mobileImage: "/restaurant_mobile.webp",
    focusCardId: "reservas",
    preload: true,
  },
  {
    desktopImage: "/assets/restaurants/Menu.PNG",
    mobileImage: "/restaurant_details.webp",
    focusCardId: "insights",
    preload: false,
  },
  {
    desktopImage: "/assets/restaurants/Dishes.PNG",
    mobileImage: "/dish_details.webp",
    focusCardId: "experiencias",
    preload: false,
  },
];

if (typeof window !== "undefined") {
  const ensurePreload = (href: string, key: string) => {
    if (document.head.querySelector(`link[data-preload="${key}"]`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = href;
    link.dataset.preload = key;
    document.head.appendChild(link);
  };
  ensurePreload("/assets/restaurants/Dashboard_Platform.PNG", "hero-dual-desktop");
  ensurePreload("/restaurant_mobile.webp", "hero-dual-mobile");
}

export default function HeroRestaurantsDualShowcase() {
  const [stage, setStage] = useState(0);
  const currentStage = stageTimeline[stage];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setStage((prev) => (prev + 1) % stageTimeline.length);
    }, STEP_DURATION_MS);
    return () => window.clearInterval(timer);
  }, []);

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
              <div className="relative aspect-[2/1]">
                <Image
                  src={currentStage.desktopImage}
                  alt="Dashboard de Gulanity para restaurantes"
                  fill
                  priority={false}
                  loading={currentStage.preload ? "eager" : "lazy"}
                  className="object-cover"
                  sizes="(min-width: 1024px) 620px, 100vw"
                />
              </div>
            </div>
            <div className="mx-auto mt-8 h-24 w-8 rounded-full bg-[#040812] shadow-[0_25px_60px_rgba(0,0,0,0.55)]" />
            <div className="mx-auto mt-3 h-5 w-60 rounded-full bg-black/70 blur-sm opacity-70" />
          </div>

          <motion.div
            className="absolute -right-4 bottom-10 w-[160px] sm:w-[190px] lg:-right-12 z-10"
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
                    alt="App móvil de Gulanity"
                    fill
                    priority={false}
                    loading={currentStage.preload ? "eager" : "lazy"}
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
      </motion.div>
    </div>
  );
}
