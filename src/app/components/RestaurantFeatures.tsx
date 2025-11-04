"use client";
import { useCallback } from "react";

const features = [
  {
    icon: "🚀",
    title: "Te diferencias de la competencia",
    description:
      "Sorprende con la única carta digital filtrable del mundo: platos, alérgenos, precios o ingredientes… el cliente encuentra su elección en segundos y reserva contigo, no con la competencia.",
    anchor: "#saber-0",
  },
  {
    icon: "👀",
    title: "Una visibilidad que llena mesas",
    description:
      "Las personas te encuentran en la app de forma fácil y rápida, utilizando múltiples filtros que conectan tus platos, tu ambiente y cada necesidad dietética.",
    anchor: "#saber-1",
  },
  {
    icon: "♻️",
    title: "Minimizas el desperdicio alimentario",
    description:
      "Nuestra plataforma transforma las valoraciones de tus clientes — algo que ningún TPV refleja — en una carta viva que se ajusta a la demanda real, reduce costes y te pone al día con la normativa más exigente sobre desperdicio.",
    anchor: "#saber-2",
  },
  {
    icon: "🕵️‍♂️",
    title: "Conoces a tu cliente",
    description:
      "Conoces de primera mano a tus clientes, sus gustos e intolerancias, sabes si vuelven a tu restaurante o qué información comparten con sus amigos.",
    anchor: "#saber-3",
  },
  {
    icon: "🎯",
    title: "Optimizas la gestión de expectativas",
    description:
      "Cumples la expectativa de tus clientes cuando piden un plato, ya que la carta les informa en detalle sobre cada plato.",
    anchor: "#saber-4",
  },
  {
    icon: "✨",
    title: "Generas sugerencias personalizadas",
    description:
      "Ofreces el mejor seguimiento a tus clientes en base a sus preferencias o intolerancias, maximizando su satisfacción.",
    anchor: "#saber-5",
  },
  {
    icon: "🤖",
    title: "Potencias tu negocio con IA propietaria",
    description:
      "Nuestra IA te hace recomendaciones sobre qué platos puedes sustituir, modificar o introducir para maximizar beneficios y la satisfacción del cliente.",
    anchor: "#saber-6",
  },
  {
    icon: "📊",
    title: "Conoces tus métricas para mejorar",
    description:
      "Los comentarios sobre tu restaurante, platos o servicios te permiten conocer con exactitud tus puntos fuertes y débiles, y así tomar decisiones óptimas.",
    anchor: "#saber-7",
  },
  {
    icon: "🌱",
    title: "Mejoras tu reputación",
    description:
      "Reduces el consumo de papel y colaboras con el planeta reduciendo tu huella de carbono, alineándote con valores de responsabilidad social y mejorando la imagen de tu marca.",
    anchor: "#saber-8",
  },
];

type Feature = typeof features[number];

export default function RestaurantFeatures() {
  const handleClick = useCallback((anchor: string) => {
    if (window.location.hash === anchor) {
      window.location.hash = "";
      setTimeout(() => {
        window.location.hash = anchor;
      }, 0);
    } else {
      window.location.hash = anchor;
    }
  }, []);

  return (
    <section
      id="que-ganas"
      className="py-24 bg-gray-100"
      aria-labelledby="que-ganas-title"
    >
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h1 id="money-impact-title" className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#052838] mb-4 font-headings">
            <span className="text-[#FCDB7D]">Qué ganas</span> al unirte a Gulanity
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-[#57636C] leading-relaxed max-w-3xl mx-auto">
            <strong>Beneficios</strong> y <strong>datos</strong> únicos sólo por unirte a nuestra plataforma.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature: Feature, idx: number) => (
            <div
              key={idx}
              onClick={() => handleClick(feature.anchor)}
              className="cursor-pointer block bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-1"
            >
              <div className="w-12 h-12 mb-4 mx-auto flex items-center justify-center rounded-full bg-[#FCDB7D]/20 text-[#FCDB7D] text-2xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#052838] mb-2 text-center font-headings">
                {feature.title}
              </h3>
              <p className="text-[#57636C] text-sm text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}