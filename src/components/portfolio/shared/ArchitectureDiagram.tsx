"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";

/**
 * Clean 2D layered architecture diagram.
 * Two columns (one per project), 4 stacked layers, components as monospace chips.
 */
export function ArchitectureDiagram() {
  return (
    <div className="grid gap-px overflow-hidden rounded-lg border border-foreground/10 bg-foreground/5 md:grid-cols-2">
      {projects.map((project, pi) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: pi * 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="bg-background p-8 md:p-10"
        >
          <div className="flex items-baseline justify-between border-b border-foreground/10 pb-5">
            <div>
              <h3 className="display-large text-2xl text-foreground">{project.name}</h3>
              <p className="mt-1 text-base text-muted-foreground">{project.subtitle}</p>
            </div>
            <span className="font-mono-tech text-xs uppercase tracking-wider text-cyan">
              {project.category}
            </span>
          </div>

          <div className="mt-8 space-y-6">
            {project.architecture.map((layer, li) => (
              <div key={layer.layer} className="grid grid-cols-[64px_1fr] gap-3 sm:grid-cols-[80px_1fr] sm:gap-4 md:grid-cols-[100px_1fr] md:gap-6">
                <div className="flex items-start pt-1">
                  <div>
                    <div className="font-mono-tech text-[10px] text-cyan tabular-nums">
                      L{String(li + 1).padStart(2, "0")}
                    </div>
                    <div className="mt-1 font-mono-tech text-xs uppercase tracking-wider text-muted-foreground">
                      {layer.layer}
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {layer.components.map((c) => (
                    <span
                      key={c}
                      className="rounded-md border border-foreground/10 bg-foreground/[0.03] px-2.5 py-1 font-mono-tech text-xs text-foreground/80"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
