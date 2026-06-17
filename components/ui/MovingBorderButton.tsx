"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MovingBorderButtonProps {
  borderRadius?: string;
  children: React.ReactNode;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  as?: "button" | "a";
  href?: string;
  onClick?: () => void;
}

export function MovingBorderButton({
  borderRadius = "1.75rem",
  children,
  containerClassName,
  borderClassName,
  duration = 3000,
  className,
  as = "button",
  href,
  onClick,
}: MovingBorderButtonProps) {
  const Component = as;

  return (
    <Component
      href={href}
      onClick={onClick}
      className={cn(
        "relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2",
        containerClassName
      )}
      style={{ borderRadius }}
    >
      {/* Animated border */}
      <motion.div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} - 2px)` }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: duration / 1000, ease: "linear" }}
      >
        {/* Gradient beam that rotates */}
        <div
          className={cn(
            "absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_340deg,#D51E20_360deg)]",
            borderClassName
          )}
        />
      </motion.div>

      {/* Inner content */}
      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center bg-[#0F0F0F] text-white font-bold text-sm uppercase tracking-wider px-6 gap-2 backdrop-blur-3xl",
          className
        )}
        style={{ borderRadius: `calc(${borderRadius} - 2px)` }}
      >
        {children}
      </div>
    </Component>
  );
}

export function MovingBorderLink({
  borderRadius = "1.75rem",
  children,
  containerClassName,
  borderClassName,
  duration = 3000,
  className,
  href,
}: MovingBorderButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none cursor-pointer",
        containerClassName
      )}
      style={{ borderRadius }}
    >
      <motion.div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} - 2px)` }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: duration / 1000, ease: "linear" }}
      >
        <div
          className={cn(
            "absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_340deg,#D51E20_360deg)]",
            borderClassName
          )}
        />
      </motion.div>

      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center bg-[#FBF9F6] text-[#0F0F0F] font-bold text-sm uppercase tracking-wider px-6 gap-2",
          className
        )}
        style={{ borderRadius: `calc(${borderRadius} - 2px)` }}
      >
        {children}
      </div>
    </a>
  );
}
