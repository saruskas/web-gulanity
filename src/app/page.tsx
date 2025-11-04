"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-12">
      {/* H1 sr-only para SEO/accesibilidad */}
      <h1 className="sr-only">
        Gulanity: descubre restaurantes reales y atrae clientes sin comisiones
      </h1>

      {/* Logo centrado */}
      <div className="mb-8 flex items-center justify-center">
        <Image
          src="/logo.png"
          alt="Gulanity"
          width={200}
          height={80}
          priority
        />
      </div>

      {/* Subclaim visible (H2) */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-xl sm:text-2xl text-[#052838] leading-relaxed font-headings">
          La plataforma que conecta a usuarios con restaurantes locales. Descubre platos únicos o haz crecer tu negocio.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        {/* Card Usuario */}
        <Card className="hover:shadow-xl transition-shadow duration-300 border hover:border-[#FCDB7D] rounded-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-[#052838] font-headings">
              Soy Usuario
            </CardTitle>
            <CardDescription className="text-base text-[#57636C]">
              Encuentra platos y restaurantes sin sorpresas, recomendados por amigos e influencers.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-2 text-sm text-[#57636C]">
              <li className="flex items-start">
                <span className="text-[#FCDB7D] mr-2">✓</span>
                <span>Filtra por plato, dieta, influencer o servicio</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FCDB7D] mr-2">✓</span>
                <span>Confía en opiniones de tu red</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FCDB7D] mr-2">✓</span>
                <span>Cartas interactivas y reseñas detalladas</span>
              </li>
            </ul>
            <Link href="/usuarios" className="block">
              <Button className="w-full bg-[#FCDB7D] text-[#052838] hover:bg-[#FCDB7D]/90">
                Explorar como usuario
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Card Restaurante */}
        <Card className="hover:shadow-xl transition-shadow duration-300 border hover:border-[#FCDB7D] rounded-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-[#052838] font-headings">
              Soy Restaurante
            </CardTitle>
            <CardDescription className="text-base text-[#57636C]">
              Atrae más clientes, fideliza y haz crecer tu negocio con analíticas y herramientas sin comisiones.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-2 text-sm text-[#57636C]">
              <li className="flex items-start">
                <span className="text-[#FCDB7D] mr-2">✓</span>
                <span>Visibilidad ante clientes ideales</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FCDB7D] mr-2">✓</span>
                <span>Datos accionables de tu carta y clientes</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FCDB7D] mr-2">✓</span>
                <span>Fideliza automáticamente con IA</span>
              </li>
            </ul>
            <Link href="/restaurantes" className="block">
              <Button className="w-full bg-[#052838] text-[#FCDB7D] hover:bg-[#052838]/90">
                Explorar para restaurantes
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <p className="mt-12 text-sm text-gray-500 max-w-xl mx-auto text-center">
        Descubre cómo Gulanity reinventa la experiencia gastronómica para usuarios y restaurantes. Sin comisiones ocultas, sin sorpresas.
      </p>
    </div>
  );
}
