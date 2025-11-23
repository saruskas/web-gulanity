"use client";
import { useEffect, useState, useMemo } from "react";
import { fetchCuisines, type CuisinesConfig } from "@/lib/cuisine-client";
import { ChefHat } from "lucide-react";

type CuisineMetricProps = {
  config: CuisinesConfig;
};

export default function CuisineMetric({ config }: CuisineMetricProps) {
  const [cuisineCount, setCuisineCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const stableConfig = useMemo(() => ({ cloudHost: config.cloudHost }), [config.cloudHost]);
  useEffect(() => {
    const loadCuisines = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetchCuisines(stableConfig);
        if (response && response.pagination && typeof response.pagination.elements === 'number') {
          setCuisineCount(response.pagination.elements);
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
      loadCuisines();
    }
  }, [stableConfig]);
  const value = loading ? "..." : error ? "—" : cuisineCount !== null ? `${cuisineCount.toLocaleString()}` : "—";
  return (
    <article className="users-gain-card">
      <div className="users-gain-icon">
        <ChefHat className="w-6 h-6" />
      </div>
      <div className="users-metric-value font-display">{value}</div>
      <h3 className="users-gain-title">Tipos de Cocina</h3>
    </article>
  );
}

