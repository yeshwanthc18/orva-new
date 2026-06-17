"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import Trail from "@/components/Trail";
import { useLenis } from "@/hooks/useLenis";
import { FeaturedBlogPost, DownloadableGuide, FAQSection } from "@/components/resources";
import { COLORS } from "@/lib/constants";

const BLOG_POSTS = [
  {
    id: 1,
    category: "College Prep",
    title: "The Complete Guide to SAT vs ACT: Which Test Should You Take?",
    excerpt: "Understanding the differences between SAT and ACT to make the right choice for your profile and timeline.",
    date: "Mar 15, 2024",
    readTime: "8 min read",
    image: "/images/img02.jpeg",
    featured: true,
  },
  {
    id: 2,
    category: "Essays",
    title: "How to Write a Compelling University Essay from the Middle East",
    excerpt: "Strategies for showcasing your unique cultural perspective while appealing to international admissions teams.",
    date: "Mar 12, 2024",
    readTime: "6 min read",
    image: "/images/img03.jpeg",
    featured: true,
  },
  {
    id: 3,
    category: "Scholarships",
    title: "Maximizing Your Financial Aid Package: A GCC Student's Guide",
    excerpt: "Learn how to understand aid offers, negotiate packages, and find scholarships you qualify for.",
    date: "Mar 10, 2024",
    readTime: "7 min read",
    image: "/images/img04.jpeg",
    featured: true,
  },
  {
    id: 4,
    category: "Student Life",
    title: "First Year Abroad: Navigating Culture Shock and Thriving on Campus",
    excerpt: "Real advice from ORVA students who have successfully transitioned to universities in the UK, USA, and Canada.",
    date: "Mar 8, 2024",
    readTime: "9 min read",
    image: "/images/img05.jpeg",
    featured: false,
  },
  {
    id: 5,
    category: "University Selection",
    title: "Beyond Rankings: How to Choose a University That's Right for You",
    excerpt: "A framework for evaluating universities based on your values, interests, and post-graduation goals.",
    date: "Mar 5, 2024",
    readTime: "10 min read",
    image: "/images/img06.jpeg",
    featured: false,
  },
  {
    id: 6,
    category: "Applications",
    title: "Mastering the Common App: Timeline and Tips for Success",
    excerpt: "Step-by-step guidance through the Common Application process used by 900+ universities worldwide.",
    date: "Mar 1, 2024",
    readTime: "7 min read",
    image: "/images/img02.jpeg",
    featured: false,
  },
];

const GUIDES = [
  {
    id: 1,
    title: "The Complete University Application Timeline",
    description: "A comprehensive month-by-month timeline from junior year to enrollment, with key deadlines and action items.",
    downloadCount: 2450,
    type: "PDF Guide",
    icon: "📋",
  },
  {
    id: 2,
    title: "University Profile Checklist",
    description: "Evaluate your academic profile with our comprehensive assessment tool. Know your competitive range across universities.",
    downloadCount: 1890,
    type: "Interactive Checklist",
    icon: "✓",
  },
  {
    id: 3,
    title: "Essay Topic Ideas & Brainstorm Template",
    description: "50+ essay topic ideas specifically for Middle Eastern students, with a brainstorming framework.",
    downloadCount: 3120,
    type: "Worksheet",
    icon: "✏️",
  },
  {
    id: 4,
    title: "Scholarship Opportunities Database",
    description: "Searchable database of 500+ scholarships for international students from the GCC region.",
    downloadCount: 2890,
    type: "Database",
    icon: "💰",
  },
  {
    id: 5,
    title: "Interview Preparation Guide",
    description: "Everything you need to know about university interviews: types, common questions, and preparation strategies.",
    downloadCount: 2120,
    type: "PDF Guide",
    icon: "🎤",
  },
  {
    id: 6,
    title: "GCC Student FAQ for Top Universities",
    description: "Frequently asked questions answered by admissions officers from Oxford, MIT, Stanford, and more.",
    downloadCount: 1650,
    type: "FAQ Document",
    icon: "❓",
  },
];

