"use client";

import { FormEvent } from "react";
import { trackFormError, trackFormStart, trackFormSubmit } from "@/lib/track";

export default function BlogNewsletterForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    trackFormStart("blog_newsletter");
    try {
      trackFormSubmit("blog_newsletter", true, { email: formData.get("email") ?? undefined });
      event.currentTarget.reset();
    } catch (error) {
      trackFormError("blog_newsletter", (error as Error).message);
    }
  };

  return (
    <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={handleSubmit}>
      <div className="flex-1">
        <label htmlFor="blog-newsletter-email" className="sr-only">
          Email para newsletter del blog
        </label>
        <input
          id="blog-newsletter-email"
          name="email"
          type="email"
          placeholder="Tu email"
          required
          className="w-full rounded-full border border-gray-200 bg-white px-5 py-3 text-sm text-[#052838] focus:outline-none focus:ring-2 focus:ring-[#D4BFA6]"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-[#D4BFA6] px-8 py-3 font-semibold text-[#052838] hover:opacity-90 transition-opacity"
      >
        Suscribirse
      </button>
    </form>
  );
}

