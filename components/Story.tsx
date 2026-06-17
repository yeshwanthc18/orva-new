"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
} from "framer-motion";
import Image from "next/image";

const COLORS = {
  primary: "#D51E20",
  primaryDark: "#520A0B",
  deepBlack: "#0F0F0F",
  warmCream: "#FBF9F6",
  warmSand: "#F5F2ED",
  textDark: "#1C1C1C",
  textLight: "rgba(28,28,28,0.78)",
  textMuted: "rgba(28,28,28,0.45)",
};

const SCENES = [
  {
    id: "01",
    tag: "The Spark",
    img: "/images/img02.jpeg",
    side: "right",
    headline: "Every journey begins with a single spark.",
    description:
      "For GCC families, that spark is the moment a young person dares to imagine something bigger — a world-class degree, a future without limits.",
    stat: null,
    isRed: true,
  },
  {
    id: "02",
    tag: "The Doorway",
    img: "/images/img03.jpeg",
    side: "left",
    headline: "A world of possibilities awaits beyond.",
    description:
      "The path to great universities is filled with jargon, deadlines, and high-stakes decisions. We help families see the door, open it, and walk through with confidence.",
    stat: null,
  },
  // {
  //   id: "03",
  //   tag: "The Journey",
  //   img: "/images/img04.jpeg",
  //   side: "right",
  //   headline: "Guided steps today. Limitless futures tomorrow.",
  //   description:
  //     "We don't just point you toward a destination. We walk every step — from the first session to the day your student settles into their first term.",
  //   stat: null,
  // },
  // {
  //   id: "04",
  //   tag: "Beyond Borders",
  //   img: "/images/img05.jpeg",
  //   side: "left",
  //   headline: "Global opportunities. World-class universities.",
  //   description:
  //     "Top-ranked. Globally respected. From London to New York, Toronto to Amsterdam — your future has no borders.",
  //   stat: { value: "150+", label: "Partner Universities" },
  // },
  {
    id: "03",
    tag: "Global Pathways",
    img: "/images/img06.jpeg",
    side: "right",
    headline: "From iconic cities to iconic campuses.",
    description:
      "Your path. Your future. We map every route — UK, USA, Canada, Netherlands and beyond — finding the university that fits your life.",
    stat: { value: "7", label: "Countries" },
    isRed: true,
  },
  {
    id: "05",
    tag: "Families & Dreams",
    img: "/images/img07.jpeg",
    side: "left",
    headline: "Proud families. Big dreams. A legacy of excellence.",
    description:
      "We answer to the family. We earn the trust of the institutions that shape them. Every relationship is built one conversation at a time.",
    stat: { value: "500+", label: "Students Guided" },
  },
  // {
  //   id: "05",
  //   tag: "The Process",
  //   img: "/images/img08.jpeg",
  //   side: "right",
  //   headline: "Personalised guidance at every step.",
  //   description:
  //     "From planning to placement — no two students are alike, so no two plans are alike. We build the strategy around each individual.",
  //   stat: null,
  // },
  // {
  //   id: "06",
  //   tag: "Student Focus",
  //   img: "/images/img09.jpeg",
  //   side: "left",
  //   headline: "Your goals. Our guidance. Extraordinary outcomes.",
  //   description:
  //     "We take time to understand each child — their character, their ambition, the world they are growing up in — and build around them.",
  //   stat: { value: "98%", label: "Placement Rate" },
  // },
  // {
  //   id: "09",
  //   tag: "World-Class Universities",
  //   img: "/images/img14.jpeg",
  //   side: "right",
  //   headline: "Top-ranked. Globally respected. Endless possibilities.",
  //   description:
  //     "Dubai. Abu Dhabi. Riyadh. Jeddah. Across the GCC, we connect ambitious students to universities that will shape their world.",
  //   stat: null,
  // },
  // {
  //   id: "10",
  //   tag: "Achievement",
  //   img: "/images/img11.jpeg",
  //   side: "left",
  //   headline: "Hard work today. Global success tomorrow.",
  //   description:
  //     "The offer letter is a milestone, not the finish line. We measure our work by what happens in the years that follow.",
  //   stat: null,
  // },
  {
    id: "07",
    tag: "Purpose",
    img: "/images/img12.jpeg",
    side: "right",
    headline: "Our purpose is your success.",
    description:
      "Your success is our pride. We serve the family, guide the student to what truly fits, and stay for the life that follows.",
    isRed: true,
    stat: null,
  },
  // {
  //   id: "12",
  //   tag: "Take the First Step",
  //   img: "/images/img13.jpeg",
  //   side: "left",
  //   headline: "Your future starts now.",
  //   description:
  //     "We'll guide the way. Explore. Discover. Define your path — with expert guidance you can trust and global pathways that open every door.",
  //   isCTA: true,
  //   stat: null,
  // },
  // {
  //   id: "13",
  //   tag: "Rise. Guided.",
  //   img: "/images/img15.jpeg",
  //   side: "right",
  //   headline: "The right guidance changes everything.",
  //   description:
  //     "We don't just open doors. We open the right ones. Your partner from the GCC to the world.",
  //   isClosing: true,
  //   stat: null,
  // },
];

