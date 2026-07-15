import { motion } from "framer-motion";

export function QuizHero() {
  return (
    <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-[#FAFAF7] to-[#F5F5F5]">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#D51E20] rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#F5F5F5] rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-12 pt-16 sm:pt-20 md:pt-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 sm:space-y-6"
        >
          <div className="flex items-center gap-3 mb-2 sm:mb-4">
            <div className="w-1 h-8 bg-[#D51E20] rounded-full" />
            <span className="text-[10px] sm:text-sm font-bold tracking-wider text-[#D51E20] uppercase">
              University Placement
            </span>
          </div>

          <h1 className="text-[clamp(32px,7vw,64px)] leading-[1.1] tracking-tight font-bold text-[#0F0F0F] max-w-3xl">
            Find Your{" "}
            <span className="text-[#D51E20]">Perfect University</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl text-[#666666] font-light"
          >
            Just 6 quick questions to discover whether you&apos;re UK or US
            bound—and which universities fit your unique strengths.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex items-center gap-3 sm:gap-6 pt-2 sm:pt-4 flex-wrap"
          >
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-semibold text-[#0F0F0F]">
                2 minutes
              </span>
            </div>
            <div className="w-px h-6 bg-[#E5E5E5]" />
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-semibold text-[#0F0F0F]">
                6 questions
              </span>
            </div>
            <div className="w-px h-6 bg-[#E5E5E5]" />
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-semibold text-[#0F0F0F]">
                Top universities
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
