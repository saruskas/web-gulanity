/**
 * Configuración centralizada del sitio.
 * Contiene URLs, datos de contacto, redes sociales y valores compartidos por toda la app.
 * Usa este objeto en lugar de hardcodear cadenas para facilitar mantenimiento e internacionalización.
 */
export const siteConfig = {
  name: "Gulanity",
  url: "https://gulanity.com",
  description: "Conecta usuarios y restaurantes locales: descubre platos reales o atrae clientes sin comisiones.",
  contact: {
    email: "contact@gulanity.com",
    phone: "660566561",
    phoneFormatted: "+34 660566561",
  },
  social: {
    facebook: "https://facebook.com/gulanity",
    instagram: "https://instagram.com/gulanity",
    twitter: "https://twitter.com/gulanity",
    linkedin: "https://linkedin.com/company/gulanity",
    tiktok: "https://tiktok.com/@gulanity",
  },
  platforms: {
    restaurantLogin: "https://platform.dev.gulanity.com/login",
    restaurantSignup: "https://platform.dev.gulanity.com/signup",
    appStore: "#",
    playStore: "#",
  },
  legal: {
    privacy: "/privacidad",
    terms: "/terminos",
    cookies: "/cookies",
  },
  analytics: {
    gaId: process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX",
    clarityId: process.env.NEXT_PUBLIC_CLARITY_ID,
    hotjarId: process.env.NEXT_PUBLIC_HOTJAR_ID,
  },
} as const;

export type SiteConfig = typeof siteConfig;

