import { ReactNode } from "react";

interface Feature {
  icon: ReactNode | string;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
  title?: string;
  subtitle?: string;
  backgroundColor?: string;
}

export default function FeatureGrid({ title, subtitle, backgroundColor, features }: FeatureGridProps) {
  return (
    <div className={backgroundColor || ""}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl text-text">
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-brand-accent/5 p-8 rounded-xl">
              <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mb-4">
                {typeof feature.icon === 'string' ? (
                  <span className="text-2xl">{feature.icon}</span>
                ) : (
                  feature.icon
                )}
              </div>
              <h3 className="text-2xl font-bold text-brand-primary mb-4">
                {feature.title}
              </h3>
              <p className="text-text">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
