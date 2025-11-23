"use client";
import { useEffect, useState, useMemo } from "react";
import { fetchRestaurants, type RestaurantsConfig } from "@/lib/restaurant-client";
import { Store } from "lucide-react";

type RestaurantMetricProps = {
  config: RestaurantsConfig;
};

export default function RestaurantMetric({ config }: RestaurantMetricProps) {
  const [restaurantCount, setRestaurantCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const stableConfig = useMemo(() => ({ cloudHost: config.cloudHost }), [config.cloudHost]);
  useEffect(() => {
    const loadRestaurants = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetchRestaurants(stableConfig);
        if (response && response.pagination && typeof response.pagination.elements === 'number') {
          setRestaurantCount(response.pagination.elements);
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
      loadRestaurants();
    }
  }, [stableConfig]);
  const value = loading ? "..." : error ? "—" : restaurantCount !== null ? `${restaurantCount.toLocaleString()}` : "—";
  return (
    <article className="users-gain-card">
      <div className="users-gain-icon">
        <Store className="w-6 h-6" />
      </div>
      <div className="users-metric-value font-display">{value}</div>
      <h3 className="users-gain-title">Restaurantes</h3>
    </article>
  );
}

