"use client";
import { Images } from "lucide-react";
import { trackCTA } from "@/lib/track";

export default function GalleryButton() {
  const handleClick = () => {
    trackCTA("users_hero", "#galeria");
    const element = document.getElementById("galeria");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <button
      onClick={handleClick}
      className="btn btn-md btn-yellow"
      type="button"
    >
      <Images className="w-5 h-5" />
      <span>Ver galería</span>
    </button>
  );
}

