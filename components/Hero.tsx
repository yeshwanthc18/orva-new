"use client";

import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  Variants,
} from "framer-motion";
import { Button } from "./ui/Button";

// Free Unsplash — Oxford Radcliffe Camera, iconic university
const UNI_URL =
  "https://images.unsplash.com/photo-1568792923760-d70635a89fdc?w=1800&q=82&auto=format&fit=crop";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const [ready, setReady] = useState(false);

  /* ── 1. Pure Numeric Scroll-Driven Parallax Mapping (Jitter-Proof) ── */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Optimized spring parameters for glassy, friction-free movement tracking
  const smoothScrollY = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 24,
    restDelta: 0.0001,
  });

  // Converted completely to exact numeric pixels to exploit full GPU matrix performance
  const bgY = useTransform(smoothScrollY, [0, 1], [0, 240]);
  const uniY = useTransform(smoothScrollY, [0, 1], [0, 360]);
  const textRiseY = useTransform(smoothScrollY, [0, 1], [0, 880]); // Displaces downward aggressively
  const textGuidY = useTransform(smoothScrollY, [0, 1], [0, -820]); // Displaces upward in opposition
  const girlY = useTransform(smoothScrollY, [0, 1], [0, -180]); // Independent parallax layer midground
  const girlScale = useTransform(smoothScrollY, [0, 1], [1.1, 1.5]); // Independent parallax layer midground

  // Smoothly damp component layers out only near the very boundary terminal exit path
  const heroFade = useTransform(smoothScrollY, [0, 0.9], [1, 0]);

  /* ── 2. Fluid Cursor Spatial Tracking ── */
  const rmx = useMotionValue(0);
  const rmy = useMotionValue(0);

  const smx = useSpring(rmx, { stiffness: 35, damping: 15 });
  const smy = useSpring(rmy, { stiffness: 35, damping: 15 });

  // 3D Depth layered spatial coefficients
  const bgMx = useTransform(smx, (v) => v * 20);
  const bgMy = useTransform(smy, (v) => v * 12);
  const uniMx = useTransform(smx, (v) => v * 35);
  const uniMy = useTransform(smy, (v) => v * 20);
  const riseMx = useTransform(smx, (v) => v * 50);
  const riseMy = useTransform(smy, (v) => v * 25);
  const guidMx = useTransform(smx, (v) => v * 60);
  const guidMy = useTransform(smy, (v) => v * 30);
  const girlMx = useTransform(smx, (v) => v * 80);
  const girlMy = useTransform(smy, (v) => v * 40);
  const uiMx = useTransform(smx, (v) => v * -15);
  const uiMy = useTransform(smy, (v) => v * -8);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 50);
    const onMv = (e: MouseEvent) => {
      rmx.set((e.clientX / window.innerWidth - 0.5) * 2);
      rmy.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("mousemove", onMv, { passive: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener("mousemove", onMv);
    };
  }, [rmx, rmy]);

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      ref={containerRef}
      style={{
        width: "100%",
        position: "relative",
        height: "150svh", // Extended runway depth provides breathtaking, flawless scroll interaction
        background: "#260101",
      }}
    >
      {/* Fixed canvas container pinning viewport during animation */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100svh",
          width: "100%",
          overflow: "hidden",
          perspective: "2000px",
        }}
      >
        {/* ═══════════════════════════════════════════
            LAYER 0 — Brand Canvas Vignette Backdrop
            ═══════════════════════════════════════════ */}
        <motion.div
          style={{
            position: "absolute",
            inset: "-20%",
            y: bgY,
            x: bgMx,
            background:
              "radial-gradient(circle at 8% 6%, #F75105 0%, #e63d0b 30%, #c42711 65%, #AA1A12 100%)",
            zIndex: 0,
            opacity: 0.7,
          }}
        />

        {/* ═══════════════════════════════════════════
            LAYER 1 — Deep Horizon University Overlay
            ═══════════════════════════════════════════ */}
        <motion.div
          style={{
            position: "absolute",
            inset: "-15%",
            y: uniY,
            x: uniMx,
            zIndex: 1,
            opacity: 0.26,
            mixBlendMode: "luminosity",
          }}
        >
          <img
            src={UNI_URL}
            alt="University campus overlay texture"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 45%",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(26,0,0,0.8) 0%, transparent 50%, #380202 100%)",
            }}
          />
        </motion.div>

        {/* ═══════════════════════════════════════════
            LAYER 2 — "RISE." Matte Onyx Layer
            ═══════════════════════════════════════════ */}
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "34svh",
            y: textRiseY,
            x: riseMx,
            opacity: heroFade,
            zIndex: 2,
            pointerEvents: "none",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={ready ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: "clamp(120px, 18vw, 250px)",
              fontWeight: 600,
              lineHeight: 0.8,
              letterSpacing: "-0.02em",
              fontFamily: "Cairo, sans-serif",
              color: "#0f0f0f",
              userSelect: "none",
              textAlign: "center",
              margin: 0,
            }}
          >
            Elite
          </motion.h1>
        </motion.div>

        {/* ═══════════════════════════════════════════
            LAYER 3 — High Definition Core Student Cutout
            ═══════════════════════════════════════════ */}
        <motion.div
          style={{
            position: "absolute",
            left: "50%",
            bottom: "-1svh",
            width: "clamp(550px, 64vw, 1000px)",
            height: "94%",
            y: girlY,
            x: girlMx,
            scale: girlScale,
            translateX: "-50%",
            zIndex: 3,
            pointerEvents: "none",
          }}
        >
          <motion.img
            src="/girl-new.png"
            alt="Student portrait reference cutout"
            initial={{ opacity: 0, scale: 0.97, y: 25 }}
            animate={ready ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{
              duration: 0.95,
              delay: 0.04,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "bottom center",
              filter:
                "drop-shadow(0 30px 65px rgba(0,0,0,0.65)) brightness(1.01)",
            }}
          />
        </motion.div>

        {/* ═══════════════════════════════════════════
            LAYER 4 — "GUIDED." Warm Alabaster Cream Layer
            ═══════════════════════════════════════════ */}
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "24svh",
            y: textGuidY,
            x: guidMx,
            opacity: heroFade,
            zIndex: 4,
            pointerEvents: "none",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: -25, scale: 0.99 }}
            animate={ready ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: "clamp(120px, 18vw, 250px)",
              fontWeight: "lighter",
              lineHeight: 0.8,
              letterSpacing: "-0.02em",
              fontFamily: "Cairo, sans-serif",
              color: "#fdebd5",
              userSelect: "none",
              textAlign: "center",
              margin: 0,
            }}
          >
            Admissions.
          </motion.h1>
        </motion.div>

        {/* ═══════════════════════════════════════════
            LAYER 5 — Top Narrative Grid (Locked Horizontal Axis)
            ═══════════════════════════════════════════ */}
        <motion.div
          style={{
            position: "absolute",
            top: "8svh",
            left: 0,
            width: "100vw",
            textAlign: "center",
            zIndex: 10,
            y: uiMy,
            x: uiMx,
            opacity: 0.5,
          }}
        >
          {/* <motion.div
            variants={stagger}
            initial="hidden"
            animate={ready ? "show" : "hidden"}
          >
            <motion.div
              variants={item}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 14,
                marginBottom: 10,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: ".2em",
                textTransform: "uppercase",
                color: "#fdc98e",
              }}
            >
              Your Partner from the GCC to the World
            </motion.div>

            <motion.p
              variants={item}
              style={{
                fontSize: 17,
                fontWeight: 300,
                lineHeight: 1.6,
                color: "rgba(248, 246, 242, 0.95)",
                margin: 0,
                textShadow: "0 2px 10px rgba(0,0,0,0.5)",
              }}
            >
              Guiding ambitious students from ambition to admission and into a
              thriving first year at the right university.
            </motion.p>
          </motion.div> */}
        </motion.div>

        {/* ═══════════════════════════════════════════
            LAYER 6 — Bottom Interactive Suite (Locked Horizontal Axis)
            ═══════════════════════════════════════════ */}
        <motion.div
          style={{
            position: "absolute",
            width: "100vw",
            bottom: "6svh",
            left: 0,
            zIndex: 10,
            y: uiMy,
            x: uiMx,
            opacity: heroFade,
          }}
        >
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={ready ? "show" : "hidden"}
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="inline-flex items-center gap-2"
            >
              <span>Begin Your Journey</span>

              <svg
                className="w-4 h-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Button>
            <Button
              href="/contact"
              variant="secondaryLight"
              size="lg"
              className="inline-flex"
            >
              Our Story
            </Button>
          </motion.div>
        </motion.div>

        {/* ═══════════════════════════════════════════
            LAYER 7 — Left Margin: Vertically Centered Country Columns
            ═══════════════════════════════════════════ */}
        <div
          style={{
            position: "absolute",
            left: 48,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 20,
            display: "flex",
            flexDirection: "column",
            gap: 28,
          }}
        >
          {["Online Globally", "Jeddah", "Riyadh", "Abu Dhabi", "Dubai"].map(
            (c) => (
              <span
                key={c}
                style={{
                  fontSize: 11,
                  letterSpacing: ".25em",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "rgba(248, 246, 242, 0.65)",
                  writingMode: "vertical-lr",
                  textOrientation: "mixed",
                  transform: "rotate(180deg)",
                  userSelect: "none",
                }}
              >
                {c}
              </span>
            ),
          )}
        </div>

        {/* ═══════════════════════════════════════════
            LAYER 8 — Right Margin: Vertically Centered Metric Columns
            ═══════════════════════════════════════════ */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={ready ? "show" : "hidden"}
          style={{
            position: "absolute",
            right: 48,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 20,
            display: "flex",
            flexDirection: "column",
            gap: 36,
            borderLeft: "1px solid rgba(248, 246, 242, 0.12)",
            paddingLeft: 24,
          }}
        >
          {[
            ["Top 100", "Universities"],
            ["15+", "Experience"],
            ["50", "Families"],
            ["100%", "Personalized"],
          ].map(([n, l]) => (
            <div key={l} style={{ textAlign: "left" }}>
              <div
                style={{
                  fontSize: "clamp(18px, 1.8vw, 24px)",
                  fontWeight: 900,
                  color: "#f8f6f2",
                  lineHeight: 1,
                }}
              >
                {n}
              </div>
              <div
                style={{
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "#fdc98e",
                  marginTop: 5,
                }}
              >
                {l}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
