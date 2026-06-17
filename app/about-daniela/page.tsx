"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import Trail from "@/components/Trail";
import { useLenis } from "@/hooks/useLenis";
import { COLORS, STUDENT_UNIVERSITIES } from "@/lib/constants";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { MovingBorderLink } from "@/components/ui/MovingBorderButton";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";
import { FloatingGeometry } from "@/components/ui/FloatingGeometry";
import { GridPattern } from "@/components/ui/GridPattern";
import { ScrollRevealStrip } from "@/components/ui/ScrollAnimations";

export default function AboutDanielaPage() {
  useLenis();

  return (
    <>
      <Cursor />
      <Trail />
      <Navbar />
      <main className="pt-16">
        {/* Hero — Full image with overlay */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/img04.jpeg" alt="Daniela Kanisova" fill className="object-cover object-top" sizes="100vw" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F] via-[#0F0F0F]/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/60 to-transparent" />
          </div>
          <FloatingGeometry variant="dark" density="sparse" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 py-20 md:py-40">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="label text-white/80 mb-6">The Founder</span>
              <TextGenerateEffect
                words="Daniela Kanisova"
                className="text-[clamp(40px,7vw,72px)] leading-[1.1] tracking-tight mb-6"
                style={{ color: COLORS.warmCream }}
                filter
                duration={0.5}
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="text-xl md:text-2xl leading-relaxed mb-3"
                style={{ color: "rgba(251,249,246,0.8)" }}
              >
                Founder & Lead Consultant, Orva Education
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="text-lg leading-relaxed"
                style={{ color: "rgba(251,249,246,0.6)" }}
              >
                15+ years. Hundreds of students. One conviction.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Founder Bio Section — Side by side */}
        <section className="relative py-20 md:py-32 px-6 md:px-12" style={{ background: COLORS.warmCream }}>
          <GridPattern variant="light" />
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image Column */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative h-[400px] md:h-[560px] rounded-2xl overflow-hidden group"
              >
                <Image
                  src="/images/img04.jpeg"
                  alt="Daniela Kanisova"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                {/* Glassmorphism credential badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                  <p className="text-white text-sm font-bold tracking-wider uppercase">HEC Paris Executive MBA</p>
                  <p className="text-white/70 text-xs mt-1">Ranked #1 in Europe</p>
                </div>
                {/* Decorative floating ring */}
                <div className="absolute top-6 right-6 w-16 h-16 animate-spin-slow opacity-30">
                  <svg viewBox="0 0 60 60" className="w-full h-full">
                    <circle cx="30" cy="30" r="25" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="0.5" strokeDasharray="4 6" />
                  </svg>
                </div>
              </motion.div>

              {/* Content Column */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: COLORS.textLight }}>
                  The right guidance at the right moment changes everything. Over 15 years, Daniela has placed students into universities across the UK, US, and Europe — and watched hundreds of them graduate and build careers that exceeded their own expectations. She knows these institutions from the inside. Not all are created equal — and most families never get told that.
                </p>

                {/* Quote Card */}
                <div className="relative mb-8 p-6 md:p-8 rounded-2xl border-l-4" style={{ borderColor: COLORS.primary, background: "rgba(213,30,32,0.04)" }}>
                  <p className="text-base md:text-lg leading-relaxed italic font-light" style={{ color: COLORS.textDark }}>
                    &ldquo;I left home to study in Birmingham. Years later, I did it again for my Executive MBA at HEC Paris. I got there — but both times I was navigating blind. Too much noise, too many opinions, none of it useful. After 15 years working inside this industry I know exactly what sets a great university apart from a good one. I built Orva because I didn&apos;t want another family wasting years on the wrong advice — or the wrong choice.&rdquo;
                  </p>
                </div>

                {/* Credentials */}
                <div className="border-t pt-6 mb-8" style={{ borderColor: COLORS.textMuted }}>
                  <p className="text-xs font-semibold tracking-wider uppercase mb-3" style={{ color: COLORS.primary }}>Education & Experience</p>
                  <p className="text-sm" style={{ color: COLORS.textMuted }}>
                    University of Birmingham &middot; HEC Paris &middot; 15+ years in UAE and Saudi Arabia higher education
                  </p>
                </div>

                <MovingBorderLink href="/contact" containerClassName="h-14" duration={4000}>
                  Talk to Daniela
                </MovingBorderLink>
              </motion.div>
            </div>
          </div>
        </section>

        {/* University Marquee */}
        <section className="py-8 overflow-hidden" style={{ background: COLORS.deepBlack }}>
          <InfiniteMovingCards
            items={[...STUDENT_UNIVERSITIES.uk, ...STUDENT_UNIVERSITIES.us, ...STUDENT_UNIVERSITIES.europe].map((u) => ({
              content: <span className="text-xl md:text-2xl font-semibold text-white/60 whitespace-nowrap px-6">{u}</span>,
            }))}
            direction="left"
            speed="slow"
            pauseOnHover
            className="max-w-none bg-transparent"
          />
        </section>

        {/* Where Our Students Go */}
        <section className="relative py-20 md:py-32 px-6 md:px-12 overflow-hidden noise-bg" style={{ background: COLORS.deepBlack }}>
          <FloatingGeometry variant="dark" density="normal" />
          <div className="absolute inset-0 opacity-[0.06]">
            <Image src="/images/img11.jpeg" alt="" fill className="object-cover" sizes="100vw" />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                The world&apos;s Elite universities.
              </h2>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight" style={{ color: COLORS.primary }}>
                Your child&apos;s next chapter.
              </h2>
              <p className="text-lg text-white/60 max-w-3xl mx-auto">
                These are the institutions where our knowledge runs deepest — and where our students get in.
              </p>
            </motion.div>

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
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: sIdx * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-8">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50" style={{ backgroundColor: COLORS.primary }}></span>
                      <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: COLORS.primary }}></span>
                    </span>
                    <h3 className="text-sm font-bold tracking-[0.15em] uppercase text-white">{section.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {section.list.map((university, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.04 }}
                        className="group"
                      >
                        <p className="text-lg text-white/70 group-hover:text-white transition-colors duration-200 flex items-center gap-3">
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

        {/* Scrolling strip before CTA */}
        <div className="py-3 overflow-hidden" style={{ background: COLORS.deepBlack }}>
          <ScrollRevealStrip direction="right">
            <span className="text-[clamp(14px,1.5vw,18px)] font-bold text-white/8 uppercase tracking-[0.2em]">
              Oxford &bull; Cambridge &bull; Imperial &bull; LSE &bull; UCL &bull; Harvard &bull; Stanford &bull; MIT &bull; Columbia &bull; Oxford &bull; Cambridge &bull; Imperial &bull; LSE &bull; UCL &bull; Harvard &bull; Stanford &bull; MIT &bull; Columbia
            </span>
          </ScrollRevealStrip>
        </div>

        {/* CTA Section with image background */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/img13.jpeg" alt="" fill className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#520A0B]/95 to-[#D51E20]/90" />
          </div>
          <FloatingGeometry variant="dark" density="sparse" />
          <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to start your university journey?
              </h2>
              <p className="text-lg mb-8 leading-relaxed text-white/80">
                Connect with Daniela for a personalized consultation.
              </p>
              <MovingBorderLink href="/contact" containerClassName="h-14" duration={4000}>
                Talk to Daniela
              </MovingBorderLink>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
