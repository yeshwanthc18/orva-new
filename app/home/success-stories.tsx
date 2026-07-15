"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const STORIES = [
  {
    id: 0,
    name: "Laura",
    meta: "Law · University of Toronto",
    location: "Riyadh, Saudi Arabia",
    image: "/images/person2.png",
    headline: "Two countries. One decision. No clear answer.",
    body: "Not all law degrees lead to the same career. The country shapes the path. Laura knew she wanted law — Orva helped her family understand the difference before it was too late to matter. A summer school at the University of Toronto did the rest. Third year now. No looking back.",
    cta: false,
  },
  {
    id: 1,
    name: "Alex",
    meta: "Business Management · Univ. of Amsterdam",
    location: "Dubai, UAE · GEMS School",
    image: "/images/person3.png",
    headline: "Grades weren't enough. They rarely are.",
    body: "Alex had his sights set on one of Europe's most competitive business programmes. His grades were strong, but Orva identified early that grades alone would not get him there. We guided him to launch a real entrepreneurial project — a genuine business with a genuine outcome.",
    cta: false,
  },
  {
    id: 2,
    name: "Rana",
    meta: "Medicine · University of Manchester",
    location: "Dubai, UAE · Nord Anglia School",
    image: "/images/person4.png",
    headline: "The grade she needed. The degree she deserved.",
    body: "One grade nearly changed everything. Orva identified the gap early, found the right support, and she got the A. What her family didn't expect was the scholarship Orva uncovered alongside it — significantly reducing the cost. She's exactly where she was always meant to be.",
    cta: false,
  },
  {
    id: 3,
    name: "Muhammad",
    meta: "Vet Medicine · St George's University",
    location: "Riyadh, Saudi Arabia",
    image: "/images/person1.png",
    headline: "His dream felt out of reach. It wasn't.",
    body: "Muhammad came to Orva after a foundation year that hadn't gone as planned. Orva mapped a new route — genuinely achievable and built around what mattered most to his family. He is now on track to do exactly that. Sometimes the longer road leads somewhere better.",
    cta: true,
  },
];

const N = 5; // 4 real + 1 ghost

// Orbit dot positions (5 dots around a circle, starting top)
const DOT_POSITIONS = Array.from({ length: N }, (_, i) => {
  const angle = ((i / N) * 360 - 90) * (Math.PI / 180);
  const r = 240;
  return { x: 240 + r * Math.cos(angle), y: 240 + r * Math.sin(angle) };
});

function cardState(
  cardIdx: number,
  active: number,
): "active" | "prev" | "next" | "hidden" {
  if (cardIdx === active) return "active";
  if (cardIdx === active - 1 || (active === 0 && cardIdx === N - 1))
    return "prev";
  if (cardIdx === active + 1 || (active === N - 1 && cardIdx === 0))
    return "next";
  return "hidden";
}

const CARD_TRANSFORMS: Record<string, string> = {
  active: "translateY(0) scale(1)",
  prev: "translateY(-45px) scale(0.92)",
  next: "translateY(45px) scale(0.92)",
  hidden: "translateY(70px) scale(0.88)",
};

const CARD_OPACITY: Record<string, number> = {
  active: 1,
  prev: 0,
  next: 0,
  hidden: 0,
};

