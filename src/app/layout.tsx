import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins, Cormorant } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Toaster } from "sonner";
import BackToTop from "./components/BackToTop";
import ClientLayout from "./ClientLayout";
import ConditionalFooter from "./components/ConditionalFooter";
import CookieBanner from "./components/CookieConsent";
import SkipLink from "./components/SkipLink";
import FaviconSwitcher from "./components/FaviconSwitcher";
import { siteConfig } from "@/lib/config";
import { FAVICON_LIGHT } from "@/lib/favicon";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Gulanity",
    default: "Gulanity",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "restaurantes",
    "gastronomía",
    "foodies",
    "restaurantes locales",
    "marketing para restaurantes",
    "plataforma restaurantes",
    "app restaurantes",
    "descubrir restaurantes",
    "sin comisiones",
    "restaurantes auténticos",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: [
      { url: FAVICON_LIGHT, sizes: "any" },
      { url: FAVICON_LIGHT, sizes: "16x16", type: "image/png" },
      { url: FAVICON_LIGHT, sizes: "32x32", type: "image/png" },
    ],
    shortcut: FAVICON_LIGHT,
    apple: FAVICON_LIGHT,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: "en_US",
    url: siteConfig.url,
    title: "Gulanity | Descubre dónde ir y crece sin comisiones",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Gulanity - Conectando usuarios con restaurantes locales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gulanity | Descubre dónde ir y crece sin comisiones",
    description: siteConfig.description,
    images: [`${siteConfig.url}/opengraph-image`],
    site: "@gulanity",
    creator: "@gulanity",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`scroll-smooth ${inter.variable} ${poppins.variable} ${cormorant.variable}`} style={{ colorScheme: "light" }}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="/dashboardMetrics.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/restaurant_mobile.webp" as="image" type="image/webp" />
        <link rel="preload" href={FAVICON_LIGHT} as="image" type="image/png" />
        <link rel="icon" type="image/png" sizes="16x16" href={FAVICON_LIGHT} />
        <link rel="icon" type="image/png" sizes="32x32" href={FAVICON_LIGHT} />
        <link rel="shortcut icon" href={FAVICON_LIGHT} />
        <link rel="apple-touch-icon" href={FAVICON_LIGHT} />
        <meta name="author" content={siteConfig.name} />
        <meta name="language" content="Spanish" />
        <meta name="geo.region" content="ES" />
        <meta name="geo.placename" content="España" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content={siteConfig.name} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://gulanity.com/#organization",
                  name: siteConfig.name,
                  url: siteConfig.url,
                  logo: {
                    "@type": "ImageObject",
                    "@id": "https://gulanity.com/#logo",
                    url: `${siteConfig.url}/logo_rest.png`,
                    width: 500,
                    height: 500,
                    caption: "Logo de Gulanity",
                  },
                  image: {
                    "@type": "ImageObject",
                    url: `${siteConfig.url}/opengraph-image`,
                    width: 1200,
                    height: 630,
                  },
                  description: siteConfig.description,
                  email: siteConfig.contact.email,
                  telephone: siteConfig.contact.phoneFormatted,
                  address: {
                    "@type": "PostalAddress",
                    addressCountry: "ES",
                  },
                  sameAs: [
                    siteConfig.social.linkedin,
                    siteConfig.social.twitter,
                    siteConfig.social.facebook,
                    siteConfig.social.instagram,
                  ],
                  contactPoint: {
                    "@type": "ContactPoint",
                    email: siteConfig.contact.email,
                    contactType: "customer service",
                    availableLanguage: ["Spanish", "English"],
                  },
                  areaServed: "Worldwide",
                  knowsAbout: [
                    "Restaurantes",
                    "Gastronomía",
                    "Marketing Digital",
                    "Plataformas B2B",
                    "Plataformas B2C",
                    "Aplicaciones Móviles",
                  ],
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.8",
                    reviewCount: "120",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://gulanity.com/#website",
                  url: siteConfig.url,
                  name: siteConfig.name,
                  description: siteConfig.description,
                  publisher: {
                    "@id": "https://gulanity.com/#organization",
                  },
                  potentialAction: {
                    "@type": "SearchAction",
                    target: {
                      "@type": "EntryPoint",
                      urlTemplate: "https://gulanity.com/buscar?q={search_term_string}",
                    },
                    "query-input": "required name=search_term_string",
                  },
                  inLanguage: "es-ES",
                },
                {
                  "@type": "SoftwareApplication",
                  "@id": "https://gulanity.com/#app",
                  name: siteConfig.name,
                  applicationCategory: "FoodAndDrink",
                  operatingSystem: "iOS, Android",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "EUR",
                  },
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.8",
                    reviewCount: "120",
                  },
                  provider: {
                    "@id": "https://gulanity.com/#organization",
                  },
                  featureList: [
                    "Búsqueda de restaurantes",
                    "Reservas sin comisiones",
                    "Recomendaciones personalizadas",
                    "Marketing para restaurantes",
                    "Gestión de menús digitales",
                  ],
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://gulanity.com/#breadcrumb",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "Inicio",
                      item: siteConfig.url,
                    },
                  ],
                },
              ],
            }),
          }}
        />
        {process.env.NODE_ENV === "production" && siteConfig.analytics.clarityId ? (
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${siteConfig.analytics.clarityId}");
              `,
            }}
          />
        ) : null}
      </head>
      <body className="font-sans antialiased">
        <FaviconSwitcher />
        <SkipLink />
        <ClientLayout>
          <main id="main-content" className="min-h-screen" tabIndex={-1}>
            {children}
          </main>
        </ClientLayout>
        <ConditionalFooter />
        <BackToTop />
        <Toaster position="bottom-right" richColors />
        <CookieBanner />
        <GoogleAnalytics gaId={siteConfig.analytics.gaId} />
      </body>
    </html>
  );
}

