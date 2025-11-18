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
import { siteConfig } from "@/lib/config";

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
    default: "Gulanity | Descubre dónde ir y crece sin comisiones",
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: "/favicon_blue.png",
    shortcut: "/favicon_blue.png",
    apple: "/favicon_blue.png",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`scroll-smooth ${inter.variable} ${poppins.variable} ${cormorant.variable}`}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preload" href="/dashboardMetrics.jpg" as="image" />
        <link rel="preload" href="/restaurant_mobile.png" as="image" />
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
                    url: `${siteConfig.url}/logo.png`,
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
                  description: "Plataforma que conecta foodies con restaurantes locales emergentes",
                },
                {
                  "@type": "WebSite",
                  "@id": "https://gulanity.com/#website",
                  url: siteConfig.url,
                  name: siteConfig.name,
                  description: "Descubre restaurantes auténticos y herramientas de marketing para restaurantes",
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

