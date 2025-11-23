# Auditoría de Responsive Design - HomeLanding.tsx

**Fecha de auditoría:** 2024  
**Archivo analizado:** `src/app/components/HomeLanding.tsx`  
**Líneas de código:** 263 líneas

---

## 1. BREAKPOINTS USAGE

### Resumen de Breakpoints Utilizados

El componente utiliza **6 breakpoints diferentes**: `sm:`, `md:`, `lg:`, `xl:`, `fhd:`, `qhd:`

**Definiciones según tailwind.config.js:**
- `sm`: 640px
- `md`: 768px (tablet)
- `lg`: 1024px (laptop)
- `xl`: 1280px (desktop principal)
- `fhd`: 1920px (pantallas grandes)
- `qhd`: 2200px (pantallas 2K/4K)

### Clases con Breakpoints por Categoría

#### Grid y Layout
- **Línea 89**: `grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 fhd:grid-cols-2 qhd:grid-cols-2`
  - **Problema**: Todos los breakpoints desde `sm` tienen el mismo valor (`grid-cols-2`)
  - **Breakpoints usados**: 6 (sm, md, lg, xl, fhd, qhd)

- **Línea 89**: `gap-0 lg:gap-8 xl:gap-0`
  - **Problema**: Gap vuelve a 0 en xl después de ser 8 en lg
  - **Breakpoints usados**: 3 (lg, xl)

#### Posicionamiento y Display
- **Línea 90**: `hidden sm:block md:block lg:block xl:block fhd:block qhd:block`
  - **Problema**: Repetición innecesaria de `block` en todos los breakpoints
  - **Breakpoints usados**: 6 (sm, md, lg, xl, fhd, qhd)

- **Línea 92**: `justify-end sm:justify-center md:justify-center lg:justify-center xl:justify-center fhd:justify-center qhd:justify-center`
  - **Problema**: Mismo valor repetido 5 veces
  - **Breakpoints usados**: 6 (sm, md, lg, xl, fhd, qhd)

- **Línea 162**: `flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row fhd:flex-row qhd:flex-row`
  - **Problema**: Mismo valor repetido 5 veces
  - **Breakpoints usados**: 6 (sm, md, lg, xl, fhd, qhd)

#### Spacing y Padding
- **Línea 81**: `px-4 lg:px-6`
  - **Breakpoints usados**: 1 (lg)

- **Línea 92**: `px-8 lg:px-6 py-12 lg:py-10`
  - **Breakpoints usados**: 1 (lg)

- **Línea 162**: `px-8 lg:px-6 py-12 lg:py-10`
  - **Breakpoints usados**: 1 (lg)

#### Max Width
- **Línea 79**: `max-w-[1200px] qhd:max-w-[1600px]`
  - **Breakpoints usados**: 1 (qhd)

- **Línea 81**: `max-w-4xl lg:max-w-3xl`
  - **Breakpoints usados**: 1 (lg)

- **Línea 97**: `max-w-sm lg:max-w-md qhd:max-w-lg`
  - **Breakpoints usados**: 2 (lg, qhd)

- **Línea 167**: `max-w-sm lg:max-w-md qhd:max-w-lg`
  - **Breakpoints usados**: 2 (lg, qhd)

#### Translate (Posicionamiento)
- **Línea 97**: `sm:translate-x-8 md:translate-x-8 lg:translate-x-0 xl:translate-x-8 fhd:translate-x-8 qhd:translate-x-8`
  - **Problema**: Valores duplicados (8 repetido 4 veces, 0 una vez)
  - **Breakpoints usados**: 6 (sm, md, lg, xl, fhd, qhd)

- **Línea 167**: `sm:-translate-x-8 md:-translate-x-8 lg:translate-x-0 xl:-translate-x-8 fhd:-translate-x-8 qhd:-translate-x-8`
  - **Problema**: Valores duplicados (mismo patrón que línea 97)
  - **Breakpoints usados**: 6 (sm, md, lg, xl, fhd, qhd)

