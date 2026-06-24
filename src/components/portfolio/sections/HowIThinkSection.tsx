"use client";

import { motion } from "framer-motion";
import { pillars } from "@/data/portfolio";
import { SectionLabel } from "../shared/SectionLabel";

export function HowIThinkSection() {
  return (
    <section id="thinking" className="relative w-full py-20 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <SectionLabel sectionId="thinking" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 max-w-4xl"
        >
          <h2 className="display-large text-5xl text-foreground md:text-7xl lg:text-8xl">
            Three pillars,
            <br />
            <span className="text-muted-foreground">one center.</span>
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Security, automation, and AI — not separate disciplines, but three angles on the same
            problem. Where they meet: secure intelligence.
          </p>
        </motion.div>

        {/* Pillars visualization */}
        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {pillars.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono-tech text-xs text-cyan tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display-large text-2xl text-foreground md:text-3xl">{p.name}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                {p.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1.5">
                {p.items.map((item) => (
                  <span key={item} className="text-xs text-foreground/60">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Center statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 flex flex-col items-center text-center"
        >
          <div className="font-mono-tech text-xs uppercase tracking-[0.3em] text-muted-foreground/60">
            Where they meet
          </div>
          <div className="mt-6 display-large text-4xl text-cyan text-glow-cyan md:text-6xl">
            Secure Intelligence
          </div>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
            Systems that are secure by design, automated by default, and intelligent enough to
            defend themselves.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
