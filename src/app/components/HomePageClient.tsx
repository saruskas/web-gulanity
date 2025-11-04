"use client";
import React, { useCallback, useState } from "react";
import { IconApple, IconAndroid } from "./Icons";

const searchFeatures = [
  { icon: "🍽️", title: "Encuentra tu plato", description: "Filtra por ingredientes, alérgenos, precio o influencer y acierta en segundos.", anchor: "#saber-0" },
  { icon: "🔍", title: "Búsqueda ultra-segmentada", description: "Etiquetas “mood”, ocasión o chef: el nano-filtro que te lleva directo a tu antojo.", anchor: "#saber-1" },
  { icon: "🕓", title: "Ahorro de tiempo", description: "Resultados instantáneos según tus horarios y servicios deseados.", anchor: "#saber-3" },
];

const socialFeatures = [
  { icon: "📱", title: "Feed auto-alimentado", description: "Tu propio “Insta-Food” que se actualiza al valorar platos.", anchor: "#saber-2" },
  { icon: "👥", title: "Confianza total", description: "Sigue a amigos e influencers, lee sus reseñas y come sin sorpresas.", anchor: "#saber-4" },
  { icon: "🔗", title: "Comparte con un click", description: "Etiqueta, recomienda y crea tu ruta gastronómica colaborativa.", anchor: "#saber-5" },
];

