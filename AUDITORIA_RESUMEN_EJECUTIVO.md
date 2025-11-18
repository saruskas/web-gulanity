# AUDITORÍA FRONTEND: GULANITY
## Evaluación SEO, Accesibilidad, Performance & DX

---

## RESUMEN EJECUTIVO

**Nota Global:** 5.5/10

**Stack detectado:** Next.js 13+ (App Router) + React + Tailwind CSS

### Puntos Fuertes:
1. Uso correcto de Next.js App Router con páginas del servidor
2. Metadatos bien estructurados en páginas clave (blog, usuarios)
3. JSON-LD implementado en layout principal (Organization + WebSite)
4. Estructura semántica básica correcta (header, footer, main, section)
5. Sistema de tracking preparado (track.ts como base)

### Problemas Críticos (Bloqueantes para producción):
1. **[P0-SEO]** Página home (/) redirige del lado del cliente con useRouter → pérdida total de SEO
2. **[P0-SEO]** Páginas principales (/restaurants, /users) son "use client" → sin SSR, metadatos no se pueden exportar
3. **[P0-PERF]** Google Fonts importadas desde CSS en lugar de next/font → FOUT/FOIT graves
4. **[P0-A11Y]** Formularios sin `<label>` asociados → inaccesibles para lectores de pantalla
5. **[P0-ANALYTICS]** Analytics no implementado (solo console.log en track.ts)

---

## 1. SEO TÉCNICO & CONTENIDO

### 1.1. Problemas P0 (Críticos - Bloquean producción)

#### P0-1: Redirección client-side en home
- **Archivo:** `src/app/page.tsx`
- **Problema:** La página principal hace redirect con `useRouter.replace()` del lado del cliente a `/restaurants`. Esto significa:
  - Google no indexa correctamente la home
  - Pérdida de link juice
  - Experiencia de usuario degradada (flash de contenido)
  - Los metadatos del layout no se aplican correctamente
- **Recomendación:** 
  - Eliminar el componente client y usar `redirect()` de Next.js del lado del servidor
  - O mejor: convertir home en una landing real con contenido indexable

#### P0-2: Páginas principales como "use client"
- **Archivos:** 
  - `src/app/restaurants/page.tsx`
  - `src/app/users/page.tsx`
- **Problema:** Son componentes cliente cuando deberían ser del servidor. Esto impide:
  - Exportar `metadata` específico de la página
  - SSR completo del contenido
  - Optimización automática de Next.js
- **Recomendación:** 
  - Convertir a Server Components
  - Extraer lógica interactiva a componentes client específicos
  - Exportar `metadata` con títulos y descripciones únicos

#### P0-3: Falta canonical en páginas principales
- **Archivos:** 
  - `src/app/restaurants/page.tsx`
  - `src/app/users/page.tsx`
  - Varios artículos de blog
- **Problema:** Solo `/usuarios` tiene `alternates.canonical`, las demás páginas no
- **Recomendación:** Añadir canonical a TODAS las páginas en sus metadatos

#### P0-4: Duplicación de rutas ES/EN
- **Problema detectado:** Existen rutas duplicadas:
  - `/restaurants` y `/restaurantes` (parecen el mismo contenido)
  - `/users` y `/usuarios` (parecen el mismo contenido)
- **Recomendación:**
  - Si son el mismo contenido: usar hreflang + canonical correctamente
  - Si son contenidos diferentes: asegurarse que cada uno tenga metadatos únicos
  - Implementar redirects permanentes si hay una versión principal

### 1.2. Problemas P1 (Importantes)

#### P1-1: Estructura de headings inconsistente
- **Archivos:** Múltiples páginas
- **Problema:**
  - Algunas páginas no tienen H1 visible hasta después de scroll
  - Blog index usa H2 para títulos de posts (debería ser H3 dentro de article)
- **Recomendación:** 
  - Asegurar UN solo H1 por página, visible desde el inicio
  - Respetar jerarquía H1 → H2 → H3 → H4

#### P1-2: JSON-LD incompleto
- **Archivo:** `src/app/layout.tsx`
- **Problema:** Solo tiene Organization y WebSite. Faltan schemas para:
  - BlogPosting en artículos
  - FAQPage si hay FAQs
  - Product/Service para las offerings
  - BreadcrumbList para navegación
  - Article schema en blog posts
- **Recomendación:** 
  - Añadir Article/BlogPosting schema en páginas de blog con `datePublished`, `author`, etc.
  - Si hay FAQs, añadir FAQPage schema
  - Considerar BreadcrumbList para mejora de SERP

