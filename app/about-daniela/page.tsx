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

export default function AboutDanielaPage() {
  useLenis();

  return (
    <>
      <Cursor />
      <Trail />
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section
          className="relative py-20 md:py-40 px-6 md:px-12"
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
                  The Founder
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                Daniela Kanisova
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-4 leading-relaxed">
                Founder & Lead Consultant, Orva Education
              </p>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
                15+ years. Hundreds of students. One conviction.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Founder Bio Section */}
        <section
          className="relative py-20 md:py-40 px-6 md:px-12"
          style={{ background: COLORS.warmCream }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
                className="relative h-96 md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden"
              >
                <Image
                  src="/images/img04.jpeg"
                  alt="Daniela Kanisova"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-black/[0.08]" />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                {/* Credentials Line */}
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-sm md:text-base font-semibold" style={{ color: COLORS.primary }}>
                    HEC Paris Executive MBA
                  </span>
                  <span style={{ color: COLORS.textMuted }}>•</span>
                  <span className="text-sm md:text-base" style={{ color: COLORS.textMuted }}>
                    Ranked #1 in Europe
                  </span>
                </div>

                {/* Main Body Text */}
                <p
                  className="text-base md:text-lg leading-relaxed mb-8"
                  style={{ color: COLORS.textLight }}
                >
                  The right guidance at the right moment changes everything. Over 15 years, Daniela has placed students into universities across the UK, US, and Europe — and watched hundreds of them graduate and build careers that exceeded their own expectations. She knows these institutions from the inside. Not all are created equal — and most families never get told that. The right choice comes from truly understanding your child and knowing exactly where they will thrive. When both come together, the right choice becomes clear.
                </p>

                {/* Personal Quote */}
                <div
                  className="border-l-4 pl-6 py-6 mb-8 rounded-r-lg"
                  style={{
                    borderColor: COLORS.primary,
                    backgroundColor: "rgba(213, 30, 32, 0.05)",
                  }}
                >
                  <p
                    className="text-base md:text-lg leading-relaxed italic font-light"
                    style={{ color: COLORS.textDark }}
                  >
                    "I left home to study in Birmingham. Years later, I did it again for my Executive MBA at HEC Paris. I got there — but both times I was navigating blind. Too much noise, too many opinions, none of it useful. After 15 years working inside this industry I know exactly what sets a great university apart from a good one. I built Orva because I didn't want another family wasting years on the wrong advice — or the wrong choice."
                  </p>
                </div>

                {/* Credentials Small Print */}
                <div
                  className="border-t pt-6"
                  style={{ borderColor: `${COLORS.textMuted}` }}
                >
                  <p className="text-xs md:text-sm font-semibold tracking-wider uppercase mb-3" style={{ color: COLORS.primary }}>
                    Education & Experience
                  </p>
                  <p className="text-sm" style={{ color: COLORS.textMuted }}>
                    University of Birmingham · HEC Paris · 15+ years in UAE and Saudi Arabia higher education
                  </p>
                </div>

                {/* CTA Button */}
                <div className="mt-10">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-3 px-8 py-4 text-white font-bold text-sm tracking-wide uppercase rounded-full hover:opacity-90 transition-opacity duration-200"
                    style={{
                      background: `linear-gradient(135deg, ${COLORS.primary}, #F45104)`,
                    }}
                  >
                    Talk to Daniela
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
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Where Our Students Go Section */}
        <section
          className="relative py-20 md:py-40 px-6 md:px-12"
          style={{
            background: `linear-gradient(135deg, ${COLORS.primaryDark} 0%, ${COLORS.deepBlack} 100%)`,
          }}
        >
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                The world's Elite universities.
              </h2>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                <span style={{ color: COLORS.primary }}>Your child's next chapter.</span>
              </h2>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
                These are the institutions where our knowledge runs deepest — and where our students get in.
              </p>
            </motion.div>

            {/* Universities Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              {/* UK Universities */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50" style={{ backgroundColor: COLORS.primary }}></span>
                    <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: COLORS.primary }}></span>
                  </span>
                  <h3 className="text-sm font-bold tracking-[0.15em] uppercase text-white">
                    UK Universities
                  </h3>
                </div>
                <div className="space-y-4">
                  {STUDENT_UNIVERSITIES.uk.map((university, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.05 }}
                      viewport={{ once: false, amount: 0.3 }}
                      className="group cursor-pointer"
                    >
                      <p className="text-lg md:text-xl text-white/80 group-hover:text-white transition-colors duration-200 flex items-center gap-3">
                        <span style={{ color: COLORS.primary }} className="text-sm">●</span>
                        {university}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* US Universities */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50" style={{ backgroundColor: COLORS.primary }}></span>
                    <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: COLORS.primary }}></span>
                  </span>
                  <h3 className="text-sm font-bold tracking-[0.15em] uppercase text-white">
                    US Universities
                  </h3>
                </div>
                <div className="space-y-4">
                  {STUDENT_UNIVERSITIES.us.map((university, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.05 }}
                      viewport={{ once: false, amount: 0.3 }}
                      className="group cursor-pointer"
                    >
                      <p className="text-lg md:text-xl text-white/80 group-hover:text-white transition-colors duration-200 flex items-center gap-3">
                        <span style={{ color: COLORS.primary }} className="text-sm">●</span>
                        {university}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* European Universities */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50" style={{ backgroundColor: COLORS.primary }}></span>
                    <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: COLORS.primary }}></span>
                  </span>
                  <h3 className="text-sm font-bold tracking-[0.15em] uppercase text-white">
                    European Universities
                  </h3>
                </div>
                <div className="space-y-4">
                  {STUDENT_UNIVERSITIES.europe.map((university, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.05 }}
                      viewport={{ once: false, amount: 0.3 }}
                      className="group cursor-pointer"
                    >
                      <p className="text-lg md:text-xl text-white/80 group-hover:text-white transition-colors duration-200 flex items-center gap-3">
                        <span style={{ color: COLORS.primary }} className="text-sm">●</span>
                        {university}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 md:py-28 px-6 md:px-12" style={{ background: COLORS.warmCream }}>
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h2
                className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
                style={{ color: COLORS.textDark }}
              >
                Ready to start your university journey?
              </h2>
              <p
                className="text-lg mb-8 leading-relaxed"
                style={{ color: COLORS.textLight }}
              >
                Connect with Daniela for a personalized consultation and discover where your child will truly thrive.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 text-white font-bold text-sm tracking-wide uppercase rounded-full hover:opacity-90 transition-opacity duration-200"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.primary}, #F45104)`,
                }}
              >
                Talk to Daniela
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
