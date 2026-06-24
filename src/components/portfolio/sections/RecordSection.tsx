"use client";

import { motion } from "framer-motion";
import { education, certifications, publications, vendorAssessments } from "@/data/portfolio";
import { SectionLabel } from "../shared/SectionLabel";

export function RecordSection() {
  return (
    <section id="principles" className="relative w-full py-20 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <SectionLabel sectionId="principles" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 max-w-4xl"
        >
          <h2 className="display-large text-5xl text-foreground md:text-7xl lg:text-8xl">
            POC&apos;s &
            <br />
            <span className="text-muted-foreground">research.</span>
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Vendor assessments, published research, education, and certifications.
          </p>
        </motion.div>

        {/* Vendor assessments strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20"
        >
          <div className="flex items-center gap-4">
            <span className="font-mono-tech text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Vendor assessments
            </span>
            <div className="h-px flex-1 bg-foreground/10" />
          </div>
          <div className="mt-6 grid gap-px overflow-hidden rounded-lg border border-foreground/10 bg-foreground/5 md:grid-cols-3">
            {vendorAssessments.map((v) => (
              <div key={v.name} className="bg-background p-6 md:p-8">
                <div className="font-mono-tech text-[10px] uppercase tracking-wider text-cyan">
                  {v.category}
                </div>
                <h4 className="display-large mt-2 text-xl text-foreground">{v.name}</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.focus}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Research publication */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16"
        >
          <div className="flex items-center gap-4">
            <span className="font-mono-tech text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Research
            </span>
            <div className="h-px flex-1 bg-foreground/10" />
          </div>
          <div className="mt-8 space-y-px overflow-hidden rounded-lg border border-foreground/10 bg-foreground/5">
            {publications.map((p) => (
              <a
                key={p.title}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-background p-8 transition hover:bg-foreground/[0.02] md:p-10"
              >
                <div className="flex flex-wrap items-baseline gap-3 font-mono-tech text-xs uppercase tracking-wider text-muted-foreground">
                  <span className="text-cyan">{p.venue}</span>
                  <span className="text-foreground/20">·</span>
                  <span>{p.publisher}</span>
                  <span className="text-foreground/20">·</span>
                  <span>{p.year}</span>
                </div>
                <h3 className="display-large mt-4 max-w-3xl text-2xl text-foreground transition group-hover:text-cyan md:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                  {p.summary}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 font-mono-tech text-xs uppercase tracking-wider text-muted-foreground transition group-hover:text-cyan">
                  <span>Read paper</span>
                  <span className="inline-block transition group-hover:translate-x-1">→</span>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Education + Certifications */}
        <div className="mt-16 grid gap-16 md:grid-cols-2 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="font-mono-tech text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Education
            </div>
            <h4 className="display-large mt-4 text-2xl text-foreground md:text-3xl">
              {education.institution}
            </h4>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">{education.degree}</p>
            <div className="mt-8 flex items-baseline gap-4">
              <div>
                <div className="display-large text-4xl text-cyan">
                  {education.cgpa.split(" ")[0]}
                </div>
                <div className="font-mono-tech text-xs uppercase tracking-wider text-muted-foreground">
                  CGPA / {education.cgpa.split(" ")[1]}
                </div>
              </div>
              <div className="ml-auto font-mono-tech text-xs uppercase tracking-wider text-muted-foreground">
                {education.period}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="font-mono-tech text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Certifications
            </div>
            <div className="mt-6 space-y-6">
              {certifications.map((c) => (
                <div key={c.name} className="border-b border-foreground/8 pb-6">
                  <h4 className="text-base text-foreground md:text-lg">{c.name}</h4>
                  <div className="mt-1 font-mono-tech text-xs uppercase tracking-wider text-muted-foreground">
                    {c.issuer} · {c.year}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
