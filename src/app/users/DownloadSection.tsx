"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/config";

export default function DownloadSection() {
  const [platform, setPlatform] = useState<"ios" | "android">("ios");
  const qrSrc = platform === "ios" ? "/qr-ios-mock.jpeg" : "/qr-android-mock.jpeg";
  const qrAlt = `Código QR para descargar Gulanity en ${platform === "ios" ? "iOS" : "Android"}`;

  return (
    <section id="descargar" className="section-gap bg-gradient-to-br from-white via-gray-50/30 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(244,191,0,0.03),transparent_70%)]" aria-hidden="true" />
      <div className="container-outer max-w-4xl relative z-10">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.4em] text-[#052838]/50 mb-3">Próximamente</p>
          <h2 className="text-[#052838] font-display text-3xl md:text-4xl mb-4">Descarga la app</h2>
          <p className="text-[#052838]/70 leading-relaxed max-w-2xl mx-auto mb-2">
            Escanea el código QR con tu cámara para registrarte y recibir acceso prioritario.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-3xl p-10 md:p-14 shadow-xl max-w-2xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="inline-flex rounded-full p-1 bg-gray-100 border border-gray-200 mb-10" role="group" aria-label="Selecciona plataforma">
              <button
                type="button"
                onClick={() => setPlatform("ios")}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  platform === "ios" ? "bg-[#F4BF00] text-[#052838] shadow-sm" : "text-[#052838]/70 hover:text-[#052838]"
                }`}
                aria-pressed={platform === "ios"}
              >
                iOS
              </button>
              <button
                type="button"
                onClick={() => setPlatform("android")}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  platform === "android" ? "bg-[#F4BF00] text-[#052838] shadow-sm" : "text-[#052838]/70 hover:text-[#052838]"
                }`}
                aria-pressed={platform === "android"}
              >
                Android
              </button>
            </div>
            <div className="relative mb-10">
              <div className="absolute inset-0 bg-[#F4BF00]/8 blur-3xl rounded-full scale-150" aria-hidden="true" />
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border-2 border-gray-100">
                <Image
                  key={platform}
                  src={qrSrc}
                  alt={qrAlt}
                  width={240}
                  height={240}
                  loading="eager"
                  className="w-[220px] h-[220px] md:w-[240px] md:h-[240px] rounded-xl"
                />
              </div>
            </div>
            <p className="text-sm text-[#052838]/60 mb-8 text-center max-w-md leading-relaxed">
              También puedes acceder desde las tiendas oficiales de aplicaciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link
                href={siteConfig.platforms.appStore}
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#052838] text-white rounded-xl hover:bg-[#052838]/90 transition-all hover:scale-105 font-medium text-sm shadow-lg"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </Link>
              <Link
                href={siteConfig.platforms.playStore}
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-[#052838] text-[#052838] rounded-xl hover:bg-gray-50 transition-all hover:scale-105 font-medium text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Google Play
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

