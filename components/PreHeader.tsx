"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface EventPreheaderProps {
  onClose?: (isOpen: boolean) => void;
}

export default function EventPreheader({ onClose }: EventPreheaderProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 300);
    return () => clearTimeout(t);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    onClose?.(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 left-0 right-0 z-[600] bg-gradient-to-r from-[#F75105] to-[#AA1A12] backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-wider text-white whitespace-nowrap flex-shrink-0">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Live Event
              </span>
              <p className="text-white text-sm font-semibold truncate">
                Join us for the ORVA Education Summit 2026 — Learn from industry leaders
              </p>
            </div>

            <motion.a
              href="/events"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-1.5 bg-white text-red-600 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap hover:shadow-lg transition-shadow duration-200 flex-shrink-0"
            >
              Learn More
            </motion.a>

            <button
              onClick={handleClose}
              aria-label="Close announcement"
              className="hidden sm:flex items-center justify-center w-8 h-8 rounded-lg hover:bg-white/10 transition-colors duration-200 flex-shrink-0 text-white"
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </motion.div>
        
      )}
    </AnimatePresence>
  );
}
