import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/config";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 56,
          background: "linear-gradient(135deg, #041522 0%, #062f45 60%, #0b4563 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "120px",
          color: "white",
        }}
      >
        <div style={{ fontSize: 28, textTransform: "uppercase", letterSpacing: "0.4em", color: "rgba(255,255,255,0.7)" }}>
          Plataforma dual
        </div>
        <div style={{ fontSize: 96, fontWeight: 700, margin: "24px 0 16px" }}>{siteConfig.name}</div>
        <p style={{ fontSize: 32, maxWidth: "820px", lineHeight: 1.3 }}>
          Conecta usuarios curiosos con restaurantes que quieren crecer sin comisiones.
        </p>
        <div style={{ marginTop: 48, fontSize: 24, color: "rgba(255,255,255,0.8)" }}>{siteConfig.url.replace("https://", "")}</div>
      </div>
    ),
    {
      ...size,
    }
  );
}

