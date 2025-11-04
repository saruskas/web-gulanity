interface Metric {
  label: string;
  value: string;
}

interface MetricsStripProps {
  metrics: Metric[];
}

export default function MetricsStrip({ metrics }: MetricsStripProps) {
  return (
    <div className="bg-brand-accent/20 py-12 px-6 rounded-xl">
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
        {metrics.map((metric, index) => (
          <div key={index} className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-text-strong mb-2">
              {metric.value}
            </h3>
            <p className="text-text font-medium">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
