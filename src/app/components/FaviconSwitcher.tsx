"use client";
import { useEffect } from "react";
import { getFaviconPath } from "@/lib/favicon";
export default function FaviconSwitcher() {
  useEffect(() => {
    const updateFavicon = () => {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const faviconPath = getFaviconPath(isDark);
      const themeSegment = isDark ? "dark" : "light";
      const faviconLinks = document.querySelectorAll("link[rel='icon'], link[rel='shortcut icon'], link[rel='apple-touch-icon']");
      faviconLinks.forEach((link) => {
        const linkElement = link as HTMLLinkElement;
        linkElement.href = `${faviconPath}?theme=${themeSegment}`;
      });
    };
    updateFavicon();
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      updateFavicon();
    };
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);
  return null;
}

