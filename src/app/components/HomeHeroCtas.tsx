"use client";

import { useRouter } from "next/navigation";

export default function HomeHeroCtas() {
  const router = useRouter();

  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={() => router.push("/restaurants")}
        className="btn btn-md bg-[#052838] text-white hover:bg-[#003F5C] border-none shadow-lg"
      >
        Soy restaurante
      </button>
      <button
        type="button"
        onClick={() => router.push("/users")}
        className="btn btn-md bg-[#F4BF00] text-[#052838] hover:bg-[#e0ab00] border-none shadow-lg font-semibold"
      >
        Soy usuario
      </button>
    </div>
  );
}
