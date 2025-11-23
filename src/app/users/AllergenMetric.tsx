"use client";
import { useEffect, useState, useMemo } from "react";
import { fetchAllergens, type AllergensConfig } from "@/lib/allergen-client";
import { AlertTriangle } from "lucide-react";

type AllergenMetricProps = {
  config: AllergensConfig;
};

export default function AllergenMetric({ config }: AllergenMetricProps) {
  const [allergenCount, setAllergenCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const stableConfig = useMemo(() => ({ cloudHost: config.cloudHost }), [config.cloudHost]);
  useEffect(() => {
    const loadAllergens = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetchAllergens(stableConfig);
        if (response && response.pagination && typeof response.pagination.elements === 'number') {
          setAllergenCount(response.pagination.elements);
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
      loadAllergens();
    }
  }, [stableConfig]);
  const value = loading ? "..." : error ? "—" : allergenCount !== null ? `${allergenCount.toLocaleString()}` : "—";
  const handleClick = () => {
    const allergensSection = document.getElementById("allergens");
    if (allergensSection) {
      allergensSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <article className="users-gain-card cursor-pointer" onClick={handleClick}>
      <div className="users-gain-icon">
        <AlertTriangle className="w-6 h-6" />
      </div>
      <div className="users-metric-value font-display">{value}</div>
      <h3 className="users-gain-title">Alérgenos</h3>
    </article>
  );
}

