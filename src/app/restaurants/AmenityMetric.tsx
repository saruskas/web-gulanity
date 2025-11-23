"use client";
import { useEffect, useState, useMemo } from "react";
import { fetchAmenities, type AmenitiesConfig } from "@/lib/amenity-client";
import { Wifi } from "lucide-react";

type AmenityMetricProps = {
  config: AmenitiesConfig;
};

export default function AmenityMetric({ config }: AmenityMetricProps) {
  const [amenityCount, setAmenityCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const stableConfig = useMemo(() => ({ cloudHost: config.cloudHost }), [config.cloudHost]);
  useEffect(() => {
    const loadAmenities = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetchAmenities(stableConfig);
        if (response && response.pagination && typeof response.pagination.elements === 'number') {
          setAmenityCount(response.pagination.elements);
        } else {
          setError("Data structure error");
        }
      } catch {
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };
    if (stableConfig.cloudHost) {
      loadAmenities();
    }
  }, [stableConfig]);
  const value = loading ? "..." : error ? "—" : amenityCount !== null ? `${amenityCount.toLocaleString()}` : "—";
  return (
    <article className="restaurants-metric-card">
      <div className="restaurants-metric-icon">
        <Wifi className="w-6 h-6" />
      </div>
      <div className="restaurants-metric-card-value font-display">{value}</div>
      <h3 className="restaurants-metric-card-title">Servicios</h3>
    </article>
  );
}

