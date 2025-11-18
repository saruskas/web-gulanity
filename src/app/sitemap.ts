import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

const blogPosts = [
  { slug: "futuro-carta-digital-ia", lastModified: "2025-08-01" },
  { slug: "5-formas-fidelizar-clientes-restaurante", lastModified: "2025-08-03" },
  { slug: "como-elegir-plato-perfecto-segun-dieta", lastModified: "2025-08-05" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/restaurants`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/users`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.lastModified),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const legalEntries: MetadataRoute.Sitemap = Object.values(siteConfig.legal).map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  return [...mainPages, ...blogEntries, ...legalEntries];
}