#### Margin
- **Línea 97**: `sm:mr-auto sm:ml-auto md:mr-auto md:ml-auto lg:mr-auto lg:ml-0 xl:mr-auto xl:ml-auto fhd:mr-auto fhd:ml-auto qhd:mr-auto qhd:ml-auto`
  - **Problema**: Repetición excesiva de `mr-auto` y `ml-auto`
  - **Breakpoints usados**: 6 (sm, md, lg, xl, fhd, qhd)

- **Línea 167**: `sm:ml-auto sm:mr-auto md:ml-auto md:mr-auto lg:ml-0 lg:mr-auto xl:ml-auto xl:mr-auto fhd:ml-auto fhd:mr-auto qhd:ml-auto qhd:mr-auto`
  - **Problema**: Repetición excesiva similar a línea 97
  - **Breakpoints usados**: 6 (sm, md, lg, xl, fhd, qhd)

#### Typography
- **Línea 107**: `text-3xl sm:text-3xl md:text-3xl lg:text-2xl xl:text-3xl fhd:text-3xl qhd:text-[36px]`
  - **Problema**: `text-3xl` repetido 4 veces
  - **Breakpoints usados**: 6 (sm, md, lg, xl, fhd, qhd)

- **Línea 110**: `text-base lg:text-sm qhd:text-[16px]`
  - **Breakpoints usados**: 2 (lg, qhd)

- **Línea 113**: `space-y-4 lg:space-y-3 qhd:space-y-5`
  - **Breakpoints usados**: 2 (lg, qhd)

- **Línea 177**: `text-3xl sm:text-3xl md:text-3xl lg:text-2xl xl:text-3xl fhd:text-3xl qhd:text-[36px]`
  - **Problema**: Duplicado exacto de línea 107
  - **Breakpoints usados**: 6 (sm, md, lg, xl, fhd, qhd)

- **Línea 180**: `text-base lg:text-sm qhd:text-[16px]`
  - **Problema**: Duplicado exacto de línea 110
  - **Breakpoints usados**: 2 (lg, qhd)

- **Línea 183**: `space-y-4 lg:space-y-3 qhd:space-y-5`
  - **Problema**: Duplicado exacto de línea 113
  - **Breakpoints usados**: 2 (lg, qhd)

#### Min Height
- **Línea 92**: `min-h-[500px] lg:min-h-[550px]`
  - **Breakpoints usados**: 1 (lg)

- **Línea 162**: `min-h-[500px] lg:min-h-[550px]`
  - **Problema**: Duplicado exacto de línea 92
  - **Breakpoints usados**: 1 (lg)

#### Width (Elementos absolutos)
- **Línea 152**: `w-[45rem] lg:w-[36rem] xl:w-[45rem]`
  - **Problema**: Valor vuelve a 45rem en xl después de ser 36rem en lg
  - **Breakpoints usados**: 2 (lg, xl)

- **Línea 222**: `w-[30rem] lg:w-[24rem] xl:w-[30rem]`
  - **Problema**: Mismo patrón que línea 152
  - **Breakpoints usados**: 2 (lg, xl)

### Clases Duplicadas Identificadas

1. **Grid columns**: `sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 fhd:grid-cols-2 qhd:grid-cols-2` (todos iguales)
2. **Justify center**: Repetido 5 veces en línea 92 y 162
3. **Flex row**: Repetido 5 veces en línea 162
4. **Block display**: Repetido 5 veces en línea 90
5. **Translate-x-8**: Repetido 4 veces en línea 97
6. **Translate-x-0**: Solo en lg, rodeado de valores 8
7. **Margin auto**: Repetido múltiples veces en líneas 97 y 167
8. **Typography**: `text-3xl` repetido 4 veces en líneas 107 y 177

### Elementos con Más Breakpoints

**Top 3 elementos con más breakpoints:**

1. **Línea 97** - Contenedor izquierdo (B2B):
   - **12 breakpoints diferentes** en una sola línea
   - Clases: `max-w-sm lg:max-w-md qhd:max-w-lg sm:mr-auto sm:ml-auto sm:translate-x-8 md:mr-auto md:ml-auto md:translate-x-8 lg:mr-auto lg:ml-0 lg:translate-x-0 xl:mr-auto xl:ml-auto xl:translate-x-8 fhd:mr-auto fhd:ml-auto fhd:translate-x-8 qhd:mr-auto qhd:ml-auto qhd:translate-x-8`

