"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import Trail from "@/components/Trail";
import { useLenis } from "@/hooks/useLenis";
import { COLORS, STUDENT_UNIVERSITIES } from "@/lib/constants";
import { LampEffect } from "@/components/ui/LampEffect";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { MovingBorderLink } from "@/components/ui/MovingBorderButton";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";

export default function AboutDanielaPage() {
  useLenis();

  return (
    <>
      <Cursor />
      <Trail />
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <LampEffect color="#D51E20">
          <div className="max-w-4xl mx-auto px-6 md:px-12 pt-20 md:pt-40 pb-20 md:pb-40">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="label text-white/80 mb-6">The Founder</span>
              <TextGenerateEffect
                words="Daniela Kanisova"
                className="text-[clamp(40px,7vw,72px)] leading-[1.1] tracking-tight mb-8"
                style={{ color: COLORS.warmCream }}
                filter
                duration={0.5}
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="text-xl md:text-2xl leading-relaxed mb-4"
                style={{ color: "rgba(251,249,246,0.8)" }}
              >
                Founder & Lead Consultant, Orva Education
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="text-lg md:text-xl leading-relaxed max-w-2xl"
                style={{ color: "rgba(251,249,246,0.65)" }}
              >
                15+ years. Hundreds of students. One conviction.
              </motion.p>
            </motion.div>
          </div>
        </LampEffect>

        {/* Founder Bio Section */}
        <section className="relative py-20 md:py-40 px-6 md:px-12" style={{ background: COLORS.warmCream }}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative h-96 md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden group"
              >
                <Image
                  src="/images/img04.jpeg"
                  alt="Daniela Kanisova"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                {/* Glassmorphism overlay card */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                  <p className="text-white text-sm font-bold tracking-wider uppercase">HEC Paris Executive MBA</p>
                  <p className="text-white/70 text-xs mt-1">Ranked #1 in Europe</p>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: COLORS.textLight }}>
                  The right guidance at the right moment changes everything. Over 15 years, Daniela has placed students into universities across the UK, US, and Europe — and watched hundreds of them graduate and build careers that exceeded their own expectations. She knows these institutions from the inside. Not all are created equal — and most families never get told that. The right choice comes from truly understanding your child and knowing exactly where they will thrive. When both come together, the right choice becomes clear.
                </p>

                {/* Personal Quote — Glassmorphism Card */}
                <div className="relative mb-8 p-6 md:p-8 rounded-2xl border-l-4 border-white/10" style={{ background: "rgba(213,30,32,0.04)" }}>
                  <p className="text-base md:text-lg leading-relaxed italic font-light" style={{ color: COLORS.textDark }}>
                    &ldquo;I left home to study in Birmingham. Years later, I did it again for my Executive MBA at HEC Paris. I got there — but both times I was navigating blind. Too much noise, too many opinions, none of it useful. After 15 years working inside this industry I know exactly what sets a great university apart from a good one. I built Orva because I didn&apos;t want another family wasting years on the wrong advice — or the wrong choice.&rdquo;
                  </p>
                </div>

                {/* Credentials */}
                <div className="border-t pt-6" style={{ borderColor: `${COLORS.textMuted}` }}>
                  <p className="text-xs md:text-sm font-semibold tracking-wider uppercase mb-3" style={{ color: COLORS.primary }}>
                    Education & Experience
                  </p>
                  <p className="text-sm" style={{ color: COLORS.textMuted }}>
                    University of Birmingham &middot; HEC Paris &middot; 15+ years in UAE and Saudi Arabia higher education
                  </p>
                </div>

                <div className="mt-10">
                  <MovingBorderLink href="/contact" containerClassName="h-14" duration={4000}>
                    Talk to Daniela
                  </MovingBorderLink>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Where Our Students Go — Marquee + Grid */}
        <section className="relative py-20 md:py-40 px-6 md:px-12" style={{ background: COLORS.deepBlack }}>
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center mb-16"
            >
              <TextGenerateEffect
                words="The world's Elite universities."
                className="text-[clamp(36px,6vw,56px)] leading-[1.1] tracking-tight mb-4"
                style={{ color: COLORS.warmCream }}
                filter
                duration={0.5}
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
                style={{ color: "rgba(251,249,246,0.65)" }}
              >
                These are the institutions where our knowledge runs deepest — and where our students get in.
              </motion.p>
            </motion.div>

            {/* Infinite Marquee of Universities */}
            <div className="mb-20">
              <InfiniteMovingCards
                items={[...STUDENT_UNIVERSITIES.uk, ...STUDENT_UNIVERSITIES.us, ...STUDENT_UNIVERSITIES.europe].map((u) => ({ content: <span className="text-white/60 text-lg font-semibold whitespace-nowrap px-4">{u}</span> }))}
                direction="left"
                speed="slow"
                pauseOnHover
                className="bg-transparent"
              />
            </div>

            {/* Three Column University Lists */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              {[
                { title: "UK Universities", list: STUDENT_UNIVERSITIES.uk },
                { title: "US Universities", list: STUDENT_UNIVERSITIES.us },
                { title: "European Universities", list: STUDENT_UNIVERSITIES.europe },
              ].map((section, sIdx) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: sIdx * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-8">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50" style={{ backgroundColor: COLORS.primary }}></span>
                      <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: COLORS.primary }}></span>
                    </span>
                    <h3 className="text-sm font-bold tracking-[0.15em] uppercase text-white">
                      {section.title}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {section.list.map((university, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.05 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="group cursor-pointer"
                      >
                        <p className="text-lg md:text-xl text-white/80 group-hover:text-white transition-colors duration-200 flex items-center gap-3">
                          <span style={{ color: COLORS.primary }} className="text-sm">&bull;</span>
                          {university}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <LampEffect color="#D51E20">
          <div className="max-w-3xl mx-auto px-6 md:px-12 py-20 md:py-28 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to start your university journey?
              </h2>
              <p className="text-lg mb-8 leading-relaxed text-white/70">
                Connect with Daniela for a personalized consultation and discover where your child will truly thrive.
              </p>
              <MovingBorderLink href="/contact" containerClassName="h-14" duration={4000}>
                Talk to Daniela
              </MovingBorderLink>
            </motion.div>
          </div>
        </LampEffect>
      </main>
      <Footer />
    </>
  );
}
