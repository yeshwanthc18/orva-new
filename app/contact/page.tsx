"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import Trail from "@/components/Trail";
import { useLenis } from "@/hooks/useLenis";
import { COLORS, CONTACT_INFO } from "@/lib/constants";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { MovingBorderButton } from "@/components/ui/MovingBorderButton";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";

const INPUT_BASE =
  "w-full bg-white border border-black/10 rounded-xl px-4 py-3.5 text-sm text-[#181818] font-[Cairo,sans-serif] outline-none transition-all duration-200 focus:border-red-500/50 focus:shadow-md focus:ring-2 focus:ring-red-500/10";

const LABEL_BASE =
  "block text-[10px] tracking-[0.2em] uppercase font-bold text-[rgba(24,24,24,0.4)] mb-2";

export default function ContactPage() {
  useLenis();
  const [form, setForm] = useState({
    childName: "", schoolName: "", email: "", whatsapp: "", year: "", message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ childName: "", schoolName: "", email: "", whatsapp: "", year: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <>
      <Cursor />
      <Trail />
      <Navbar />
      <main className="pt-16">
        {/* Hero with background image */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/img13.jpeg" alt="Contact ORVA" fill className="object-cover" sizes="100vw" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F] via-[#0F0F0F]/90 to-[#0F0F0F]/60" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 py-20 md:py-32">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="label text-white/80 mb-6">Get In Touch</span>
              <TextGenerateEffect
                words="The first conversation is always free."
                className="text-[clamp(36px,6vw,56px)] leading-[1.1] tracking-tight mb-8"
                style={{ color: COLORS.warmCream }}
                filter
                duration={0.5}
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="text-lg md:text-xl leading-relaxed max-w-3xl"
                style={{ color: "rgba(251,249,246,0.7)" }}
              >
                No pitch. No obligation. Just 30 honest minutes about your child. If there&apos;s a fit, we&apos;ll tell you. If there isn&apos;t, we&apos;ll tell you that too.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 md:py-24 px-6 md:px-12" style={{ background: COLORS.warmCream }}>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CONTACT_INFO.map((info, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="p-6 md:p-8 rounded-2xl bg-white border border-black/[0.06] hover:border-red-300/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4" style={{ background: `${COLORS.primary}12` }}>
                    <span className="text-lg">
                      {info.icon === "location" ? "📍" : info.icon === "email" ? "✉️" : "💬"}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: COLORS.textDark }}>{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-sm" style={{ color: COLORS.textMuted }}>{detail}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form with side image */}
        <section className="relative overflow-hidden" style={{ background: COLORS.warmSand }}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Form */}
            <div className="px-6 md:px-12 lg:px-16 py-16 md:py-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: COLORS.textDark }}>Start the Conversation</h2>
                <p className="text-base mb-8" style={{ color: COLORS.textLight }}>Tell us about your child and we&apos;ll get back to you personally.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className={LABEL_BASE}>Your child&apos;s name</label>
                      <input type="text" name="childName" value={form.childName} onChange={handleChange} placeholder="First and last name" className={INPUT_BASE} required />
                    </div>
                    <div>
                      <label className={LABEL_BASE}>School name</label>
                      <input type="text" name="schoolName" value={form.schoolName} onChange={handleChange} placeholder="Current school" className={INPUT_BASE} required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className={LABEL_BASE}>Your email</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className={INPUT_BASE} required />
                    </div>
                    <div>
                      <label className={LABEL_BASE}>Your WhatsApp number</label>
                      <input type="tel" name="whatsapp" value={form.whatsapp} onChange={handleChange} placeholder="+971 50 123 4567" className={INPUT_BASE} required />
                    </div>
                  </div>

                  <div>
                    <label className={LABEL_BASE}>Your child&apos;s current year</label>
                    <select name="year" value={form.year} onChange={handleChange} className={`${INPUT_BASE} appearance-none`}
                      style={{
                        backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='rgba(24,24,24,.5)' stroke-width='2'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 12px center",
                        backgroundSize: "20px",
                        paddingRight: "40px",
                      }}
                      required
                    >
                      <option value="">Select a year</option>
                      <option value="Year 9">Year 9</option>
                      <option value="Year 10">Year 10</option>
                      <option value="Year 11">Year 11</option>
                      <option value="Year 12">Year 12</option>
                      <option value="Year 13">Year 13</option>
                    </select>
                  </div>

                  <div>
                    <label className={LABEL_BASE}>What are you hoping to achieve?</label>
                    <textarea name="message" value={form.message} onChange={handleChange}
                      placeholder="Tell us a little about your child and what you're thinking about."
                      className={`${INPUT_BASE} resize-none`} rows={5} required />
                  </div>

                  {sent && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl text-center font-bold bg-red-50 border border-red-200"
                      style={{ color: COLORS.primary }}
                    >
                      Message sent successfully! We&apos;ll be in touch soon.
                    </motion.div>
                  )}

                  <MovingBorderButton
                    containerClassName="h-14 w-full md:w-auto"
                    duration={4000}
                    as="button"
                    onClick={() => {
                      const formEl = document.querySelector('form') as HTMLFormElement;
                      if (formEl) formEl.requestSubmit();
                    }}
                  >
                    Start the Conversation
                  </MovingBorderButton>

                  <p className="text-xs" style={{ color: COLORS.textMuted }}>
                    We read every message personally. No spam, ever.
                  </p>
                </form>
              </motion.div>
            </div>

            {/* Side Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block relative min-h-[600px]"
            >
              <Image src="/images/img07.jpeg" alt="Consultation" fill className="object-cover" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#F5F2ED]/40" />
              {/* Glassmorphism overlay */}
              <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <p className="text-white text-lg font-bold mb-2">30 minutes. Zero obligation.</p>
                <p className="text-white/70 text-sm">Every journey starts with an honest conversation.</p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
