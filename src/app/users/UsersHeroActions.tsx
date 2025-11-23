"use client";

import { trackCTA } from "@/lib/track";
import GalleryButton from "./GalleryButton";

export default function UsersHeroActions() {
  const handleClick = (destination: string) => trackCTA("users_hero", destination);
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <GalleryButton />
      <a
        href="#impacto"
        className="btn btn-md border border-[#052838]/20 bg-white text-[#052838] hover:bg-gray-50"
        onClick={() => handleClick("#impacto")}
      >
        Saber más
      </a>
    </div>
  );
}

