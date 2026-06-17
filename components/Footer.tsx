'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

const FOOTER_LINKS = {
  navigate: [
    ['Why Orva', '/why-orva'],
    ['How It Works', '/how-it-works'],
    ['About Daniela', '/about-daniela'],
    ['Real Stories', '/stories'],
  ],
  explore: [
    ['Find Your Fit Quiz', '/quiz'],
    ['Resources', '/resources'],
    ['Our Services', '/services'],
    ['Our Team', '/team'],
  ],
  connect: [
    ['Contact Us', '/contact'],
    ['Our Story', '/story'],
  ],
};

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <footer className="bg-[#f0ede8] border-t border-black/[0.07]">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-[52px]">
        {/* CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="py-12 md:py-16 border-b border-black/[0.07] flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#1C1C1C] mb-2">Ready to start?</h3>
            <p className="text-sm text-[rgba(28,28,28,0.5)]">The first conversation is always free. No pitch, no obligation.</p>
          </div>
          <div className="flex gap-3">
            <Button href="/contact" variant="primary" size="md">Talk to Orva</Button>
            <Button href="/quiz" variant="secondary" size="md">Take the Quiz</Button>
          </div>
        </motion.div>

        {/* Main Footer Grid */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 py-14"
        >
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Image
              src="/orva-logo-red.svg"
              alt="ORVA Education"
              width={120}
              height={36}
              className="h-7 w-auto mb-5"
            />
            <h3 className="text-sm font-bold tracking-[0.1em] text-[rgba(24,24,24,0.88)] mb-3">
              Elite Admissions.
            </h3>
            <p className="text-sm font-light leading-[1.78] text-[rgba(24,24,24,0.46)] max-w-[280px] mb-3">
              The competitive edge your child needs for admission to the world&apos;s
              best universities — and a future-proof career.
            </p>
            <p className="text-xs font-light leading-relaxed text-[rgba(24,24,24,0.36)] max-w-[280px] mb-5">
              Boutique university admissions consulting for UAE and Saudi Arabia.
              UK · US · Europe.
            </p>
            <div className="flex gap-5">
              {['Instagram', 'LinkedIn', 'WhatsApp'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-[10px] tracking-[0.2em] uppercase font-bold text-[rgba(24,24,24,0.28)] hover:text-[#D51E20] transition-colors duration-200 cursor-none"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Navigate Column */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold text-[rgba(24,24,24,0.2)] mb-5">
              Navigate
            </h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.navigate.map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm font-light text-[rgba(24,24,24,0.46)] hover:text-[#D51E20] transition-colors duration-200 cursor-none"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore Column */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold text-[rgba(24,24,24,0.2)] mb-5">
              Explore
            </h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.explore.map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm font-light text-[rgba(24,24,24,0.46)] hover:text-[#D51E20] transition-colors duration-200 cursor-none"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Serving Column */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold text-[rgba(24,24,24,0.2)] mb-5">
              Contact
            </h4>
            <ul className="flex flex-col gap-3 mb-8">
              {FOOTER_LINKS.connect.map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm font-light text-[rgba(24,24,24,0.46)] hover:text-[#D51E20] transition-colors duration-200 cursor-none"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="mailto:hello@orvaedu.com"
                  className="text-sm font-light text-[rgba(24,24,24,0.46)] hover:text-[#D51E20] transition-colors duration-200 cursor-none"
                >
                  hello@orvaedu.com
                </a>
              </li>
            </ul>
            <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold text-[rgba(24,24,24,0.2)] mb-3">
              Serving
            </h4>
            <p className="text-sm font-light text-[rgba(24,24,24,0.46)] leading-relaxed">
              Dubai · Abu Dhabi · Riyadh · Jeddah · Online globally
            </p>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-black/[0.07] py-5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-[11px] text-[rgba(24,24,24,0.22)]">
            © 2026 Orva Education. All rights reserved.
          </p>
          <p className="text-[11px] text-[rgba(24,24,24,0.22)] font-medium tracking-[0.05em]">
            Elite Admissions. The competitive edge your child needs.
          </p>
        </div>
      </div>
    </footer>
  )
}
