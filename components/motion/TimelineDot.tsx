"use client";

import { motion, useReducedMotion } from "framer-motion";
import { defaultTransition, viewport } from "@/lib/motion";

export function TimelineDot() {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <div className="absolute left-0 top-2 hidden h-3.5 w-3.5 rounded-full border-2 border-accent bg-surface sm:block" />
    );
  }

  return (
    <motion.div
      className="absolute left-0 top-2 hidden h-3.5 w-3.5 rounded-full border-2 border-accent bg-surface sm:block"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={viewport}
      transition={defaultTransition}
    />
  );
}
