"use client";

import { useEffect, useState } from "react";
import DiscoverPitch from "./UserPitchs/DiscoverPitch";
import TrustPitch from "./UserPitchs/TrustPitch";
import InteractiveMenuPitch from "./UserPitchs/InteractiveMenuPitch";
import TimeSavingPitch from "./UserPitchs/TimeSavingPitch";
import FavoritesPitch from "./UserPitchs/FavoritesPitch";
import ShareExperiencePitch from "./UserPitchs/ShareExperiencePitch";

// Define panels
const panels = [
  { id: "saber-0", icon: "🍽️", title: "Encuentra tu plato" },
  { id: "saber-1", icon: "👥", title: "Confianza total" },
  { id: "saber-2", icon: "📱", title: "Carta interactiva" },
  { id: "saber-3", icon: "🕓", title: "Red social" },
  { id: "saber-4", icon: "🔖", title: "Tus favoritos" },
  { id: "saber-5", icon: "🔗", title: "Comparte tu experiencia" },
];

type Panel = typeof panels[number];

export default function SaberMasUserSection() {
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

    // Initial check
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <section id="saber-mas" className="py-24 bg-gray-100" aria-labelledby="saber-mas-title">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-16">
          <h2 id="saber-mas-title" className="text-3xl lg:text-4xl font-semibold text-[#052838] mb-4 font-headings">
            Saber más
          </h2>
          <p className="text-base lg:text-lg text-[#57636C] max-w-3xl mx-auto">
            Descubre en detalle cada ventaja de la app Gulanity y aprovecha todo su potencial.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  <h3 className="text-lg font-medium text-[#052838] font-headings">{title}</h3>
                </div>
                <span className="text-2xl text-[#052838] transition-transform duration-200 group-open:rotate-90">›</span>
              </summary>

              <div className="px-6 pb-6 text-[#57636C] leading-relaxed">
                {id === "saber-0" && <DiscoverPitch />}
                {id === "saber-1" && <TrustPitch />}
                {id === "saber-2" && <InteractiveMenuPitch />}
                {id === "saber-3" && <TimeSavingPitch />}
                {id === "saber-4" && <FavoritesPitch />}
                {id === "saber-5" && <ShareExperiencePitch />}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}