2. **Línea 167** - Contenedor derecho (B2C):
   - **12 breakpoints diferentes** en una sola línea
   - Mismo patrón que línea 97 pero con valores negativos

3. **Línea 152** - HeroRestaurantsShowcase (posición absoluta):
   - **10 breakpoints diferentes** en una sola línea
   - Clases: `-left-[38rem] sm:-left-[38rem] md:-left-[65rem] lg:-left-[28rem] xl:-left-[38rem] fhd:-left-[38rem] qhd:-left-[41rem] bottom-[-6rem] sm:bottom-[-6rem] md:bottom-[-6rem] lg:bottom-[-4rem] xl:bottom-[-6rem] fhd:bottom-[-6rem] qhd:bottom-[-4rem] w-[45rem] lg:w-[36rem] xl:w-[45rem] hidden sm:block md:block lg:hidden xl:block fhd:block qhd:block`

---

## 2. POSICIONAMIENTOS PROBLEMÁTICOS

### Elementos con `absolute`

#### 1. Línea 18 - Gradiente radial
```tsx
className="pointer-events-none absolute inset-0 bg-[radial-gradient(...)]"
```
- **Posicionamiento**: `inset-0` (simple, sin problemas)

#### 2. Línea 32 - Header con logo
```tsx
className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-center pt-20"
```
- **Posicionamiento**: `inset-x-0 top-0` (simple, sin problemas)

#### 3. Línea 90 - Línea divisoria vertical
```tsx
className="absolute inset-y-0 left-1/2 w-[2px] bg-gradient-to-b from-transparent via-white/35 to-transparent z-10 hidden sm:block md:block lg:block xl:block fhd:block qhd:block"
```
- **Posicionamiento**: `inset-y-0 left-1/2` (simple, sin problemas)
- **Problema**: Repetición innecesaria de `block` en múltiples breakpoints

#### 4. Línea 152 - HeroRestaurantsShowcase (izquierda)
```tsx
className="absolute -left-[38rem] bottom-[-6rem] sm:-left-[38rem] sm:bottom-[-6rem] md:-left-[65rem] md:bottom-[-6rem] lg:-left-[28rem] lg:bottom-[-4rem] xl:-left-[38rem] xl:bottom-[-6rem] fhd:-left-[38rem] fhd:bottom-[-6rem] qhd:-left-[41rem] qhd:bottom-[-4rem] w-[45rem] lg:w-[36rem] xl:w-[45rem] mx-auto flex-shrink-0 hidden sm:block md:block lg:hidden xl:block fhd:block qhd:block"
```

**Valores de `left` por breakpoint:**
- Default: `-left-[38rem]` (-608px)
- sm: `-left-[38rem]` (-608px) ⚠️ **Duplicado**
- md: `-left-[65rem]` (-1040px) ⚠️ **Valor extremo**
- lg: `-left-[28rem]` (-448px)
- xl: `-left-[38rem]` (-608px) ⚠️ **Duplicado**
- fhd: `-left-[38rem]` (-608px) ⚠️ **Duplicado**
- qhd: `-left-[41rem]` (-656px)

**Valores de `bottom` por breakpoint:**
- Default: `bottom-[-6rem]` (-96px)
- sm: `bottom-[-6rem]` (-96px) ⚠️ **Duplicado**
- md: `bottom-[-6rem]` (-96px) ⚠️ **Duplicado**
- lg: `bottom-[-4rem]` (-64px)
- xl: `bottom-[-6rem]` (-96px) ⚠️ **Duplicado**
- fhd: `bottom-[-6rem]` (-96px) ⚠️ **Duplicado**
- qhd: `bottom-[-4rem]` (-64px) ⚠️ **Duplicado con lg**

**Problemas identificados:**
- ⚠️ **Valores hardcoded extremos**: `-left-[65rem]` en md es -1040px
- ⚠️ **Duplicación masiva**: Mismos valores repetidos en múltiples breakpoints
- ⚠️ **Lógica inconsistente**: lg tiene valores diferentes pero luego vuelve a los valores anteriores
- ⚠️ **Display toggle complejo**: `hidden sm:block md:block lg:hidden xl:block fhd:block qhd:block` (se oculta solo en lg)

