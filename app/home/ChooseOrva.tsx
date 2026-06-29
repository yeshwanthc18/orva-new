import React from 'react'
import AnimatedGradientSection from "@/components/AnimatedGradient";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from 'next/image';
import {
  COLORS,
  HERO_STATS,
  UNIVERSITY_MARQUEE,
  WHY_ORVA_POINTS,
  IS_ORVA_RIGHT_PAIN_POINTS,
} from "@/lib/constants";
import { Button } from '@/components/ui/Button';



const ChooseOrva = () => {
  return (
    <>
    <AnimatedGradientSection className="py-32">
          <section className="relative overflow-hidden">
            {/* <GridPattern variant="light" /> */}
            {/* <Spotlight fill="#D51E20" /> */}

            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-0 items-center">
              {/* Left Image Column */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="hidden lg:block lg:col-span-2 relative h-[700px]"
              >
                <Image
                  src="/images/img07.jpeg"
                  alt="Student contemplating future"
                  fill
                  className="object-cover rounded-lg"
                  sizes="40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r rounded-lg from-transparent to-[#F5F2ED]" />
                <div className="absolute inset-0 bg-black/10" />

                <div className="absolute bottom-12 left-12 animate-float">
                  <div className="w-16 h-16 rounded-full border border-red-600/30 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-red-600/50 animate-pulse-glow" />
                  </div>
                </div>
              </motion.div>

              {/* Right Content */}
              <div className="lg:col-span-3 px-8 md:px-16 py-20 md:py-28">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-[16px] font-bold tracking-[0.2em] uppercase mb-2 text-white"
                >
                  Is Orva Right For You?
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="text-[clamp(32px,5vw,48px)] font-bold leading-[1.15] tracking-tight mb-10 text-white"
                >
                  Does any of this sound familiar?
                </motion.h2>

                <div className="space-y-6 mb-10">
                  {IS_ORVA_RIGHT_PAIN_POINTS.map((point, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                      className="flex items-start gap-5 group"
                    >
                      <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-red-600/10 border border-white group-hover:bg-red-600/20 group-hover:scale-110 transition-all duration-300">
                        <span className="text-white text-lg font-bold">
                          &rarr;
                        </span>
                      </div>

                      <p className="text-lg md:text-xl leading-relaxed text-white">
                        {point}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="text-base leading-relaxed mb-8"
                  style={{ color: "white" }}
                >
                  Orva is boutique by choice. Every family receives genuinely
                  personalised guidance — from advisors who represent the
                  world&apos;s best universities and understand what it takes to
                  get there.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.7 }}
                >
                  <Button href="/contact" variant="primary" size="lg">
                    Talk to Our Founder
                  </Button>
                </motion.div>
              </div>
            </div>
          </section>
        </AnimatedGradientSection>
    </>
  )
}

export default ChooseOrva