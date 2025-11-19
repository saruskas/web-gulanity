"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const STEP_DURATION_MS = 2000;

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

export default function HeroRestaurantsShowcase() {
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
      <div className="relative mx-auto w-full max-w-[720px] lg:min-h-[560px]">
        <div className="relative rounded-[40px] bg-gradient-to-br from-[#050a14] via-[#070e1d] to-[#02040a] p-4 shadow-[0_50px_120px_rgba(1,4,9,0.85)] ring-1 ring-white/10 w-full">
          <div className="absolute top-5 left-1/2 h-1.5 w-28 -translate-x-1/2 rounded-full bg-white/20" />
          <div className="relative mt-6 rounded-[30px] overflow-hidden bg-black">
            <div className="relative aspect-[2/1]">
              <Image
                src={currentStage.image}
                alt="Dashboard de Gulanity para restaurantes"
                fill
                loading="eager"
                className="object-cover"
                sizes="(min-width: 1024px) 720px, 100vw"
              />
            </div>
          </div>
          <div className="mx-auto mt-8 h-24 w-8 rounded-full bg-[#040812] shadow-[0_25px_60px_rgba(0,0,0,0.55)]" />
          <div className="mx-auto mt-3 h-5 w-60 rounded-full bg-black/70 blur-sm opacity-70" />
        </div>
      </div>
    </div>
  );
}