function AnimatedCounter({
  value,
  label,
  inView,
  isRed,
}: {
  value: string;
  label: string;
  inView: boolean;
  isRed?: boolean;
}) {
  const [count, setCount] = useState(0);
  const targetNum = parseInt(value) || 0;
  const hasPlus = value.includes("+");
  const isPercentage = value.includes("%");

  useEffect(() => {
    if (inView && targetNum > 0) {
      let current = 0;
      const step = Math.ceil(targetNum / 30);
      const timer = setInterval(() => {
        current += step;
        if (current >= targetNum) {
          setCount(targetNum);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, 25);
      return () => clearInterval(timer);
    }
  }, [inView, targetNum]);

  return (
    <div
      className={`mt-6 pt-4 border-t ${isRed ? "border-white/10" : "border-black/[0.06]"}`}
    >
      <div
        className="text-4xl font-light tracking-tighter md:text-5xl"
        style={{ color: isRed ? "#FFFFFF" : COLORS.primary }}
      >
        {isPercentage ? `${count}%` : hasPlus ? `${count}+` : count}
      </div>
      <div
        className="text-[10px] font-bold tracking-[0.25em] uppercase mt-1"
        style={{ color: isRed ? "rgba(255,255,255,0.4)" : COLORS.textMuted }}
      >
        {label}
      </div>
    </div>
  );
}

function SceneRow({
  scene,
  index,
}: {
  scene: (typeof SCENES)[0];
  index: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.35, once: false });

  const isRight = scene.side === "right";
  const isRed = scene.isRed === true;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 25,
  });

  const clipLeft = useTransform(smoothProgress, [0.15, 0.45], [48, 0]);
  const clipRight = useTransform(smoothProgress, [0.15, 0.45], [52, 100]);

  const clipPathStyle = useTransform(
    [clipLeft, clipRight],
    ([left, right]) =>
      `polygon(${left}% 0%, ${right}% 0%, ${right}% 100%, ${left}% 100%)`,
  );

  const imageTranslateY = useTransform(smoothProgress, [0, 1], ["-6%", "6%"]);
  const imageScale = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [1.12, 1.03, 1.12],
  );

  return (
    <div
      ref={containerRef}
      className="relative min-h-[80vh] lg:min-h-[90vh] grid grid-cols-1 lg:grid-cols-12 items-stretch overflow-hidden"
      style={{
        background: isRed
          ? `linear-gradient(180deg, ${COLORS.primary} 0%, ${COLORS.primaryDark} 100%)`
          : index % 2 === 0
            ? COLORS.warmCream
            : COLORS.warmSand,
      }}
    >
      {/* ── Left Narrative Text Blade ── */}
      <div
        className={`relative lg:col-span-6 flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-16 z-20 ${
          isRight ? "order-1 lg:order-1" : "order-2 lg:order-2"
        }`}
      >
        {/* Fine-lined Micro-HUD Header Frame inspired by image_c5afa3.png */}
        <div className="flex items-center justify-between w-full opacity-80">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-50 ${isRed ? "bg-white" : "bg-red-500"}`}
              ></span>
              <span
                className={`relative inline-flex rounded-full h-2 w-2 ${isRed ? "bg-white" : "bg-red-600"}`}
              ></span>
            </span>
            <span
              className="text-[10px] font-bold tracking-[0.35em] uppercase"
              style={{ color: isRed ? "#FFFFFF" : COLORS.textDark }}
            >
              {scene.tag}
            </span>
          </div>
          <span
            className="text-xs font-mono tracking-widest opacity-30"
            style={{ color: isRed ? "#FFFFFF" : COLORS.textDark }}
          >
            // {scene.id}
          </span>
        </div>

        {/* High-Impact Scaled Typography Body Box */}
        <div className="my-auto max-w-[500px] py-12 lg:py-8">
          <div className="overflow-hidden mb-4 block">
            <motion.h2
              initial={{ y: "100%" }}
              animate={inView ? { y: 0 } : { y: "100%" }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.05,
              }}
              className="font-normal tracking-tight leading-[1.1]"
              style={{
                fontSize: "clamp(30px, 3.8vw, 52px)",
                color: isRed ? "#FFFFFF" : COLORS.textDark,
                fontFamily: "'Cairo', sans-serif",
              }}
            >
              {scene.headline}
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-sm md:text-base font-light leading-relaxed tracking-wide"
            style={{
              color: isRed ? "rgba(255,255,255,0.78)" : COLORS.textLight,
            }}
          >
            {scene.description}
          </motion.p>

          {scene.stat && (
            <AnimatedCounter
              value={scene.stat.value}
              label={scene.stat.label}
              inView={inView}
              isRed={isRed}
            />
          )}

          {/* {scene.isCTA && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="mt-8"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-6 text-[11px] font-bold tracking-[0.35em] uppercase group"
                style={{ color: isRed ? "#FFFFFF" : COLORS.primary }}
              >
                Begin Your Journey
                <span className="h-[1px] w-12 bg-current transition-all group-hover:w-20" />
              </a>
            </motion.div>
          )} */}
        </div>

        {/* Context Base Branding Anchor Row */}
        {/* <div className="pt-4 lg:pt-0 border-t border-black/[0.04] lg:border-none">
          {scene.isClosing ? (
            <div
              className="flex gap-5 opacity-50 text-[10px] font-bold tracking-[0.25em] uppercase"
              style={{ color: isRed ? "#FFFFFF" : COLORS.textDark }}
            >
              {["UAE", "KSA", "Qatar", "UK", "USA"].map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
          ) : (
            <span
              className="text-[10px] font-bold tracking-[0.25em] uppercase opacity-35"
              style={{ color: isRed ? "#FFFFFF" : COLORS.textDark }}
            >
              Global Horizons Architecture
            </span>
          )}
        </div> */}
      </div>

      {/* ── Right Aperture Image Slot (Out-of-the-Box Shutter Window) ── */}
      <div
        className={`relative lg:col-span-6 min-h-[40vh] lg:min-h-full overflow-hidden bg-black/5 ${
          isRight ? "order-2 lg:order-2" : "order-1 lg:order-1"
        }`}
      >
        <motion.div
          style={{ clipPath: clipPathStyle }}
          className="absolute inset-0 w-full h-full overflow-hidden"
        >
          <motion.div
            style={{ y: imageTranslateY, scale: imageScale }}
            className="absolute -top-[10%] left-0 w-full h-[120%]"
          >
            <Image
              src={scene.img}
              alt={scene.tag}
              fill
              priority={index < 2}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/[0.04] mix-blend-multiply pointer-events-none" />
          </motion.div>
        </motion.div>

        {/* Subtle Accent Axis Boundary Separator Rule inspired by image_c5afa3.png */}
        <div
          className={`absolute top-0 bottom-0 w-[1px] bg-black/[0.06] hidden lg:block ${
            isRight ? "left-0" : "right-0"
          }`}
        />
      </div>
    </div>
  );
}

export default function Story() {
  return (
    <div id="story" className="relative w-full">
      {SCENES.map((scene, index) => (
        <SceneRow key={scene.id} scene={scene} index={index} />
      ))}
    </div>
  );
}
