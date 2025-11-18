"use client";

import CookieConsent from "react-cookie-consent";

export default function CookieBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Aceptar"
      declineButtonText="Rechazar"
      enableDeclineButton
      cookieName="gulanity-cookie-consent"
      style={{ background: "#052838", fontSize: "14px", lineHeight: "1.5", zIndex: 2147483647 }}
      buttonStyle={{
        background: "#F4BF00",
        color: "#052838",
        fontSize: "14px",
        borderRadius: "999px",
        padding: "10px 24px",
        fontWeight: 600,
      }}
      declineButtonStyle={{
        background: "transparent",
        border: "1px solid #FFFFFF",
        color: "#FFFFFF",
        fontSize: "14px",
        borderRadius: "999px",
        padding: "10px 24px",
        fontWeight: 600,
        marginLeft: "12px",
      }}
      onAccept={() => {
        if (process.env.NODE_ENV === "development") {
          console.log("Cookies aceptadas");
        }
      }}
      onDecline={() => {
        if (process.env.NODE_ENV === "development") {
          console.log("Cookies rechazadas");
        }
      }}
    >
      Utilizamos cookies para mejorar tu experiencia. Al hacer clic en “Aceptar” consientes su uso.{" "}
      <a href="/cookies" className="underline text-white font-semibold">
        Más información
      </a>
      .
    </CookieConsent>
  );
}

