"use client";

import { motion } from "framer-motion";
import { projects, type Project } from "@/data/portfolio";
import { SectionLabel } from "../shared/SectionLabel";
import { ArchitectureDiagram } from "../shared/ArchitectureDiagram";

export function FeaturedSystemsSection() {
  return (
    <section id="systems" className="relative w-full py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <SectionLabel sectionId="systems" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 max-w-4xl"
        >
          <h2 className="display-large text-5xl text-foreground md:text-7xl lg:text-8xl">
            Side
            <br />
            <span className="text-muted-foreground">projects.</span>
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Two systems that shaped how I think about security and AI. Real architectures,
            real metrics — not prototypes.
          </p>
        </motion.div>

        {/* Architecture diagram */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 flex items-center gap-4"
          >
            <span className="font-mono-tech text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Architecture
            </span>
            <div className="h-px flex-1 bg-foreground/10" />
          </motion.div>
          <ArchitectureDiagram />
        </div>

        {/* Cinematic project chapters */}
        <div className="mt-20 space-y-16 md:space-y-24">
          {projects.map((project, i) => (
            <ProjectChapter key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectChapter({ project, index }: { project: Project; index: number }) {
  const isReversed = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="grid gap-12 lg:grid-cols-12 lg:gap-16"
    >
      <div className={`lg:col-span-5 ${isReversed ? "lg:order-2" : ""}`}>
        <div className="flex items-baseline gap-3 font-mono-tech text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="text-cyan tabular-nums">{String(index + 1).padStart(2, "0")}</span>
          <span>/</span>
          <span>{project.category}</span>
          <span className="text-foreground/30">·</span>
          <span>{project.year}</span>
        </div>

        <h3 className="display-large mt-6 text-5xl text-foreground md:text-6xl">{project.name}</h3>
        <p className="text-muted-foreground mt-2 text-lg md:text-xl">{project.subtitle}</p>

        <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
          {project.narrative}
        </p>

        <div className="mt-10 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-foreground/10 px-3 py-1 font-mono-tech text-xs text-muted-foreground"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className={`lg:col-span-7 ${isReversed ? "lg:order-1" : ""}`}>
        <div className="grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-foreground/10 bg-foreground/5">
          {project.metrics.map((m) => (
            <div key={m.label} className="bg-background p-6 md:p-8">
              <div className="display-large text-4xl text-cyan md:text-5xl">{m.value}</div>
              <div className="mt-2 text-xs leading-snug text-muted-foreground md:text-sm">{m.label}</div>
            </div>
          ))}
        </div>

        <ul className="mt-10 space-y-4">
          {project.highlights.map((h, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-start gap-4 border-b border-foreground/8 pb-4"
            >
              <span className="mt-1 font-mono-tech text-xs text-cyan tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm leading-relaxed text-foreground/80 md:text-base">{h}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
