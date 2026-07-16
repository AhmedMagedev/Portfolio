"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ComponentPropsWithoutRef, ElementType } from "react";
import { defaultTransition, getVariants, viewport } from "@/lib/motion";

type RevealProps<T extends ElementType> = {
  as?: T;
  delay?: number;
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Reveal<T extends ElementType = "div">({
  as,
  delay = 0,
  className,
  children,
  ...props
}: RevealProps<T>) {
  const Component = (as ?? "div") as ElementType;
  const MotionComponent = motion.create(Component);
  const reducedMotion = useReducedMotion();
  const variants = getVariants(!!reducedMotion);

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants}
      transition={{ ...defaultTransition, delay }}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
