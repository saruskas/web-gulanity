"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { fetchAmenities, getAmenityImageUrl, type Amenity } from "@/lib/amenity-client";

type AmenitiesConfig = {
  cloudHost: string;
};

type AmenitiesLoopProps = {
  config: AmenitiesConfig;
};

export default function AmenitiesLoop({ config }: AmenitiesLoopProps) {
  const [amenities, setAmenities] = useState<Amenity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const loadAmenities = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetchAmenities(config);
        if (response) {
          setAmenities(response.items.filter((item) => item.imageToken));
        } else {
          setError("Failed to load amenities");
        }
      } catch {
        setError("Failed to load amenities");
      } finally {
        setLoading(false);
      }
    };
    loadAmenities();
  }, [config]);
  if (loading) {
    return (
      <section id="amenities" className="users-section users-bg-white">
        <div className="container-outer">
          <h2 className="users-section-title">Servicios</h2>
          <p className="users-section-subtitle">Loading...</p>
        </div>
      </section>
    );
  }
  if (error || amenities.length === 0) {
    return null;
  }
  const duplicatedAmenities = [...amenities, ...amenities];
  return (
    <section id="amenities" className="users-section users-bg-white">
      <div className="container-outer">
        <h2 className="users-section-title">Servicios</h2>
        <p className="users-section-subtitle">Servicios y comodidades que encontrarás en los restaurantes</p>
        <div className="users-amenities-loop-wrapper">
          <div className="users-amenities-loop">
            {duplicatedAmenities.map((amenity, index) => {
              const imageUrl = getAmenityImageUrl(amenity.imageToken, config);
              return (
                <div key={`${amenity.id}-${index}`} className="users-amenity-loop-item">
                  <Image
                    src={imageUrl}
                    alt={amenity.name}
                    className="users-amenity-loop-image"
                    width={80}
                    height={80}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="users-amenity-loop-tooltip">{amenity.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

