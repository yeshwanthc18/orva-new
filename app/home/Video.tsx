"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { COLORS } from "@/lib/constants";

export default function BrandVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: COLORS.warmCream }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          playsInline
          muted
          preload="auto"
          className="w-full h-auto object-cover"
        >
          <source src="/v2.mp4" type="video/mp4" />
        </video>

        {/* Optional subtle overlay */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />

        {/* Mute Button */}
        <button
          onClick={toggleMute}
          className="absolute bottom-6 right-6 z-20 flex items-center justify-center w-12 h-12 rounded-full backdrop-blur-md bg-white/80 border border-white/30 shadow-lg transition-all hover:scale-105"
          aria-label={muted ? "Unmute video" : "Mute video"}
        >
          {muted ? (
            <VolumeX size={20} color="#D51E20" />
          ) : (
            <Volume2 size={20} color="#D51E20" />
          )}
        </button>
      </motion.div>
    </section>
  );
}