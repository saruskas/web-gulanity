export const FAVICON_LIGHT = "/favicon_blue.png";
export const FAVICON_DARK = "/favicon_user.png";

export function getFaviconPath(isDark: boolean) {
  return isDark ? FAVICON_DARK : FAVICON_LIGHT;
}


