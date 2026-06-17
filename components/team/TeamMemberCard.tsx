"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const COLORS = {
  primary: "#D51E20",
  textDark: "#1C1C1C",
  textLight: "rgba(28,28,28,0.78)",
  textMuted: "rgba(28,28,28,0.45)",
};

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  image: string;
  featured?: boolean;
}

interface TeamMemberCardProps {
  member: TeamMember;
  featured?: boolean;
}

export default function TeamMemberCard({ member, featured = false }: TeamMemberCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.35 });

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="rounded-lg overflow-hidden border border-black/[0.06] hover:border-red-300 transition-all group cursor-pointer bg-white"
    >
      <a href="#" className="block h-full">
        <div className="relative h-64 overflow-hidden bg-black/5">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
            <div className="text-white">
              <div className="text-xs font-bold tracking-[0.15em] uppercase mb-1">Expertise</div>
              <div className="flex flex-wrap gap-1">
                {member.expertise.map((exp, idx) => (
                  <span key={idx} className="text-xs bg-red-600 px-2 py-1 rounded">
                    {exp}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="text-xs font-bold tracking-[0.1em] uppercase mb-2" style={{ color: COLORS.primary }}>
            {featured ? "Leadership" : "Team"}
          </div>

          <h3 className="text-xl font-bold mb-1 group-hover:text-red-600 transition-colors" style={{ color: COLORS.textDark }}>
            {member.name}
          </h3>

          <p className="text-sm font-semibold mb-3" style={{ color: COLORS.primary }}>
            {member.role}
          </p>

          <p className="text-sm leading-relaxed" style={{ color: COLORS.textLight }}>
            {member.bio}
          </p>
        </div>
      </a>
    </motion.div>
  );
}
