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
import { LampEffect } from "@/components/ui/LampEffect";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { MovingBorderLink } from "@/components/ui/MovingBorderButton";

export default function StoriesPage() {
  useLenis();

  return (
    <>
      <Cursor />
      <Trail />
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <LampEffect color="#D51E20">
          <div className="max-w-4xl mx-auto px-6 md:px-12 pt-20 md:pt-32 pb-20 md:pb-40">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="label text-white/80 mb-6">Real stories</span>
              <TextGenerateEffect
                words="Real journeys. Real outcomes."
                className="text-[clamp(40px,7vw,72px)] leading-[1.1] tracking-tight mb-8"
                style={{ color: COLORS.warmCream }}
                filter
                duration={0.5}
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="text-lg md:text-xl leading-relaxed max-w-2xl"
                style={{ color: "rgba(251,249,246,0.7)" }}
              >
                Every child&apos;s journey with Orva is different. What they share is this: the right decision, made with confidence.
              </motion.p>
            </motion.div>
          </div>
        </LampEffect>

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
        <LampEffect color="#D51E20">
          <div className="max-w-4xl mx-auto px-6 md:px-12 py-20 md:py-32 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
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
              <blockquote className="text-2xl md:text-4xl font-light text-white mb-8 leading-relaxed">
                &ldquo;We are ambitious for every child we advise. But what drives us is simple: we want them to thrive — at the world&apos;s best universities, and in the life that follows.&rdquo;
              </blockquote>
              <p className="text-lg text-white/80 font-semibold tracking-wide">
                — ORVA, Founder
              </p>
            </motion.div>
          </div>
        </LampEffect>

        {/* CTA Section */}
        <section className="relative py-20 md:py-28 px-6 md:px-12" style={{ background: COLORS.warmSand }}>
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: COLORS.textDark }}>
                Your story could be next
              </h2>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: COLORS.textLight }}>
                Every ambitious student deserves guidance from advisors who understand not just universities, but the career and life that follows.
              </p>
              <MovingBorderLink href="/contact" containerClassName="h-14" duration={4000}>
                Talk to Orva
              </MovingBorderLink>
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
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
    >
      {isEvenIndex && (
        <div className="order-2 md:order-1">
          <StoryImage story={story} imageY={imageY} imageScale={imageScale} />
        </div>
      )}

      <div className={`order-1 ${isEvenIndex ? "md:order-2" : "order-1"}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-full flex flex-col justify-center p-6 md:p-8 rounded-2xl bg-white border border-black/[0.06] hover:border-red-300/50 hover:shadow-lg transition-all duration-300"
        >
          <div className="mb-6">
            <h3 className="text-xs md:text-sm font-bold tracking-[0.15em] uppercase mb-2" style={{ color: COLORS.primary }}>
              {story.name} &middot; {story.subject} &middot; {story.university}
            </h3>
            <p className="text-sm md:text-base font-medium" style={{ color: COLORS.textMuted }}>
              {story.location} &middot; {story.tag}
            </p>
          </div>

          <div className="w-12 h-1 mb-6 rounded-full" style={{ background: COLORS.primary }} />

          <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: COLORS.textDark }}>
            {story.story}
          </p>

          <div
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest"
            style={{ color: COLORS.primary }}
          >
            <span className="inline-block w-2 h-2 rounded-full" style={{ background: COLORS.primary }}></span>
            Story
          </div>
        </motion.div>
      </div>

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
      className="relative overflow-hidden rounded-2xl shadow-xl border border-white/20 group"
      transition={{ ease: "easeOut" }}
    >
      <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl">
        <Image
          src={story.image}
          alt={story.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>
    </motion.div>
  );
}
