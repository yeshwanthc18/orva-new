import { motion } from "framer-motion";
import Link from "next/link";
import { COLORS } from "@/lib/constants";

export default function StoryCTA() {
  return (
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
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Your Story Could Be Next
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            If you&apos;re ready to transform your university journey, let&apos;s talk. We&apos;re here to guide you from ambition to admission and beyond.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 text-white font-bold text-sm tracking-wide uppercase rounded-full hover:bg-red-700 transition-colors duration-200"
            style={{
              background: `linear-gradient(135deg, ${COLORS.primary}, #F45104)`,
            }}
          >
            Begin Your Journey
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
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
