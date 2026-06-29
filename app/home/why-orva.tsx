"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { COLORS, WHY_ORVA_POINTS } from "@/lib/constants";

/* ─────────────────────────────────────────────────────────────
   Map each point to a background image.
   Replace paths with your actual assets.
───────────────────────────────────────────────────────────── */
const IMAGES = [
  "/images/image1.png",
  "/images/image2.png",
  "/images/image3.png",
  "/images/image4.png",
  "/images/image5.png",
  "/images/image6.png",
];

const POINTS = WHY_ORVA_POINTS.map((p, i) => ({
  ...p,
  image: IMAGES[i] ?? "/images/img08.jpeg",
}));

const N = POINTS.length;

/* ─────────────────────────────────────────────────────────────
   ChapterTab
───────────────────────────────────────────────────────────── */
function ChapterTab({
  point,
  active,
  onClick,
}: {
  point: (typeof POINTS)[0];
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group w-full flex items-center gap-3 px-5 py-[14px] text-left relative transition-all duration-250"
      style={{
        borderLeft: `2px solid ${active ? COLORS.primary : "transparent"}`,
        background: active ? "rgba(255,255,255,0.04)" : "transparent",
      }}
    >
      {/* hover tint */}
      <span
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: "rgba(213,30,32,0.04)" }}
      />

      <span
        className="text-[14px] font-extrabold tracking-[0.12em] w-[22px] flex-shrink-0 relative z-10 transition-colors duration-250"
        style={{ color: active ? COLORS.primary : "rgba(255,255,255,0.18)" }}
      >
        {point.number}
      </span>

      <span
        className="text-[18px] font-semibold leading-snug flex-1 relative z-10 transition-colors duration-250"
        style={{
          color: active ? "rgba(255,255,255,0.92)" : "rgba(255, 255, 255, 0.807)",
        }}
      >
        {point.title}
      </span>

      <span
        className="w-[5px] h-[5px] rounded-full flex-shrink-0 relative z-10 transition-all duration-250"
        style={{
          background: active ? COLORS.primary : "rgba(255,255,255,0.1)",
          boxShadow: active ? "0 0 8px rgba(213,30,32,0.85)" : "none",
        }}
      />
    </button>
  );
}

