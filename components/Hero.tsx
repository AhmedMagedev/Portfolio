"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { defaultTransition, getScaleVariants } from "@/lib/motion";
import { site } from "@/content/site";

export function Hero() {
  const reducedMotion = useReducedMotion();
  const scaleVariants = getScaleVariants(!!reducedMotion);

  return (
    <section id="about" className="border-b border-border py-20 sm:py-28">
      <div className="container-main">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_280px] lg:gap-16">
          <Stagger onMount>
            <StaggerItem>
              <p className="section-label mb-4">{site.title}</p>
            </StaggerItem>
            <StaggerItem>
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {site.name}
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-3 text-lg text-accent sm:text-xl">
                {site.subtitle}
              </p>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                {site.summary}
              </p>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${site.contact.email}`}
                  className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
                >
                  Work With Me
                </a>
                <a
                  href="#projects"
                  className="rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  View Projects
                </a>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-subtle">
                <a
                  href={`mailto:${site.contact.email}`}
                  className="transition-colors hover:text-accent"
                >
                  {site.contact.email}
                </a>
                <span>{site.contact.location}</span>
                <a
                  href={site.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  GitHub
                </a>
                <a
                  href={site.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  LinkedIn
                </a>
              </div>
            </StaggerItem>
          </Stagger>

          <motion.div
            className="mx-auto lg:mx-0"
            initial="hidden"
            animate="visible"
            variants={scaleVariants}
            transition={{ ...defaultTransition, delay: 0.1 }}
          >
            <div className="relative aspect-square w-56 overflow-hidden rounded-2xl border border-border bg-surface shadow-sm sm:w-64 lg:w-72">
              <Image
                src="/profile.jpg"
                alt={site.name}
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 1024px) 256px, 288px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
