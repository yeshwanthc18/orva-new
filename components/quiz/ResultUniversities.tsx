import { motion } from "framer-motion";

interface QuizResult {
  destination: "UK" | "US";
  ukPercent: number;
  usPercent: number;
  subject: string;
  tier: string;
  ukUniversity: string;
  usUniversity: string;
}

interface ResultUniversitiesProps {
  result: QuizResult;
}

export function ResultUniversities({ result }: ResultUniversitiesProps) {
  const universities = [
    { name: result.ukUniversity, country: "United Kingdom", flag: "🇬🇧" },
    { name: result.usUniversity, country: "United States", flag: "🇺🇸" },
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold text-white mb-6">
        Your Recommended Universities
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        {universities.map((uni, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
            className={`p-6 rounded-2xl border backdrop-blur-md hover:-translate-y-1 transition-all duration-300 ${
              idx === 0
                ? "bg-[#D51E20]/20 border-[#D51E20]/50"
                : "bg-white/10 border-white/[0.06]"
            }`}
          >
            <div className="flex items-start gap-3 mb-3">
              <span className="text-2xl">{uni.flag}</span>
              <div>
                <p className="text-white/70 text-sm font-semibold">{uni.country}</p>
                <h4 className="text-lg font-bold text-white">{uni.name}</h4>
              </div>
            </div>
            {idx === 0 && (
              <div className="mt-3 inline-block px-3 py-1 bg-[#D51E20] text-white text-xs font-bold rounded-full">
                Best Fit
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
