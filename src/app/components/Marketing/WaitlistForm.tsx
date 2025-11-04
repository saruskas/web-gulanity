"use client";

import { useState } from "react";

interface WaitlistData {
  name: string;
  email: string;
  restaurant: string;
}

interface WaitlistFormProps {
  onSubmit?: (data: WaitlistData) => void;
}

export default function WaitlistForm({ onSubmit }: WaitlistFormProps) {
  const [formData, setFormData] = useState<WaitlistData>({
    name: "",
    email: "",
    restaurant: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.restaurant.trim()) return;

    setIsLoading(true);
    
    try {
      // Simular delay de API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (onSubmit) {
        onSubmit(formData);
      }
      
      setIsSuccess(true);
      setFormData({ name: "", email: "", restaurant: "" });
    } catch (error) {
      console.error("Error al unirse a la waitlist:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.restaurant.trim();

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4" role="form" aria-label="Lista de espera para restaurantes">
        <div>
          <label htmlFor="waitlist-name" className="sr-only">
            Nombre de contacto
          </label>
          <input
            id="waitlist-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Nombre de contacto"
            required
            disabled={isLoading}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-accent disabled:opacity-50"
          />
        </div>
        
        <div>
          <label htmlFor="waitlist-email" className="sr-only">
            Dirección de email
          </label>
          <input
            id="waitlist-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            required
            disabled={isLoading}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-accent disabled:opacity-50"
          />
        </div>
        
        <div>
          <label htmlFor="waitlist-restaurant" className="sr-only">
            Nombre del restaurante
          </label>
          <input
            id="waitlist-restaurant"
            type="text"
            name="restaurant"
            value={formData.restaurant}
            onChange={handleInputChange}
            placeholder="Nombre del restaurante"
            required
            disabled={isLoading}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-accent disabled:opacity-50"
          />
        </div>
        
        <button
          type="submit"
          disabled={isLoading || !isFormValid}
          aria-describedby="waitlist-status"
          className="w-full bg-brand-primary text-text-inverse px-8 py-3 rounded-lg hover:bg-brand-primary-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-brand-accent"
        >
          {isLoading ? "Uniéndose..." : "Únete a Gulanity"}
        </button>
      </form>
      
      <div aria-live="polite" className="mt-4 text-center" id="waitlist-status">
        {isSuccess && (
          <p className="text-green-600 font-medium">
            ¡Perfecto! Te hemos añadido a la lista de espera.
          </p>
        )}
      </div>
    </div>
  );
}
