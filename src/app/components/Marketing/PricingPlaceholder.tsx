export default function PricingPlaceholder() {
  return (
    <div className="text-center p-8 bg-bg border border-gray-200 rounded-xl shadow-sm">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-text-strong mb-4">
          Próximamente
        </h3>
        <p className="text-text">
          Estamos preparando planes increíbles para tu restaurante
        </p>
      </div>
      
      <button className="bg-brand-primary text-text-inverse px-8 py-3 rounded-lg hover:bg-brand-primary-hover transition-colors">
        Únete a Gulanity
      </button>
    </div>
  );
}
