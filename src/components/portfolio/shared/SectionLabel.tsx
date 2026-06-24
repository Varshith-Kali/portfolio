"use client";

import { motion } from "framer-motion";
import { navSections } from "@/data/portfolio";

export function SectionLabel({ sectionId }: { sectionId: string }) {
  const section = navSections.find((s) => s.id === sectionId);
  if (!section) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center gap-4"
    >
      <span className="font-mono-tech text-xs text-cyan tabular-nums">{section.index}</span>
      <div className="h-px w-8 bg-foreground/20" />
      <span className="font-mono-tech text-xs uppercase tracking-[0.25em] text-muted-foreground">
        {section.label}
      </span>
    </motion.div>
  );
}
