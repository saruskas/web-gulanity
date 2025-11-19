"use client";

import Image from "next/image";
import { useState } from "react";
import { useIsMobile } from "@/app/hooks/useIsMobile";

const APP_STORE_URL = "https://apps.apple.com/";
const PLAY_STORE_URL = "https://play.google.com/store/apps";

export default function DownloadSection() {
  const isMobile = useIsMobile();
  const [platform, setPlatform] = useState<"ios" | "android">("ios");
  const qrSrc = platform === "ios" ? "/qr-ios-mock.jpeg" : "/qr-android-mock.jpeg";

  return (
    <section id="descargar" className="section-gap bg-gradient-to-br from-white via-gray-50/30 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(244,191,0,0.03),transparent_70%)]" aria-hidden="true" />
      <div className="container-outer max-w-4xl relative z-10">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.4em] text-[#052838]/50 mb-3">Próximamente</p>
          <h2 className="text-[#052838] font-display text-3xl md:text-4xl mb-4">Descarga la app</h2>
          <p className="text-[#052838]/70 leading-relaxed max-w-2xl mx-auto">
            {isMobile ? "Toca tu tienda favorita para registrarte y recibir acceso prioritario." : "Escanea el código QR con tu móvil para registrarte y recibir acceso prioritario."}
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-3xl p-10 md:p-14 shadow-xl max-w-2xl mx-auto">
          <div className="flex flex-col items-center">
            {!isMobile && (
              <>
                <div className="inline-flex rounded-full p-1 bg-gray-100 border border-gray-200 mb-10" role="group" aria-label="Selecciona plataforma">
                  <button
                    onClick={() => setPlatform("ios")}
                    className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${platform === "ios" ? "bg-[#F4BF00] text-[#052838] shadow-sm" : "text-[#052838]/70 hover:text-[#052838]"}`}
                    aria-pressed={platform === "ios"}
                  >
                    iOS
                  </button>
                  <button
                    onClick={() => setPlatform("android")}
                    className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${platform === "android" ? "bg-[#F4BF00] text-[#052838] shadow-sm" : "text-[#052838]/70 hover:text-[#052838]"}`}
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
                      alt={`Código QR para descargar Gulanity en ${platform === "ios" ? "iOS" : "Android"}`}
                      width={240}
                      height={240}
                      loading="eager"
                      className="w-[220px] h-[220px] md:w-[240px] md:h-[240px] rounded-xl"
                    />
                  </div>
                </div>
                <p className="text-sm text-[#052838]/60 text-center max-w-md leading-relaxed">Disponible para iOS y Android.</p>
              </>
            )}

            {isMobile && (
              <>
                <p className="text-sm text-[#052838]/70 mb-8 text-center max-w-md leading-relaxed">Elige tu plataforma para descargar</p>
                <div className="flex flex-col gap-4 w-full max-w-sm">
                  <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="block w-full hover:opacity-80 transition-opacity" aria-label="Descargar en App Store">
                    <Image src="/appstore-badge.svg" alt="Descargar en App Store" width={200} height={60} className="w-full h-auto max-w-[200px] mx-auto" />
                  </a>
                  <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="block w-full hover:opacity-80 transition-opacity" aria-label="Descargar en Google Play">
                    <Image src="/googleplay-badge.svg" alt="Descargar en Google Play" width={200} height={60} className="w-full h-auto max-w-[200px] mx-auto" />
                  </a>
                </div>
                <p className="text-xs text-[#052838]/50 mt-6 text-center">Regístrate para acceso prioritario cuando lancemos.</p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

