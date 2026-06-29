"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Cursor from "@/components/Cursor";
import Trail from "@/components/Trail";
import EventPreheader from "@/components/PreHeader";
import Navbar from "@/components/Navbar";
import { useLenis } from "@/hooks/useLenis";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/Button";

const COLORS = {
  primary: "#F75105",
  primaryDark: "#AA1A12",
  warmCream: "#FFF5ED",
  warmSand: "#FEF3E8",
  textDark: "#1a1a1a",
  textLight: "#666666",
};



    
interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  description: string;
  attendees: number;
  featured?: boolean;
  image?: string;
}

interface Workshop {
  id: number;
  title: string;
  instructor: string;
  date: string;
  duration: string;
  level: string;
  capacity: number;
  description: string;
}

const UPCOMING_EVENTS: Event[] = [
  {
    id: 1,
    title: "University Application Masterclass",
    date: "April 15, 2026",
    time: "6:00 PM - 7:30 PM",
    location: "Dubai, UAE",
    category: "Workshop",
    description:
      "Join us for an intensive masterclass where our experts walk you through the entire university application process.",
    attendees: 240,
    featured: true,
  },
  {
    id: 2,
    title: "SAT/ACT Strategy Session",
    date: "April 20, 2026",
    time: "4:00 PM - 5:00 PM",
    location: "Online",
    category: "Live Q&A",
    description:
      "Understand which test is right for you and get insider tips on test preparation strategies.",
    attendees: 185,
    featured: true,
  },
  {
    id: 3,
    title: "UK University Fair",
    date: "April 25, 2026",
    time: "2:00 PM - 6:00 PM",
    location: "Abu Dhabi, UAE",
    category: "Fair",
    description:
      "Meet representatives from Oxford, Cambridge, LSE, and other top UK universities.",
    attendees: 450,
    featured: true,
  },
  {
    id: 4,
    title: "Essay Writing Workshop",
    date: "May 1, 2026",
    time: "5:00 PM - 6:30 PM",
    location: "Online",
    category: "Workshop",
    description:
      "Learn the secrets to writing compelling university essays that stand out.",
    attendees: 156,
  },
  {
    id: 5,
    title: "Financial Aid Information Session",
    date: "May 5, 2026",
    time: "3:00 PM - 4:00 PM",
    location: "Dubai, UAE",
    category: "Seminar",
    description:
      "Discover scholarships, grants, and financial aid opportunities for GCC students.",
    attendees: 98,
  },
  {
    id: 6,
    title: "Interview Preparation Intensive",
    date: "May 12, 2026",
    time: "7:00 PM - 8:30 PM",
    location: "Online",
    category: "Workshop",
    description:
      "Get practical tips and mock interview experience from admissions professionals.",
    attendees: 127,
  },
];

const WORKSHOPS: Workshop[] = [
  {
    id: 1,
    title: "Complete Profile Building Blueprint",
    instructor: "Dr. Sarah Al-Maktoum",
    date: "April 18, 2026",
    duration: "4 weeks",
    level: "Beginner",
    capacity: 30,
    description:
      "Build a competitive profile through academics, extracurriculars, and leadership experiences.",
  },
  {
    id: 2,
    title: "Advanced Essay Techniques",
    instructor: "James Mitchell",
    date: "April 22, 2026",
    duration: "3 weeks",
    level: "Intermediate",
    capacity: 25,
    description:
      "Master storytelling, voice, and personal branding through your essays.",
  },
  {
    id: 3,
    title: "Test Prep Mastery",
    instructor: "Amira Hassan",
    date: "May 8, 2026",
    duration: "6 weeks",
    level: "All Levels",
    capacity: 40,
    description:
      "Comprehensive SAT/ACT preparation with personalized scoring strategies.",
  },
];

function FeaturedEventCard({ event, index }: { event: Event; index: number }) {
  return (

   
     
     <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <span
            className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide text-white"
            style={{ background: COLORS.primary }}
          >
            {event.category}
          </span>
          <div className="flex items-center gap-1 text-sm" style={{ color: COLORS.textLight }}>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fillRule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"
              />
            </svg>
            {event.attendees}
          </div>
        </div>

        <h3
          className="text-xl font-bold mb-3 line-clamp-2"
          style={{ color: COLORS.textDark }}
        >
          {event.title}
        </h3>

        <p className="mb-4 text-sm line-clamp-2" style={{ color: COLORS.textLight }}>
          {event.description}
        </p>

        <div className="space-y-2 mb-4 text-sm" style={{ color: COLORS.textLight }}>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {event.date}
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {event.time}
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {event.location}
          </div>
        </div>

        <Button href="/contact"
          variant="primary"
        >
          Learn More
        </Button>
      </div>
    </motion.div>

   
  );
}

