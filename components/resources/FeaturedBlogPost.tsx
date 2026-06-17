"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const COLORS = {
  primary: "#D51E20",
  warmCream: "#FBF9F6",
  textDark: "#1C1C1C",
  textLight: "rgba(28,28,28,0.78)",
  textMuted: "rgba(28,28,28,0.45)",
};

interface BlogPost {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
}

interface FeaturedBlogPostProps {
  post: BlogPost;
  index: number;
}

export default function FeaturedBlogPost({ post, index }: FeaturedBlogPostProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.3, once: false });

  return (
    <motion.article
      ref={containerRef}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <div className="relative h-64 rounded-lg overflow-hidden mb-6">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
          <div className="p-4 text-white">
            <span className="text-sm font-semibold">Read More</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-3 text-xs">
          <span
            className="font-bold tracking-[0.1em] uppercase px-2 py-1 rounded"
            style={{ background: `${COLORS.primary}15`, color: COLORS.primary }}
          >
            {post.category}
          </span>
          <span style={{ color: COLORS.textMuted }}>{post.date}</span>
          <span style={{ color: COLORS.textMuted }}>•</span>
          <span style={{ color: COLORS.textMuted }}>{post.readTime}</span>
        </div>

        <h3 className="text-xl font-bold leading-tight group-hover:text-red-600 transition-colors" style={{ color: COLORS.textDark }}>
          {post.title}
        </h3>

        <p className="text-sm leading-relaxed" style={{ color: COLORS.textLight }}>
          {post.excerpt}
        </p>
      </div>
    </motion.article>
  );
}
