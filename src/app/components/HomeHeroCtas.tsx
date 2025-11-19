"use client";

import Link from "next/link";

export default function HomeHeroCtas() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Link
        href="/restaurants"
        className="btn btn-md bg-[#052838] text-white hover:bg-[#003F5C] border-none shadow-lg"
        prefetch={true}
      >
        Soy restaurante
      </Link>
      <Link
        href="/users"
        className="btn btn-md bg-[#F4BF00] text-[#052838] hover:bg-[#e0ab00] border-none shadow-lg font-semibold"
        prefetch={true}
      >
        Soy usuario
      </Link>
    </div>
  );
}