const FAQS = [
  {
    question: "When should I start preparing for university applications?",
    answer: "The best time to start is during 10th or 11th grade. This gives you time to explore universities, prepare for standardized tests, and craft thoughtful essays. However, it's never too late—even 12th graders can successfully navigate the process with focused preparation.",
  },
  {
    question: "How long does the ORVA guidance process take?",
    answer: "Our comprehensive services typically span 6-9 months, from initial strategy to enrollment. This timeline is flexible and can be adjusted based on your starting point and target universities. We also offer accelerated programs for students starting in the 12th grade.",
  },
  {
    question: "What makes ORVA different from other admissions consultants?",
    answer: "We are based in and understand the GCC region deeply. Our team has 15+ years of experience placing GCC students in top universities worldwide. We don't just focus on getting you in—we measure success by your thriving in year one and beyond. Every plan is genuinely personalized, not templated.",
  },
  {
    question: "How much do ORVA services cost?",
    answer: "We offer flexible pricing starting from AED 15,000 for our Starter package up to custom Premium packages. Each tier includes varying levels of support and guidance. We can discuss your budget and create a customized plan that works for your family.",
  },
  {
    question: "Do you offer support for students applying to specific regions?",
    answer: "Yes! We specialize in US, UK, Canadian, and Netherlands-based universities. Our team has deep connections with institutions in these regions and understands their specific application requirements and expectations.",
  },
  {
    question: "Can you help with scholarships and financial aid?",
    answer: "Absolutely. We have a dedicated expert on our team who helps students identify scholarships, understand aid packages, and negotiate offers. We've helped students secure over $10M in scholarships collectively.",
  },
];

export default function ResourcesPage() {
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
                  Knowledge Hub
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                Resources & Guidance
              </h1>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
                Expert insights, guides, and tools to help you navigate your university journey with confidence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Blog Posts */}
        <section className="relative py-20 md:py-32 px-6 md:px-12" style={{ background: COLORS.warmCream }}>
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
                <span className="text-[10px] font-bold tracking-[0.35em] uppercase" style={{ color: COLORS.primary }}>
                  Featured Articles
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: COLORS.textDark }}>
                Latest Insights
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {BLOG_POSTS.slice(0, 3).map((post, idx) => (
                <FeaturedBlogPost key={post.id} post={post} index={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* All Blog Posts */}
        <section className="relative py-20 md:py-32 px-6 md:px-12" style={{ background: COLORS.warmSand }}>
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight" style={{ color: COLORS.textDark }}>
                All Articles
              </h2>
              <p className="text-lg" style={{ color: COLORS.textLight }}>
                Browse our complete archive of university guidance content
              </p>
            </motion.div>

            <div className="space-y-4">
              {BLOG_POSTS.slice(3).map((post, idx) => (
                <FeaturedBlogPost key={post.id} post={post} index={idx + 3} />
              ))}
            </div>
          </div>
        </section>

        {/* Downloadable Guides */}
        <section className="relative py-20 md:py-32 px-6 md:px-12" style={{ background: COLORS.warmCream }}>
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
                <span className="text-[10px] font-bold tracking-[0.35em] uppercase" style={{ color: COLORS.primary }}>
                  Free Tools
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: COLORS.textDark }}>
                Downloadable Guides & Tools
              </h2>
              <p className="text-lg" style={{ color: COLORS.textLight }}>
                Practical resources to support your university journey
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {GUIDES.map((guide, idx) => (
                <DownloadableGuide key={guide.id} guide={guide} index={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection faqs={FAQS} />

        {/* CTA Section */}
        <section className="relative py-20 md:py-28 px-6 md:px-12" style={{ background: COLORS.warmSand }}>
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: COLORS.textDark }}>
                Ready to Get Started?
              </h2>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: COLORS.textLight }}>
                Beyond resources, we offer personalized guidance tailored to your unique profile and goals.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 text-white font-bold text-sm tracking-wide uppercase rounded-full hover:opacity-90 transition-opacity duration-200"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.primary}, #F45104)`,
                }}
              >
                Schedule Consultation
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