#### P1-3: Open Graph images no verificadas
- **Archivos:** Layout y páginas con metadata
- **Problema:** Referencias a `/og-image.png`, `/twitter-image.png` pero no hay verificación de que existan
- **Recomendación:** Verificar que las imágenes existan o usar `opengraph-image.tsx` de Next.js

#### P1-4: Sin sitemap.xml ni robots.txt
- **Problema:** No se detectan en el código fuente
- **Recomendación:** 
  - Crear `app/sitemap.ts` dinámico que incluya todas las rutas
  - Crear `app/robots.ts` con reglas apropiadas
  - Incluir blog posts dinámicamente en sitemap

#### P1-5: Meta keywords (obsoleto)
- **Archivos:** Varios archivos con metadata
- **Problema:** Incluyen `keywords` en metadata, que Google ignora desde 2009
- **Recomendación:** Eliminar el campo `keywords`, no aporta nada y puede ser contraproducente

### 1.3. Problemas P2 (Nice-to-have)

#### P2-1: Imágenes sin datos estructurados
- **Problema:** Las imágenes no tienen markup de ImageObject en schema
- **Recomendación:** Añadir ImageObject para imágenes principales

#### P2-2: Breadcrumbs sin markup
- **Archivo:** `src/app/blog/futuro-carta-digital-ia/page.tsx` (y otros)
- **Problema:** Tiene breadcrumbs visual pero sin BreadcrumbList schema
- **Recomendación:** Añadir JSON-LD BreadcrumbList

---

## 2. ACCESIBILIDAD (A11Y)

### 2.1. Problemas P0 (Críticos)

#### P0-5: Formularios sin labels
- **Archivos:** 
  - `src/app/restaurants/page.tsx` (líneas 199-213 - lista espera, 227-263 - feedback)
  - `src/app/usuarios/page.tsx` (líneas 164-180 - newsletter, 194-211 - feedback)
  - `src/app/blog/page.tsx` (newsletter)
- **Problema:** 
  - Todos los inputs tienen `placeholder` pero NO tienen `<label>` asociado
  - Lectores de pantalla no pueden anunciar qué campo es qué
  - Viola WCAG 2.1 AA (SC 3.3.2)
- **Recomendación:** 
  ```tsx
  <label htmlFor="email" className="sr-only">Email</label>
  <input id="email" type="email" ... />
  ```

#### P0-6: Iconos sin accesibilidad
- **Archivos:** 
  - `src/app/components/Footer.tsx` (iconos sociales)
  - `src/app/components/ConditionalFooter.tsx` (iconos sociales)
  - `src/app/restaurants/page.tsx` (iconos de beneficios)
- **Problema:** SVGs decorativos con `aria-hidden="true"` pero los enlaces no tienen aria-label
- **Recomendación:**
  ```tsx
  <a href="#" aria-label="Síguenos en Facebook">
    <svg aria-hidden="true">...</svg>
  </a>
  ```

#### P0-7: Contraste insuficiente
- **Archivos:** `src/app/globals.css` y componentes
- **Problema:** 
  - Texto `text-white/70` sobre `bg-[#052838]` puede no cumplir AA
  - Texto `text-gray-600` sobre fondos claros puede ser límite
- **Recomendación:** Verificar todos los contrastes con herramienta (Axe DevTools, WAVE) y ajustar

### 2.2. Problemas P1

#### P1-6: Roles ARIA incorrectos en menú
- **Archivo:** `src/app/components/Header.tsx` (líneas 143-181)
- **Problema:** Usa `role="menu"` y `role="menuitem"` para navegación
- **Recomendación:** 
  - `role="menu"` es para menús de aplicación (tipo File > Edit)
  - Para navegación usar `<nav>` con `<ul>` sin roles extra

#### P1-7: aria-pressed en enlaces de toggle
- **Archivo:** `src/app/components/Header.tsx` (líneas 202, 213)
- **Problema:** Usa `aria-pressed` en `<Link>` (debería ser en botones)
- **Recomendación:** Si es toggle, usar `<button>` o quitar `aria-pressed`

#### P1-8: Emojis sin aria-label
- **Archivo:** `src/app/usuarios/page.tsx` (línea 44)
- **Problema:** Emojis con `role="img"` pero sin `aria-label` descriptivo
- **Recomendación:** Añadir aria-label descriptivo o hacer decorativo con aria-hidden

### 2.3. Problemas P2

#### P2-3: Skip to main content
- **Problema:** No hay enlace "skip to main content" para navegación por teclado
- **Recomendación:** Añadir enlace skip-link al inicio del body

#### P2-4: Focus visible mejorable
- **Archivo:** `src/app/globals.css` (línea 105-108)
- **Problema:** El outline es bueno, pero podría ser más visible en fondos oscuros
- **Recomendación:** Considerar outline con borde doble (outline + box-shadow)

