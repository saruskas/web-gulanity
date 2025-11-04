'use client'
import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { track } from '@/lib/track'
import { CheckCircle } from 'lucide-react'

export default function HeroRestaurants() {
  const onPrimary = () =>
    track('cta_primary_click', {
      audience: 'restaurant',
      placement: 'hero',
      cta: 'empezar_gratis',
    })

  const onSecondary = () =>
    track('cta_secondary_click', {
      audience: 'restaurant',
      placement: 'hero',
      cta: 'ver_demo',
    })

  return (
    <section
      id="hero"
      className="bg-white py-20 md:py-32"
      aria-labelledby="restaurant-hero-title"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Columna izquierda: Texto */}
          <div className="space-y-6">
            <h1
              id="restaurant-hero-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#052838] font-headings leading-[1.1]"
            >
              Atrae clientes ideales y aumenta tu ticket medio
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Sin comisiones. Fideliza automáticamente, conoce a tu cliente y destaca frente a la competencia con herramientas de analítica avanzada.
            </p>

            {/* Lista de beneficios */}
            <ul className="space-y-3 pt-2">
              {[
                'Visibilidad ante tu cliente ideal',
                'Datos accionables en tiempo real',
                'Fidelización automática con IA'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#052838] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link
                href="#waitlist"
                onClick={onPrimary}
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-[#052838] rounded-md hover:bg-[#052838]/90 transition-colors"
              >
                Empezar gratis
              </Link>
              <Link
                href="#como-funciona"
                onClick={onSecondary}
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-[#052838] bg-transparent rounded-md hover:bg-gray-50 transition-colors"
              >
                Ver Demo
              </Link>
            </div>
          </div>

          {/* Columna derecha: Imagen/Demo */}
          <div className="relative lg:h-[550px] h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/restaurant_background.jpeg"
              alt="Dashboard de analíticas para restaurantes"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            {/* Badge flotante */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg px-4 py-3">
              <p className="text-sm font-semibold text-[#052838]">Analíticas Premium</p>
              <p className="text-xs text-gray-600">Dashboard con filtros avanzados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
