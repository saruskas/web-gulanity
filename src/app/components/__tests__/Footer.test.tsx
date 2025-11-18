/* eslint-disable @next/next/no-img-element */
import type { AnchorHTMLAttributes, ImgHTMLAttributes } from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

vi.mock("next/navigation", () => ({
  usePathname: () => "/users",
}));

vi.mock("next/link", () => ({
  __esModule: true,
  default: ({ children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props}>{children}</a>,
}));

vi.mock("next/image", () => ({
  __esModule: true,
  default: ({ alt, ...props }: { alt: string } & ImgHTMLAttributes<HTMLImageElement>) => <img alt={alt} {...props} />,
}));

vi.mock("sonner", () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));

describe("Footer", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renderiza el logo de Gulanity", () => {
    render(<Footer />);
    expect(screen.getByAltText(/gulanity/i)).toBeInTheDocument();
  });

  it("muestra el email de contacto", () => {
    render(<Footer />);
    expect(screen.getByText(/hola@gulanity.com/i)).toBeInTheDocument();
  });

  it("incluye enlaces legales", () => {
    render(<Footer />);
    expect(screen.getByText(/privacidad/i)).toBeInTheDocument();
    expect(screen.getByText(/términos/i)).toBeInTheDocument();
    expect(screen.getByText(/cookies/i)).toBeInTheDocument();
  });

  it("los enlaces sociales tienen aria-label descriptivo", () => {
    render(<Footer />);
    const links = [
      screen.getByLabelText(/twitter/i),
      screen.getByLabelText(/linkedin/i),
      screen.getByLabelText(/instagram/i),
    ];
    links.forEach((link) => expect(link).toBeInTheDocument());
  });
});

