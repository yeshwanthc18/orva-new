"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import Trail from "@/components/Trail";
import { useLenis } from "@/hooks/useLenis";
import { COLORS, STUDENT_STORIES } from "@/lib/constants";

export default function StoriesPage() {
  useLenis();

  return (
    <>
      <Cursor />
      <Trail />
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section
          className="relative py-20 md:py-32 px-6 md:px-12"
          style={{
            background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryDark} 100%)`,
          }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50 bg-white"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                <span className="text-[11px] font-bold tracking-[0.35em] uppercase text-white/80">
                  Real stories
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                Real journeys. Real outcomes.
              </h1>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
                Every child&apos;s journey with Orva is different. What they share is this: the right decision, made with confidence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Student Stories Section */}
        <section className="relative py-20 md:py-32 px-6 md:px-12" style={{ background: COLORS.warmCream }}>
          <div className="max-w-6xl mx-auto">
            <div className="space-y-20">
              {STUDENT_STORIES.map((story, index) => (
                <StoryCard key={index} story={story} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Quote Strip Section */}
        <QuoteSection />

        {/* CTA Section */}
        <section className="relative py-20 md:py-28 px-6 md:px-12" style={{ background: COLORS.warmSand }}>
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2
                className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
                style={{ color: COLORS.textDark }}
              >
                Your story could be next
              </h2>
              <p
                className="text-lg mb-8 leading-relaxed"
                style={{ color: COLORS.textLight }}
              >
                Every ambitious student deserves guidance from advisors who understand not just universities, but the career and life that follows.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 text-white font-bold text-sm tracking-wide uppercase rounded-full hover:opacity-90 transition-opacity duration-200"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.primary}, #F45104)`,
                }}
              >
                Talk to Orva
                <svg
                  width="16"
                  height="16"
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
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

interface StoryCardProps {
  story: (typeof STUDENT_STORIES)[0];
  index: number;
}

function StoryCard({ story, index }: StoryCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  // Parallax effect for image
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]);

  const isEvenIndex = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
    >
      {/* Image on the left for even indices */}
      {isEvenIndex && (
        <div className="order-2 md:order-1">
          <StoryImage story={story} imageY={imageY} imageScale={imageScale} />
        </div>
      )}

      {/* Story content */}
      <div className={`order-1 ${isEvenIndex ? "md:order-2" : "order-1"}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-full flex flex-col justify-center"
        >
          {/* Header */}
          <div className="mb-6">
            <h3
              className="text-xs md:text-sm font-bold tracking-[0.15em] uppercase mb-2"
              style={{ color: COLORS.primary }}
            >
              {story.name} · {story.subject} · {story.university}
            </h3>
            <p
              className="text-sm md:text-base font-medium"
              style={{ color: COLORS.textMuted }}
            >
              {story.location} · {story.tag}
            </p>
          </div>

          {/* Divider */}
          <div
            className="w-12 h-1 mb-6"
            style={{ background: COLORS.primary }}
          />

          {/* Story text */}
          <p
            className="text-base md:text-lg leading-relaxed mb-8"
            style={{ color: COLORS.textDark }}
          >
            {story.story}
          </p>

          {/* Subtle accent */}
          <div
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest"
            style={{ color: COLORS.primary }}
          >
            <span className="inline-block w-2 h-2 rounded-full" style={{ background: COLORS.primary }}></span>
            Story
          </div>
        </motion.div>
      </div>

      {/* Image on the right for odd indices */}
      {!isEvenIndex && (
        <div className="order-1 md:order-2">
          <StoryImage story={story} imageY={imageY} imageScale={imageScale} />
        </div>
      )}
    </motion.div>
  );
}

interface StoryImageProps {
  story: (typeof STUDENT_STORIES)[0];
  imageY: any;
  imageScale: any;
}

function StoryImage({ story, imageY, imageScale }: StoryImageProps) {
  return (
    <motion.div
      style={{ y: imageY, scale: imageScale }}
      className="relative overflow-hidden rounded-lg shadow-lg border border-white/20"
      transition={{ ease: "easeOut" }}
    >
      <div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg">
        <Image
          src={story.image}
          alt={story.name}
          fill
          className="object-cover hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={false}
        />

        {/* Subtle overlay gradient for visual interest */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>
    </motion.div>
  );
}

function QuoteSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <motion.section
      ref={ref}
      className="relative py-20 md:py-32 px-6 md:px-12 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${COLORS.primaryDark} 0%, ${COLORS.primary} 100%)`,
      }}
    >
      {/* Background accent elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-white/5 blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              className="mx-auto mb-8 opacity-40"
            >
              <path
                d="M12 32c0-5.333 2.667-10.667 8-14.667C14.667 20 12 24 12 28c0 4 2 8 6 10-2-1-4-4-6-6zm24 0c0-5.333 2.667-10.667 8-14.667-5.333 2.667-8 7-8 11c0 4 2 8 6 10-2-1-4-4-6-6z"
                fill="currentColor"
                className="text-white"
              />
            </svg>
          </div>

          <blockquote className="text-2xl md:text-4xl font-light text-white mb-8 leading-relaxed">
            &quot;We are ambitious for every child we advise. But what drives us is simple: we want them to thrive — at the world&apos;s best universities, and in the life that follows.&quot;
          </blockquote>

          <p className="text-lg text-white/80 font-semibold tracking-wide">
            — ORVA, Founder
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
