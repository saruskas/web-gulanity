"use client";

import Image from "next/image";
import { useState } from "react";

export default function UsersDownloadCard() {
  const [platform, setPlatform] = useState<"ios" | "android">("ios");
  const qrSrc = platform === "ios" ? "/qr-ios-mock.jpeg" : "/qr-android-mock.jpeg";
  return (
    <div className="w-full max-w-xs mt-10">
      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
        <p className="text-[#052838] text-xs font-semibold mb-3 text-center">Descarga la app</p>
        <div className="flex items-center justify-center gap-2 mb-3" role="group" aria-label="Selecciona una plataforma">
          {(["ios", "android"] as const).map((value) => (
            <button
              key={value}
              onClick={() => setPlatform(value)}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                platform === value ? "bg-[#F4BF00] text-[#052838]" : "bg-gray-200 text-[#052838]/70 hover:text-[#052838]"
              }`}
              aria-pressed={platform === value}
            >
              {value === "ios" ? "iOS" : "Android"}
            </button>
          ))}
        </div>
        <div className="flex justify-center">
          <div className="bg-white rounded-lg p-2 w-24 h-24 flex items-center justify-center">
            <Image src={qrSrc} alt={`QR para descargar Gulanity en ${platform}`} width={96} height={96} className="w-full h-full rounded object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}

