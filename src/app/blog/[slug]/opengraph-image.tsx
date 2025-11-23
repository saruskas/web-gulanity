import { ImageResponse } from "next/og";

const blogPostMeta: Record<string, { title: string; category: string }> = {
  "futuro-carta-digital-ia": {
    title: "El futuro de la carta digital con IA",
    category: "Tecnología",
  },
  "5-formas-fidelizar-clientes-restaurante": {
    title: "5 formas de fidelizar clientes en tu restaurante",
    category: "Marketing",
  },
  "como-elegir-plato-perfecto-segun-dieta": {
    title: "Cómo elegir el plato perfecto según tu dieta",
    category: "Guías",
  },
};

export const dynamic = 'force-static';
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return Object.keys(blogPostMeta).map((slug) => ({
    slug,
  }));
}

type OgImageProps = {
  params: { slug: string };
};

export default function Image({ params }: OgImageProps) {
  const meta = blogPostMeta[params.slug] ?? { title: "Blog de Gulanity", category: "Historias" };
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #041522 0%, #0b2f48 60%, #11445f 100%)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "110px",
        }}
      >
        <p style={{ textTransform: "uppercase", letterSpacing: "0.4em", fontSize: 24, color: "rgba(255,255,255,0.7)" }}>
          {meta.category}
        </p>
        <h1 style={{ fontSize: 78, lineHeight: 1.1, margin: "18px 0", maxWidth: "880px" }}>{meta.title}</h1>
        <p style={{ fontSize: 26, color: "rgba(255,255,255,0.75)" }}>Historias y datos curados por Gulanity</p>
      </div>
    ),
    { ...size }
  );
}

