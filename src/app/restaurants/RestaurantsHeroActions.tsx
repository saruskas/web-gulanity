"use client";

import { siteConfig } from "@/lib/config";
import { trackCTA } from "@/lib/track";

export default function RestaurantsHeroActions() {
  const handleClick = (label: string) => trackCTA("restaurants_hero", label);
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <a href="#que-ganas" className="btn btn-md btn-gold" onClick={() => handleClick("que_ganas")}>
        Qué ganas
      </a>
      <a
        href={siteConfig.platforms.restaurantLogin}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-md btn-outline"
        onClick={() => handleClick("quiero_unirme")}
      >
        Quiero unirme
      </a>
    </div>
  );
}