#### 5. Línea 222 - HeroUserShowcase (derecha)
```tsx
className="absolute -right-[24rem] bottom-[-6rem] sm:-right-[24rem] sm:bottom-[-6rem] md:-right-[55rem] md:bottom-[-6rem] lg:-right-[18rem] lg:bottom-[-4rem] xl:-right-[24rem] xl:bottom-[-6rem] fhd:-right-[24rem] fhd:bottom-[-6rem] qhd:-right-[26rem] qhd:bottom-[-4rem] w-[30rem] lg:w-[24rem] xl:w-[30rem] mx-auto flex-shrink-0 hidden sm:block md:block lg:hidden xl:block fhd:block qhd:block"
```

**Valores de `right` por breakpoint:**
- Default: `-right-[24rem]` (-384px)
- sm: `-right-[24rem]` (-384px) ⚠️ **Duplicado**
- md: `-right-[55rem]` (-880px) ⚠️ **Valor extremo**
- lg: `-right-[18rem]` (-288px)
- xl: `-right-[24rem]` (-384px) ⚠️ **Duplicado**
- fhd: `-right-[24rem]` (-384px) ⚠️ **Duplicado**
- qhd: `-right-[26rem]` (-416px)

**Valores de `bottom` por breakpoint:**
- Default: `bottom-[-6rem]` (-96px)
- sm: `bottom-[-6rem]` (-96px) ⚠️ **Duplicado**
- md: `bottom-[-6rem]` (-96px) ⚠️ **Duplicado**
- lg: `bottom-[-4rem]` (-64px)
- xl: `bottom-[-6rem]` (-96px) ⚠️ **Duplicado**
- fhd: `bottom-[-6rem]` (-96px) ⚠️ **Duplicado**
- qhd: `bottom-[-4rem]` (-64px) ⚠️ **Duplicado con lg**

**Problemas identificados:**
- ⚠️ **Mismos problemas que línea 152**: Duplicación, valores extremos, lógica inconsistente

#### 6. Líneas 101, 171 - Tooltips (dentro de badges)
```tsx
className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 ..."
```
- **Posicionamiento**: Simple y correcto, sin problemas

### Elementos con Múltiples Translate

#### Línea 97 - Contenedor izquierdo
- `sm:translate-x-8 md:translate-x-8 lg:translate-x-0 xl:translate-x-8 fhd:translate-x-8 qhd:translate-x-8`
- **Problema**: 5 breakpoints con `translate-x-8`, solo lg tiene `translate-x-0`

#### Línea 167 - Contenedor derecho
- `sm:-translate-x-8 md:-translate-x-8 lg:translate-x-0 xl:-translate-x-8 fhd:-translate-x-8 qhd:-translate-x-8`
- **Problema**: Mismo patrón que línea 97 pero con valores negativos

---

## 3. VALORES HARDCODED

### Valores en `rem` (hardcoded)

#### Posicionamiento Left/Right
1. **Línea 152**: `-left-[38rem]`, `-left-[65rem]`, `-left-[28rem]`, `-left-[41rem]`
   - Valores: -38rem, -65rem, -28rem, -41rem
   - **Total**: 4 valores diferentes

2. **Línea 222**: `-right-[24rem]`, `-right-[55rem]`, `-right-[18rem]`, `-right-[26rem]`
   - Valores: -24rem, -55rem, -18rem, -26rem
   - **Total**: 4 valores diferentes

#### Posicionamiento Bottom
1. **Línea 152**: `bottom-[-6rem]`, `bottom-[-4rem]`
   - Valores: -6rem, -4rem
   - **Total**: 2 valores diferentes

2. **Línea 222**: `bottom-[-6rem]`, `bottom-[-4rem]`
   - Valores: -6rem, -4rem (duplicados)

#### Width
1. **Línea 152**: `w-[45rem]`, `w-[36rem]`
   - Valores: 45rem, 36rem
   - **Total**: 2 valores diferentes

