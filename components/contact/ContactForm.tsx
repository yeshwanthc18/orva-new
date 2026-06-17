"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { COLORS } from "@/lib/constants";

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

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    city: "",
    msg: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", city: "", msg: "" });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className="relative py-20 md:py-32 px-6 md:px-12" style={{ background: COLORS.warmSand }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image and Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/img03.jpeg"
                alt="Contact"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/[0.08]" />
            </div>

            <div className="space-y-6">
              {[
                { title: "Quick Response", desc: "We reply within 24 hours" },
                { title: "Expert Team", desc: "15+ years of experience" },
                { title: "Personalized Support", desc: "Dedicated to your success" },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="flex gap-4"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: `${COLORS.primary}20` }}
                  >
                    <span style={{ color: COLORS.primary, fontSize: "20px" }}>✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold" style={{ color: COLORS.textDark }}>
                      {feature.title}
                    </h4>
                    <p className="text-sm" style={{ color: COLORS.textMuted }}>
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label style={LABEL_STYLE}>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    style={INPUT_STYLE}
                    required
                  />
                </div>
                <div>
                  <label style={LABEL_STYLE}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    style={INPUT_STYLE}
                    required
                  />
                </div>
              </div>

              <div>
                <label style={LABEL_STYLE}>City</label>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="Your City"
                  style={INPUT_STYLE}
                />
              </div>

              <div>
                <label style={LABEL_STYLE}>Message</label>
                <textarea
                  name="msg"
                  value={form.msg}
                  onChange={handleChange}
                  placeholder="Tell us about your inquiry..."
                  style={INPUT_STYLE}
                  rows={5}
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
                  ✓ Message sent successfully! We&apos;ll be in touch soon.
                </motion.div>
              )}

              <button
                type="submit"
                className="w-full py-4 rounded-lg font-bold text-sm tracking-wide uppercase transition-all text-white"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.primary}, #F45104)`,
                }}
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
