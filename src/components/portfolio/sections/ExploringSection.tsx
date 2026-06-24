"use client";

import { motion } from "framer-motion";
import { exploringTopics } from "@/data/portfolio";
import { SectionLabel } from "../shared/SectionLabel";

export function ExploringSection() {
  return (
    <section id="exploring" className="relative w-full py-20 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <SectionLabel sectionId="exploring" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 max-w-4xl"
        >
          <h2 className="display-large text-5xl text-foreground md:text-7xl lg:text-8xl">
            What I&apos;m
            <br />
            <span className="text-muted-foreground">exploring.</span>
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Where AI security is heading — and where I&apos;m putting my research time.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-lg border border-foreground/10 bg-foreground/5 md:grid-cols-2 lg:grid-cols-3">
          {exploringTopics.map((topic, i) => (
            <motion.div
              key={topic.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-background p-8 transition hover:bg-foreground/[0.02] md:p-10"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono-tech text-[10px] text-muted-foreground tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display-large text-base text-foreground transition group-hover:text-cyan md:text-lg">
                  {topic.name}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {topic.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
