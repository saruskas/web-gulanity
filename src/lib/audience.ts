export type Audience = "user" | "restaurant";

const KEY = "audience";

export function getAudience(): Audience | null {
  if (typeof window === "undefined") return null;
  const v = window.localStorage.getItem(KEY);
  return v === "user" || v === "restaurant" ? v : null;
}

export function setAudience(aud: Audience) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, aud);
}
