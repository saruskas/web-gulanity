import type { Metadata } from "next";
import { readFileSync, readdirSync, statSync } from "fs";
import { join } from "path";
import yaml from "js-yaml";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollDepthTracker from "../components/ScrollDepthTracker";
import UsersHeroActions from "./UsersHeroActions";
import UsersDownloadCard from "./UsersDownloadCard";
import HeroUserShowcase from "../components/HeroUserShowcase";
import AmenitiesLoop from "./AmenitiesLoop";
import AllergensLoop from "./AllergensLoop";
import DishesMetric from "./DishesMetric";
import RestaurantMetric from "./RestaurantMetric";
import CuisineMetric from "./CuisineMetric";
import AmenityMetric from "./AmenityMetric";
import AllergenMetric from "./AllergenMetric";
import ImageGallery from "./ImageGallery";
import { CheckCircle2 } from "lucide-react";
import "./page.css";

function getAppUrls() {
  try {
    const filePath = join(process.cwd(), "data", "app-urls.yaml");
    const fileContents = readFileSync(filePath, "utf8");
    const data = yaml.load(fileContents) as { ios: string; android: string };
    return data;
  } catch (error) {
    console.error("Error reading app-urls.yaml:", error);
    return {
      ios: "https://apps.apple.com/app/gulanity",
      android: "https://play.google.com/store/apps/details?id=com.gulanity.app",
    };
  }
}

function getCloudConfig() {
  try {
    const filePath = join(process.cwd(), "data", "cloud-config.yaml");
    const fileContents = readFileSync(filePath, "utf8");
    const data = yaml.load(fileContents) as {
      cloudHost: string;
    };
    return data;
  } catch (error) {
    console.error("Error reading cloud-config.yaml:", error);
    return {
      cloudHost: "https://cloud.dev.neocody.net",
    };
  }
}

function getGalleryImages() {
  try {
    const galleryPath = join(process.cwd(), "public", "gallery", "users");
    const files = readdirSync(galleryPath);
    const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg", ".JPG", ".JPEG", ".PNG", ".WEBP", ".GIF", ".SVG"];
    const images = files
      .filter((file) => {
        const filePath = join(galleryPath, file);
        const stats = statSync(filePath);
        if (!stats.isFile()) return false;
        return imageExtensions.some((ext) => file.endsWith(ext));
      })
      .map((file) => {
        const fileName = file.replace(/\.[^/.]+$/, "");
        return {
          src: `/gallery/users/${file}`,
          alt: fileName.replace(/[-_]/g, " "),
          width: 300,
          height: 300,
        };
      });
    return images;
  } catch (error) {
    console.error("Error reading gallery folder:", error);
    return [];
  }
}

export const metadata: Metadata = {
  title: "Usuarios - Gulanity | Descubre platos sin sorpresas",
  description: "App gratuita para encontrar restaurantes y platos según tus gustos, dieta y influencers favoritos. Descarga Gulanity en iOS y Android.",
  openGraph: {
    title: "Usuarios - Gulanity | Descubre platos sin sorpresas",
    description: "App gratuita para encontrar restaurantes y platos según tus gustos.",
    url: "https://gulanity.com/users",
    type: "website",
    images: [{ url: "https://gulanity.com/users/opengraph-image", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://gulanity.com/users",
  },
};

export default function UsersPage() {
  const appUrls = getAppUrls();
  const cloudConfig = getCloudConfig();
  const galleryImages = getGalleryImages();
  const impactItems = ["Foodies verificados que comparten tu gusto", "Filtros por preferencias, no solo ubicación", "Información clara antes de reservar"];
  const steps = [
    { num: "1", title: "Explora", desc: "Decenas de filtros para encontrar lo que buscas en segundos." },
    { num: "2", title: "Confía", desc: "Opiniones de amigos e influencers para pedir sin dudas." },
    { num: "3", title: "Comparte", desc: "Guarda y recomienda tus platos favoritos en dos clics." },
  ];
  return (
    <div className="users-page">
      <Header />
      <main>
        <ScrollDepthTracker page="users" />
        <section id="hero" className="users-hero">
          <div className="container-outer">
            <div className="users-hero-grid">
              <div className="users-hero-content">
                <div className="users-hero-text">
                  <h1 className="users-hero-title font-display">Tu próximo plato favorito está a un tap de distancia</h1>
                  <p className="users-hero-description">
                    Encuentra platos y restaurantes que encajan contigo gracias a recomendaciones reales de tu comunidad.
                  </p>
                  <UsersHeroActions />
                  <UsersDownloadCard iosUrl={appUrls.ios} androidUrl={appUrls.android} />
                </div>
              </div>
              <div className="relative w-full max-w-md sm:max-w-none md:max-w-none lg:max-w-none xl:max-w-none fhd:max-w-none qhd:max-w-none mx-auto" key="hero-user-showcase">
                <HeroUserShowcase />
              </div>
            </div>
            <div className="mt-4 sm:mt-6 md:mt-6 lg:mt-8 xl:mt-8 fhd:mt-8 qhd:mt-8">
              <div className="users-gain-cards">
                <DishesMetric config={cloudConfig} />
                <RestaurantMetric config={cloudConfig} />
                <CuisineMetric config={cloudConfig} />
                <AmenityMetric config={cloudConfig} />
                <AllergenMetric config={cloudConfig} />
              </div>
            </div>
          </div>
        </section>

        <div className="users-hero-separator"></div>

        <section id="galeria" className="users-section users-bg-white">
          <div className="container-outer">
            <ImageGallery
              images={galleryImages}
            />
          </div>
        </section>

        <section id="beneficios" className="users-section users-bg-white">
          <div className="container-outer">
            <h2 className="users-section-title">La diferencia es clara</h2>
            <p className="users-section-subtitle">Datos orientativos basados en pruebas internas.</p>
            <div className="users-metrics-grid">
              {[
                { value: "92%", label: "Satisfacción con la elección" },
                { value: "4.2x", label: "Más probabilidad de repetir" },
                { value: "−68%", label: "Decepciones evitadas" },
              ].map((metric) => (
                <div key={metric.label} className="users-metric">
                  <div className="users-metric-value font-display">{metric.value}</div>
                  <p className="users-metric-label">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="impacto" className="users-section users-bg-white">
          <div className="container-outer">
            <h2 className="users-section-title">Por qué es diferente</h2>
            <div className="users-impact-card">
              <p className="users-impact-text font-display">
                Recomendaciones reales → decisiones informadas → experiencias que coinciden
              </p>
              <div className="users-impact-list">
                {impactItems.map((item) => (
                  <div key={item} className="users-impact-item">
                    <CheckCircle2 className="users-impact-icon" />
                    <p className="users-impact-item-text">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="como-funciona" className="users-section users-bg-white">
          <div className="container-outer">
            <h2 className="users-section-title">Cómo funciona</h2>
            <div className="users-steps-grid">
              {steps.map((step) => (
                <article key={step.num} className="users-step-card">
                  <div className="users-step-number font-display">
                    {step.num}
                  </div>
                  <h3 className="users-step-title">{step.title}</h3>
                  <p className="users-step-description">{step.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <AmenitiesLoop config={cloudConfig} />
        <AllergensLoop config={cloudConfig} />
      </main>
      <Footer />
    </div>
  );
}

