"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { toolEvaluations } from "@/data/portfolio";
import { SectionLabel } from "../shared/SectionLabel";

export function ToolEvaluationSection() {
  const [active, setActive] = useState(toolEvaluations[0].id);
  const activeTool = toolEvaluations.find((t) => t.id === active);

  return (
    <section id="tools" className="relative w-full py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <SectionLabel sectionId="tools" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 max-w-4xl"
        >
          <h2 className="display-large text-5xl text-foreground md:text-7xl lg:text-8xl">
            Open-Source
            <br />
            <span className="text-muted-foreground">evaluations.</span>
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Hands-on testing across the AI security tooling landscape. What each tool tests,
            where it helps, where it falls short, and how I use it.
          </p>
        </motion.div>

        {/* Tool selector strip */}
        <div className="mt-20 flex flex-wrap gap-2">
          {toolEvaluations.map((tool, i) => (
            <motion.button
              key={tool.id}
              onClick={() => setActive(tool.id)}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`group rounded-full border px-4 py-2 font-mono-tech text-sm transition ${
                active === tool.id
                  ? "border-cyan/50 bg-cyan/10 text-cyan"
                  : "border-foreground/10 text-muted-foreground hover:border-foreground/30 hover:text-foreground"
              }`}
            >
              {tool.name}
            </motion.button>
          ))}
        </div>

        {/* Tool detail card */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 rounded-lg border border-foreground/10 bg-background p-8 md:p-12"
        >
          {activeTool && (
            <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-16">
              <div>
                <div className="font-mono-tech text-xs uppercase tracking-wider text-muted-foreground">
                  {activeTool.category}
                </div>
                <h3 className="display-large mt-2 text-4xl text-foreground md:text-5xl">
                  {activeTool.name}
                </h3>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {activeTool.tests}
                </p>
              </div>

              <div className="space-y-8">
                <DetailBlock label="Where it helps" body={activeTool.helps} accent="cyan" />
                <DetailBlock label="Limitations" body={activeTool.limitations} accent="violet" />
                <DetailBlock label="My observations" body={activeTool.observations} accent="cyan" />
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function DetailBlock({ label, body, accent }: { label: string; body: string; accent: "cyan" | "violet" }) {
  const dotClass = accent === "cyan" ? "bg-cyan" : "bg-violet";
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className={`h-1.5 w-1.5 rounded-full ${dotClass}`} />
        <span className="font-mono-tech text-xs uppercase tracking-[0.25em] text-muted-foreground">
          {label}
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-foreground/80 md:text-base">{body}</p>
    </div>
  );
}
