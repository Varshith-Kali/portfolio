"use client";

import { useEffect, useState } from "react";
import { navSections } from "@/data/portfolio";

export function SectionNavigator() {
  const [active, setActive] = useState<string>("hero");

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2;
      let current = navSections[0].id;
      for (const s of navSections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        if (scrollY >= el.offsetTop) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2.5 md:flex"
      aria-label="Section navigator"
    >
      {navSections.map((s) => {
        const isActive = s.id === active;
        return (
          <button
            key={s.id}
            onClick={() => {
              const el = document.getElementById(s.id);
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="group flex items-center justify-end gap-3"
            aria-label={`Go to ${s.label}`}
          >
            <span
              className={`font-mono-tech text-[10px] uppercase tracking-[0.2em] transition-all duration-300 ${
                isActive
                  ? "text-foreground opacity-100"
                  : "text-muted-foreground opacity-0 group-hover:opacity-60"
              }`}
            >
              {s.label}
            </span>
            <span
              className={`block h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                isActive ? "bg-cyan scale-125" : "bg-foreground/20 group-hover:bg-foreground/40"
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
}
