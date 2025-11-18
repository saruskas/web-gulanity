export type TrackPayload = Record<string, unknown>;

declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: Record<string, unknown>) => void;
  }
}

/**
 * Lista tipada de eventos estándar que usamos en analytics.
 * Evita strings mágicos y mantiene consistencia entre componentes.
 */
export const trackingEvents = {
  PAGE_VIEW: "page_view",
  CTA_CLICKED: "cta_clicked",
  DOWNLOAD_APP: "download_app_clicked",
  JOIN_PLATFORM: "join_platform_clicked",
  FORM_STARTED: "form_started",
  FORM_SUBMITTED: "form_submitted",
  FORM_ERROR: "form_error",
  SCROLL_DEPTH: "scroll_depth",
  VIDEO_PLAY: "video_play",
  LINK_CLICK: "link_click",
} as const;

/**
 * Envía un evento genérico a GA4 (o al provider disponible vía `window.gtag`).
 * Úsalo únicamente cuando no exista un helper específico.
 */
export function track(event: string, payload: TrackPayload = {}) {
  if (process.env.NODE_ENV === "development") {
    console.log("[track]", event, payload);
  }
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", event, payload);
  }
}

/**
 * Helper para registrar clicks en CTAs, guardando contexto y timestamp.
 */
export function trackCTA(location: string, label: string) {
  track(trackingEvents.CTA_CLICKED, {
    location,
    label,
    timestamp: Date.now(),
  });
}

/**
 * Marca el inicio de interacción con un formulario (primer foco/submit).
 */
export function trackFormStart(formType: string) {
  track(trackingEvents.FORM_STARTED, {
    form_type: formType,
    timestamp: Date.now(),
  });
}

/**
 * Registra el resultado de un formulario (éxito o error controlado).
 * Evita enviar PII directamente; usa `extra` solo para metadata anónima.
 */
export function trackFormSubmit(formType: string, success: boolean, extra: TrackPayload = {}) {
  track(trackingEvents.FORM_SUBMITTED, {
    form_type: formType,
    success,
    timestamp: Date.now(),
    ...extra,
  });
}

/**
 * Helper para capturar errores no controlados en formularios.
 */
export function trackFormError(formType: string, errorMessage?: string) {
  track(trackingEvents.FORM_ERROR, {
    form_type: formType,
    message: errorMessage,
    timestamp: Date.now(),
  });
}
