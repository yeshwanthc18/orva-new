"use client";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";

const VALS = [
  {
    n: "01",
    t: "Lives, not letters of admission.",
    b: "The offer letter is a milestone, not the finish line. We measure our work by what happens in the years that follow — the right institution, the right course, the right transition.",
    img: "/images/img02.jpeg",
  },
  {
    n: "02",
    t: "Every child is different.",
    b: "No two students are alike, so no two plans are alike. We take time to understand each child — their character, their ambition, the world they are growing up in.",
    img: "/images/img03.jpeg",
  },
  {
    n: "03",
    t: "Home Grown.",
    b: "We are raised in this culture, based in this region, and we work in your time zone. Counsel that understands the Gulf cannot be flown in for the meeting.",
    img: "/images/img04.jpeg",
  },
  {
    n: "04",
    t: "We make things clear.",
    b: "The journey to university is full of jargon, deadlines, and decision points. We translate it. Families always know where things stand, what comes next, and what is at stake.",
    img: "/images/img05.jpeg",
  },
  {
    n: "05",
    t: "Earned, never assumed.",
    b: "Trust is something families give us a piece at a time. We earn the rest through every meeting, every email, every result.",
    img: "/images/img06.jpeg",
  },
];

export default function Values() {
  const [active, setActive] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  // Autonomous Sequence Auto-Play Loop
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % VALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="values"
      style={{
        background:
          "radial-gradient(circle at 8% 6%, #ff5a1f 0%, #ea3a12 18%, #d61b0e 40%, #b4040c 68%, #8d0008 100%)",
        padding: "160px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Structural Vector Grid Lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.1,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "30%",
            bottom: 0,
            width: "1px",
            background: "#fff",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            right: 0,
            height: "1px",
            background: "#fff",
          }}
        />
      </div>

      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "0 80px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* ── Crisp Editorial Header ── */}
        <div
          ref={headerRef}
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: 40,
            marginBottom: "100px",
            alignItems: "end",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={headerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: ".4em",
                textTransform: "uppercase",
                color: "#ffffff",
                opacity: 0.8,
                display: "block",
                marginBottom: 16,
              }}
            >
              The Core Manifest
            </span>
            <h2
              style={{
                fontSize: "clamp(40px, 5vw, 68px)",
                fontWeight: 900,
                lineHeight: 0.95,
                letterSpacing: "-.03em",
                color: "#ffffff",
                margin: 0,
              }}
            >
              What We Stand For
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7 }}
            style={{
              fontSize: 16,
              fontWeight: 300,
              lineHeight: 1.8,
              color: "#ffffff",
              opacity: 0.85,
              maxWidth: 400,
              margin: 0,
              borderLeft: "2px solid rgba(255,255,255,0.3)",
              paddingLeft: 32,
            }}
          >
            Five immutable strategic principles built to deliberately chart
            exceptional student life trajectories.
          </motion.p>
        </div>

        {/* ── Interlocking Panel System ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "4.8fr 7.2fr",
            gap: "64px",
            alignItems: "center",
          }}
        >
          {/* Left Navigation Track */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {VALS.map((v, i) => {
              const isSelected = active === i;
              return (
                <div
                  key={v.n}
                  onMouseEnter={() => setActive(i)}
                  style={{
                    position: "relative",
                    padding: "24px 28px",
                    borderRadius: "10px",
                    cursor: "pointer",
                    background: isSelected
                      ? "rgba(255, 255, 255, 0.12)"
                      : "transparent",
                    backdropFilter: isSelected ? "blur(16px)" : "none",
                    border: `1px solid ${isSelected ? "rgba(255, 255, 255, 0.2)" : "transparent"}`,
                    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "24px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: 800,
                        color: "#ffffff",
                        opacity: isSelected ? 1 : 0.4,
                        fontFamily: "sans-serif",
                        transition: "opacity 0.3s ease",
                      }}
                    >
                      {v.n}
                    </span>
                    <h3
                      style={{
                        fontSize: "20px",
                        fontWeight: isSelected ? 700 : 400,
                        color: "#ffffff",
                        opacity: isSelected ? 1 : 0.7,
                        margin: 0,
                        letterSpacing: "-0.01em",
                        transition: "opacity 0.3s ease",
                      }}
                    >
                      {v.t}
                    </h3>
                  </div>

                  {/* Micro Linear Dynamic Track Timer */}
                  {isSelected && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: "28px",
                        right: "28px",
                        height: "2px",
                        background: "rgba(255,255,255,0.1)",
                      }}
                    >
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        key={active}
                        transition={{ duration: 6, ease: "linear" }}
                        style={{ height: "100%", background: "#ffffff" }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Presentation Spotlight (High-Contrast Safety Structure) */}
          <div style={{ position: "relative", height: "560px", width: "100%" }}>
            <AnimatePresence mode="wait">
              {VALS.map((v, i) => {
                if (i !== active) return null;
                return (
                  <motion.div
                    key={v.n}
                    initial={{ opacity: 0, scale: 0.98, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98, y: -10 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "16px",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      padding: "56px",
                      boxShadow: "0 40px 80px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    {/* ── Sophisticated Subtle Image Backing ── */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 0,
                      }}
                    >
                      <Image
                        src={v.img}
                        alt=""
                        fill
                        priority
                        className="object-cover"
                        //style={{ filter: "grayscale(100%) contrast(1.1)" }}
                      />
                      {/* Linear Dark Isolation Shadow Vignette */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(to top, #0F0F0F 35%, transparent 100%)",
                        }}
                      />
                    </div>

                    {/* Highly-Readable Text Container */}
                    <div
                      style={{
                        position: "relative",
                        zIndex: 2,
                        maxWidth: "520px",
                      }}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                      >
                        <span
                          style={{
                            fontSize: 11,
                            fontWeight: 800,
                            letterSpacing: ".3em",
                            textTransform: "uppercase",
                            color: "#FA8322", // Clean Accent Orange visibility
                            display: "block",
                            marginBottom: 14,
                          }}
                        >
                          Paradigm Vector // {v.n}
                        </span>

                        <h4
                          style={{
                            fontSize: "30px",
                            fontWeight: 800,
                            lineHeight: 1.2,
                            color: "#ffffff", // High visibility text alignment
                            margin: "0 0 16px 0",
                            letterSpacing: "-0.02em",
                          }}
                        >
                          {v.t}
                        </h4>

                        <div
                          style={{
                            width: 32,
                            height: 1,
                            background: "#D51E20",
                            marginBottom: 20,
                          }}
                        />

                        <p
                          style={{
                            fontSize: "16px",
                            fontWeight: 300,
                            lineHeight: 1.75,
                            color: "rgba(255, 255, 255, 0.85)", // Maximum readability variance
                            margin: 0,
                          }}
                        >
                          {v.b}
                        </p>
                      </motion.div>
                    </div>

                    {/* Clean Minimalist Background Numerical Identity */}
                    <div
                      style={{
                        position: "absolute",
                        right: "4%",
                        top: "0%",
                        fontSize: "240px",
                        fontWeight: 900,
                        fontFamily: "sans-serif",
                        color: "rgba(255, 255, 255, 0.02)",
                        lineHeight: 1,
                        userSelect: "none",
                        pointerEvents: "none",
                        letterSpacing: "-0.05em",
                      }}
                    >
                      {v.n}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
