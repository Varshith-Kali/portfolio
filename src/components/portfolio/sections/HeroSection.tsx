"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import dynamic from "next/dynamic";
import { profile } from "@/data/portfolio";

const HeroVisual = dynamic(() => import("../three/HeroVisual").then((m) => m.HeroVisual), { ssr: false });

/**
 * Hero — split layout.
 * Left: name + subheadline + role tags + CTAs (60%)
 * Right: ultra-premium 3D AI agent visual (40%)
 * Mobile: stacked — text first, visual below.
 */
export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} id="hero" className="relative min-h-screen w-full overflow-hidden">
      {/* === Background layers === */}

      {/* Fine dot grid — subtle, left side only */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, oklch(0.98 0.002 250 / 0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 60% 80% at 30% 50%, black 20%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 80% at 30% 50%, black 20%, transparent 70%)",
        }}
      />

      {/* Soft cyan glow — bottom center */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/3 h-[300px] w-[400px]"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.78 0.16 195 / 0.06) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Top + bottom fade */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />

      {/* === Content === */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 md:px-12 lg:px-16"
      >
        <div className="grid flex-1 items-center gap-8 md:gap-4 lg:gap-8 md:grid-cols-[1.2fr_1fr] lg:grid-cols-[1.3fr_1fr]">
          {/* === LEFT: Text === */}
          <div className="flex flex-col justify-center py-20 md:py-0">
            {/* Role label above name */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-px w-8 bg-cyan/50" />
              <span className="font-mono-tech text-xs uppercase tracking-[0.3em] text-cyan">
                AI Security Engineer
              </span>
            </motion.div>

            {/* Name — single line, balanced */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="display-mega text-[clamp(2.5rem,7vw,7rem)] text-foreground leading-[0.95]"
            >
              Varshith Puli
            </motion.h1>

            {/* Subheadline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 max-w-xl"
            >
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg lg:text-xl">
                {profile.subheadline}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono-tech text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
                <span>AI Red Teaming</span>
                <span className="text-foreground/20">·</span>
                <span>Secure Agent Systems</span>
                <span className="text-foreground/20">·</span>
                <span>AI Governance</span>
                <span className="text-foreground/20">·</span>
                <span>GenAI Platform Security</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono-tech text-xs uppercase tracking-[0.2em] text-muted-foreground"
            >
              <a
                href="#evolution"
                className="group inline-flex items-center gap-2 text-foreground transition hover:text-cyan"
              >
                <span>Begin the story</span>
                <span className="inline-block transition group-hover:translate-x-1">→</span>
              </a>
              <span className="text-foreground/20">/</span>
              <button
                onClick={() => {
                  window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }));
                }}
                className="group inline-flex items-center gap-2 transition hover:text-foreground"
              >
                <span>Command palette</span>
                <kbd className="rounded border border-foreground/20 bg-foreground/5 px-1.5 py-0.5 text-[10px]">⌘K</kbd>
              </button>
            </motion.div>
          </div>

          {/* === RIGHT: 3D Visual — desktop/tablet only, hidden on phones === */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden h-[85vh] min-h-[620px] w-full md:block md:-mr-[12%] md:translate-x-[6%]"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="h-10 w-px bg-gradient-to-b from-transparent to-foreground/30" />
      </motion.div>
    </section>
  );
}