2. **Línea 222**: `w-[30rem]`, `w-[24rem]`
   - Valores: 30rem, 24rem
   - **Total**: 2 valores diferentes

### Max Width Custom

1. **Línea 79**: `max-w-[1200px] qhd:max-w-[1600px]`
   - Valores: 1200px, 1600px

2. **Línea 81**: `max-w-4xl lg:max-w-3xl`
   - Valores: 4xl (896px), 3xl (768px) - valores estándar de Tailwind

3. **Línea 97**: `max-w-sm lg:max-w-md qhd:max-w-lg`
   - Valores: sm (384px), md (448px), lg (512px) - valores estándar

4. **Línea 156**: `max-w-md` (448px) - valor estándar

5. **Línea 167**: `max-w-sm lg:max-w-md qhd:max-w-lg`
   - Valores: sm (384px), md (448px), lg (512px) - duplicado de línea 97

6. **Línea 226**: `max-w-md` (448px) - valor estándar

7. **Línea 238**: `max-w-2xl` (672px) - valor estándar

### Spacing Inconsistente

#### Padding Horizontal
- **Línea 81**: `px-4 lg:px-6` (16px → 24px)
- **Línea 92**: `px-8 lg:px-6` (32px → 24px) ⚠️ **Disminuye en breakpoint mayor**
- **Línea 162**: `px-8 lg:px-6` (32px → 24px) ⚠️ **Duplicado**

#### Padding Vertical
- **Línea 92**: `py-12 lg:py-10` (48px → 40px) ⚠️ **Disminuye en breakpoint mayor**
- **Línea 162**: `py-12 lg:py-10` (48px → 40px) ⚠️ **Duplicado**

#### Margin Bottom
- **Línea 98**: `mb-8` (32px)
- **Línea 107**: `mb-5 lg:mb-4` (20px → 16px) ⚠️ **Disminuye en breakpoint mayor**
- **Línea 110**: `mb-8 lg:mb-6` (32px → 24px) ⚠️ **Disminuye en breakpoint mayor**
- **Línea 113**: `mb-10 lg:mb-8` (40px → 32px) ⚠️ **Disminuye en breakpoint mayor**
- **Línea 168**: `mb-8` (32px) - duplicado
- **Línea 177**: `mb-5 lg:mb-4` (20px → 16px) - duplicado de línea 107
- **Línea 180**: `mb-8 lg:mb-6` (32px → 24px) - duplicado de línea 110
- **Línea 183**: `mb-10 lg:mb-8` (40px → 32px) - duplicado de línea 113

**Patrón problemático identificado**: Los márgenes y paddings **disminuyen** en breakpoints mayores (lg), lo cual es contrario a la práctica común de aumentar spacing en pantallas más grandes.

#### Gap
- **Línea 89**: `gap-0 lg:gap-8 xl:gap-0` ⚠️ **Vuelve a 0 en xl después de ser 8 en lg**

#### Space Y (Vertical spacing en listas)
- **Línea 113**: `space-y-4 lg:space-y-3 qhd:space-y-5` (16px → 12px → 20px) ⚠️ **Patrón inconsistente**
- **Línea 183**: `space-y-4 lg:space-y-3 qhd:space-y-5` (duplicado)

---

## 4. COMPONENTES INTERNOS

### Componentes Utilizados

1. **LightRays** (Línea 19-30)
   - **Props**: `className`, `raysOrigin`, `raysColor`, `raysSpeed`, `lightSpread`, `rayLength`, `followMouse`, `mouseInfluence`, `noiseAmount`, `distortion`
   - **Visibilidad**: Siempre visible, sin breakpoints

2. **HeroRestaurantsShowcase** (Líneas 153, 157)
   - **Props**: `hideCards={true}`
   - **Visibilidad por breakpoint**:
     - **Línea 152**: `hidden sm:block md:block lg:hidden xl:block fhd:block qhd:block`
       - Oculto en: default, lg
       - Visible en: sm, md, xl, fhd, qhd
     - **Línea 156**: `sm:hidden md:hidden lg:hidden xl:hidden fhd:hidden qhd:hidden`
       - Visible solo en: default (mobile)
       - Oculto en: todos los breakpoints desde sm