export default function HomePageClient() {
  const [showInfluencerInfo, setShowInfluencerInfo] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [platform, setPlatform] = useState<"ios" | "android">("ios");

  const handleClick = useCallback((anchor: string) => {
    const id = anchor.replace('#', '');
    if (window.location.hash === anchor) {
      // force hashchange
      window.location.hash = '';
      setTimeout(() => { window.location.hash = anchor; }, 0);
    } else {
      window.location.hash = anchor;
    }
  }, []);

  return (
    <>
      {/* "Qué ganas" Section */}
      <section id="que-ganas" className="py-24 bg-gray-50" aria-labelledby="que-ganas-title">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          {/* Intro */}
          <h2 id="que-ganas-title" className="text-3xl lg:text-4xl font-semibold text-[#052838] mb-4 font-headings">
            Qué ganas al descargar la app de Gulanity
          </h2>
          <p className="text-base lg:text-lg text-[#57636C] mb-12">
            Tienes lo mejor de un <strong className="text-[#052838]">buscador ultrapotente</strong> y de una <strong className="text-[#052838]">red social foodie</strong>.
          </p>

          {/* Bloque 1: Buscador */}
          <div className="mb-12">
            <div className="inline-block bg-[#FCDB7D] text-[#052838] rounded-full px-5 py-2 font-semibold mb-6">
              🚀 Buscador ultrapotente
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {searchFeatures.map(({ icon, title, description, anchor }, idx) => (
                <div
                  key={idx}
                  onClick={() => handleClick(anchor)}
                  className="cursor-pointer block bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-1"
                >
                  <div className="w-12 h-12 mb-4 mx-auto flex items-center justify-center rounded-full bg-[#FCDB7D]/20 text-[#FCDB7D] text-2xl">
                    {icon}
                  </div>
                  <h4 className="text-xl font-bold text-[#052838] mb-2">{title}</h4>
                  <p className="text-[#57636C] text-sm">{description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bloque 2: Red Social */}
          <div>
            <div className="inline-block bg-[#FCDB7D] text-[#052838] rounded-full px-5 py-2 font-semibold mb-6">
              🎉 Red social foodie
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {socialFeatures.map(({ icon, title, description, anchor }, idx) => (
                <div
                  key={idx}
                  onClick={() => handleClick(anchor)}
                  className="cursor-pointer block bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-1"
                >
                  <div className="w-12 h-12 mb-4 mx-auto flex items-center justify-center rounded-full bg-[#FCDB7D]/20 text-[#FCDB7D] text-2xl">
                    {icon}
                  </div>
                  <h4 className="text-xl font-bold text-[#052838] mb-2">{title}</h4>
                  <p className="text-[#57636C] text-sm">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Influencer Section */}
      <section id="influencer" className="py-24 bg-gradient-to-br from-[#FCDB7D]/10 to-yellow-100/20">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 text-center">
            <div className="mb-8">
              <span className="inline-block bg-gradient-to-r from-[#FCDB7D] to-yellow-300 text-[#052838] font-bold px-4 py-2 rounded-full text-sm mb-4">
                🌟 Pensado para Foodies  🌟
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#052838] mb-4 font-headings">
                Foodie Influencer
              </h2>
              <p className="text-lg text-[#57636C] leading-relaxed max-w-2xl mx-auto">
                Convierte cada experiencia gastronómica en contenido automático, ahorra <strong className="text-[#052838]">mucho</strong> tiempo y
                <strong className="text-[#052838]"> haz crecer tu red</strong> por cada reseña que publiques.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-3xl mb-3">📱</div>
                <h3 className="font-semibold text-[#052838] mb-2">Feed Integrado</h3>
                <p className="text-[#57636C] text-sm">Tu propio &ldquo;Insta-Food&rdquo; feed que se actualiza automáticamente con cada valoración.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-3xl mb-3">🤝</div>
                <h3 className="font-semibold text-[#052838] mb-2">Colaboraciones</h3>
                <p className="text-[#57636C] text-sm">Acceso a eventos VIP, degustaciones y colaboraciones exclusivas con restaurantes.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-3xl mb-3">🎁</div>
                <h3 className="font-semibold text-[#052838] mb-2">Recompensas</h3>
                <p className="text-[#57636C] text-sm">Descuentos especiales, acceso beta y rewards por cada reseña que generes.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#052838] to-gray-800 rounded-xl p-6 text-white mb-8">
              <h3 className="text-xl font-semibold mb-3">🚀 Cómo Funciona</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="font-semibold text-[#FCDB7D]">1. Descarga la App</div>
                  <div>Regístrate en Gulanity en dos clics</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-[#FCDB7D]">2. Comenta</div>
                  <div>Puntúa platos desde la carta digital</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-[#FCDB7D]">3. Listo para crecer</div>
                  <div>Tu reseña aparece automáticamente en tu perfil</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setShowDownloadModal(true);
                }}
                className="inline-block bg-[#FCDB7D] text-[#052838] font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                Descarga la App
              </a>
              <button
                onClick={() => setShowInfluencerInfo(true)}
                className="inline-block bg-transparent border-2 border-[#052838] text-[#052838] font-semibold py-4 px-8 rounded-lg hover:bg-[#052838] hover:text-white transition-all duration-200"
              >
                Más información
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Extra Info "Influencer" */}
      {showInfluencerInfo && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowInfluencerInfo(false)}>
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowInfluencerInfo(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold"
              aria-label="Cerrar información"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold text-[#052838] mb-6 font-headings">
              Detalles del Programa Influencer
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-[#052838] mb-2">📊 Sistema de Puntos</h4>
                <ul className="text-[#57636C] text-sm space-y-1 ml-4">
                  <li>• +10 puntos por cada reseña con foto</li>
                  <li>• +20 puntos por reseñas con video</li>
                  <li>• +50 puntos por reseñas que generen 10+ interacciones</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-[#052838] mb-2">🎯 Beneficios por Nivel</h4>
                <div className="space-y-3 text-sm">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-semibold text-[#FCDB7D]">Nivel Bronce (100+ puntos)</div>
                    <div className="text-[#57636C]">5% descuento en restaurantes asociados</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-semibold text-[#FCDB7D]">Nivel Plata (500+ puntos)</div>
                    <div className="text-[#57636C]">Invitaciones a eventos gastronómicos exclusivos</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-semibold text-[#FCDB7D]">Nivel Oro (1000+ puntos)</div>
                    <div className="text-[#57636C]">Colaboraciones pagadas con restaurantes + acceso beta</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-[#052838] mb-2">📱 Tu Feed Personal</h4>
                <p className="text-[#57636C] text-sm">
                  Cada plato que valores aparece automáticamente en tu perfil público, 
                  con la opción de compartir directamente en redes sociales. Tus seguidores 
                  pueden seguir tus recomendaciones y hacer reservas desde tus reseñas.
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <a
                href="/influencer-signup"
                className="inline-block bg-[#FCDB7D] text-[#052838] font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Comenzar Ahora
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Download QR */}
      {showDownloadModal && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowDownloadModal(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowDownloadModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold"
              aria-label="Cerrar descarga"
            >
              ×
            </button>

            {/* Segmented Control */}
            <div className="hidden sm:block mb-6">
              <div role="group" className="inline-flex bg-[#F0F0F0] rounded-full p-1 shadow-sm">
                {(["ios", "android"] as const).map((plat) => (
                  <button
                    key={plat}
                    aria-pressed={platform === plat}
                    onClick={() => setPlatform(plat)}
                    className={`px-6 py-3 rounded-full font-medium transition-colors duration-200 ${
                      platform === plat
                        ? "bg-[#052838] text-[#FCDB7D] shadow"
                        : "bg-transparent text-[#052838] hover:text-[#57636C]"
                    }`}
                  >
                    <span className="inline-flex items-center gap-2">
                      {plat === "ios" ? <IconApple className="w-5 h-5" /> : <IconAndroid className="w-5 h-5" />}
                      {plat.toUpperCase()}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* QR Codes */}
            <div className="mt-8 flex justify-center">
              <div className="relative w-36 h-36 sm:w-40 sm:h-40">
                <img
                  src="/qr-ios-mock.jpeg"
                  alt="QR para descargar iOS"
                  className={`absolute inset-0 w-full h-full object-cover rounded-lg shadow-md transition-opacity duration-300 ${
                    platform === "ios" ? "opacity-100" : "opacity-0"
                  }`}
                />
                <img
                  src="/qr-android-mock.jpeg"
                  alt="QR para descargar Android"
                  className={`absolute inset-0 w-full h-full object-cover rounded-lg shadow-md transition-opacity duration-300 ${
                    platform === "android" ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}