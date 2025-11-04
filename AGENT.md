# Gulanity Web - Agent Guidelines

Este archivo proporciona al agente AMP todo el contexto y las instrucciones de alto nivel necesarias para trabajar en el proyecto **Gulanity**. El agente debe leer y referirse a este documento antes de generar cualquier código o contenido.

Instrucciones Generales para el Agente
--------------------------------------

1.  **Lee todo el contexto** en este documento antes de responder.
    
2.  **No generes código** sin una petición explícita posterior y después de obtener confirmación o aclaraciones.
    
3.  Para cada tarea, sigue el flujo de **señalar huecos**, **formular preguntas** y luego **ejecutar prompts** de generación.
    
4.  Usa siempre las variables de marca, tokens y convenciones de carpeta definidas aquí.
    
5.  Mantén la consistencia de estilo, accesibilidad y SEO.
    

Contexto Maestro
----------------

### Identidad

*   **Marca:** Gulanity
    
*   **Dominio:** gulanity.com
    
*   **Tagline:** Desea. Encuentra. Comparte
    
*   **Valores:** Confianza, Sencillez, Sostenibilidad
    

### Descripción

*   **Elevator pitch:** Plataforma que conecta a foodies con restaurantes locales emergentes y ofrece a los restaurantes datos accionables de sus campañas.
    
*   **Descripción extendida:** Gulanity es un punto de encuentro entre amantes de la gastronomía y restaurantes que necesitan visibilidad. Los usuarios descubren lugares auténticos, ofertas exclusivas y programas de fidelización simples. Los restaurantes obtienen una ficha optimizada, analíticas de interacción y herramientas de retención en una sola plataforma. Todo sin coste.
    

### Audiencias

*   **Usuarios:** Urban millennials y foodies que buscan experiencias nuevas y promociones locales sin perder tiempo; obtienen descubrimiento curado y ventajas exclusivas.
    
*   **Restaurantes:** Independientes y cadenas de cualquier tamaño que necesitan visibilidad y datos sin comisiones; obtienen nuevos clientes directos y analíticas accionables.
    
*   **Segmentos secundarios:** (POR DEFINIR)
    

### Propuesta de Valor

*   **Diferenciadores (5):**
    
    *   Sin coste
        
    *   Analíticas accionables
        
    *   Programa de fidelización integrado
        
    *   Discovery curado (no catálogo infinito)
        
    *   Experiencia móvil optimizada
        
*   **Beneficios Usuarios (4):** Ahorro de tiempo, garantía de satisfacción, ofertas relevantes, experiencias compartidas.
    
*   **Beneficios Restaurantes (5 macro):** Más clientes directos, métricas clave accionables, gestión multi-local sencilla, fidelización con IA, enfoque en sostenibilidad / 0 waste.
    

### Objetivos del Sitio

*   **Primarios:** Captar usuarios (newsletter / descargas futuras), captar restaurantes (waitlist), altas tasas de suscripción.
    
*   **Secundarios:** SEO base, validar propuesta de valor.
    
*   **Métricas aspiracionales:** {{N}} restaurantes captados, {{N}} descargas app, {{N}} suscriptores newsletter en 3 meses.
    

### Arquitectura y Secciones

*   **/ (Usuarios):** Hero, Qué ofrece (4), Newsletter, Ayúdanos a mejorar (feedback), Footer.
    
*   **/restaurantes (B2B):** Hero, Qué ofrece (11 / condensar), Cómo funciona (3), Beneficios (5), FAQ, Newsletter, Ayúdanos a mejorar, Footer.
    
*   **Futuras:** Blog, Pricing real, Dashboard interno.
    

### Stack / Técnica

*   **Framework:** Next.js 14 (App Router)
    
*   **Lenguaje:** TypeScript
    
*   **Estilos:** Tailwind CSS + shadcn/ui
    
*   **Modo oscuro:** Más adelante
    

### Diseño / UI

*   **Colores:**
    
    *   Primary: #2C3782 (acciones)
        
    *   Accent: #FEDB8D (fondos suaves)
        
*   **Tokens CSS:** definidos en src/app/styles/tokens.css
    
*   **Fuentes:** Poppins (headings), Inter (body)
    
*   **Spacing:** 4/8/12/16/24/32/48/64
    
*   **Max width:** 1200px
    
*   **Border radius:** 8px base, 9999px pill
    
*   **Iconografía:** Línea simple
    
*   **Evitar:** Carousels, parallax, animaciones pesadas
    

### Tono y Copy

*   **Tono:** Cercano, energético, honesto
    
*   **Persona:** 2ª persona (“tú”), “tu restaurante”
    
*   **Palabras usar:** descubrir, directo, datos, fidelización, confianza, sencillez
    

### CTAs

*   **Usuarios:** Explora restaurantes; Apúntate al newsletter
    
*   **Restaurantes:** Únete a Gulanity; Ver cómo funciona
    

### Formularios

*   **Newsletter:** email
    
*   **Waitlist:** nombre\_contacto, email, nombre\_restaurante
    
*   **Feedback:** email opcional, mensaje
    
*   **Privacidad:** “Sin spam. Puedes darte de baja cuando quieras.”
    

### SEO Inicial

*   **Keywords Usuarios:** descubrir restaurantes, ofertas restaurantes locales, experiencias gastronómicas
    
*   **Keywords Restaurantes:** marketing para restaurantes, aumentar clientes, fidelización clientes restaurante
    
*   **Mercado:** España (español)
    

### Analítica / Tracking

*   **Herramienta:** Plausible
    
*   **Eventos:** newsletter\_submit, waitlist\_submit
    

### Accesibilidad

*   **Objetivo:** WCAG AA
    

### Internacionalización

*   **Fase 1:** Español
    
*   **Futuro:** multi-idioma
    

### Legales

*   **Links:** Privacidad, Términos, Cookies (placeholders)
    

### Riesgos / Suposiciones

1.  Falta de datos reales (testimonios, métricas)
    
2.  Dependencia de captación orgánica inicial
    

**Recuerda:** antes de iniciar cualquier generación de código, confirma que entiendes el contexto y pregunta cualquier duda crítica. Mantén este documento actualizado con cualquier cambio en requisitos o contexto.

## Commands
- **Dev**: `npm run dev` (Next.js development server)
- **Build**: `npm run build` (production build)
- **Lint**: `npm run lint` (ESLint)
- **Type check**: `npx tsc --noEmit` (TypeScript check)

## Architecture
- Next.js 15 app router architecture (`src/app/`)
- TypeScript with strict mode enabled
- Tailwind CSS v4 for styling
- Custom design tokens in `src/app/styles/tokens.css`
- Brand colors: primary (#2C3782), accent (#FEDB8D)

## Code Style
- Use TypeScript for all components and utilities
- Import aliases: `@/*` maps to `./src/*`
- CSS: Use Tailwind classes, custom tokens for brand colors
- Components: Export default functions, use proper TypeScript interfaces
- Fonts: Geist Sans and Geist Mono via next/font/google
- No test framework configured yet
- File structure: Place pages in `src/app/`, styles in `src/app/styles/`
- Use CSS custom properties from tokens.css for consistent theming