---

## 3. PERFORMANCE & UX

### 3.1. Problemas P0

#### P0-8: Google Fonts desde CSS
- **Archivo:** `src/app/globals.css` (línea 1)
- **Problema:** 
  - Import desde Google Fonts CSS = blocking + FOUT/FOIT
  - Dos requests extra (CSS + WOFF2)
  - No aprovecha optimización de Next.js
- **Recomendación:** 
  - Migrar a `next/font/google` (ya hay Poppins e Inter en layout, pero Cormorant está en CSS)
  - Eliminar el @import del CSS
  - Configurar `display: 'swap'` en todos

#### P0-9: Imágenes sin optimización
- **Archivos:** Múltiples componentes
- **Problema:** 
  - Uso de `<img>` en lugar de `<Image>` de Next.js
  - Sin lazy loading explícito
  - Sin srcset para responsive
  - Sin formatos modernos (WebP/AVIF)
- **Archivos afectados:**
  - `src/app/components/Footer.tsx` (líneas 86-89)
  - `src/app/components/ConditionalFooter.tsx` (líneas 13-16)
  - `src/app/components/Header.tsx` (líneas 101-105)
  - Blog posts (imágenes referenciadas pero no vistas)
- **Recomendación:** 
  ```tsx
  import Image from 'next/image'
  <Image 
    src="/logo.png" 
    alt="Gulanity" 
    width={200} 
    height={50}
    priority={isAboveFold}
  />
  ```

### 3.2. Problemas P1

#### P1-9: Bundle splitting no óptimo
- **Problema:** No hay evidencia de code splitting más allá del por-ruta de Next.js
- **Recomendación:** 
  - Usar dynamic imports para componentes pesados
  - Lazy load de secciones below-the-fold

#### P1-10: CLS potencial en hero
- **Archivos:** Páginas con componentes hero
- **Problema:** No se reserva altura para imágenes hero
- **Recomendación:** 
  - Usar aspect-ratio
  - Skeleton screens mientras carga
  - Reserved space en contenedores de imágenes

#### P1-11: Sin precarga de recursos críticos
- **Problema:** No hay `<link rel="preload">` para recursos críticos
- **Recomendación:** 
  - Preload de fuentes críticas
  - Preload de imágenes hero
  - Preconnect a dominios externos

### 3.3. Problemas P2

#### P2-5: Sin Service Worker / PWA
- **Problema:** No hay manifest completo ni SW para PWA
- **Recomendación:** Si es objetivo móvil, considerar PWA con next-pwa

---

## 4. ANALYTICS & TRACKING

### 4.1. Problemas P0

#### P0-10: Analytics no implementado
- **Archivo:** `src/lib/track.ts`
- **Problema:** 
  - Solo hace `console.log`, no envía a ningún servicio
  - No hay integración con GA4, Plausible, Posthog, etc.
  - No hay tracking de eventos clave (clicks en CTA, envíos de formulario)
- **Recomendación:**
  - Implementar integración real (GA4 recomendado para B2B/B2C mixto)
  - Usar Script component de Next.js con `strategy="afterInteractive"`
  - Wrapper de eventos: `trackEvent('cta_clicked', { location: 'hero', type: 'restaurants' })`

#### P0-11: Sin gestión de consentimiento
- **Problema:** 
  - No hay cookie banner / consent management
  - Se cargarían analytics sin consentimiento (RGPD)
- **Recomendación:** 
  - Implementar banner de cookies (cookieconsent, react-cookie-consent)
  - Carga condicional de scripts según consentimiento
  - Documentar en política de privacidad

### 4.2. Problemas P1

#### P1-12: No hay tracking de pageviews en SPA
- **Problema:** Al navegar entre páginas, no hay tracking automático
- **Recomendación:** 
  - Usar `useEffect` + `usePathname` para track pageviews
  - O usar eventos de Next.js router

#### P1-13: Eventos clave sin tracking
- **Archivos:** Formularios y CTAs
- **Problema:** No hay tracking de:
  - Clicks en "Quiero unirme"
  - Envíos de formularios
  - Clicks en "Descargar app"
  - Scroll depth
- **Recomendación:** Añadir `track()` calls en handlers clave

### 4.3. Problemas P2

#### P2-6: Sin heatmaps / session recording
- **Recomendación:** Considerar Hotjar/Clarity para entender comportamiento

---

## 5. ESTRUCTURA & DX

### 5.1. Problemas P1

#### P1-14: Componente Footer duplicado
- **Archivos:** 
  - `src/app/layout.tsx` (líneas 76-169) - Footer definido pero no usado
  - `src/app/components/Footer.tsx`
  - `src/app/components/ConditionalFooter.tsx`
