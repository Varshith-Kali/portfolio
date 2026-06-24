"use client";

import { motion } from "framer-motion";
import { evolutionStages } from "@/data/portfolio";
import { SectionLabel } from "../shared/SectionLabel";

export function EvolutionSection() {
  return (
    <section id="evolution" className="relative w-full py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <SectionLabel sectionId="evolution" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 max-w-4xl"
        >
          <h2 className="display-large text-5xl text-foreground md:text-7xl lg:text-8xl">
            My
            <br />
            <span className="text-muted-foreground">evolution.</span>
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            From breaking systems, to governing them, to automating them, to building
            intelligent ones — and now, to securing the intelligence itself.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mt-16">
          {/* Horizontal line for desktop */}
          <div className="hidden md:block relative">
            <div className="absolute left-0 right-0 top-6 h-px bg-foreground/10" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
              style={{ originX: 0 }}
              className="absolute left-0 right-0 top-6 h-px bg-gradient-to-r from-cyan via-cyan/40 to-transparent"
            />
          </div>

          <div className="grid gap-10 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-4 lg:grid-cols-6">
            {evolutionStages.map((stage, i) => (
              <motion.div
                key={stage.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* Node */}
                <div className="relative mb-6">
                  <div className="h-12 w-12 rounded-full border border-foreground/15 bg-background flex items-center justify-center">
                    <span className="font-mono-tech text-xs text-cyan tabular-nums">{stage.n}</span>
                  </div>
                  {i === evolutionStages.length - 1 && (
                    <div className="absolute -inset-1 rounded-full border border-cyan/30" />
                  )}
                </div>

                {/* Content */}
                <div className="font-mono-tech text-[10px] uppercase tracking-wider text-muted-foreground/60">
                  {stage.year}
                </div>
                <h3 className="display-large mt-2 text-lg text-foreground">{stage.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{stage.description}</p>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground/60">{stage.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
