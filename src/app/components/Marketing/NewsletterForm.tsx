"use client";

import { useState } from "react";

interface NewsletterFormProps {
  onSubmit?: (email: string) => void;
}

export default function NewsletterForm({ onSubmit }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);
    
    try {
      // Simular delay de API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (onSubmit) {
        onSubmit(email);
      }
      
      setIsSuccess(true);
      setEmail("");
    } catch (error) {
      console.error("Error al suscribirse:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" role="form" aria-label="Suscripción al newsletter">
        <label htmlFor="newsletter-email" className="sr-only">
          Dirección de email para newsletter
        </label>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Tu email"
          required
          disabled={isLoading}
          aria-describedby="newsletter-privacy"
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-accent disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={isLoading || !email.trim()}
          aria-describedby="newsletter-status"
          className="bg-brand-primary text-text-inverse px-8 py-3 rounded-lg hover:bg-brand-primary-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-brand-accent"
        >
          {isLoading ? "Suscribiendo..." : "Apúntate al newsletter"}
        </button>
      </form>
      
      <div aria-live="polite" className="mt-4 text-center" id="newsletter-status">
        {isSuccess && (
          <p className="text-green-600 font-medium">
            ¡Gracias! Te has suscrito correctamente.
          </p>
        )}
        <p id="newsletter-privacy" className="text-sm text-text mt-2">
          Sin spam. Puedes darte de baja cuando quieras.
        </p>
      </div>
    </div>
  );
}
