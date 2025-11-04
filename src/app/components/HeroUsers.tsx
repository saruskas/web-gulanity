'use client'
import * as React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { IconApple, IconAndroid } from './Icons'
import { track } from '@/lib/track'
import { CheckCircle } from 'lucide-react'

export default function HeroUsers() {
  const [platform, setPlatform] = useState<'ios' | 'android'>('ios')

  return (
    <section
      id="hero"
      className="bg-white py-20 md:py-32"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Columna izquierda: Texto */}
          <div className="space-y-6">
            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#052838] font-headings leading-[1.1]"
            >
              Tu próximo plato ideal, en 3 clics
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Sin sorpresas, recomendado por amigos e influencers. Descubre restaurantes locales y platos únicos cerca de ti.
            </p>

            {/* Lista de beneficios */}
            <ul className="space-y-3 pt-2">
              {[
                'Filtra por plato, dieta o influencer',
                'Confía en opiniones de tu red',
                'Cartas interactivas y detalladas'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#052838] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            {/* Selector de plataforma y QR */}
            <div className="pt-6">
              <p className="text-sm font-medium text-gray-700 mb-4">
                Escanea el código QR para descargar:
              </p>

              {/* Selector iOS/Android */}
              <div className="inline-flex bg-gray-100 rounded-full p-1 mb-6" role="group" aria-label="Plataforma móvil">
                {(['ios', 'android'] as const).map((plat) => (
                  <button
                    key={plat}
                    aria-pressed={platform === plat}
                    onClick={() => {
                      setPlatform(plat);
                      track("platform_switch", { to: plat, from: "hero_desktop" });
                    }}
                    className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-200 ${
                      platform === plat
                        ? 'bg-[#052838] text-white shadow-sm'
                        : 'bg-transparent text-gray-600 hover:text-[#052838]'
                    }`}
                  >
                    <span className="inline-flex items-center gap-2">
                      {plat === 'ios' ? <IconApple className="w-4 h-4" /> : <IconAndroid className="w-4 h-4" />}
                      {plat === 'ios' ? 'iOS' : 'Android'}
                    </span>
                  </button>
                ))}
              </div>

              {/* QR Code */}
              <div className="relative w-32 h-32">
                <img
                  src="/qr-ios-mock.jpeg"
                  alt="QR para descargar iOS"
                  className={`absolute inset-0 w-full h-full object-cover rounded-lg border-2 border-gray-200 transition-opacity duration-300 ${
                    platform === 'ios' ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                <img
                  src="/qr-android-mock.jpeg"
                  alt="QR para descargar Android"
                  className={`absolute inset-0 w-full h-full object-cover rounded-lg border-2 border-gray-200 transition-opacity duration-300 ${
                    platform === 'android' ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Columna derecha: Imagen de móvil */}
          <div className="relative lg:h-[600px] h-[450px] flex items-center justify-center">
            <div className="relative w-[280px] h-[560px] md:w-[320px] md:h-[640px]">
              <Image
                src="/user_background.jpeg"
                alt="App móvil Gulanity mostrando platos"
                fill
                priority
                sizes="(max-width: 768px) 280px, 320px"
                className="object-cover rounded-[2.5rem] shadow-2xl"
              />

              {/* Badge flotante superior */}
              <div className="absolute top-8 right-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg px-4 py-2.5 border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-[#FCDB7D] border-2 border-white"></div>
                    <div className="w-6 h-6 rounded-full bg-[#052838] border-2 border-white"></div>
                  </div>
                  <p className="text-xs font-semibold text-[#052838]">+2.5k usuarios</p>
                </div>
              </div>

              {/* Badge flotante inferior */}
              <div className="absolute bottom-8 left-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg px-4 py-2.5 border border-gray-100">
                <p className="text-xs text-gray-600 mb-0.5">Valoración</p>
                <div className="flex items-center gap-1">
                  <span className="text-lg font-bold text-[#052838]">4.8</span>
                  <span className="text-yellow-500">★★★★★</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
