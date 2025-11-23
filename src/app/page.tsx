import type { Metadata } from "next";
import ScrollDepthTracker from "./components/ScrollDepthTracker";
import HomeLanding from "./components/HomeLanding";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Gulanity",
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "Gulanity | Descubre dónde ir y crece sin comisiones",
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: `${siteConfig.url}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Gulanity plataforma para usuarios y restaurantes",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <div className="bg-white text-[#052838]">
      <main>
        <ScrollDepthTracker page="home" />
        <HomeLanding />
      </main>
    </div>
  );
}
