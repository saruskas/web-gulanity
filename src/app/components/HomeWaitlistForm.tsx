"use client";

import { FormEvent } from "react";
import { trackFormError, trackFormStart, trackFormSubmit } from "@/lib/track";

export default function HomeWaitlistForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    trackFormStart("home_waitlist");
    try {
      trackFormSubmit("home_waitlist", true, { email: formData.get("email") ?? undefined });
      event.currentTarget.reset();
    } catch (error) {
      trackFormError("home_waitlist", (error as Error).message);
    }
  };

  return (
    <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubmit}>
      <div className="flex-1">
        <label htmlFor="home-waitlist-email" className="sr-only">
          Email para la lista de espera
        </label>
        <input
          id="home-waitlist-email"
          name="email"
          type="email"
          required
          placeholder="tu@email.com"
          className="w-full rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-sm placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#D4BFA6]"
        />
      </div>
      <button type="submit" className="btn btn-md btn-gold whitespace-nowrap">
        Avisadme
      </button>
    </form>
  );
}

