import { motion } from "framer-motion";
import { COLORS } from "@/lib/constants";

export default function ContactHero() {
  return (
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
              Get in Touch
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            Let&apos;s Start a Conversation
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
            Have questions about our services? Want to learn more about how ORVA can help your university journey? Reach out to us anytime. We&apos;re here to listen.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
