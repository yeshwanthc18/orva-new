"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import { GridPattern } from "@/components/ui/GridPattern";
import { supabase } from "@/lib/supabase";

const INPUT_BASE =
  "w-full bg-white border border-black/10 rounded-xl px-4 py-3.5 text-sm text-[#181818] font-[Cairo,sans-serif] outline-none transition-all duration-200 focus:border-red-500/50 focus:shadow-md focus:ring-2 focus:ring-red-500/10";

const LABEL_BASE =
  "block text-[10px] tracking-[0.2em] uppercase font-bold text-[rgba(24,24,24,0.4)] mb-2";

const TIME_SLOTS = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00",
];

function getAvailableDates(): string[] {
  const dates: string[] = [];
  const now = new Date();
  let count = 0;
  let day = new Date(now);
  day.setDate(day.getDate() + 1);

  while (count < 14) {
    const dayOfWeek = day.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      dates.push(day.toISOString().split("T")[0]);
      count++;
    }
    day.setDate(day.getDate() + 1);
  }
  return dates;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });
}

export default function ContactPage() {
  useLenis();
  const [step, setStep] = useState<"form" | "booking" | "success">("form");
  const [form, setForm] = useState({
    childName: "", schoolName: "", email: "", whatsapp: "", year: "", message: "",
  });
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const availableDates = useMemo(() => getAvailableDates(), []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("booking");
  };

  const handleBooking = async () => {
    if (!selectedDate || !selectedTime) return;
    setSubmitting(true);
    setError("");

    const { error: dbError } = await supabase.from("bookings").insert({
      child_name: form.childName,
      school_name: form.schoolName,
      parent_email: form.email,
      whatsapp: form.whatsapp,
      child_year: form.year,
      message: form.message,
      booking_date: selectedDate,
      booking_time: selectedTime,
    });

    setSubmitting(false);

    if (dbError) {
      setError("Something went wrong. Please try again.");
      return;
    }

    setStep("success");
  };

  const reset = () => {
    setStep("form");
    setForm({ childName: "", schoolName: "", email: "", whatsapp: "", year: "", message: "" });
    setSelectedDate("");
    setSelectedTime("");
  };

  return (
    <>
      <Cursor />
      <Trail />
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/img13.jpeg" alt="Contact ORVA" fill className="object-cover" sizes="100vw" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F] via-[#0F0F0F]/90 to-[#0F0F0F]/60" />
          </div>
          <FloatingGeometry variant="dark" density="sparse" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 py-20 md:py-32">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="label text-white/80 mb-8">Book a Consultation</span>
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
                className="text-lg md:text-xl leading-relaxed max-w-3xl"
                style={{ color: "rgba(251,249,246,0.7)" }}
              >
                No pitch. No obligation. Just 30 honest minutes about your child. If there&apos;s a fit, we&apos;ll tell you. If there isn&apos;t, we&apos;ll tell you that too.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="relative py-16 md:py-24 px-6 md:px-12" style={{ background: COLORS.warmCream }}>
          <GridPattern variant="light" />
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CONTACT_INFO.map((info, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group p-6 md:p-8 rounded-2xl bg-white border border-black/[0.06] hover:border-red-300/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4" style={{ background: "rgba(213,30,32,0.08)" }}>
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

        {/* Booking Form Section */}
        <section className="relative overflow-hidden" style={{ background: COLORS.warmSand }}>
          <FloatingGeometry variant="light" density="sparse" />
          <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Form / Booking Steps */}
            <div className="px-6 md:px-12 lg:px-16 py-16 md:py-24">
              <AnimatePresence mode="wait">
                {step === "form" && (
                  <motion.div
                    key="form-step"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Step indicator */}
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D51E20] to-[#FA8322] flex items-center justify-center text-white text-xs font-bold">1</div>
                      <div className="h-[2px] flex-1 bg-black/[0.06]" />
                      <div className="w-8 h-8 rounded-full bg-black/[0.06] flex items-center justify-center text-[rgba(28,28,28,0.3)] text-xs font-bold">2</div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: COLORS.textDark }}>Tell us about your child</h2>
                    <p className="text-base mb-8" style={{ color: COLORS.textLight }}>We&apos;ll get back to you personally to confirm.</p>

                    <form onSubmit={handleFormNext} className="space-y-5">
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
                          className={`${INPUT_BASE} resize-none`} rows={4} />
                      </div>

                      <Button type="submit" variant="primary" size="lg">Choose a Time</Button>
                    </form>
                  </motion.div>
                )}

                {step === "booking" && (
                  <motion.div
                    key="booking-step"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Step indicator */}
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D51E20] to-[#FA8322] flex items-center justify-center text-white text-xs font-bold">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </div>
                      <div className="h-[2px] flex-1 bg-gradient-to-r from-[#D51E20] to-[#FA8322]" />
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D51E20] to-[#FA8322] flex items-center justify-center text-white text-xs font-bold">2</div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: COLORS.textDark }}>Pick a date and time</h2>
                    <p className="text-base mb-8" style={{ color: COLORS.textLight }}>30-minute consultation with Daniela. Free, no obligation.</p>

                    {/* Date Selection */}
                    <div className="mb-8">
                      <label className={LABEL_BASE}>Select a date</label>
                      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 mt-3">
                        {availableDates.map((date) => (
                          <button
                            key={date}
                            type="button"
                            onClick={() => { setSelectedDate(date); setSelectedTime(""); }}
                            className={`p-3 rounded-xl text-center transition-all duration-200 border text-xs font-bold ${
                              selectedDate === date
                                ? "bg-gradient-to-br from-[#D51E20] to-[#FA8322] text-white border-transparent shadow-lg scale-105"
                                : "bg-white border-black/[0.06] hover:border-red-300/60 hover:shadow-md"
                            }`}
                            style={{ color: selectedDate === date ? undefined : COLORS.textDark }}
                          >
                            {formatDate(date)}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Time Selection */}
                    {selectedDate && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                        <label className={LABEL_BASE}>Select a time (Dubai time, GMT+4)</label>
                        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-2 mt-3">
                          {TIME_SLOTS.map((time) => (
                            <button
                              key={time}
                              type="button"
                              onClick={() => setSelectedTime(time)}
                              className={`py-3 px-2 rounded-xl text-center transition-all duration-200 border text-sm font-bold ${
                                selectedTime === time
                                  ? "bg-gradient-to-br from-[#D51E20] to-[#FA8322] text-white border-transparent shadow-lg scale-105"
                                  : "bg-white border-black/[0.06] hover:border-red-300/60 hover:shadow-md"
                              }`}
                              style={{ color: selectedTime === time ? undefined : COLORS.textDark }}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {error && (
                      <p className="text-sm text-red-600 font-semibold mt-4">{error}</p>
                    )}

                    <div className="flex flex-wrap gap-3 mt-8">
                      <Button
                        onClick={handleBooking}
                        variant="primary"
                        size="lg"
                        className={!selectedDate || !selectedTime || submitting ? "opacity-50 pointer-events-none" : ""}
                      >
                        {submitting ? "Booking..." : "Confirm Booking"}
                      </Button>
                      <Button onClick={() => setStep("form")} variant="secondary" size="md">Back</Button>
                    </div>
                  </motion.div>
                )}

                {step === "success" && (
                  <motion.div
                    key="success-step"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#D51E20] to-[#FA8322] flex items-center justify-center">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold mb-4" style={{ color: COLORS.textDark }}>Booking Confirmed</h2>
                    <p className="text-lg mb-2" style={{ color: COLORS.textLight }}>
                      Your consultation is scheduled for:
                    </p>
                    <p className="text-xl font-bold mb-6" style={{ color: COLORS.primary }}>
                      {formatDate(selectedDate)} at {selectedTime} (Dubai time)
                    </p>
                    <p className="text-base mb-8" style={{ color: COLORS.textMuted }}>
                      We&apos;ll send a confirmation to {form.email} shortly.
                    </p>
                    <Button onClick={reset} variant="secondary" size="md">Book Another</Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Side Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block relative min-h-[700px]"
            >
              <Image src="/images/img07.jpeg" alt="Consultation" fill className="object-cover" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#F5F2ED]/40" />
              {/* Glassmorphism overlay */}
              <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <p className="text-white text-lg font-bold mb-2">30 minutes. Zero obligation.</p>
                <p className="text-white/70 text-sm">Every journey starts with an honest conversation.</p>
              </div>
              <div className="absolute top-8 right-8 w-16 h-16 animate-spin-slow opacity-20">
                <svg viewBox="0 0 60 60" className="w-full h-full">
                  <circle cx="30" cy="30" r="25" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="0.5" strokeDasharray="4 6" />
                </svg>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
