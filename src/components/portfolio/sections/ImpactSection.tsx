"use client";

import { motion } from "framer-motion";
import { metrics } from "@/data/portfolio";
import { SectionLabel } from "../shared/SectionLabel";

export function ImpactSection() {
  return (
    <section id="impact" className="relative w-full py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <SectionLabel sectionId="impact" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 max-w-4xl"
        >
          <h2 className="display-large text-5xl text-foreground md:text-7xl lg:text-8xl">
            Impact.
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Real numbers from real systems. No vanity metrics.
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-foreground/10 bg-foreground/5 md:grid-cols-3">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="bg-background p-8 md:p-10"
            >
              <div className="display-large text-5xl text-cyan md:text-6xl">{m.value}</div>
              <div className="mt-3 text-sm leading-snug text-foreground md:text-base">{m.label}</div>
              <div className="mt-2 font-mono-tech text-[10px] uppercase tracking-wider text-muted-foreground/60">
                {m.context}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
