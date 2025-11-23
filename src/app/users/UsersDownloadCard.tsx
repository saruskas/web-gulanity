"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import QRCodeStyling from "qr-code-styling";
import { useIsMobile } from "../hooks/useIsMobile";

type UsersDownloadCardProps = {
  iosUrl: string;
  androidUrl: string;
};

export default function UsersDownloadCard({ iosUrl, androidUrl }: UsersDownloadCardProps) {
  const isMobile = useIsMobile();
  const [platform, setPlatform] = useState<"ios" | "android">("ios");
  const currentUrl = platform === "ios" ? iosUrl : androidUrl;
  const qrRef = useRef<HTMLDivElement>(null);
  const qrCodeRef = useRef<QRCodeStyling | null>(null);
  useEffect(() => {
    if (!isMobile) {
      const qrContainer = qrRef.current;
      if (qrContainer) {
        if (qrContainer.firstChild) {
          qrContainer.innerHTML = "";
        }
        qrCodeRef.current = new QRCodeStyling({
          width: 144,
          height: 144,
          data: currentUrl,
          margin: 0,
          type: "svg",
          qrOptions: {
            errorCorrectionLevel: "H",
          },
          dotsOptions: {
            color: "#052838",
            type: "rounded",
          },
          backgroundOptions: {
            color: "rgba(0,0,0,0)",
          },
          cornersSquareOptions: {
            color: "#052838",
            type: "extra-rounded",
          },
          cornersDotOptions: {
            color: "#052838",
            type: "dot",
          },
        });
        qrCodeRef.current.append(qrContainer);
      }
    }
    return () => {
      if (qrRef.current) {
        qrRef.current.innerHTML = "";
      }
      qrCodeRef.current = null;
    };
  }, [currentUrl, isMobile]);
  if (isMobile) {
    return (
      <div className="w-full max-w-xs mt-10">
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
          <p className="text-[#052838] text-xs font-semibold mb-3 text-center">Descarga la app</p>
          <div className="flex flex-col items-center gap-3">
            <a
              href={iosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full max-w-[160px] hover:opacity-90 transition-opacity"
              aria-label="Descargar en App Store"
            >
              <Image
                src="/appstore-badge.svg"
                alt="Descargar en App Store"
                width={160}
                height={48}
                className="w-full h-auto"
              />
            </a>
            <a
              href={androidUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full max-w-[160px] hover:opacity-90 transition-opacity"
              aria-label="Descargar en Google Play"
            >
              <Image
                src="/googleplay-badge.svg"
                alt="Descargar en Google Play"
                width={160}
                height={48}
                className="w-full h-auto"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
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
          <div className="rounded-lg p-2 w-40 h-40 sm:w-40 sm:h-40 md:w-40 md:h-40 lg:w-40 lg:h-40 xl:w-40 xl:h-40 fhd:w-40 fhd:h-40 qhd:w-40 qhd:h-40 flex items-center justify-center">
            <div ref={qrRef} className="w-36 h-36 sm:w-36 sm:h-36 md:w-36 md:h-36 lg:w-36 lg:h-36 xl:w-36 xl:h-36 fhd:w-36 fhd:h-36 qhd:w-36 qhd:h-36 flex items-center justify-center overflow-hidden [&>svg]:w-36 [&>svg]:h-36 [&>svg]:min-w-36 [&>svg]:min-h-36 [&>svg]:max-w-36 [&>svg]:max-h-36 [&>svg>rect:first-child]:fill-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

