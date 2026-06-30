import { Button } from '@/components/ui/Button'
import { COLORS, IS_ORVA_RIGHT_PAIN_POINTS } from '@/lib/constants'
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

// ── Tokens, scoped to this section ──────────────────────────────────────
// Concept: a case file being marked up live. Parchment ink on near-black,
// one rust-orange highlighter as the only accent — used as an actual
// highlighter sweep, not an icon or underline.
const INK = '#EDE6D6'
const INK_DIM = 'rgba(237,230,214,0.45)'
const RULE = 'rgba(237,230,214,0.09)'
const HILITE = '#C2452B'
const HILITE_SOFT = 'rgba(194,69,43,0.16)'
const PANEL = '#15130E'

const PainLine = ({
  point,
  idx,
  total,
}: {
  point: string
  idx: number
  total: number
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'start 0.42'],
  })
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 22, mass: 0.4 })
  const sweepWidth = useTransform(progress, [0, 1], ['0%', '100%'])
  const textColor = useTransform(progress, [0, 0.5, 1], [INK_DIM, INK_DIM, INK])
  const x = useTransform(progress, [0, 1], [-10, 0])

  return (
    <div ref={ref} className="relative py-5 md:py-[22px] border-b" style={{ borderColor: RULE }}>
      <div className="flex items-start gap-5 md:gap-7">
        <span
          className="font-mono text-[11px] tracking-[0.18em] pt-2 flex-shrink-0 select-none"
          style={{ color: INK_DIM }}
        >
          {String(idx + 1).padStart(2, '0')}
        </span>

        <div className="relative">
          {/* highlighter block sweeps left-to-right behind the text, scroll-driven */}
          <motion.span
            aria-hidden
            style={{ width: sweepWidth, background: HILITE_SOFT }}
            className="absolute -inset-y-1 left-0 -z-0 skew-x-[-6deg]"
          />
          <motion.p
            style={{ color: textColor, x }}
            className="relative z-10 text-xl md:text-[27px] leading-snug font-medium tracking-tight"
          >
            {point}
          </motion.p>
        </div>
      </div>
    </div>
  )
}

const RightSteps = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const photoRef = useRef<HTMLDivElement>(null)
  const stampRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const { scrollYProgress: photoProgress } = useScroll({
    target: photoRef,
    offset: ['start 0.9', 'start 0.2'],
  })
  const { scrollYProgress: stampProgress } = useScroll({
    target: stampRef,
    offset: ['start 0.85', 'start 0.55'],
  })

  const photoClip = useTransform(
    photoProgress,
    [0, 1],
    ['polygon(0 0, 0% 0, 0% 100%, 0% 100%)', 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)']
  )
  const eyebrowX = useTransform(sectionProgress, [0, 0.4], [-24, 0])
  const ringRotate = useTransform(sectionProgress, [0, 1], [0, 90])

  const stampScale = useSpring(useTransform(stampProgress, [0, 1], [1.6, 1]), {
    stiffness: 180,
    damping: 16,
  })
  const stampRotate = useSpring(useTransform(stampProgress, [0, 1], [-18, -8]), {
    stiffness: 180,
    damping: 16,
  })
  const stampOpacity = useTransform(stampProgress, [0, 0.4], [0, 1])

  return (
    <section ref={sectionRef} className="relative overflow-hidden" style={{ background: COLORS.deepBlack }}>
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27120%27 height=%27120%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%272%27/%3E%3C/filter%3E%3Crect width=%27120%27 height=%27120%27 filter=%27url(%23n)%27/%3E%3C/svg%3E")',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(120% 90% at 15% 8%, transparent 38%, rgba(0,0,0,0.55) 100%)' }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-0 items-stretch relative z-10">
        <div className="lg:col-span-3 px-6 md:px-12 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-14"
          >
            <motion.span
              style={{ x: eyebrowX, color: HILITE }}
              className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.22em] uppercase mb-7"
            >
              <span className="w-6 h-px" style={{ background: HILITE }} />
              Case file — is Orva right for you?
            </motion.span>
            <h2
              className="leading-[1.02] tracking-tight mb-5"
              style={{ color: INK }}
            >
              <span
                className="block text-[clamp(34px,5.2vw,56px)] font-bold"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                Does any of this
              </span>
              <span
                className="block text-[clamp(34px,5.2vw,56px)] italic font-normal"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif', color: INK_DIM }}
              >
                sound familiar?
              </span>
            </h2>
            <p className="text-lg leading-relaxed max-w-md" style={{ color: INK_DIM }}>
              You don&apos;t need to have it all figured out — you just need
              to see your child somewhere in this.
            </p>
          </motion.div>

          <div className="mb-14">
            {IS_ORVA_RIGHT_PAIN_POINTS.map((point, idx) => (
              <PainLine key={idx} point={point} idx={idx} total={IS_ORVA_RIGHT_PAIN_POINTS.length} />
            ))}
          </div>

          {/* CTA panel with the stamp landing on top */}
          <div ref={stampRef} className="relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{ background: PANEL }}
              className="border rounded-sm p-7 md:p-9 overflow-hidden relative"
            >
              <p className="text-base leading-relaxed max-w-lg" style={{ color: 'rgba(237,230,214,0.82)' }}>
                Orva is boutique by choice. Every family receives genuinely
                personalised guidance — from advisors who represent the
                world&apos;s best universities and understand what it takes
                to get there.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <Button href="/contact" variant="primary" size="md">
                  Talk to ORVA
                </Button>
                <Button href="/quiz" variant="secondary" size="md">
                  Take the Quiz
                </Button>
              </div>

              {/* rubber-stamp mark, slams in as the panel enters view */}
              <motion.div
                style={{
                  scale: stampScale,
                  rotate: stampRotate,
                  opacity: stampOpacity,
                  borderColor: HILITE,
                  color: HILITE,
                }}
                className="absolute top-5 right-5 md:top-7 md:right-9 w-[88px] h-[88px] md:w-[104px] md:h-[104px] rounded-full border-[3px] flex items-center justify-center pointer-events-none"
              >
                <span className="font-mono text-[10px] md:text-[11px] font-bold tracking-[0.12em] text-center leading-tight uppercase">
                  A fit
                  <br />
                  worth
                  <br />
                  exploring
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* photo column — diagonal wipe reveal instead of a fade */}
        <div ref={photoRef} className="hidden lg:block lg:col-span-2 relative overflow-hidden">
          <motion.div style={{ clipPath: photoClip }} className="absolute inset-[-10%]">
            <Image
              src="/images/img03.jpeg"
              alt="Family guidance"
              fill
              className="object-cover"
              sizes="40vw"
            />
          </motion.div>
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(to left, transparent 0%, transparent 55%, ${COLORS.deepBlack} 100%)` }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55), transparent 40%)' }}
          />

          <motion.div style={{ rotate: ringRotate }} className="absolute top-10 right-10 w-24 h-24">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="40" fill="none" stroke={HILITE} strokeOpacity="0.55" strokeWidth="0.75" strokeDasharray="3 7" />
              <circle cx="50" cy="50" r="30" fill="none" stroke={HILITE} strokeOpacity="0.32" strokeWidth="0.5" />
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20%' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="absolute bottom-10 left-10 right-10"
          >
            <p className="font-mono text-[11px] tracking-[0.18em] uppercase" style={{ color: 'rgba(237,230,214,0.55)' }}>
              Every family, on file
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default RightSteps