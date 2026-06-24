"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { architectureReviews } from "@/data/portfolio";
import { SectionLabel } from "../shared/SectionLabel";

export function ArchitectureReviewsSection() {
  const [active, setActive] = useState(architectureReviews[0].id);
  const activeReview = architectureReviews.find((r) => r.id === active);

  return (
    <section id="architecture" className="relative w-full py-20 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <SectionLabel sectionId="architecture" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 max-w-4xl"
        >
          <h2 className="display-large text-5xl text-foreground md:text-7xl lg:text-8xl">
            Architecture
            <br />
            <span className="text-muted-foreground">reviews.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Four classes of AI system I review in production. Each surfaces distinct threat
            surfaces, data flows, and required controls. Select a system type to explore.
          </p>
        </motion.div>

        {/* System type selector */}
        <div className="mt-20 grid gap-px overflow-hidden rounded-lg border border-foreground/10 bg-foreground/5 sm:grid-cols-2 md:grid-cols-4">
          {architectureReviews.map((review, i) => (
            <button
              key={review.id}
              onClick={() => setActive(review.id)}
              className={`bg-background p-6 text-left transition hover:bg-foreground/[0.02] md:p-8 ${
                active === review.id ? "bg-foreground/[0.04]" : ""
              }`}
            >
              <div className="font-mono-tech text-[10px] text-muted-foreground tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3
                className={`mt-3 display-large text-base transition md:text-lg ${
                  active === review.id ? "text-cyan" : "text-foreground/80"
                }`}
              >
                {review.name}
              </h3>
              <div className="mt-1 font-mono-tech text-[10px] uppercase tracking-wider text-muted-foreground/60">
                {review.category}
              </div>
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          {activeReview && (
            <motion.div
              key={activeReview.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 rounded-lg border border-foreground/10 bg-background p-8 md:p-12"
            >
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {activeReview.description}
              </p>

              <div className="mt-10 grid gap-12 md:grid-cols-2 md:gap-16">
                <div className="space-y-10">
                  <ReviewBlock title="Threat surfaces" items={activeReview.threatSurfaces} accent="violet" />
                  <ReviewBlock title="Guardrails" items={activeReview.guardrails} accent="cyan" />
                </div>
                <div className="space-y-10">
                  <ReviewBlock title="Data flows" items={activeReview.dataFlows} accent="cyan" />
                  <ReviewBlock title="Security controls" items={activeReview.controls} accent="violet" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function ReviewBlock({ title, items, accent }: { title: string; items: string[]; accent: "cyan" | "violet" }) {
  const dotClass = accent === "cyan" ? "bg-cyan" : "bg-violet";
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className={`h-1.5 w-1.5 rounded-full ${dotClass}`} />
        <span className="font-mono-tech text-xs uppercase tracking-[0.25em] text-muted-foreground">
          {title}
        </span>
      </div>
      <ul className="mt-4 space-y-2">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-3 font-mono-tech text-xs text-foreground/70 md:text-sm"
          >
            <span className="mt-1.5 text-muted-foreground/40">→</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
