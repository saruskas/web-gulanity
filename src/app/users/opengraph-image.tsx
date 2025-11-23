import { ImageResponse } from "next/og";

export const dynamic = 'force-static';
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #fff8d6 0%, #fcd76e 50%, #f9c648 100%)",
          width: "100%",
          height: "100%",
          color: "#052838",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "110px",
        }}
      >
        <p style={{ textTransform: "uppercase", letterSpacing: "0.5em", fontSize: 26, color: "#876600" }}>Usuarios</p>
        <h1 style={{ fontSize: 88, lineHeight: 1.05, margin: "16px 0" }}>Descubre platos reales</h1>
        <p style={{ fontSize: 34, maxWidth: "780px", color: "#2d2d2d" }}>
          Recomendaciones verificadas, filtros avanzados y decisiones sin sorpresas.
        </p>
      </div>
    ),
    { ...size }
  );
}

