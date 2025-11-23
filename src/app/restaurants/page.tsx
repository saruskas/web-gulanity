import type { Metadata } from "next";
import { readFileSync, readdirSync, statSync } from "fs";
import { join } from "path";
import yaml from "js-yaml";
import Header from "../components/Header";
import { getLoginUrl } from "@/lib/login-config";
import Footer from "../components/Footer";
import ScrollDepthTracker from "../components/ScrollDepthTracker";
import RestaurantsHeroActions from "./RestaurantsHeroActions";
import HeroRestaurantsShowcase from "../components/HeroRestaurantsShowcase";
import ImageGallery from "./ImageGallery";
import DishesMetric from "./DishesMetric";
import RestaurantMetric from "./RestaurantMetric";
import CuisineMetric from "./CuisineMetric";
import AmenityMetric from "./AmenityMetric";
import AllergenMetric from "./AllergenMetric";
import { CheckCircle2, TrendingUp, Users, BarChart3, Zap } from "lucide-react";
import "./page.css";

export const metadata: Metadata = {
  title: "Restaurantes - Gulanity | Crece sin comisiones",
  description: "Plataforma para restaurantes que quieren atraer clientes cualificados sin comisiones. Conecta con foodies y aumenta tu ocupación.",
  openGraph: {
    title: "Restaurantes - Gulanity | Crece sin comisiones",
    description: "Plataforma para restaurantes que quieren atraer clientes cualificados sin comisiones.",
    url: "https://gulanity.com/restaurants",
    type: "website",
    images: [{ url: "https://gulanity.com/restaurants/opengraph-image", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://gulanity.com/restaurants",
  },
};

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
    const galleryPath = join(process.cwd(), "public", "gallery", "restaurants");
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
          src: `/gallery/restaurants/${file}`,
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

export default function RestaurantsPage() {
  const cloudConfig = getCloudConfig();
  const galleryImages = getGalleryImages();
  const gainCards = [
    { icon: <TrendingUp className="w-6 h-6" />, title: "Más mesas ocupadas", desc: "Visibilidad por recomendaciones reales de foodies." },
    { icon: <Users className="w-6 h-6" />, title: "Clientes que repiten", desc: "Expectativa alineada con experiencia." },
    { icon: <BarChart3 className="w-6 h-6" />, title: "Datos que importan", desc: "Lo que convence a tus clientes, en números." },
    { icon: <Zap className="w-6 h-6" />, title: "Sin fricción", desc: "Integra tu carta y empieza en minutos." },
  ];
  const checklist = ["Control de campañas con foodies", "Enfoque en platos estrella", "Optimización de turnos"];
  const steps = [
    { num: "1", title: "Date de alta", desc: "Activa tu cuenta desde Gulanity Platform en minutos." },
    { num: "2", title: "Publica tu carta", desc: "Importa tu carta y define objetivos comerciales." },
    { num: "3", title: "Conecta y mide", desc: "Atiende campañas y consulta indicadores clave." },
  ];
  return (
    <div className="restaurants-page">
      <Header loginUrl={getLoginUrl()} />
      <main>
        <ScrollDepthTracker page="restaurants" />
        <section id="hero" className="restaurants-hero">
          <div className="container-outer restaurants-hero-content">
            <div className="restaurants-hero-grid">
              <div className="restaurants-hero-text">
                <h1 className="restaurants-hero-title font-display">Más clientes. Cero comisiones. Total control.</h1>
                <p className="restaurants-hero-description">
                  Gulanity conecta restaurantes y foodies para que lo que esperan sea exactamente lo que encuentran.
                </p>
                <RestaurantsHeroActions />
              </div>
              <div className="relative w-full justify-self-end" key="hero-restaurants-showcase">
                <HeroRestaurantsShowcase />
              </div>
            </div>
            <div className="mt-4 sm:mt-6 md:mt-6 lg:mt-8 xl:mt-8 fhd:-mt-12 qhd:mt-8">
              <div className="restaurants-metrics-cards">
                <DishesMetric config={cloudConfig} />
                <RestaurantMetric config={cloudConfig} />
                <CuisineMetric config={cloudConfig} />
                <AmenityMetric config={cloudConfig} />
                <AllergenMetric config={cloudConfig} />
              </div>
            </div>
          </div>
        </section>

        <section id="galeria" className="restaurants-section restaurants-bg-gray">
          <div className="container-outer">
            <ImageGallery
              images={galleryImages}
            />
          </div>
        </section>

        <section id="que-ganas" className="restaurants-section restaurants-bg-gray">
          <div className="container-outer">
            <h2 className="restaurants-section-title">Qué ganas</h2>
            <div className="restaurants-gain-cards">
              {gainCards.map((item) => (
                <article key={item.title} className="restaurants-gain-card">
                  <div className="restaurants-gain-icon">{item.icon}</div>
                  <h3 className="restaurants-gain-title">{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="beneficios" className="restaurants-section restaurants-bg-gray">
          <div className="container-outer">
            <h2 className="restaurants-section-title">Beneficios que se notan</h2>
            <p className="restaurants-section-subtitle">Datos orientativos basados en pruebas internas.</p>
            <div className="restaurants-metrics-grid">
              {[
                { value: "+18%", label: "Ticket medio" },
                { value: "−27%", label: "Cancelaciones" },
                { value: "+22%", label: "Reservas cualificadas" },
              ].map((metric) => (
                <div key={metric.label} className="restaurants-metric">
                  <div className="restaurants-metric-value font-display">{metric.value}</div>
                  <p className="restaurants-metric-label">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="impacto" className="restaurants-section restaurants-bg-gray">
          <div className="container-outer">
            <h2 className="restaurants-section-title">El impacto en tu bolsillo</h2>
            <div className="restaurants-impact-card">
              <p className="restaurants-impact-text font-display">
                Más visibilidad cualificada → más ocupación → más ingresos
              </p>
              <div className="restaurants-impact-list">
                {checklist.map((item) => (
                  <div key={item} className="restaurants-impact-item">
                    <CheckCircle2 className="restaurants-impact-icon" />
                    <p className="restaurants-impact-item-text">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="como-funciona" className="restaurants-section restaurants-bg-gray">
          <div className="container-outer">
            <h2 className="restaurants-section-title">Cómo funciona</h2>
            <div className="restaurants-steps-grid">
              {steps.map((step) => (
                <article key={step.num} className="restaurants-step-card">
                  <div className="restaurants-step-number font-display">
                    {step.num}
                  </div>
                  <h3 className="restaurants-step-title">{step.title}</h3>
                  <p className="restaurants-step-description">{step.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
