// Mínima interfaz de tracking; cambia la implementación cuando enchufes GA/PL.
export type TrackPayload = Record<string, unknown>;

export function track(event: string, payload: TrackPayload = {}) {
  // eslint-disable-next-line no-console
  console.log("[track]", event, payload);
  // TODO: enviar a tu capa de analítica (GA4, Plausible, Mixpanel, etc.)
}
