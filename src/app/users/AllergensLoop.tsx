"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { fetchAllergens, getAllergenImageUrl, type Allergen } from "@/lib/allergen-client";

type AllergensConfig = {
  cloudHost: string;
};

type AllergensLoopProps = {
  config: AllergensConfig;
};

export default function AllergensLoop({ config }: AllergensLoopProps) {
  const [allergens, setAllergens] = useState<Allergen[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const loadAllergens = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetchAllergens(config);
        if (response) {
          setAllergens(response.items.filter((item) => item.imageToken));
        } else {
          setError("Failed to load allergens");
        }
      } catch {
        setError("Failed to load allergens");
      } finally {
        setLoading(false);
      }
    };
    loadAllergens();
  }, [config]);
  if (loading) {
    return (
      <section id="allergens" className="users-section users-bg-white">
        <div className="container-outer">
          <h2 className="users-section-title">Alérgenos</h2>
          <p className="users-section-subtitle">Loading...</p>
        </div>
      </section>
    );
  }
  if (error || allergens.length === 0) {
    return null;
  }
  const duplicatedAllergens = [...allergens, ...allergens];
  return (
    <section id="allergens" className="users-section users-bg-white">
      <div className="container-outer">
        <h2 className="users-section-title">Alérgenos</h2>
        <p className="users-section-subtitle">Información sobre alérgenos para que elijas con seguridad</p>
        <div className="users-amenities-loop-wrapper">
          <div className="users-amenities-loop users-allergens-loop">
            {duplicatedAllergens.map((allergen, index) => {
              const imageUrl = getAllergenImageUrl(allergen.imageToken, config);
              return (
                <div key={`${allergen.id}-${index}`} className="users-amenity-loop-item">
                  <Image
                    src={imageUrl}
                    alt={allergen.name}
                    className="users-amenity-loop-image"
                    width={80}
                    height={80}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="users-amenity-loop-tooltip">{allergen.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

