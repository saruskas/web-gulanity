"use client";
import { useEffect, useState, useMemo } from "react";
import { fetchDishes, type DishesConfig } from "@/lib/dish-client";
import { Utensils } from "lucide-react";

type DishesMetricProps = {
  config: DishesConfig;
};

export default function DishesMetric({ config }: DishesMetricProps) {
  const [dishCount, setDishCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const stableConfig = useMemo(() => ({ cloudHost: config.cloudHost }), [config.cloudHost]);
  useEffect(() => {
    const loadDishes = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetchDishes(stableConfig);
        if (response && response.pagination && typeof response.pagination.elements === 'number') {
          setDishCount(response.pagination.elements);
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
      loadDishes();
    }
  }, [stableConfig]);
  const value = loading ? "..." : error ? "—" : dishCount !== null ? `${dishCount.toLocaleString()}` : "—";
  return (
    <article className="restaurants-metric-card">
      <div className="restaurants-metric-icon">
        <Utensils className="w-6 h-6" />
      </div>
      <div className="restaurants-metric-card-value font-display">{value}</div>
      <h3 className="restaurants-metric-card-title">Platos</h3>
    </article>
  );
}

