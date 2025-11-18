"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function ConditionalFooter() {
  const pathname = usePathname();
  const hideFooter =
    pathname === "/" ||
    pathname === "/restaurants" ||
    pathname === "/users" ||
    pathname.startsWith("/blog");
  if (hideFooter) {
    return null;
  }
  return <Footer />;
}