function WorkshopCard({ workshop, index }: { workshop: Workshop; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="rounded-lg border-2 p-6 transition-all duration-300 hover:shadow-lg"
      style={{ borderColor: COLORS.primary }}
    >
      <div className="mb-4">
        <span
          className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide text-white"
          style={{ background: COLORS.primary }}
        >
          {workshop.level}
        </span>
      </div>

      <h3
        className="text-lg font-bold mb-2"
        style={{ color: COLORS.textDark }}
      >
        {workshop.title}
      </h3>

      <p className="text-sm mb-4" style={{ color: COLORS.textLight }}>
        {workshop.description}
      </p>

      <div className="space-y-2 mb-4 text-sm" style={{ color: COLORS.textLight }}>
        <div className="flex items-center justify-between">
          <span>Instructor:</span>
          <span className="font-semibold">{workshop.instructor}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Duration:</span>
          <span className="font-semibold">{workshop.duration}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Capacity:</span>
          <span className="font-semibold">{workshop.capacity} students</span>
        </div>
      </div>

      <Button href="/contact"
          variant="primary"
        >
        Enroll Now
      </Button>
    </motion.div>
  );
}

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  useLenis();
    const [isPreheaderOpen, setIsPreheaderOpen] = useState(true);

  const categories = ["All", "Workshop", "Seminar", "Fair", "Live Q&A"];

  const filteredEvents =
    selectedCategory && selectedCategory !== "All"
      ? UPCOMING_EVENTS.filter((event) => event.category === selectedCategory)
      : UPCOMING_EVENTS;

  return (
    <>
      <Cursor />
          <Trail />
          <EventPreheader onClose={setIsPreheaderOpen} />
          <Navbar isPreheaderOpen={isPreheaderOpen} />

            <main className="w-full">
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
                Events & Workshops
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              Upcoming Events
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
              Join us for webinars, workshops, and networking events designed to
              guide you through your university journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Events */}
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
                Featured Events
              </span>
            </div>
            <h2
              className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
              style={{ color: COLORS.textDark }}
            >
              Don&apos;t Miss Out
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {UPCOMING_EVENTS.slice(0, 3).map((event, idx) => (
              <FeaturedEventCard key={event.id} event={event} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* All Events with Filter */}
      <section
        className="relative py-20 md:py-32 px-6 md:px-12"
        style={{ background: COLORS.warmSand }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2
              className="text-3xl md:text-5xl font-bold mb-8 leading-tight"
              style={{ color: COLORS.textDark }}
            >
              All Events
            </h2>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() =>
                    setSelectedCategory(
                      category === "All" ? null : category
                    )
                  }
                  className="px-6 py-2 rounded-full font-semibold text-sm transition-all duration-200"
                  style={{
                    background:
                      selectedCategory === category ||
                      (category === "All" && selectedCategory === null)
                        ? COLORS.primary
                        : "white",
                    color:
                      selectedCategory === category ||
                      (category === "All" && selectedCategory === null)
                        ? "white"
                        : COLORS.textDark,
                    border: `2px solid ${COLORS.primary}`,
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredEvents.map((event, idx) => (
              <FeaturedEventCard key={event.id} event={event} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Workshops Section */}
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
                Multi-Week Programs
              </span>
            </div>
            <h2
              className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
              style={{ color: COLORS.textDark }}
            >
              In-Depth Workshops
            </h2>
            <p className="text-lg" style={{ color: COLORS.textLight }}>
              Transform your skills with our comprehensive workshop programs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WORKSHOPS.map((workshop, idx) => (
              <WorkshopCard key={workshop.id} workshop={workshop} index={idx} />
            ))}
          </div>
        </div>
      </section>

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
              Ready to Transform Your Future?
            </h2>
            <p
              className="text-lg mb-8 leading-relaxed"
              style={{ color: COLORS.textLight }}
            >
              Join thousands of students who have already taken their first step
              toward their dream university.
            </p>
            <button
              className="inline-flex items-center gap-3 px-8 py-4 text-white font-bold text-sm tracking-wide uppercase rounded-full hover:opacity-90 transition-opacity duration-200"
              style={{
                background: `linear-gradient(135deg, ${COLORS.primary}, #F45104)`,
              }}
            >
              Register Now
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
            </button>
          </motion.div>
        </div>
      </section>
    </main>
     <Footer />
    </>
  
  );
}
