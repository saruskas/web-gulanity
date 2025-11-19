"use client";

import Link from "next/link";

export default function HomeHeroCtas() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Link href="/restaurants" className="btn btn-md btn-outline border-white/30 text-white/90 hover:text-white hover:border-white/60" prefetch>
        Soy restaurante
      </Link>
      <Link href="/users" className="btn btn-md btn-outline border-white/30 text-white/90 hover:text-white hover:border-white/60" prefetch>
        Soy usuario
      </Link>
    </div>
  );
}

