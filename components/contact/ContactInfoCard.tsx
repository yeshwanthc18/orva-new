import { motion } from "framer-motion";
import { COLORS } from "@/lib/constants";

interface ContactInfoCardProps {
  icon: string;
  title: string;
  details: string[];
  index: number;
}

export default function ContactInfoCard({
  icon,
  title,
  details,
  index,
}: ContactInfoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="p-8 rounded-lg bg-white border border-black/[0.06] hover:border-red-300 transition-all"
    >
      {/* <div className="text-4xl mb-4">{icon}</div> */}
      <h3 className="text-xl font-bold mb-4" style={{ color: COLORS.textDark }}>
        {title}
      </h3>
      <div className="space-y-2">
        {details.map((detail, idx) => (
          <p key={idx} className="text-sm" style={{ color: COLORS.textMuted }}>
            {detail}
          </p>
        ))}
      </div>
    </motion.div>
  );
}
