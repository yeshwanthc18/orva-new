"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import Trail from "@/components/Trail";
import { useLenis } from "@/hooks/useLenis";
import { COLORS, CONTACT_INFO } from "@/lib/constants";

const INPUT_STYLE: React.CSSProperties = {
  width: "100%",
  background: "#f8f6f2",
  border: "1px solid rgba(24,24,24,.1)",
  borderRadius: 12,
  padding: "11px 16px",
  color: "#181818",
  fontSize: 14,
  fontFamily: "Cairo,sans-serif",
  outline: "none",
  transition: "border-color .18s",
};

const LABEL_STYLE: React.CSSProperties = {
  display: "block",
  fontSize: 10,
  letterSpacing: ".2em",
  textTransform: "uppercase",
  fontWeight: 700,
  color: "rgba(24,24,24,.36)",
  marginBottom: 8,
};

export default function ContactPage() {
  useLenis();
  const [form, setForm] = useState({
    childName: "",
    schoolName: "",
    email: "",
    whatsapp: "",
    year: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({
      childName: "",
      schoolName: "",
      email: "",
      whatsapp: "",
      year: "",
      message: "",
    });
    setTimeout(() => setSent(false), 3000);
  };

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
                  Get In Touch
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                The first conversation is always free.
              </h1>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl">
                No pitch. No obligation. Just 30 honest minutes about your child. If there's a fit, we'll tell you. If there isn't, we'll tell you that too.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section
          className="py-20 md:py-32 px-6 md:px-12"
          style={{ background: COLORS.warmCream }}
        >
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {CONTACT_INFO.map((info, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="p-8 rounded-lg bg-white border border-black/[0.06] hover:border-red-300 transition-all"
                >
                  <h3
                    className="text-xl font-bold mb-4"
                    style={{ color: COLORS.textDark }}
                  >
                    {info.title}
                  </h3>
                  <div className="space-y-2">
                    {info.details.map((detail, detailIdx) => (
                      <p
                        key={detailIdx}
                        className="text-sm"
                        style={{ color: COLORS.textMuted }}
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section
          className="relative py-20 md:py-32 px-6 md:px-12"
          style={{ background: COLORS.warmSand }}
        >
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label style={LABEL_STYLE}>Your child's name</label>
                    <input
                      type="text"
                      name="childName"
                      value={form.childName}
                      onChange={handleChange}
                      placeholder="First and last name"
                      style={INPUT_STYLE}
                      required
                    />
                  </div>
                  <div>
                    <label style={LABEL_STYLE}>School name</label>
                    <input
                      type="text"
                      name="schoolName"
                      value={form.schoolName}
                      onChange={handleChange}
                      placeholder="Current school"
                      style={INPUT_STYLE}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label style={LABEL_STYLE}>Your email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      style={INPUT_STYLE}
                      required
                    />
                  </div>
                  <div>
                    <label style={LABEL_STYLE}>Your WhatsApp number</label>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={form.whatsapp}
                      onChange={handleChange}
                      placeholder="+971 50 123 4567"
                      style={INPUT_STYLE}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label style={LABEL_STYLE}>Your child's current year</label>
                  <select
                    name="year"
                    value={form.year}
                    onChange={handleChange}
                    style={{
                      ...INPUT_STYLE,
                      appearance: "none",
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
                  <label style={LABEL_STYLE}>
                    What are you hoping to achieve?
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us a little about your child and what you're thinking about."
                    style={INPUT_STYLE}
                    rows={6}
                    required
                  />
                </div>

                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg text-center font-bold"
                    style={{
                      background: `${COLORS.primary}20`,
                      color: COLORS.primary,
                    }}
                  >
                    ✓ Message sent successfully! We'll be in touch soon.
                  </motion.div>
                )}

                <button
                  type="submit"
                  className="w-full md:w-auto py-3 px-8 rounded-lg font-bold text-sm tracking-wide uppercase transition-all text-white"
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.primary}, #F45104)`,
                  }}
                >
                  Start the Conversation
                </button>

                <p
                  className="text-xs"
                  style={{ color: COLORS.textMuted, marginTop: "24px" }}
                >
                  We read every message personally. No spam, ever.
                </p>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
