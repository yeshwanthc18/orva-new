"use client";

import { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  style?: React.CSSProperties;
  filter?: boolean;
  duration?: number;
}

export function TextGenerateEffect({
  words,
  className,
  style,
  filter = true,
  duration = 0.5,
}: TextGenerateEffectProps) {
  const [scope, animate] = useAnimate();
  const [rendered, setRendered] = useState(false);
  const wordsArray = words.split(" ");

  useEffect(() => {
    if (!rendered) return;
    animate(
      "span",
      { opacity: 1, filter: filter ? "blur(0px)" : "none" },
      { duration, delay: stagger(0.08) }
    );
  }, [rendered, animate, duration, filter]);

  return (
    <motion.div
      ref={scope}
      className={cn("font-bold", className)}
      style={style}
      onViewportEnter={() => setRendered(true)}
    >
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className="inline-block opacity-0 mr-[0.25em]"
          style={{ filter: filter ? "blur(10px)" : "none" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
