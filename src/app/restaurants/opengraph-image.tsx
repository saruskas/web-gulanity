import { ImageResponse } from "next/og";

export const dynamic = 'force-static';
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(120deg, #041522 10%, #0b3650 70%, #113f62 100%)",
          width: "100%",
          height: "100%",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "110px",
        }}
      >
        <p style={{ textTransform: "uppercase", letterSpacing: "0.5em", fontSize: 26, color: "rgba(255,255,255,0.7)" }}>
          Restaurantes
        </p>
        <h1 style={{ fontSize: 92, lineHeight: 1.05, margin: "16px 0" }}>Crece sin comisiones</h1>
        <p style={{ fontSize: 34, maxWidth: "800px", color: "rgba(255,255,255,0.85)" }}>
          Más visibilidad cualificada y métricas que importan con Gulanity.
        </p>
      </div>
    ),
    { ...size }
  );
}

