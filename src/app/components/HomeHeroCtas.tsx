"use client";

import Link from "next/link";
import { trackCTA } from "@/lib/track";

export default function HomeHeroCtas() {
  const handleClick = (destination: string) => {
    trackCTA("home_hero", destination);
  };
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Link
        href="/restaurants"
        className="btn btn-md btn-outline border-white/30 text-white/90 hover:text-white hover:border-white/60"
        onClick={() => handleClick("/restaurants")}
      >
        Soy restaurante
      </Link>
      <Link
        href="/users"
        className="btn btn-md btn-outline border-white/30 text-white/90 hover:text-white hover:border-white/60"
        onClick={() => handleClick("/users")}
      >
        Soy usuario
      </Link>
    </div>
  );
}

