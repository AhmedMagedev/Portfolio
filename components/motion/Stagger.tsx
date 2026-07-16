"use client";

import { motion, useReducedMotion, type MotionProps } from "framer-motion";
import type { ComponentPropsWithoutRef, ElementType } from "react";
import {
  defaultTransition,
  getVariants,
  staggerContainer,
  viewport,
} from "@/lib/motion";

type StaggerProps<T extends ElementType> = {
  as?: T;
  className?: string;
  children: React.ReactNode;
  onMount?: boolean;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Stagger<T extends ElementType = "div">({
  as,
  className,
  children,
  onMount = false,
  ...props
}: StaggerProps<T>) {
  const Component = (as ?? "div") as ElementType;
  const MotionComponent = motion.create(Component);
  const reducedMotion = useReducedMotion();

  return (
    <MotionComponent
      initial="hidden"
      {...(onMount
        ? { animate: "visible" }
        : { whileInView: "visible", viewport })}
      variants={reducedMotion ? {} : staggerContainer}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}

type StaggerItemProps<T extends ElementType> = {
  as?: T;
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className"> &
  Pick<MotionProps, "whileHover" | "whileTap">;

export function StaggerItem<T extends ElementType = "div">({
  as,
  className,
  children,
  ...props
}: StaggerItemProps<T>) {
  const Component = (as ?? "div") as ElementType;
  const MotionComponent = motion.create(Component);
  const reducedMotion = useReducedMotion();
  const variants = getVariants(!!reducedMotion);

  return (
    <MotionComponent
      variants={variants}
      transition={defaultTransition}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
