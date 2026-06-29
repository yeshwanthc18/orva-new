"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import Trail from "@/components/Trail";
import { useLenis } from "@/hooks/useLenis";
import { TeamMemberCard, ValueCard, WhyChooseSection } from "@/components/team";
import { COLORS } from "@/lib/constants";
import EventPreheader from "@/components/PreHeader";

const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Daniela",
    role: "Founder & CEO",
    bio: "15+ years in international university admissions. Guided 500+ students to world-class universities. Education visionary with passion for bridging cultures.",
    expertise: [
      "University Selection",
      "Strategic Planning",
      "Student Counseling",
    ],
    image: "/images/img02.jpeg",
    featured: true,
  },
  {
    id: 2,
    name: "Fatima Al Kaabi",
    role: "Head of Admissions Strategy",
    bio: "Former admissions officer at University of Oxford and Harvard. Expert in essay strategy and profile positioning. 8+ years of experience.",
    expertise: ["Essays & Applications", "Interview Prep", "Profile Analysis"],
    image: "/images/img03.jpeg",
    featured: true,
  },
  {
    id: 3,
    name: "Mohammed Al Wahab",
    role: "Test Preparation Director",
    bio: "Certified SAT & ACT coach. Helped 200+ students achieve 1500+ on SAT and 35+ on ACT. Expert in personalized test strategy.",
    expertise: ["SAT & ACT Coaching", "Test Strategy", "Score Optimization"],
    image: "/images/img04.jpeg",
    featured: true,
  },
  {
    id: 4,
    name: "Layla Al Mansoori",
    role: "Student Success Coach",
    bio: "Specializes in transition support and student well-being. Helps students thrive in their first year abroad. 6+ years of experience.",
    expertise: [
      "First Year Support",
      "Cultural Transition",
      "Well-being Coaching",
    ],
    image: "/images/img05.jpeg",
    featured: false,
  },
  {
    id: 5,
    name: "Rashid Al Dhaheri",
    role: "Scholarship & Financial Aid Expert",
    bio: "Navigates complex scholarship landscape for GCC students. Helped students secure over $10M in scholarships. Certified financial planning advisor.",
    expertise: [
      "Scholarship Research",
      "Aid Package Analysis",
      "Financial Planning",
    ],
    image: "/images/img06.jpeg",
    featured: false,
  },
  {
    id: 6,
    name: "Zainab Al Mazrouei",
    role: "University Relations Manager",
    bio: "Direct relationships with 150+ universities worldwide. Advocates for ORVA students in admissions committees. Former university recruiter.",
    expertise: [
      "University Relationships",
      "Application Advocacy",
      "Program Matching",
    ],
    image: "/images/img02.jpeg",
    featured: false,
  },
  {
    id: 7,
    name: "Amir Al Harbi",
    role: "Visa & Immigration Specialist",
    bio: "Expert in student visa processes for UK, US, Canada, and beyond. Handles complex immigration cases. 10+ years of experience.",
    expertise: [
      "Visa Applications",
      "Immigration Law",
      "Documentation Support",
    ],
    image: "/images/img03.jpeg",
    featured: false,
  },
  {
    id: 8,
    name: "Hana Al Neyadi",
    role: "Student Advisor",
    bio: "ORVA graduate. Placed at Stanford with full scholarship. Brings personal experience and empathy to student guidance. Works with 20+ students annually.",
    expertise: ["Student Mentoring", "Peer Support", "Career Guidance"],
    image: "/images/img04.jpeg",
    featured: false,
  },
];

const COMPANY_VALUES = [
  {
    title: "Excellence in Everything",
    description:
      "Every interaction, every email, every session is held to the highest standard. Mediocrity is not acceptable.",
  },
  {
    title: "Student Success",
    description:
      "Your success is our success. We don't move on until you've achieved your goals and are thriving.",
  },
  {
    title: "Cultural Integrity",
    description:
      "We honor where you come from while opening doors to global opportunities. Culture is strength, not limitation.",
  },
  {
    title: "Radical Honesty",
    description:
      "We tell you the truth, even when it's difficult. You deserve advisors who are honest about your profile and prospects.",
  },
  {
    title: "Continuous Learning",
    description:
      "The admissions landscape changes. We stay current with every update, change, and trend in global higher education.",
  },
  {
    title: "Genuine Care",
    description:
      "This isn't transactional. We care about your well-being, your development, and your future success.",
  },
];