/* ─────────────────────────────────────────────────────────────
   Main — scroll-driven, 600vh sticky section
───────────────────────────────────────────────────────────── */
export default function WhyOrva() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [slicePct, setSlicePct] = useState(0); // progress within current slide (0–100)
  const [entered, setEntered] = useState(false);

  /* scroll progress across the full sticky wrapper */
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });

  /* hint opacity */
  const hintOpacity = useTransform(scrollYProgress, [0, 0.04], [1, 0]);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const idx = Math.min(N - 1, Math.floor(p * N));
    const slice = ((p * N) % 1) * 100;
    setCurrent(idx);
    setSlicePct(slice);
    if (p > 0.01 && !entered) setEntered(true);
  });

  /* smooth scroll to slide when user clicks tab / dot / arrow */
  const jumpTo = useCallback((idx: number) => {
    if (!wrapRef.current) return;
    const el = wrapRef.current;
    const scrollable = el.scrollHeight - window.innerHeight;
    const target = el.offsetTop + (scrollable / N) * idx + 1;
    window.scrollTo({ top: target, behavior: "smooth" });
  }, []);

  const p = POINTS[current];

  return (
    /* 600vh tall wrapper — the scroll space */
    <div ref={wrapRef} style={{ height: "600vh", position: "relative" }}>
      {/* ── Sticky viewport ── */}
      <div
        className="sticky top-0 h-screen overflow-hidden flex flex-col"
        style={{ background: "#08080858" }}
      >
        {/* Background images (crossfade) */}
        <div className="absolute inset-0 z-0">
          {POINTS.map((pt, i) => (
            <motion.div
              key={i}
              className="absolute inset-0"
              animate={{ opacity: i === current ? 1 : 0 }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
            >
              <Image
                src={pt.image}
                alt=""
                fill
                className="object-cover"
                style={{
                  filter: "grayscale(25%) brightness(0.3) contrast(1.15)",
                }}
                sizes="100vw"
                priority={i === 0}
              />
            </motion.div>
          ))}

          {/* Cinematic gradient overlay */}
          {/* <div
            className="absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(108deg, rgba(8, 8, 8, 0.374) 0%, rgba(8, 8, 8, 0.242) 36%, rgba(8,8,8,0.18) 65%, rgba(8, 8, 8, 0.352) 100%)",
            }}
          /> */}

          {/* Scanlines */}
          {/* <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              opacity: 0.22,
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.12) 3px, rgba(0,0,0,0.12) 4px)",
            }}
          /> */}
        </div>

        {/* Ghost number */}
        <div
          className="absolute top-6 left-8 z-10 font-black leading-[0.85] pointer-events-none select-none transition-opacity duration-500"
          style={{
            fontSize: "clamp(88px, 15vw, 140px)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.06)",
            letterSpacing: "-0.05em",
          }}
        >
          {p.number}
        </div>

        {/* Ticker */}
        <div
          className="absolute top-9 right-9 z-20 text-[10px] font-bold tracking-[0.2em]"
          style={{
            color: "rgba(255,255,255,0.14)",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {p.number} / 0{N}
        </div>

        {/* Main split layout */}
        <div
          className="relative z-10 flex flex-1 overflow-hidden"
          style={{ marginBottom: 64 }}
        >
          <div className="max-w-8xl mx-auto h-full px-6 lg:px-8">
            <div className="flex h-full">
              {/* ── LEFT — active content ── */}
              <div className="flex flex-col justify-center w-full lg:w-[55%] px-10 md:px-14">
                {/* Eyebrow */}
                <div
                  className="flex items-center gap-3 mb-4 text-[10px] font-bold tracking-[0.26em] uppercase"
                  style={{ color: COLORS.primary }}
                >
                  <span
                    className="w-[22px] h-px flex-shrink-0"
                    style={{ background: COLORS.primary }}
                  />
                  Why Orva
                </div>

                {/* Title — masked slide-up */}
                <div className="overflow-hidden mb-0">
                  <AnimatePresence mode="wait">
                    <motion.h2
                      key={current + "-t"}
                      className="font-extrabold leading-[1.12] tracking-tight"
                      style={{
                        fontSize: "44px",
                        color: "#ffffff",
                      }}
                      initial={{ y: "110%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      exit={{ y: "-30%", opacity: 0 }}
                      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {p.title}
                    </motion.h2>
                  </AnimatePresence>
                </div>

                {/* Red rule */}
                <motion.div
                  key={current + "-r"}
                  className="h-[2px] rounded-sm my-5"
                  style={{ background: COLORS.primary }}
                  initial={{ width: 0 }}
                  animate={{ width: 52 }}
                  transition={{
                    duration: 0.68,
                    delay: 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                {/* Description */}
                <AnimatePresence mode="wait">
                  <motion.p
                    key={current + "-d"}
                    className="text-[24px] leading-[1.72] max-w-[340px]"
                    style={{ color: "rgba(255,255,255,0.48)" }}
                    initial={{ y: 18, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{
                      duration: 0.52,
                      delay: 0.14,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {p.description}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* ── RIGHT — chapter index (desktop only) ── */}
              <div className="hidden lg:flex flex-col justify-center w-[45%] py-10 relative pr-8">
                {/* Vertical progress spine */}
                <div
                  className="absolute left-0 rounded-sm"
                  style={{
                    top: "10%",
                    bottom: "10%",
                    width: 2,
                    background: "rgba(255,255,255,0.05)",
                  }}
                >
                  <motion.div
                    className="absolute top-0 left-0 w-full rounded-sm"
                    style={{ background: COLORS.primary }}
                    animate={{ height: `${slicePct}%` }}
                    transition={{ duration: 0.08 }}
                  />
                </div>

                {POINTS.map((pt, i) => (
                  <ChapterTab
                    key={i}
                    point={pt}
                    active={i === current}
                    onClick={() => jumpTo(i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="absolute bottom-0 left-40 right-0 z-20 flex items-center justify-between px-10 md:px-14 py-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
        >
          <p
            className="hidden md:block text-[18px] italic leading-relaxed max-w-[400px]"
            style={{ color: "white" }}
          >
            "We are ambitious for every child we advise. But what drives us is
            simple: we want them to thrive."
            <span
              className="not-italic ml-1"
              style={{ color: "white" }}
            >
              — ORVA
            </span>
          </p>

          <div className="flex items-center gap-3 ml-auto">
            {/* Prev */}
            <button
              onClick={() => jumpTo(Math.max(0, current - 1))}
              disabled={current === 0}
              aria-label="Previous"
              className="w-[34px] h-[34px] rounded-full flex items-center justify-center border transition-all duration-200 disabled:opacity-20 disabled:cursor-default hover:border-[#D51E20] hover:text-[#D51E20] hover:bg-[rgba(213,30,32,0.1)]"
              style={{
                borderColor: "rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.35)",
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="8 2 4 6 8 10" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-[6px]">
              {POINTS.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => jumpTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className="h-[5px] rounded-[3px] cursor-pointer"
                  animate={{
                    width: i === current ? 18 : 5,
                    background:
                      i === current ? COLORS.primary : "rgba(255,255,255,0.18)",
                  }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={() => jumpTo(Math.min(N - 1, current + 1))}
              disabled={current === N - 1}
              aria-label="Next"
              className="w-[34px] h-[34px] rounded-full flex items-center justify-center border transition-all duration-200 disabled:opacity-20 disabled:cursor-default hover:border-[#D51E20] hover:text-[#D51E20] hover:bg-[rgba(213,30,32,0.1)]"
              style={{
                borderColor: "rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.35)",
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="4 2 8 6 4 10" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── Scroll hint ── */}
        <motion.div
          style={{ opacity: hintOpacity }}
          className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-[6px] pointer-events-none"
        >
          <span
            className="text-[10px] font-medium tracking-[0.18em] uppercase"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            Scroll
          </span>
          <div
            className="w-px h-8 origin-top"
            style={{
              background:
                "linear-gradient(to bottom, rgba(213,30,32,0.8), transparent)",
              animation: "pulse-bar 1.6s ease-in-out infinite",
            }}
          />
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse-bar {
          0%, 100% { transform: scaleY(1); opacity: 0.6; }
          50% { transform: scaleY(1.3); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