3. **HeroUserShowcase** (Líneas 223, 227)
   - **Props**: `hideCards={true}`
   - **Visibilidad por breakpoint**:
     - **Línea 222**: `hidden sm:block md:block lg:hidden xl:block fhd:block qhd:block`
       - Oculto en: default, lg
       - Visible en: sm, md, xl, fhd, qhd
     - **Línea 226**: `sm:hidden md:hidden lg:hidden xl:hidden fhd:hidden qhd:hidden`
       - Visible solo en: default (mobile)
       - Oculto en: todos los breakpoints desde sm

4. **Image** (Línea 65-74)
   - Logo de Gulanity
   - **Visibilidad**: Siempre visible

5. **Button** (Líneas 142-151, 212-221)
   - Botones de CTA
   - **Visibilidad**: Siempre visible

### Lógica de Visibilidad de Componentes

**Problema identificado**: Los componentes `HeroRestaurantsShowcase` y `HeroUserShowcase` tienen **dos instancias cada uno** con lógica de visibilidad opuesta:

- **Instancia 1** (líneas 152, 222): Visible en desktop/tablet, oculto en mobile y lg
- **Instancia 2** (líneas 156, 226): Visible solo en mobile, oculto en todos los demás breakpoints

**Esto sugiere**:
- Mobile: Muestra instancia 2 (dentro del flujo normal)
- Tablet/Desktop (excepto lg): Muestra instancia 1 (posicionada absolutamente)
- lg: No muestra ninguna instancia (gap en la lógica)

---

## 5. REPORTE FINAL

### Top 5 Problemas Más Críticos

#### 1. 🔴 **CRÍTICO: Duplicación Masiva de Clases en Breakpoints**
- **Ubicación**: Líneas 97, 167
- **Problema**: 12 breakpoints diferentes en una sola línea de className
- **Impacto**: Código ilegible, difícil de mantener, alto riesgo de errores
- **Ejemplo**: `sm:mr-auto sm:ml-auto sm:translate-x-8 md:mr-auto md:ml-auto md:translate-x-8 lg:mr-auto lg:ml-0 lg:translate-x-0 xl:mr-auto xl:ml-auto xl:translate-x-8 fhd:mr-auto fhd:ml-auto fhd:translate-x-8 qhd:mr-auto qhd:ml-auto qhd:translate-x-8`
- **Solución sugerida**: Usar clases de utilidad personalizadas o componentes wrapper

#### 2. 🔴 **CRÍTICO: Valores Hardcoded Extremos en Posicionamiento**
- **Ubicación**: Líneas 152, 222
- **Problema**: Valores como `-left-[65rem]` (-1040px) y `-right-[55rem]` (-880px)
- **Impacto**: Layout frágil, no escalable, problemas en diferentes tamaños de pantalla
- **Solución sugerida**: Usar unidades relativas o cálculos basados en viewport

#### 3. 🟠 **ALTO: Lógica Inconsistente de Spacing**
- **Ubicación**: Múltiples líneas (81, 92, 107, 110, 113, 162, 177, 180, 183)
- **Problema**: Spacing disminuye en breakpoints mayores (ej: `px-8 lg:px-6`, `mb-8 lg:mb-6`)
- **Impacto**: Contrario a mejores prácticas, puede causar problemas de legibilidad en pantallas grandes
- **Solución sugerida**: Revisar y ajustar para que spacing aumente o se mantenga en breakpoints mayores

#### 4. 🟠 **ALTO: Duplicación de Código entre Secciones B2B y B2C**
- **Ubicación**: Líneas 91-159 (B2B) vs 161-229 (B2C)
- **Problema**: Código casi idéntico duplicado, solo cambian colores y textos
- **Impacto**: Mantenimiento duplicado, riesgo de inconsistencias
- **Solución sugerida**: Extraer a componente reutilizable con props

#### 5. 🟡 **MEDIO: Lógica de Visibilidad Compleja para Showcases**
- **Ubicación**: Líneas 152, 156, 222, 226
- **Problema**: Dos instancias de cada showcase con lógica de visibilidad opuesta y compleja
- **Impacto**: Difícil de entender, riesgo de mostrar ambos componentes simultáneamente
- **Solución sugerida**: Simplificar usando una sola instancia con posicionamiento condicional

