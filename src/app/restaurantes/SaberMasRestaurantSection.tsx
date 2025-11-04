"use client";

import { useEffect, useState } from "react";
import WasteReductionPitch from "../components/WasteReductionPitch";
import VisibilityPitch from "../components/VisibilityPitch";
import DigitalMenuPitch from "../components/DigitalMenuPitch";
import CustomerInsightsPitch from "../components/CustomerInsightPitch";
import ExpectationManagementPitch from "../components/ExpectationManagementPitch";
import PersonalizedSuggestionsPitch from "../components/PersonalizedSuggestionsPitch";
import ProprietaryAIPitch from "../components/ProprietaryAIPitch";
import MetricsPitch from "../components/MetricsPitch";
import SustainabilityPitch from "../components/SustainabilityPitch";

// Define panels
const panels = [
  { id: "saber-0", icon: "🚀", title: "Te diferencias de la competencia" },
  { id: "saber-1", icon: "👀", title: "Una visibilidad que llena mesas" },
  { id: "saber-2", icon: "♻️", title: "Minimizas el desperdicio alimentario" },
  { id: "saber-3", icon: "🕵️‍♂️", title: "Conoces a tu cliente" },
  { id: "saber-4", icon: "🎯", title: "Optimizas la gestión de expectativas" },
  { id: "saber-5", icon: "✨", title: "Generas sugerencias personalizadas" },
  { id: "saber-6", icon: "🤖", title: "Potencias tu negocio con IA propietaria" },
  { id: "saber-7", icon: "📊", title: "Conoces tus métricas para mejorar" },
  { id: "saber-8", icon: "🌱", title: "Mejoras tu reputación" },
];

type Panel = typeof panels[number];

export default function SaberMasSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (panels.some(p => p.id === hash)) {
        setOpenId(hash);
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 0);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <section id="saber-mas" className="py-24 bg-white" aria-labelledby="saber-mas-title">
        <div className="max-w-7xl mx-auto px-6">
          <header className="text-center mb-12 sm:mb-16">
            <h1 id="money-impact-title" className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#052838] mb-4 font-headings">
              Saber <span className="text-[#FCDB7D]">más</span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-[#57636C] leading-relaxed max-w-3xl mx-auto">
            Gulanity <strong>reinventa</strong> las <strong>herramientas digitales</strong> para la restauración. Descubre lo que te hace diferente y mejora tu restaurante.
          </p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {panels.map(({ id, icon, title }: Panel) => (
              <details
                key={id}
                id={id}
                open={openId === id}
                className={`group bg-white border border-gray-200 rounded-2xl shadow-sm transition-all duration-300 ${openId === id ? 'md:col-span-3' : ''}`}
              >
                <summary
                  className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-gray-50 group-open:bg-gray-50 transition-colors rounded-2xl"
                  onClick={e => {
                    e.preventDefault();
                    setOpenId(prev => (prev === id ? null : id));
                  }}
                >
                  <div className="flex items-center">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FCDB7D]/20 text-[#FCDB7D] text-xl mr-4" role="img" aria-label={title}>
                      {icon}
                    </span>
                    <h2 className="text-lg font-medium text-[#052838] font-headings">{title}</h2>
                  </div>
                  <span className="text-2xl text-[#052838] transition-transform duration-200 group-open:rotate-90">›</span>
                </summary>
                <div className="px-6 pb-6 text-[#57636C] leading-relaxed">
                  {id === 'saber-0' && <DigitalMenuPitch />}
                  {id === 'saber-1' && <VisibilityPitch />}
                  {id === 'saber-2' && <WasteReductionPitch />}
                  {id === 'saber-3' && <CustomerInsightsPitch />}
                  {id === 'saber-4' && <ExpectationManagementPitch />}
                  {id === 'saber-5' && <PersonalizedSuggestionsPitch />}
                  {id === 'saber-6' && <ProprietaryAIPitch />}
                  {id === 'saber-7' && <MetricsPitch />}
                  {id === 'saber-8' && <SustainabilityPitch />}
                </div>
              </details>
            ))}
          </div>
        </div>
    </section>
  );
}