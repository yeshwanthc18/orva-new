"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import AnimatedGradientSection from "./AnimatedGradient";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("orva-announcement-dismissed");

    if (!dismissed) {
      setVisible(true);
    }
  }, []);

  const handleClose = () => {
    sessionStorage.setItem("orva-announcement-dismissed", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <AnimatedGradientSection className="py-32">
    <div
      style={{
        //position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background:
          "radial-gradient(circle at 8% 6%, #ff5a1f 0%, #ea3a12 18%, #d61b0e 40%, #b4040c 68%, #8d0008 100%)",
        borderBottom: "1px solid rgba(255,255,255,.12)",
        boxShadow: "0 10px 30px rgba(0,0,0,.15)",
      }}
    >
      <div
        style={{
          maxWidth: 1600,
          margin: "0 auto",
          minHeight: 52,
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <a
          href="/results"
          style={{
            color: "#fff",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 15,
            fontWeight: 500,
            textAlign: "center",
          }}
        >
          <span style={{ opacity: 0.95 }}>
            Hundreds of Ivy League Offers! See Our Record-Breaking Class of 2030
            Results!
          </span>

          <span
            style={{
              fontWeight: 700,
              textDecoration: "underline",
              textUnderlineOffset: 3,
              whiteSpace: "nowrap",
            }}
          >
            View Now ↗
          </span>
        </a>

        <button
          onClick={handleClose}
          aria-label="Close announcement"
          style={{
            position: "absolute",
            right: 20,
            top: "50%",
            transform: "translateY(-50%)",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: "#fff",
            opacity: 0.85,
            transition: "opacity .2s ease",
          }}
        >
          <X size={18} />
        </button>
      </div>
    </div>
    </AnimatedGradientSection>
  );
}