### Elementos con Más Breakpoints (Top 3)

1. **Línea 97** - Contenedor izquierdo (B2B)
   - **12 breakpoints diferentes** en una sola línea
   - Clases: max-width, margin, translate

2. **Línea 167** - Contenedor derecho (B2C)
   - **12 breakpoints diferentes** en una sola línea
   - Mismo patrón que línea 97

3. **Línea 152** - HeroRestaurantsShowcase (posición absoluta)
   - **10 breakpoints diferentes** en una sola línea
   - Clases: left, bottom, width, display

### Sugerencias de Simplificación

#### 1. **Extraer Componente Reutilizable para Secciones B2B/B2C**
```tsx
// Crear componente HeroSection
<HeroSection
  variant="b2b" | "b2c"
  title="..."
  description="..."
  features={[...]}
  showcase={HeroRestaurantsShowcase | HeroUserShowcase}
/>
```
**Reducción estimada**: ~70 líneas

#### 2. **Simplificar Breakpoints con Clases de Utilidad Personalizadas**
```tsx
// En lugar de:
sm:mr-auto sm:ml-auto sm:translate-x-8 md:mr-auto md:ml-auto md:translate-x-8...

// Usar:
hero-container-left // clase personalizada en CSS
```
**Reducción estimada**: ~40 líneas

#### 3. **Usar CSS Custom Properties para Valores Hardcoded**
```css
:root {
  --hero-showcase-left-sm: -38rem;
  --hero-showcase-left-md: -65rem;
  --hero-showcase-left-lg: -28rem;
}
```
**Reducción estimada**: ~20 líneas

#### 4. **Simplificar Lógica de Visibilidad de Showcases**
```tsx
// Una sola instancia con posicionamiento condicional
<div className={cn(
  "hero-showcase",
  isMobile ? "relative" : "absolute hero-showcase-position"
)}>
  <HeroRestaurantsShowcase />
</div>
```
**Reducción estimada**: ~15 líneas

#### 5. **Consolidar Breakpoints Duplicados**
- Eliminar breakpoints con valores idénticos
- Usar breakpoint más pequeño cuando todos los mayores tienen el mismo valor
**Reducción estimada**: ~30 líneas

#### 6. **Revisar y Corregir Spacing Inconsistente**
- Ajustar spacing para que aumente o se mantenga en breakpoints mayores
- Usar valores consistentes entre secciones
**Reducción estimada**: ~10 líneas

### Estimación de Líneas de Código a Reducir

**Total estimado**: ~185 líneas (70% del archivo actual de 263 líneas)

**Desglose**:
- Extracción de componente reutilizable: ~70 líneas
- Simplificación de breakpoints: ~40 líneas
- CSS Custom Properties: ~20 líneas
- Simplificación de visibilidad: ~15 líneas
- Consolidación de breakpoints: ~30 líneas
- Corrección de spacing: ~10 líneas

**Resultado esperado**: Archivo de ~78 líneas (reducción del 70%)

### Métricas Adicionales

- **Total de breakpoints únicos usados**: 6 (sm, md, lg, xl, fhd, qhd)
- **Total de clases con breakpoints**: ~85 instancias
- **Clases duplicadas identificadas**: 15+
- **Valores hardcoded en rem**: 12 valores diferentes
- **Elementos con posicionamiento absolute**: 6
- **Componentes internos**: 5 (LightRays, HeroRestaurantsShowcase x2, HeroUserShowcase x2, Image, Button)

---

## Conclusión

El componente `HomeLanding.tsx` presenta **problemas significativos de mantenibilidad y escalabilidad** debido a:

1. Duplicación excesiva de código
2. Uso masivo de breakpoints con valores repetidos
3. Valores hardcoded extremos que dificultan el responsive
4. Lógica de visibilidad compleja y potencialmente problemática
5. Spacing inconsistente que va contra mejores prácticas

**Recomendación**: Refactorización prioritaria para mejorar mantenibilidad y reducir el tamaño del código en aproximadamente un 70%.