const WHY_CHOOSE_ORVA = [
  {
    number: "01",
    title: "GCC-Based Expertise",
    description:
      "We understand the region's culture, values, and educational landscape deeply. Not generic international consultants.",
  },
  {
    number: "02",
    title: "Proven Track Record",
    description:
      "500+ students successfully placed across UK, US, Canada, Netherlands, and beyond. Consistent results over 7+ years.",
  },
  {
    number: "03",
    title: "Personalization, Not Templates",
    description:
      "Every student's plan is completely custom. We don't use cookie-cutter approaches or recycled strategies.",
  },
  {
    number: "04",
    title: "University Relationships",
    description:
      "Direct connections with 150+ universities worldwide. Your profile is advocated for, not just submitted.",
  },
  {
    number: "05",
    title: "Beyond Admission",
    description:
      "We measure success by your thriving in year one and beyond. Support continues after enrollment.",
  },
  {
    number: "06",
    title: "Expert Leadership",
    description:
      "Founder with 15+ years in international admissions. Team includes former admissions officers from Oxford and Harvard.",
  },
];

export default function TeamPage() {
  useLenis();
  const [isPreheaderOpen, setIsPreheaderOpen] = useState(true);

  return (
    <>
      <Cursor />
      <Trail />
      <EventPreheader onClose={setIsPreheaderOpen} />
      <Navbar isPreheaderOpen={isPreheaderOpen} />
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
                  Meet the Team
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                Experts Dedicated to Your Success
              </h1>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
                Our diverse team combines decades of experience in international
                admissions, education leadership, and student support.
                We&apos;re here to guide you every step of the way.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Leadership Team */}
        <section
          className="relative py-20 md:py-32 px-6 md:px-12"
          style={{ background: COLORS.warmCream }}
        >
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50 bg-red-500"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                </span>
                <span
                  className="text-[10px] font-bold tracking-[0.35em] uppercase"
                  style={{ color: COLORS.primary }}
                >
                  Leadership
                </span>
              </div>
              <h2
                className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
                style={{ color: COLORS.textDark }}
              >
                Our Leadership Team
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TEAM_MEMBERS.slice(0, 3).map((member) => (
                <TeamMemberCard
                  key={member.id}
                  member={member}
                  featured={true}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Extended Team */}
        <section
          className="relative py-20 md:py-32 px-6 md:px-12"
          style={{ background: COLORS.warmSand }}
        >
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2
                className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
                style={{ color: COLORS.textDark }}
              >
                Our Specialists
              </h2>
              <p className="text-lg" style={{ color: COLORS.textLight }}>
                Dedicated experts across every aspect of the university journey
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TEAM_MEMBERS.slice(3).map((member) => (
                <TeamMemberCard
                  key={member.id}
                  member={member}
                  featured={false}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section
          className="relative py-20 md:py-32 px-6 md:px-12"
          style={{ background: COLORS.warmCream }}
        >
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50 bg-red-500"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                </span>
                <span
                  className="text-[10px] font-bold tracking-[0.35em] uppercase"
                  style={{ color: COLORS.primary }}
                >
                  Our Values
                </span>
              </div>
              <h2
                className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
                style={{ color: COLORS.textDark }}
              >
                What We Stand For
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {COMPANY_VALUES.map((value, idx) => (
                <ValueCard key={idx} value={value} index={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose ORVA */}
        <WhyChooseSection differentiators={WHY_CHOOSE_ORVA} />

        {/* CTA Section */}
        <section
          className="relative py-20 md:py-28 px-6 md:px-12"
          style={{ background: COLORS.warmSand }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2
                className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
                style={{ color: COLORS.textDark }}
              >
                Meet Our Team in Person
              </h2>
              <p
                className="text-lg mb-8 leading-relaxed"
                style={{ color: COLORS.textLight }}
              >
                Schedule a consultation and experience the ORVA difference
                firsthand.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 text-white font-bold text-sm tracking-wide uppercase rounded-full hover:opacity-90 transition-opacity duration-200"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.primary}, #F45104)`,
                }}
              >
                Schedule a Call
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
