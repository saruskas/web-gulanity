import { ImageResponse } from "next/og";

export const dynamic = 'force-static';
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #041522 0%, #082a3f 50%, #0e3d57 100%)",
          width: "100%",
          height: "100%",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "120px",
        }}
      >
        <p style={{ textTransform: "uppercase", letterSpacing: "0.4em", fontSize: 24, color: "rgba(255,255,255,0.7)" }}>
          Blog de Gulanity
        </p>
        <h1 style={{ fontSize: 90, lineHeight: 1.05, margin: "20px 0" }}>Historias que llenan mesas</h1>
        <p style={{ fontSize: 34, maxWidth: "820px", color: "rgba(255,255,255,0.85)" }}>
          Gastronomía, datos y tecnología para restaurantes y foodies.
        </p>
      </div>
    ),
    { ...size }
  );
}

