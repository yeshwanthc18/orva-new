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
import { Button } from "@/components/ui/Button";
import { FloatingGeometry } from "@/components/ui/FloatingGeometry";
import { submitForm } from "@/lib/api";
import EventPreheader from "@/components/PreHeader";
import { CheckCircle, Calendar } from "lucide-react";

const INPUT_BASE =
  "w-full bg-white border border-black/10 rounded-xl px-4 py-3.5 text-sm text-[#181818] font-[Cairo,sans-serif] outline-none transition-all duration-200 focus:border-red-500/50 focus:shadow-md focus:ring-2 focus:ring-red-500/10";

const LABEL_BASE =
  "block text-[11px] sm:text-[14px] tracking-[0.2em] uppercase font-bold text-[rgba(24,24,24,0.4)] mb-2";

// Replace this with your actual Google Calendar Appointment Scheduling URL.
// Create one at: https://calendar.google.com/calendar/r/schedulinga
// Then share the booking page link here.
const GOOGLE_BOOKING_URL =
  "https://calendar.google.com/calendar/appointments/AEgnkPdr3kG3r1q6qG3p1r6qG3p1r6qG3p1r6qG3p1r6=?gv=true";

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
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isPreheaderOpen, setIsPreheaderOpen] = useState(true);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const result = await submitForm({
      formType: "contact",
      email: form.email,
      data: {
        child_name: form.childName,
        school_name: form.schoolName,
        whatsapp: form.whatsapp,
        child_year: form.year,
        message: form.message,
      },
    });

    setSubmitting(false);

    if (!result.success) {
      setError(result.error || "Something went wrong. Please try again.");
      return;
    }

    setSubmitted(true);
  };

  const reset = () => {
    setSubmitted(false);
    setForm({
      childName: "",
      schoolName: "",
      email: "",
      whatsapp: "",
      year: "",
      message: "",
    });
  };

  return (
    <>
      <Cursor />
      <Trail />
      <EventPreheader onClose={setIsPreheaderOpen} />
      <Navbar isPreheaderOpen={isPreheaderOpen} />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/image13.png"
              alt="Contact ORVA"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F] via-[#0F0F0F]/90 to-[#0F0F0F]/60" />
          </div>
          <FloatingGeometry variant="dark" density="sparse" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-12 py-20 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="label text-white/80 mb-8">
                Book a Consultation
              </span>
              <TextGenerateEffect
                words="The first conversation is always free."
                className="text-[clamp(36px,6vw,56px)] leading-[1.1] tracking-tight mb-8 mt-6"
                style={{ color: COLORS.warmCream }}
                filter
                duration={0.5}
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl"
                style={{ color: "rgba(251,249,246,0.7)" }}
              >
                No pitch. No obligation. Just 30 honest minutes about your
                child. If there&apos;s a fit, we&apos;ll tell you. If there
                isn&apos;t, we&apos;ll tell you that too.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section
          className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12"
          style={{ background: COLORS.warmCream }}
        >
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {CONTACT_INFO.map((info, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group p-5 sm:p-6 md:p-8 rounded-2xl bg-white border border-black/[0.06] hover:border-red-300/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                    style={{ background: "rgba(213,30,32,0.08)" }}
                  >
                    <span className="text-lg">
                      {info.icon === "location"
                        ? "📍"
                        : info.icon === "email"
                          ? "✉️"
                          : "💬"}
                    </span>
                  </div>
                  <h3
                    className="text-base sm:text-lg font-bold mb-3"
                    style={{ color: COLORS.textDark }}
                  >
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, i) => (
                      <p
                        key={i}
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

        {/* Form + Google Calendar Booking */}
        <section
          className="relative overflow-hidden"
          style={{ background: COLORS.warmSand }}
        >
          <FloatingGeometry variant="light" density="sparse" />
          <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Form */}
            <div className="px-4 sm:px-6 md:px-12 lg:px-16 py-12 sm:py-16 md:py-24">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#D51E20] to-[#FA8322] flex items-center justify-center">
                    <CheckCircle
                      size={32}
                      className="text-white"
                    />
                  </div>
                  <h2
                    className="text-2xl sm:text-3xl font-bold mb-4"
                    style={{ color: COLORS.textDark }}
                  >
                    Thank You!
                  </h2>
                  <p
                    className="text-base sm:text-lg mb-2"
                    style={{ color: COLORS.textLight }}
                  >
                    Your message has been received.
                  </p>
                  <p
                    className="text-sm sm:text-base mb-8 max-w-md mx-auto"
                    style={{ color: COLORS.textMuted }}
                  >
                    Now pick a time that works for you using the calendar on the
                    right. We&apos;ll send a confirmation to {form.email}.
                  </p>
                  <Button onClick={reset} variant="secondary" size="md">
                    Submit Another
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <h2
                    className="text-2xl sm:text-3xl font-bold mb-2"
                    style={{ color: COLORS.textDark }}
                  >
                    Tell us about your child
                  </h2>
                  <p
                    className="text-sm sm:text-base mb-6 sm:mb-8"
                    style={{ color: COLORS.textLight }}
                  >
                    Fill in the form, then schedule your free 30-minute
                    consultation on the right.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label className={LABEL_BASE}>
                          Your child&apos;s name
                        </label>
                        <input
                          type="text"
                          name="childName"
                          value={form.childName}
                          onChange={handleChange}
                          placeholder="First and last name"
                          className={INPUT_BASE}
                          required
                        />
                      </div>
                      <div>
                        <label className={LABEL_BASE}>School name</label>
                        <input
                          type="text"
                          name="schoolName"
                          value={form.schoolName}
                          onChange={handleChange}
                          placeholder="Current school"
                          className={INPUT_BASE}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label className={LABEL_BASE}>Your email</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className={INPUT_BASE}
                          required
                        />
                      </div>
                      <div>
                        <label className={LABEL_BASE}>
                          Your WhatsApp number
                        </label>
                        <input
                          type="tel"
                          name="whatsapp"
                          value={form.whatsapp}
                          onChange={handleChange}
                          placeholder="+971 50 123 4567"
                          className={INPUT_BASE}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className={LABEL_BASE}>
                        Your child&apos;s current year
                      </label>
                      <select
                        name="year"
                        value={form.year}
                        onChange={handleChange}
                        className={`${INPUT_BASE} appearance-none`}
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
                      <label className={LABEL_BASE}>
                        What are you hoping to achieve?
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us a little about your child and what you're thinking about."
                        className={`${INPUT_BASE} resize-none`}
                        rows={4}
                      />
                    </div>

                    {error && (
                      <p className="text-sm text-red-600 font-semibold">
                        {error}
                      </p>
                    )}

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className={submitting ? "opacity-60 pointer-events-none" : ""}
                    >
                      {submitting ? "Submitting..." : "Send Message"}
                    </Button>
                  </form>
                </motion.div>
              )}
            </div>

            {/* Google Calendar Appointment Scheduling */}
            <div className="px-4 sm:px-6 md:px-12 lg:px-16 py-12 sm:py-16 md:py-24 lg:border-l border-black/[0.06]">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D51E20] to-[#FA8322] flex items-center justify-center flex-shrink-0">
                    <Calendar size={20} className="text-white" />
                  </div>
                  <h2
                    className="text-2xl sm:text-3xl font-bold"
                    style={{ color: COLORS.textDark }}
                  >
                    Schedule a Time
                  </h2>
                </div>
                <p
                  className="text-sm sm:text-base mb-6 sm:mb-8"
                  style={{ color: COLORS.textLight }}
                >
                  Pick an available slot directly from our calendar. 30-minute
                  consultation with Daniela. Free, no obligation.
                </p>

                <div className="rounded-2xl overflow-hidden border border-black/[0.06] bg-white shadow-sm">
                  <iframe
                    src={GOOGLE_BOOKING_URL}
                    title="Schedule a consultation"
                    className="w-full"
                    style={{ minHeight: "600px", border: "none" }}
                    loading="lazy"
                  />
                </div>

                <p
                  className="mt-4 text-xs sm:text-sm text-center"
                  style={{ color: COLORS.textMuted }}
                >
                  Times shown in your local timezone. You&apos;ll receive a
                  Google Calendar invitation after booking.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
