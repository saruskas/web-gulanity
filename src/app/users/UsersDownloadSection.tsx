"use client";

import Image from "next/image";
import { useState } from "react";

const qrOptions = {
  ios: {
    label: "iOS (App Store)",
    image: "/qr-ios-mock.jpeg",
  },
  android: {
    label: "Android (Google Play)",
    image: "/qr-android-mock.jpeg",
  },
};

export default function UsersDownloadSection() {
  const [platform, setPlatform] = useState<"ios" | "android">("ios");
  const current = qrOptions[platform];

  return (
    <section id="descargar" className="section-gap bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(244,191,0,0.08),transparent_70%)]" aria-hidden="true" />
      <div className="container-outer max-w-4xl relative z-10">
        <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-xl text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.4em] text-[#052838]/50 mb-4">Disponible muy pronto</p>
          <h2 className="text-[#052838] font-display text-3xl md:text-4xl mb-4">Descarga gratis en iOS y Android</h2>
          <p className="text-[#052838]/70 leading-relaxed mb-8">Escanea el código QR con tu cámara y recibe acceso anticipado a la beta junto a las últimas novedades.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start" role="group" aria-label="Selecciona plataforma">
            {(["ios", "android"] as const).map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setPlatform(value)}
                aria-pressed={platform === value}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                  platform === value ? "bg-[#052838] text-white shadow-md" : "bg-white border-2 border-[#052838] text-[#052838] hover:bg-gray-50"
                }`}
              >
                {value === "ios" ? "App Store" : "Google Play"}
              </button>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center max-w-sm w-full">
              <div className="inline-block bg-white p-4 rounded-xl shadow-md mb-3">
                <Image src={current.image} alt={`Código QR para ${current.label}`} width={160} height={160} className="w-40 h-40 object-contain" priority={false} />
              </div>
              <p className="text-sm font-semibold text-[#052838]">{current.label}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

