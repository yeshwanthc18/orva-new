"use client";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const STEPS = [
  {
    n: "01",
    t: "Discovery",
    d: "We start by understanding the student — their strengths, aspirations, the life they want to build. No forms. Just a conversation.",
    img: "/images/img02.jpeg",
  },
  {
    n: "02",
    t: "Strategy",
    d: "A personalised roadmap: the right universities, the right courses, the right timeline. Every plan is unique — built around the individual.",
    img: "/images/img03.jpeg",
  },
  {
    n: "03",
    t: "Preparation",
    d: "Essays, applications, portfolios, interviews — every element crafted with precision so each submission truly reflects the student.",
    img: "/images/img04.jpeg",
  },
  {
    n: "04",
    t: "Placement",
    d: "From offer to enrolment — scholarships, visas, accommodation, and the full transition into university life. We stay until they settle in.",
    img: "/images/img05.jpeg",
  },
];

export default function Process() {
  const ref = useRef<HTMLElement>(null);
  const hdr = useRef<HTMLDivElement>(null);
  const hdrIn = useInView(hdr, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Gradient track indicator path matching brand transitions
  const spineHeight = useTransform(
    scrollYProgress,
    [0.15, 0.8],
    ["0%", "100%"],
  );

  return (
    <section
      ref={ref}
      id="process"
      style={{
        position: "relative",
        background: "#f8f6f2",
        padding: "180px 0",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "0 80px",
          position: "relative",
        }}
      >
        {/* ── Editorial Header System ── */}
        <div
          ref={hdr}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 40,
            marginBottom: 140,
            alignItems: "end",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={hdrIn ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: ".4em",
                textTransform: "uppercase",
                color: "#D51E20",
                display: "block",
                marginBottom: 24,
              }}
            >
              The Framework
            </span>
            <h2
              style={{
                fontSize: "clamp(40px, 5vw, 68px)",
                fontWeight: 900,
                lineHeight: 0.95,
                letterSpacing: "-.03em",
                color: "#0F0F0F",
                margin: 0,
              }}
            >
              Personalised guidance
              <br />
              <span
                style={{
                  fontStyle: "italic",
                  fontWeight: 300,
                  color: "#D51E20",
                }}
              >
                at every step.
              </span>
            </h2>
          </motion.div>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={hdrIn ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{
                fontSize: 16,
                fontWeight: 300,
                lineHeight: 1.8,
                color: "rgba(15, 15, 15, 0.6)",
                maxWidth: 320,
                margin: 0,
                borderLeft: "2px solid #D51E20",
                paddingLeft: 32,
              }}
            >
              From the initial sparks of ambition to the historic campus gates.
              We reshape structural guidance.
            </motion.p>
          </div>
        </div>

        {/* ── The Kinetic Timeline Track ── */}
        <div style={{ position: "relative", paddingBottom: 80 }}>
          {/* Central Structural Timeline Spine */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 2,
              backgroundColor: "rgba(15, 15, 15, 0.06)",
              transform: "translateX(-50%)",
            }}
          >
            <motion.div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: spineHeight,
                background:
                  "linear-gradient(180deg, #D51E20 0%, #F45104 50%, #FA8322 100%)",
                originY: 0,
              }}
            />
          </div>

          {/* Cards Matrix Wrapper */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 140,
              position: "relative",
            }}
          >
            {STEPS.map((s, i) => (
              <TimelineCard
                key={s.n}
                s={s}
                i={i}
                globalScroll={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({
  s,
  i,
  globalScroll,
}: {
  s: (typeof STEPS)[0];
  i: number;
  globalScroll: any;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Custom margin checks when item passes the sweet-spot center plane of the viewport
  const isAutoHighlighted = useInView(cardRef, {
    once: false,
    margin: "-35% 0px -35% 0px",
  });

  const isEven = i % 2 === 0;
  const yParallax = useTransform(globalScroll, [0, 1], [i * -35, i * 35]);

  return (
    <div
      ref={cardRef}
      style={{
        display: "flex",
        justifyContent: isEven ? "flex-start" : "flex-end",
        alignItems: "center",
        width: "100%",
        position: "relative",
      }}
    >
      {/* Dynamic Intersection Node Point */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 12,
          height: 12,
          borderRadius: "50%",
          backgroundColor: isAutoHighlighted ? "#D51E20" : "#f8f6f2",
          border: `2px solid ${isAutoHighlighted ? "#FA8322" : "rgba(15,15,15,0.2)"}`,
          transform: "translate(-50%, -50%)",
          zIndex: 5,
          boxShadow: isAutoHighlighted
            ? "0 0 15px rgba(213, 30, 32, 0.5)"
            : "none",
          transition: "all 0.5s cubic-bezier(0.215, 0.610, 0.355, 1)",
        }}
      />

      {/* ── Asymmetric Text / Image Canvas Block ── */}
      <motion.div
        style={{
          width: "45%",
          y: yParallax,
          position: "relative",
        }}
        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, ease: [0.215, 0.61, 0.355, 1] }}
      >
        <div
          style={{
            position: "relative",
            background: isAutoHighlighted ? "#0F0F0F" : "transparent",
            borderRadius: 8,
            padding: "56px 48px",
            overflow: "hidden",
            border: `1px solid ${isAutoHighlighted ? "#D51E20" : "rgba(15, 15, 15, 0.08)"}`,
            boxShadow: isAutoHighlighted
              ? "0 45px 90px rgba(15, 15, 15, 0.16)"
              : "none",
            transition: "all 0.6s cubic-bezier(0.215, 0.610, 0.355, 1)",
          }}
        >
          {/* Background Structural Image Layer — Activates dynamically via scroll tracking */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: isAutoHighlighted ? 0.22 : 0,
              transform: isAutoHighlighted ? "scale(1)" : "scale(1.08)",
              transition: "all 0.75s cubic-bezier(0.215, 0.610, 0.355, 1)",
              zIndex: 0,
              backgroundColor: "#0F0F0F",
            }}
          >
            <Image
              src={s.img}
              alt=""
              fill
              className="object-cover"
              style={{ filter: "grayscale(100%) mix-blend-mode(overlay)" }}
            />
          </div>

          {/* Copy Layout Ring */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              textAlign: isEven ? "left" : "right",
            }}
          >
            <div
              style={{
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: ".3em",
                textTransform: "uppercase",
                color: isAutoHighlighted ? "#FA8322" : "#D51E20",
                marginBottom: 20,
                transition: "color 0.4s ease",
              }}
            >
              {s.t}
            </div>

            <p
              style={{
                fontSize: 15,
                fontWeight: 300,
                lineHeight: 1.9,
                color: isAutoHighlighted ? "#f8f6f2" : "rgba(15, 15, 15, 0.65)",
                margin: 0,
                transition: "color 0.4s ease",
              }}
            >
              {s.d}
            </p>
          </div>
        </div>
      </motion.div>

      {/* ── Background Parallax Step Number Identity ── */}
      <motion.div
        style={{
          position: "absolute",
          left: isEven ? "56%" : "auto",
          right: isEven ? "auto" : "56%",
          fontSize: "clamp(150px, 18vw, 240px)",
          fontWeight: 900,
          lineHeight: 0.8,
          fontFamily: "Cairo, sans-serif",
          letterSpacing: "-.06em",
          color: isAutoHighlighted
            ? "rgba(213, 30, 32, 0.08)"
            : "rgba(15, 15, 15, 0.02)",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 0,
          y: useTransform(globalScroll, [0, 1], [i * -70, i * 70]),
          transition: "color 0.5s ease",
        }}
      >
        {s.n}
      </motion.div>
    </div>
  );
}
