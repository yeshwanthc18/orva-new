"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import Trail from "@/components/Trail";
import { useLenis } from "@/hooks/useLenis";
import { ServiceCard, ProcessSteps, PricingTiers } from "@/components/services";
import { COLORS } from "@/lib/constants";

const SERVICES = [
  {
    id: "01",
    title: "University Selection & Strategy",
    description: "Identifying the perfect universities that align with your aspirations, academic profile, and long-term goals. We assess fit across academics, culture, location, and post-graduation opportunities.",
    features: ["Profile Assessment", "University Database Analysis", "Risk-Safety-Target Framework", "International Rankings Review"],
    img: "/images/img02.jpeg",
  },
  {
    id: "02",
    title: "Application & Essay Guidance",
    description: "Crafting compelling application materials that showcase your authentic voice. From brainstorming to final polish, every essay reflects your unique story.",
    features: ["Essay Strategy & Planning", "Brainstorming Sessions", "Iterative Writing Support", "Interview Preparation"],
    img: "/images/img03.jpeg",
  },
  {
    id: "03",
    title: "Standardized Test Coaching",
    description: "Comprehensive SAT/ACT preparation tailored to your learning style. We focus on understanding concepts, not just test tactics.",
    features: ["Diagnostic Testing", "Personalized Study Plans", "Section-Specific Tutoring", "Score Optimization Strategy"],
    img: "/images/img04.jpeg",
  },
  {
    id: "04",
    title: "Scholarship & Financial Aid",
    description: "Navigating the complex world of scholarships, grants, and financial packages. Maximizing your financial aid opportunities.",
    features: ["Scholarship Search & Matching", "FAFSA Guidance", "Aid Package Analysis", "Negotiation Support"],
    img: "/images/img05.jpeg",
  },
  {
    id: "05",
    title: "Visa & Transition Support",
    description: "From visa applications to settling into university life. We handle the logistics so you can focus on your journey.",
    features: ["Visa Application Assistance", "Accommodation Sourcing", "Pre-Arrival Orientation", "Ongoing Support Network"],
    img: "/images/img06.jpeg",
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery Session",
    description: "We begin with an in-depth conversation to understand your strengths, interests, goals, and family values. This foundation shapes everything that follows.",
    timeline: "Week 1-2",
  },
  {
    number: "02",
    title: "Strategic Planning",
    description: "Based on discovery insights, we create a personalized roadmap including university targets, test preparation timeline, and application strategy.",
    timeline: "Week 3-4",
  },
  {
    number: "03",
    title: "Preparation Phase",
    description: "Intensive support for test prep, essay writing, interview training, and application submission. Weekly check-ins and iterative feedback.",
    timeline: "Month 2-6",
  },
  {
    number: "04",
    title: "Decision & Enrollment",
    description: "Analyzing offers, understanding aid packages, visa processes, and transitioning to your chosen university. We stay with you through enrollment.",
    timeline: "Month 7-9",
  },
];

const PRICING_TIERS = [
  {
    name: "Starter",
    price: "Starting at AED 15,000",
    description: "For students with strong profiles needing focused support",
    features: [
      "4 Discovery & Strategy Sessions",
      "University List Development",
      "Application Timeline Planning",
      "Essay Topic Brainstorming",
      "Interview Preparation (2 sessions)",
      "Email Support",
    ],
    highlight: false,
  },
  {
    name: "Professional",
    price: "Starting at AED 35,000",
    description: "Comprehensive guidance from start to finish",
    features: [
      "Everything in Starter, plus:",
      "Unlimited Strategy Sessions",
      "Full Application Support",
      "Essay Editing & Coaching (up to 5 essays)",
      "Test Prep Guidance",
      "Scholarship Search & Application",
      "Phone & Email Support",
      "Offer Analysis & Decision Support",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    price: "Custom Package",
    description: "Full-service personalized guidance & support",
    features: [
      "Everything in Professional, plus:",
      "Standardized Test Tutoring (SAT/ACT)",
      "Weekly Video Calls",
      "Visa & Transition Planning",
      "Post-Enrollment Support (1 year)",
      "Family Consultation Sessions",
      "Dedicated Account Manager",
      "24/7 Priority Support",
    ],
    highlight: false,
  },
];



export default function ServicesPage() {
  useLenis();

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
                  What We Offer
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                Comprehensive University Guidance
              </h1>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
                From strategy to enrollment, we provide end-to-end support designed specifically for ambitious GCC students and their families.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <div className="relative w-full">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Process Section */}
        <ProcessSteps steps={PROCESS_STEPS} />

        {/* Pricing Section */}
        <PricingTiers tiers={PRICING_TIERS} />

        {/* CTA Section */}
        <section
          className="relative py-20 md:py-28 px-6 md:px-12"
          style={{ background: COLORS.warmCream }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: COLORS.textDark }}>
                Ready to Start Your Journey?
              </h2>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: COLORS.textLight }}>
                Schedule a free consultation to discuss your goals and find the right service package for you.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 text-white font-bold text-sm tracking-wide uppercase rounded-full hover:opacity-90 transition-opacity duration-200"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.primary}, #F45104)`,
                }}
              >
                Schedule Free Consultation
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


