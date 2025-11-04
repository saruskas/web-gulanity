# 🚀 Quick Start - Gulanity Web

## ✅ Todo implementado correctamente + Correcciones de Auditoría

Build exitoso. Performance mejorado con `<Image>` optimizado en héroes. Proyecto listo para probarse.

**Últimas mejoras** (ver [AUDIT_FIXES.md](AUDIT_FIXES.md)):
- ✅ HeroImage component con Next.js Image (mejor LCP/CLS)
- ✅ Overlay más oscuro bg-black/65 (contraste WCAG)
- ✅ Tamaños fluidos en H1 (evita 3-4 líneas en móvil)
- ✅ Typo corregido: MetricsPitch.tsx
- ✅ Navbar sin warning de `legacyBehavior`

---

## 🏃 Ejecutar en desarrollo

```bash
npm run dev
```

Luego abre tu navegador en:
- **http://localhost:3000** → Home (gateway con 2 cards)
- **http://localhost:3000/usuarios** → Página usuarios con Hero V2
- **http://localhost:3000/restaurantes** → Página restaurantes con Hero V2 + FAQ accordion

---

## 🔍 Qué probar

### 1. Audience Switcher (Navbar)
- Haz clic en **"Usuario"** / **"Restaurante"** en el navbar
- Verifica que navegue a la página correcta
- Abre la consola del navegador (`F12`) y verás eventos `[track]`:
  ```
  [track] audience_switch_click { from: 'user', to: 'restaurant', path: '/' }
  ```
- Recarga la página → la preferencia debe persistir (localStorage)

### 2. Home Gateway
- Verifica las 2 cards: "Soy Usuario" / "Soy Restaurante"
- Haz clic en "Explorar como usuario" → navega a `/usuarios`
- Haz clic en "Explorar para restaurantes" → navega a `/restaurantes`

### 3. Hero /usuarios
- Haz clic en botón **"Descargar ahora"** → verás evento:
  ```
  [track] cta_primary_click { audience: 'user', placement: 'hero', action: 'download' }
  ```
- En mobile: haz clic en badges iOS/Android → evento `app_badge_click`
- En desktop: cambia entre iOS/Android → evento `platform_switch`

### 4. Hero /restaurantes
- Haz clic en **"Empezar gratis"** → evento `cta_primary_click`
- Haz clic en **"Ver cómo funciona"** → evento `cta_secondary_click`
- Scroll down → verifica sección "¿Qué ganas con Gulanity?" con 6 bullets

### 5. FAQ Accordion
- En `/restaurantes`, scroll hasta FAQ
- Haz clic en cualquier pregunta → se expande/colapsa
- Abre varias preguntas simultáneamente (acordeón tipo `multiple`)

### 6. Mobile Menu (Sheet)
- En mobile viewport (o reduce ventana <768px)
- Haz clic en el icono de menú (hamburguesa) → abre Sheet
- Haz clic en "Usuarios" o "Restaurantes" → navega y cierra Sheet
- Eventos: `nav_link_click { href: '/usuarios', from: 'sheet' }`

---

## 📊 Eventos en Consola

Todos los eventos se logean en consola. Abre DevTools (`F12` → Console) y verás:

```
[track] audience_switch_click { from: 'user', to: 'restaurant', path: '/' }
[track] cta_primary_click { audience: 'user', placement: 'hero', action: 'download' }
[track] app_badge_click { platform: 'ios', from: 'hero_mobile' }
[track] nav_link_click { href: '/restaurantes', from: 'sheet' }
```

**Próximo paso**: Enchufar estos eventos a GA4/Plausible (ver `IMPLEMENTATION_SUMMARY.md`)

---

## 🐛 Si encuentras errores

### Imports no resueltos (`@/components/ui/*`)
Verifica `tsconfig.json`:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Componentes shadcn/ui no encontrados
```bash
ls src/components/ui
# Deberías ver: button.tsx, card.tsx, accordion.tsx, etc.
```

Si faltan, reinstala:
```bash
npx shadcn@latest add button card badge separator accordion navigation-menu sheet input label form --yes
```

### Build falla
```bash
npm run build
# Lee los errores TypeScript en detalle
```

---

## 📝 Próximos pasos recomendados

1. **Enchufar analytics** (`src/lib/track.ts` → sustituir `console.log` por GA4/Plausible)
2. **Configurar A/B testing** para H1 de `/usuarios` y `/restaurantes`
3. **Migrar forms** (Newsletter/Waitlist) a shadcn/ui con validación
4. **Añadir testimonios** en `/restaurantes` (prueba social)
5. **Optimizar imágenes**: Reemplazar `<img>` por `<Image>` de Next.js (warnings del build)

Ver detalles en: **`IMPLEMENTATION_SUMMARY.md`**

---

## ✨ Resumen de cambios

### Arquitectura & UX
- ✅ **Home** → Gateway 2 cards (Usuario/Restaurante)
- ✅ **Navbar** → shadcn/ui + audience switcher persistente (sin warning legacyBehavior)
- ✅ **FAQ** → Accordion shadcn/ui

### Performance & SEO
- ✅ **HeroImage** → `<Image fill priority>` de Next.js (↓ LCP/CLS)
- ✅ **Overlay** → bg-black/65 (contraste WCAG AA)
- ✅ **Tamaños fluidos** → H1 `text-3xl sm:text-5xl md:text-6xl` + `leading-[1.1]`
- ✅ **Metadata** → Optimizada (<60 title, <155 description, OG completo)

### Conversión & Analytics
- ✅ **Heroes** → Copy V2 orientado a conversión + CTAs explícitos + eventos
- ✅ **Bullets beneficio→resultado** en `/usuarios` y `/restaurantes`
- ✅ **Analytics** → Sistema de tracking minimalista (10 eventos)
- ✅ **Accesibilidad** → aria-labels, aria-current, contraste mejorado

### Code Quality
- ✅ **Typo corregido** → MetricsPitch.tsx (antes MetricsPithc.tsx)
- ✅ **Build exitoso** → 0 errores, solo warnings menores

**Proyecto listo para desarrollo y deployment.** 🚀

---

🎉 **¡Disfruta probando la nueva experiencia Gulanity!**
