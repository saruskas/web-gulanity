interface Step {
  title: string;
  description: string;
}

interface Stepper3Props {
  title: string;
  subtitle: string;
  backgroundColor: string;
  steps: [Step, Step, Step]; // Exactamente 3 pasos
}

export default function Stepper3({ title, subtitle, backgroundColor, steps }: Stepper3Props) {
  return (
    <section className={`py-20 ${backgroundColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            {title}
          </h2>
          <p className="text-xl text-text">
            {subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Línea conectora solo en desktop */}
              {index < 2 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-brand-accent transform translate-x-1/2 z-0" />
              )}
              
              {/* Círculo con número */}
              <div className="relative z-10 w-20 h-20 bg-brand-primary text-text-inverse rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                {index + 1}
              </div>
              
              {/* Contenido del paso */}
              <h4 className="text-xl font-semibold text-brand-primary mb-4">
                {step.title}
              </h4>
              <p className="text-text">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
