"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";
import { SectionLabel } from "../shared/SectionLabel";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative w-full py-20 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <SectionLabel sectionId="experience" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 max-w-4xl"
        >
          <h2 className="display-large text-5xl text-foreground md:text-7xl lg:text-8xl">
            Experience.
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Real work in regulated environments. Every entry below is an audit cycle, a shipped
            tool, or a control validated.
          </p>
        </motion.div>

        <div className="mt-20 space-y-px overflow-hidden rounded-lg border border-foreground/10 bg-foreground/5">
          {experiences.map((exp, i) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-8 bg-background p-8 md:grid-cols-[1fr_2fr] md:gap-16 md:p-12"
            >
              <div>
                <div className="font-mono-tech text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {exp.period}
                </div>
                <h3 className="display-large mt-4 text-2xl text-foreground md:text-3xl">
                  {exp.company}
                </h3>
                <div className="mt-1 text-sm text-cyan">{exp.role}</div>
                <div className="mt-2 font-mono-tech text-xs uppercase tracking-wider text-muted-foreground/70">
                  {exp.location}
                </div>
              </div>

              <div>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {exp.description}
                </p>
                <ul className="mt-6 space-y-4">
                  {exp.achievements.map((a, ai) => (
                    <li
                      key={ai}
                      className="flex items-start gap-4 text-sm leading-relaxed text-foreground/80 md:text-base"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-2">
                  {exp.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-foreground/10 px-3 py-1 font-mono-tech text-xs text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
