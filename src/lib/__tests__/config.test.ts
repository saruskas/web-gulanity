import { describe, it, expect } from "vitest";
import { siteConfig } from "../config";

describe("siteConfig", () => {
  it("define la URL base del sitio", () => {
    expect(siteConfig.url).toBe("https://gulanity.com");
  });

  it("expone datos de contacto válidos", () => {
    expect(siteConfig.contact.email).toContain("@");
    expect(siteConfig.contact.phoneFormatted).toMatch(/^\+\d/);
  });

  it("incluye redes sociales obligatorias", () => {
    expect(siteConfig.social.facebook).toContain("http");
    expect(siteConfig.social.instagram).toContain("http");
    expect(siteConfig.social.linkedin).toContain("http");
  });

  it("contiene rutas de legales", () => {
    expect(siteConfig.legal.privacy).toBe("/privacidad");
    expect(siteConfig.legal.terms).toBe("/terminos");
    expect(siteConfig.legal.cookies).toBe("/cookies");
  });
});