- **Problema:** Código duplicado, confusión
- **Recomendación:** Unificar en un solo componente Footer reutilizable

#### P1-15: Páginas duplicadas /restaurants vs /restaurantes
- **Archivos:** 
  - `src/app/restaurants/page.tsx`
  - `src/app/restaurantes/page.tsx`
- **Problema:** Probablemente contenido duplicado o mal gestionado
- **Recomendación:** 
  - Si es multi-idioma: usar i18n apropiado
  - Si no: redirect permanente + canonical

#### P1-16: CSS globals con imports externos
- **Archivo:** `src/app/globals.css`
- **Problema:** Import de Google Fonts bloquea el render
- **Recomendación:** Ya mencionado en P0-8

#### P1-17: No hay archivo de constantes/config
- **Problema:** URLs, textos, configuración dispersos
- **Recomendación:** 
  - Crear `lib/config.ts` con constantes
  - Centralizar URLs de plataforma, emails, teléfonos

### 5.2. Problemas P2

#### P2-7: Componentes UI poco usados
- **Archivos:** `src/components/ui/*`
- **Problema:** 9 componentes UI (accordion, badge, card, etc.) de shadcn pero apenas usados
- **Recomendación:** Limpiar componentes no utilizados o completar migración

#### P2-8: Sin testing
- **Problema:** No hay tests unitarios ni E2E
- **Recomendación:** Añadir Vitest + Testing Library para componentes críticos

#### P2-9: Sin comentarios JSDoc
- **Problema:** Funciones y componentes sin documentación inline
- **Recomendación:** Añadir JSDoc en funciones públicas

---

## ROADMAP DE MEJORA

### FASE 1: Bloqueantes (antes de producción)

**Tiempo estimado: 3-5 días**

1. **[P0-1]** Arreglar redirect de home → convertir a landing o usar redirect del servidor
2. **[P0-2]** Convertir /restaurants y /users a Server Components + metadatos
3. **[P0-3]** Añadir canonical a todas las páginas
4. **[P0-4]** Resolver duplicación /restaurants vs /restaurantes con redirects
5. **[P0-5]** Añadir labels a todos los formularios
6. **[P0-6]** Añadir aria-labels a iconos y enlaces
7. **[P0-8]** Migrar Cormorant a next/font
8. **[P0-9]** Convertir imgs a Image de Next.js en componentes críticos
9. **[P0-10]** Implementar analytics real (GA4)
10. **[P0-11]** Implementar cookie consent banner

### FASE 2: Importantes (próximas 2 semanas)

**Tiempo estimado: 5-7 días**

1. **[P1-1]** Corregir estructura de headings en todas las páginas
2. **[P1-2]** Completar JSON-LD (Article, BlogPosting)
3. **[P1-4]** Crear sitemap.xml y robots.txt dinámicos
4. **[P1-5]** Limpiar keywords de metadata
5. **[P1-6]** Corregir roles ARIA en menú
6. **[P1-9]** Implementar code splitting con dynamic imports
7. **[P1-10]** Añadir aspect-ratio y skeletons para CLS
8. **[P1-12]** Tracking de pageviews SPA
9. **[P1-13]** Tracking de eventos clave (CTAs, formularios)
10. **[P1-14]** Unificar componentes Footer
11. **[P1-15]** Resolver duplicación ES/EN
12. **[P1-17]** Crear lib/config.ts

### FASE 3: Nice-to-have (backlog)

**Tiempo estimado: 3-5 días**

1. **[P2-1]** Schema ImageObject
2. **[P2-2]** BreadcrumbList schema
3. **[P2-3]** Skip to main content link
4. **[P2-4]** Mejorar focus-visible
5. **[P2-5]** Considerar PWA si aplica
6. **[P2-6]** Heatmaps / session recording
7. **[P2-7]** Limpiar componentes UI no usados
8. **[P2-8]** Setup testing (Vitest)
9. **[P2-9]** JSDoc en funciones

---

## NOTA FINAL

La web tiene buenos fundamentos (Next.js App Router, estructura semántica básica) pero necesita trabajo significativo en **SEO técnico** (SSR, metadatos), **accesibilidad** (forms, ARIA) y **analytics** para estar lista para producción.

**Prioridad absoluta:** FASE 1 completa antes de lanzar a producción.

**Target realista post-mejoras:** 8.5-9/10 con FASE 1 + FASE 2 completadas.

---

*Auditoría realizada el 18/11/2025 por Claude (Anthropic)*
*Stack: Next.js 13+ App Router + React + Tailwind CSS*