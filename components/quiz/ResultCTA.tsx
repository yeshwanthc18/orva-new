import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

interface ResultCTAProps {
  onResetQuiz: () => void;
}

export function ResultCTA({ onResetQuiz }: ResultCTAProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="text-center space-y-8 mt-12"
    >
      <div className="space-y-4">
        <Button href="/contact" variant="secondaryLight" size="lg" className="w-full md:w-auto px-12 py-4 text-lg">
          Explore Universities
        </Button>
        <p className="text-white/70 text-sm">
          Get personalized guidance from our education advisors
        </p>
      </div>

      <div className="border-t border-white/10 pt-8">
        <button
          onClick={onResetQuiz}
          className="inline-flex items-center gap-2 px-6 py-3 text-white/70 font-semibold text-sm tracking-wide uppercase rounded-lg hover:text-white hover:bg-white/10 transition-all duration-300 border border-white/20 hover:border-white/40"
        >
          ↻ Retake Quiz
        </button>
      </div>

      <div className="pt-4 space-y-2">
        <p className="text-white/60 italic text-base leading-relaxed max-w-2xl mx-auto">
          &ldquo;These recommendations are starting points for your conversation. Every student is unique, and the right university choice depends on far more than just test scores.&rdquo;
        </p>
        <p className="text-white/50 text-xs font-light">— Orva Advisors</p>
      </div>
    </motion.div>
  );
}
