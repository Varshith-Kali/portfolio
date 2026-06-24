"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import { SectionLabel } from "../shared/SectionLabel";

export function ContactSection() {
  return (
    <section id="contact" className="relative w-full py-20 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <SectionLabel sectionId="contact" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 max-w-5xl"
        >
          <h2 className="display-mega text-[clamp(2.5rem,9vw,8rem)] text-foreground">
            Let&apos;s build
            <br />
            <span className="text-cyan text-glow-cyan">secure intelligence.</span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Hiring for an AI security role? Hardening a GenAI platform? Standing up an AI red
            team? I&apos;m open to new full-time work.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16"
        >
          <a href={`mailto:${profile.email}`} className="group inline-flex items-center gap-4">
            <span className="display-large text-3xl text-foreground transition group-hover:text-cyan md:text-5xl">
              {profile.email}
            </span>
            <span className="inline-block text-2xl text-muted-foreground transition group-hover:translate-x-2 group-hover:text-cyan md:text-3xl">
              →
            </span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 flex flex-wrap gap-x-12 gap-y-6 border-t border-foreground/10 pt-10"
        >
          {[
            { label: "GitHub", value: profile.github, href: `https://${profile.github}` },
            { label: "LinkedIn", value: profile.linkedin, href: `https://${profile.linkedin}` },
            { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
            { label: "Location", value: profile.location, href: undefined },
          ].map((item) => (
            <div key={item.label}>
              <div className="font-mono-tech text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
                {item.label}
              </div>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="mt-2 block text-sm text-foreground transition hover:text-cyan md:text-base"
                >
                  {item.value}
                </a>
              ) : (
                <div className="mt-2 text-sm text-foreground/80 md:text-base">{item.value}</div>
              )}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 flex flex-col gap-4 border-t border-foreground/10 pt-8 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="display-large text-xl text-foreground">{profile.name}</div>
            <div className="mt-1 font-mono-tech text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {profile.role} · {profile.location}
            </div>
          </div>
          <div className="font-mono-tech text-xs uppercase tracking-wider text-muted-foreground/50">
            Built with Next.js · Three.js · Framer Motion
          </div>
        </motion.div>
      </div>
    </section>
  );
}