export default function SuccessStories() {
  const outerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const [active, setActive] = useState(0);

  const tick = useCallback(() => {
    if (!outerRef.current) return;
    const rect = outerRef.current.getBoundingClientRect();
    const scrolled = -rect.top;
    const total = outerRef.current.offsetHeight - window.innerHeight;
    const t = Math.max(0, Math.min(1, scrolled / Math.max(total, 1)));
    setActive(Math.min(N - 1, Math.floor(t * N)));
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [tick]);

  const isGhost = active === N - 1;

  return (
    <div ref={outerRef} style={{ height: "500vh" }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden bg-[#F75105]">
        {/* ── Top bar ── */}
        <div className="absolute top-12 inset-x-0 flex items-center justify-center gap-3 z-30 pointer-events-none px-8">
          <span className="text-[14px] tracking-[.22em] uppercase text-white/35">
            Orva
          </span>
          <div className="flex gap-2">
            {STORIES.map((s, i) => (
              <div
                key={s.id}
                className="w-8 h-8 rounded-full overflow-hidden border flex-shrink-0"
                style={{
                  background: "rgba(255,255,255,.08)",
                  borderColor:
                    active === i
                      ? "rgba(255,255,255,.5)"
                      : "rgba(255,255,255,.12)",
                  opacity: active === i ? 1 : 0.25,
                  transform: active === i ? "scale(1.15)" : "scale(1)",
                  transition: "opacity .4s, transform .4s, border-color .4s",
                }}
              >
                <Image
                  src={s.image}
                  alt={s.name}
                  width={32}
                  height={32}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
          <h2 className="text-[clamp(1.5rem,2.8vw,2.4rem)] text-white font-normal tracking-tight leading-none mx-3">
            Success Stories
          </h2>
          <span className="text-[14px] tracking-[.22em] uppercase text-white/35">
            05 paths
          </span>
        </div>

        {/* ── Two-column layout ── */}
        <div
          className="absolute inset-0 grid items-center"
          style={{ gridTemplateColumns: "1.4fr 1fr", padding: "0 48px" }}
        >
          {/* LEFT — larger card stack + orbit dots */}
          <div className="relative flex items-center justify-center h-full pr-12">
            {/* Orbit dots */}
            <div
              className="absolute pointer-events-none"
              style={{
                width: 480,
                height: 480,
                top: "50%",
                left: "50%",
                marginTop: -240,
                marginLeft: -240,
              }}
            >
              {DOT_POSITIONS.map((pos, i) => (
                <div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: 8,
                    height: 8,
                    left: pos.x,
                    top: pos.y,
                    transform: "translate(-50%,-50%)",
                    background: active === i ? "#fff" : "rgba(255,255,255,.12)",
                    scale: active === i ? "1.5" : "1",
                    transition: "background .4s, scale .4s",
                  }}
                />
              ))}
              {/* Thin circle guide */}
              <svg
                width="480"
                height="480"
                style={{ position: "absolute", inset: 0, opacity: 0.05 }}
              >
                <circle
                  cx="240"
                  cy="240"
                  r="240"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1"
                />
              </svg>
            </div>

            {/* Card stack - much larger */}
            <div className="relative" style={{ width: 380, height: 480 }}>
              {Array.from({ length: N }).map((_, i) => {
                const state = cardState(i, active);
                const isReal = i < 4;
                const story = isReal ? STORIES[i] : null;

                return (
                  <div
                    key={i}
                    className="absolute inset-0 rounded-xl overflow-hidden flex items-end"
                    style={{
                      background: isReal
                        ? "rgba(255,255,255,.05)"
                        : "rgba(255,255,255,.02)",
                      border: !isReal
                        ? "2px dashed white"
                        : state === "active"
                          ? "2px solid white"
                          : "1px solid rgba(255,255,255,.1)",
                      opacity: CARD_OPACITY[state],
                      transform: CARD_TRANSFORMS[state],
                      transition:
                        "opacity .7s cubic-bezier(.22,1,.36,1), transform .7s cubic-bezier(.22,1,.36,1)",
                      boxShadow:
                        state === "active" && isReal
                          ? "0 0 60px rgba(255,255,255,.06)"
                          : "none",
                    }}
                  >
                    {isReal ? (
                      <>
                        <Image
                          src={story!.image}
                          alt={story!.name}
                          fill
                          className="object-cover"
                          sizes="380px"
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            background:
                              "linear-gradient(to top,rgba(0,0,0,.88) 0%,transparent 50%)",
                          }}
                        />
                        <div className="relative z-10 p-6">
                          <p className="text-[24px] text-white leading-none font-medium">
                            {story!.name}
                          </p>
                          <p className="text-[14px] tracking-[.12em] uppercase text-white/80 mt-2">
                            {story!.meta}
                          </p>
                        </div>
                      </>
                    ) : (
                      <div className="relative w-full h-full overflow-hidden">
                        <Image
                          src="/images/you.png"
                          alt="You"
                          fill
                          className="object-cover"
                          sizes="380px"
                        />

                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/40" />

                        {/* Content */}
                        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-8">
                          <h3
                            className="text-[34px] md:text-[42px] font-serif font-semibold leading-none mb-4"
                            style={{ color: "#fff" }}
                          >
                            You?
                          </h3>

                          <p
                            className="text-[18px] leading-snug font-medium mb-3"
                            style={{ color: "rgba(255,255,255,0.95)" }}
                          >
                            Your story
                            <br />
                            starts here
                          </p>

                          <p
                            className="text-[12px] tracking-[0.24em] uppercase"
                            style={{ color: "rgba(255,255,255,0.65)" }}
                          >
                            The Next Chapter
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT — text panels */}
          <div className="relative h-full flex items-center pl-6">
            <div className="relative w-full">
              {/* Story panels 0–3 */}
              {STORIES.map((s, i) => (
                <div
                  key={s.id}
                  className="absolute inset-x-0 top-0"
                  style={{
                    opacity: active === i ? 1 : 0,
                    transform:
                      active === i ? "translateX(0)" : "translateX(20px)",
                    transition:
                      "opacity .6s cubic-bezier(.22,1,.36,1), transform .6s cubic-bezier(.22,1,.36,1)",
                    pointerEvents: active === i ? "auto" : "none",
                    position: active === i ? "relative" : "absolute",
                  }}
                >
                  <p
                    className="text-[9px] tracking-[.2em] uppercase mb-4"
                    style={{ color: "rgba(255,255,255,.5)" }}
                  >
                    {String(i + 1).padStart(2, "0")} / 0{N}
                  </p>
                  <h3 className="text-[clamp(2.2rem,4vw,3.6rem)] text-white font-normal leading-tight tracking-tight">
                    {s.name}
                  </h3>
                  <p
                    className="text-[16px] tracking-[.04em] mt-2 text-white/90"
                    style={{ color: "white" }}
                  >
                    {s.meta}
                  </p>
                  <div
                    className="w-8 h-px my-6"
                    style={{ background: "rgba(255,255,255,.2)" }}
                  />
                  <p
                    className="text-[11px] tracking-[.18em] uppercase leading-relaxed mb-3 text-white/80"
                    style={{ color: "white" }}
                  >
                    {s.headline}
                  </p>
                  <p
                    className="text-[clamp(0.95rem,1.2vw,1.1rem)] leading-[1.85] text-white/95"
                    style={{ color: "white" }}
                  >
                    {s.body}
                  </p>
                  <p
                    className="text-[13px] tracking-[.1em] mt-6 mb-7 text-white/70"
                    style={{ color: "white" }}
                  >
                    {s.location}
                  </p>
                  {s.cta && (
                    <Button variant="secondaryLight">
                      Your story could be here · Take guidance from Orva
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </Button>
                  )}
                </div>
              ))}

              {/* Ghost / CTA panel */}
              <div
                style={{
                  opacity: isGhost ? 1 : 0,
                  transform: isGhost ? "translateX(0)" : "translateX(20px)",
                  transition:
                    "opacity .6s cubic-bezier(.22,1,.36,1), transform .6s cubic-bezier(.22,1,.36,1)",
                  pointerEvents: isGhost ? "auto" : "none",
                  position: isGhost ? "relative" : "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                }}
              >
                <p
                  className="text-[9px] tracking-[.2em] uppercase mb-4"
                  style={{ color: "rgba(255,255,255,.5)" }}
                >
                  05 / 05 · Next
                </p>
                <h3 className="text-[clamp(2.2rem,4vw,3.6rem)] text-white font-normal leading-tight tracking-tight">
                  Could this
                  <br />
                  be you?
                </h3>
                <div
                  className="w-8 h-px my-6"
                  style={{ background: "rgba(255,255,255,.2)" }}
                />
                <p
                  className="text-[clamp(0.95rem,1.2vw,1.1rem)] mb-7 leading-[1.85] text-white/95"
                  style={{ color: "white" }}
                >
                  Every student here started with a question and a plan. Orva
                  built the plan. The question is yours — what do you want to
                  become?
                </p>
                <Button variant="secondaryLight">
                  Talk to Orva
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {Array.from({ length: N }).map((_, i) => (
            <div
              key={i}
              className="h-[3px] rounded-full transition-all duration-500"
              style={{
                width: active === i ? 48 : 22,
                background: active === i ? "#fff" : "rgba(255,255,255,.16)",
              }}
            />
          ))}
        </div>

        {/* Scroll hint */}
        <p
          className="absolute bottom-8 right-12 text-[9px] tracking-[.18em] uppercase transition-opacity duration-500"
          style={{
            color: "rgba(255,255,255,.2)",
            opacity: active === 0 ? 1 : 0,
          }}
        >
          Scroll to explore ↓
        </p>
      </div>
    </div>
  );
}
