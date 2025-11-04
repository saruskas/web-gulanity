# Guía Completa del Blog de Gulanity

## Tabla de Contenidos
1. [Introducción](#introducción)
2. [Estructura del Blog](#estructura-del-blog)
3. [Cómo Agregar un Nuevo Post](#cómo-agregar-un-nuevo-post)
4. [Cómo Editar un Post Existente](#cómo-editar-un-post-existente)
5. [Cómo Eliminar un Post](#cómo-eliminar-un-post)
6. [SEO: Mejores Prácticas](#seo-mejores-prácticas)
7. [Estrategia de Taxonomía y Tags](#estrategia-de-taxonomía-y-tags)
8. [Optimización de Performance](#optimización-de-performance)
9. [Accesibilidad](#accesibilidad)
10. [Checklist de Publicación](#checklist-de-publicación)

---

## Introducción

Este documento proporciona una guía completa para gestionar el blog de Gulanity, desde la creación de contenido hasta la optimización SEO. Nuestro blog está construido con Next.js 14+ y utiliza el App Router para una experiencia óptima tanto para usuarios como para motores de búsqueda.

**Objetivos del Blog:**
- Posicionar a Gulanity como líder de pensamiento en tecnología gastronómica
- Atraer tráfico orgánico de alta calidad
- Educar a nuestras audiencias (foodies y restaurantes)
- Mejorar el SEO general del sitio web

---

## Estructura del Blog

### Arquitectura de Carpetas
```
src/app/blog/
├── page.tsx                    # Página principal del blog
├── [slug]/
│   └── page.tsx               # Template dinámico para posts individuales
├── como-elegir-plato-perfecto-segun-dieta/
│   └── page.tsx               # Post individual
├── 5-formas-fidelizar-clientes-restaurante/
│   └── page.tsx               # Post individual
└── futuro-carta-digital-ia/
    └── page.tsx               # Post individual
```

### Componentes Clave
- **Página principal del blog** (`/blog/page.tsx`): Lista todos los posts con metadata SEO
- **Posts individuales**: Cada post tiene su propia carpeta con `page.tsx`
- **Navegación**: Breadcrumbs automáticos para mejor UX y SEO
- **Metadata**: SEO optimizado con Open Graph y Twitter Cards

---

## Cómo Agregar un Nuevo Post

### Paso 1: Crear la Estructura de Carpetas
```bash
# Desde la raíz del proyecto
mkdir "src/app/blog/tu-nuevo-slug"
```

**Reglas para el slug:**
- Solo minúsculas
- Usar guiones (-) en lugar de espacios
- Máximo 60 caracteres
- Incluir palabra clave principal
- Evitar caracteres especiales

### Paso 2: Crear el Archivo page.tsx
Crea `src/app/blog/tu-nuevo-slug/page.tsx` con la siguiente estructura:

```tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tu Título Optimizado | Gulanity Blog",
  description: "Descripción meta de 150-160 caracteres que incluya palabras clave principales y sea atractiva para el usuario.",
  keywords: ["palabra clave 1", "palabra clave 2", "palabra clave 3"],
  authors: [{ name: "Equipo Gulanity" }],
  openGraph: {
    title: "Tu Título para Redes Sociales",
    description: "Descripción para redes sociales (puede ser diferente a la meta description)",
    type: "article",
    publishedTime: "2025-MM-DDTHH:mm:ss.000Z",
    authors: ["Equipo Gulanity"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tu Título para Twitter",
    description: "Descripción para Twitter",
  },
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-6">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-[#FCDB7D]">Inicio</Link></li>
            <li><span className="mx-2">/</span></li>
            <li><Link href="/blog" className="hover:text-[#FCDB7D]">Blog</Link></li>
            <li><span className="mx-2">/</span></li>
            <li className="text-gray-900">Tu Título del Post</li>
          </ol>
        </div>
      </nav>

      {/* Article Header */}
      <header className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-[#14181B] bg-[#FCDB7D] rounded-full mb-4">
              Categoría
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#14181B] mb-6">
              Tu Título Principal (H1)
            </h1>
            <div className="flex items-center justify-center space-x-6 text-gray-600">
              <time dateTime="2025-MM-DD">Fecha legible</time>
              <span>•</span>
              <span>X min de lectura</span>
              <span>•</span>
              <span>Por Equipo Gulanity</span>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Featured Image Placeholder */}
          <div className="aspect-video bg-gradient-to-br from-[#FCDB7D] to-yellow-300 rounded-xl mb-8 flex items-center justify-center">
            <div className="text-[#14181B] font-semibold text-xl text-center px-6">
              Descripción de la imagen para accesibilidad
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            {/* Tu contenido aquí */}
          </div>

          {/* Author Bio */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FCDB7D] to-yellow-300 rounded-full flex items-center justify-center mr-4">
                <span className="text-[#14181B] font-bold text-lg">G</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#14181B]">Equipo Gulanity</h3>
                <p className="text-gray-600">
                  Descripción del autor relevante al tema del post
                </p>
              </div>
            </div>
          </div>

          {/* Related Posts CTA */}
          <div className="bg-gray-50 rounded-xl p-8 mt-12">
            <h3 className="text-2xl font-bold text-[#14181B] mb-4 text-center">
              CTA personalizado
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Descripción del CTA
            </p>
            <div className="text-center">
              <Link
                href="/blog"
                className="inline-block px-8 py-3 bg-gradient-to-r from-[#FCDB7D] to-yellow-300 text-[#14181B] font-semibold rounded-full hover:opacity-90 transition-opacity"
              >
                Ver más artículos
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
```

### Paso 3: Actualizar la Lista de Posts
Edita `src/app/blog/page.tsx` y agrega tu nuevo post al array `blogPosts`:

```tsx
const blogPosts = [
  // Posts existentes...
  {
    slug: "tu-nuevo-slug",
    title: "Tu Título del Post",
    summary: "Resumen atractivo de 150-200 caracteres que invite a hacer clic",
    date: "2025-MM-DD",
    readTime: "X min",
    category: "Categoría",
    image: "/blog/tu-imagen.jpg"
  }
];
```

---

## Cómo Editar un Post Existente

1. **Localiza el archivo**: Navega a `src/app/blog/[slug-del-post]/page.tsx`
2. **Edita el contenido**: Modifica el JSX dentro del componente
3. **Actualiza metadata**: Si cambias el título o descripción, actualiza también la metadata
4. **Actualiza la lista**: Si cambias título o resumen, actualiza también `src/app/blog/page.tsx`

**⚠️ Importante**: Si cambias el slug, debes:
1. Crear una nueva carpeta con el nuevo slug
2. Mover el contenido
3. Eliminar la carpeta antigua
4. Actualizar todas las referencias

---

## Cómo Eliminar un Post

1. **Elimina la carpeta**: Borra `src/app/blog/[slug-del-post]/`
2. **Actualiza la lista**: Remueve el post del array en `src/app/blog/page.tsx`
3. **Verifica enlaces**: Busca y elimina cualquier enlace interno al post eliminado

---

## SEO: Mejores Prácticas

### Investigación de Palabras Clave

**Herramientas recomendadas:**
- Google Keyword Planner
- Ahrefs
- SEMrush
- Ubersuggest
- Answer The Public

**Proceso:**
1. Identifica 1-2 palabras clave principales
2. Encuentra 3-5 palabras clave secundarias
3. Incluye variaciones long-tail
4. Analiza la intención de búsqueda

### Optimización On-Page

#### Títulos (H1-H6)
```html
<!-- ✅ Correcto -->
<h1>Palabra Clave Principal en el Título</h1>
<h2>Subtítulo con Palabra Clave Secundaria</h2>
<h3>Subtítulo de Tercer Nivel</h3>

<!-- ❌ Incorrecto -->
<h1>Título Genérico Sin Palabras Clave</h1>
<h3>Saltarse H2 y ir directo a H3</h3>
```

#### Meta Descriptions
- **Longitud**: 150-160 caracteres
- **Incluir**: Palabra clave principal
- **Tono**: Persuasivo y descriptivo
- **CTA**: Incluir una llamada a la acción sutil

```tsx
// ✅ Ejemplo correcto
description: "Descubre 5 estrategias probadas para fidelizar clientes en tu restaurante. Aumenta la retención y mejora tus ingresos con estos consejos expertos."

// ❌ Ejemplo incorrecto
description: "Post sobre fidelización de clientes"
```

#### URLs (Slugs)
- **Estructura**: `/blog/palabra-clave-principal`
- **Longitud**: Máximo 60 caracteres
- **Caracteres**: Solo minúsculas, números y guiones
- **Palabras clave**: Incluir la principal

#### Contenido
- **Longitud mínima**: 1,500 palabras para posts principales
- **Densidad de palabras clave**: 1-2% (natural, no forzado)
- **Estructura**: Usar listas, párrafos cortos, subtítulos
- **Enlaces internos**: 2-3 por post a contenido relevante
- **Enlaces externos**: 1-2 a fuentes autoritarias

### Datos Estructurados

Agrega JSON-LD para artículos:

```tsx
// En el head del documento
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Título del Artículo",
      "description": "Descripción del artículo",
      "author": {
        "@type": "Organization",
        "name": "Gulanity"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Gulanity",
        "logo": {
          "@type": "ImageObject",
          "url": "https://gulanity.com/logo.png"
        }
      },
      "datePublished": "2025-MM-DDTHH:mm:ss.000Z",
      "dateModified": "2025-MM-DDTHH:mm:ss.000Z",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://gulanity.com/blog/slug-del-post"
      }
    })
  }}
/>
```

### Imágenes y Alt Text

```tsx
// ✅ Correcto
<img 
  src="/blog/imagen-descriptiva.jpg" 
  alt="Chef preparando platos veganos en cocina moderna de restaurante"
  width={800}
  height={400}
/>

// ❌ Incorrecto
<img src="/blog/img1.jpg" alt="imagen" />
```

**Mejores prácticas para imágenes:**
- **Formato**: WebP cuando sea posible, JPEG como fallback
- **Tamaño**: Máximo 1MB por imagen
- **Dimensiones**: 1200x630px para imágenes destacadas
- **Alt text**: Descriptivo, incluir palabras clave cuando sea natural
- **Nombres de archivo**: descriptivos con palabras clave

---

## Estrategia de Taxonomía y Tags

### Categorías Principales
1. **Guías** - Tutoriales y how-to para usuarios
2. **Marketing** - Estrategias para restaurantes
3. **Tecnología** - Innovaciones y tendencias tech
4. **Tendencias** - Novedades del sector gastronómico
5. **Casos de Estudio** - Historias de éxito y análisis

### Sistema de Tags
- **Audiencia**: `foodies`, `restaurantes`, `chefs`
- **Tipo de contenido**: `tutorial`, `análisis`, `tendencias`
- **Tecnología**: `ia`, `app-movil`, `carta-digital`
- **Temas**: `sostenibilidad`, `marketing`, `fidelizacion`

### Estructura de URLs
```
/blog/                          # Página principal
/blog/[categoria]/              # Futura implementación
/blog/[slug-del-post]/          # Posts individuales
```

---

## Optimización de Performance

### Core Web Vitals

**Largest Contentful Paint (LCP)**
- Objetivo: < 2.5 segundos
- Optimizar imágenes con Next.js Image
- Usar lazy loading para contenido below-the-fold

**First Input Delay (FID)**
- Objetivo: < 100 milisegundos
- Minimizar JavaScript no crítico
- Usar React.lazy() para componentes pesados

**Cumulative Layout Shift (CLS)**
- Objetivo: < 0.1
- Definir dimensiones para todas las imágenes
- Evitar insertar contenido dinámico above-the-fold

### Optimizaciones Técnicas

```tsx
// Lazy loading de imágenes
import Image from 'next/image';

<Image
  src="/blog/imagen.jpg"
  alt="Descripción"
  width={800}
  height={400}
  loading="lazy"
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>

// Preload de recursos críticos
<link rel="preload" href="/fonts/font.woff2" as="font" type="font/woff2" crossOrigin="" />
```

### Caché y CDN
- **Next.js**: Configurar headers de caché apropiados
- **Imágenes**: Usar CDN para servir imágenes optimizadas
- **Static Generation**: Usar SSG para posts que no cambian frecuentemente

---

## Accesibilidad

### Principios WCAG 2.1

**Perceptible**
- Contraste mínimo 4.5:1 para texto normal
- Contraste mínimo 3:1 para texto grande
- Alt text descriptivo para todas las imágenes

**Operable**
- Navegación por teclado completa
- Tiempo suficiente para leer contenido
- Sin contenido que cause convulsiones

**Comprensible**
- Lenguaje claro y simple
- Navegación consistente
- Ayuda para evitar errores

**Robusto**
- HTML semántico válido
- Compatible con tecnologías asistivas

### Implementación Práctica

```tsx
// ✅ HTML semántico
<article>
  <header>
    <h1>Título del Artículo</h1>
    <time dateTime="2025-01-01">1 de enero, 2025</time>
  </header>
  <main>
    <p>Contenido del artículo...</p>
  </main>
</article>

// ✅ Enlaces descriptivos
<Link href="/blog/post" aria-label="Leer artículo completo sobre fidelización de clientes">
  Leer más
</Link>

// ✅ Botones accesibles
<button 
  aria-expanded={dropdownOpen}
  aria-haspopup="true"
  onClick={toggleDropdown}
>
  Menú
</button>
```

---

## Checklist de Publicación

### Antes de Publicar

**Contenido**
- [ ] Título optimizado con palabra clave principal
- [ ] Meta description de 150-160 caracteres
- [ ] Mínimo 1,500 palabras de contenido de calidad
- [ ] Estructura clara con H2, H3, listas y párrafos cortos
- [ ] 2-3 enlaces internos a contenido relevante
- [ ] 1-2 enlaces externos a fuentes autoritarias
- [ ] Revisión ortográfica y gramatical completa

**SEO Técnico**
- [ ] Slug optimizado (máximo 60 caracteres)
- [ ] Keywords incluidas naturalmente
- [ ] Open Graph y Twitter Cards configurados
- [ ] Datos estructurados JSON-LD implementados
- [ ] Breadcrumbs funcionando correctamente

**Imágenes**
- [ ] Imagen destacada optimizada (1200x630px)
- [ ] Alt text descriptivo para todas las imágenes
- [ ] Tamaño de archivos < 1MB
- [ ] Formato WebP cuando sea posible

**Performance**
- [ ] Tiempo de carga < 3 segundos
- [ ] Core Web Vitals en verde
- [ ] Lazy loading implementado
- [ ] Imágenes responsive

**Accesibilidad**
- [ ] Contraste de colores adecuado
- [ ] Navegación por teclado funcional
- [ ] HTML semántico válido
- [ ] Textos alternativos descriptivos

### Después de Publicar

**Indexación**
- [ ] Enviar URL a Google Search Console
- [ ] Verificar indexación en 24-48 horas
- [ ] Monitorear posiciones de palabras clave

**Promoción**
- [ ] Compartir en redes sociales de Gulanity
- [ ] Incluir en próximo newsletter
- [ ] Notificar a stakeholders internos

**Monitoreo**
- [ ] Configurar alertas de Google Analytics
- [ ] Monitorear métricas de engagement
- [ ] Revisar comentarios y feedback

---

## Herramientas Recomendadas

### SEO
- **Google Search Console**: Monitoreo de indexación y performance
- **Google Analytics 4**: Análisis de tráfico y comportamiento
- **Ahrefs/SEMrush**: Investigación de palabras clave y competencia
- **Screaming Frog**: Auditorías técnicas de SEO

### Performance
- **Google PageSpeed Insights**: Análisis de Core Web Vitals
- **GTmetrix**: Análisis detallado de performance
- **WebPageTest**: Testing avanzado de velocidad

### Accesibilidad
- **WAVE**: Evaluación de accesibilidad web
- **axe DevTools**: Extensión de Chrome para testing
- **Lighthouse**: Auditorías integrales de calidad

### Contenido
- **Grammarly**: Corrección ortográfica y gramatical
- **Hemingway Editor**: Mejora de legibilidad
- **Canva**: Creación de imágenes para blog

---

## Contacto y Soporte

Para dudas sobre la gestión del blog o implementación de nuevas funcionalidades, contacta al equipo de desarrollo de Gulanity.

**Recursos adicionales:**
- [Documentación de Next.js](https://nextjs.org/docs)
- [Guía de SEO de Google](https://developers.google.com/search/docs)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

*Última actualización: Agosto 2025*
*Versión: 1.0*