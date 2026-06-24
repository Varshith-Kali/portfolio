"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { securityDomains, type SecurityDomain } from "@/data/portfolio";
import { SectionLabel } from "../shared/SectionLabel";

const DOMAIN_ICONS: Record<string, React.ReactNode> = {
  shield: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2L4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z" />
    </svg>
  ),
  syringe: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M18 2l4 4M14 6l4-4M16 8l-3-3M14 10l-7 7-3 1 1-3 7-7M12 12l3 3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  bot: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="8" width="16" height="12" rx="2" />
      <path d="M12 4v4M9 14h.01M15 14h.01M9 18h6" strokeLinecap="round" />
    </svg>
  ),
  database: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </svg>
  ),
  brain: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 5a3 3 0 00-3 3 3 3 0 00-3 3 3 3 0 00-1 5.8c0 1.5 1 2.7 2.5 3a3 3 0 004.5 0 3 3 0 004.5 0c1.5-.3 2.5-1.5 2.5-3a3 3 0 00-1-5.8 3 3 0 00-3-3 3 3 0 00-3-3z" strokeLinejoin="round" />
      <path d="M12 5v15" strokeLinecap="round" />
    </svg>
  ),
  fence: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 6l2-2 2 2M10 6l2-2 2 2M16 6l2-2 2 2M4 6v14M8 6v14M12 6v14M16 6v14M20 6v14M3 11h18M3 16h18" strokeLinecap="round" />
    </svg>
  ),
  crosshair: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" strokeLinecap="round" />
    </svg>
  ),
};

export function AISecurityLabSection() {
  const [active, setActive] = useState<string | null>(securityDomains[0].id);
  const activeDomain = securityDomains.find((d) => d.id === active);

  return (
    <section id="ai-security" className="relative w-full py-20 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <SectionLabel sectionId="ai-security" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 max-w-4xl"
        >
          <h2 className="display-large text-5xl text-foreground md:text-7xl lg:text-8xl">
            AI security
            <br />
            <span className="text-cyan text-glow-cyan">operations.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            My differentiator. The domains I assess, secure, and red-team across every AI
            system that touches production. Select a domain to see how I approach it.
          </p>
        </motion.div>

        {/* Domain grid + detail panel */}
        <div className="mt-20 grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
          {/* Domain selector */}
          <div className="space-y-px overflow-hidden rounded-lg border border-foreground/10 bg-foreground/5">
            {securityDomains.map((domain, i) => (
              <button
                key={domain.id}
                onClick={() => setActive(domain.id)}
                className={`group flex w-full items-center gap-4 bg-background p-5 text-left transition hover:bg-foreground/[0.02] md:p-6 ${
                  active === domain.id ? "bg-foreground/[0.03]" : ""
                }`}
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md border transition ${
                    active === domain.id
                      ? "border-cyan/40 bg-cyan/10 text-cyan"
                      : "border-foreground/10 text-muted-foreground group-hover:text-foreground"
                  }`}
                >
                  {DOMAIN_ICONS[domain.icon]}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-3">
                    <span className="font-mono-tech text-[10px] text-muted-foreground tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className={`display-large text-base transition md:text-lg ${
                      active === domain.id ? "text-foreground" : "text-foreground/80"
                    }`}>
                      {domain.name}
                    </h3>
                  </div>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground">
                    {domain.summary}
                  </p>
                </div>
                <div
                  className={`text-muted-foreground transition ${
                    active === domain.id ? "text-cyan" : "group-hover:text-foreground"
                  }`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="rounded-lg border border-foreground/10 bg-background p-8 md:p-10">
            <AnimatePresence mode="wait">
              {activeDomain && (
                <motion.div
                  key={activeDomain.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-baseline justify-between">
                    <div>
                      <div className="font-mono-tech text-xs uppercase tracking-wider text-cyan">
                        {activeDomain.category}
                      </div>
                      <h3 className="display-large mt-2 text-3xl text-foreground md:text-4xl">
                        {activeDomain.name}
                      </h3>
                    </div>
                    <div className="text-muted-foreground">
                      {DOMAIN_ICONS[activeDomain.icon]}
                    </div>
                  </div>

                  <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                    {activeDomain.summary}
                  </p>

                  <div className="mt-8 space-y-3">
                    <div className="font-mono-tech text-xs uppercase tracking-[0.25em] text-muted-foreground">
                      How I approach it
                    </div>
                    <ul className="space-y-3">
                      {activeDomain.details.map((d, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.08, duration: 0.5 }}
                          className="flex items-start gap-3 text-sm leading-relaxed text-foreground/80 md:text-base"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                          <span>{d}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
