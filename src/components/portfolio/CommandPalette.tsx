"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { commandPaletteEntries, navSections } from "@/data/portfolio";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIdx, setActiveIdx] = useState(0);

  const openPalette = useCallback(() => {
    setQuery("");
    setActiveIdx(0);
    setOpen(true);
  }, []);

  const togglePalette = useCallback(() => {
    setOpen((v) => {
      if (v) return false;
      openPalette();
      return true;
    });
  }, [openPalette]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        togglePalette();
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [togglePalette]);

  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return commandPaletteEntries;
    return commandPaletteEntries.filter(
      (e) =>
        e.label.toLowerCase().includes(q) ||
        e.description.toLowerCase().includes(q) ||
        e.group.toLowerCase().includes(q)
    );
  }, [query]);

  // Include nav sections in results when query is empty
  const allResults = useMemo(() => {
    if (query.trim()) return results;
    return [
      ...navSections.map((s) => ({
        id: s.id,
        label: s.label,
        description: `Section ${s.index}`,
        group: "Navigate",
        target: s.id,
      })),
      ...results,
    ];
  }, [results, query]);

  // Clamp activeIdx defensively during render
  const safeActiveIdx = Math.min(activeIdx, Math.max(0, allResults.length - 1));

  const execute = (target: string) => {
    const el = document.getElementById(target);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((i) => Math.min(allResults.length - 1, i + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => Math.max(0, i - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const entry = allResults[safeActiveIdx];
      if (entry) execute(entry.target);
    }
  };

  // Group results
  const grouped = useMemo(() => {
    const map = new Map<string, typeof allResults>();
    allResults.forEach((r) => {
      if (!map.has(r.group)) map.set(r.group, []);
      map.get(r.group)!.push(r);
    });
    return Array.from(map.entries());
  }, [allResults]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[15vh]"
          onClick={() => setOpen(false)}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />
          <motion.div
            initial={{ scale: 0.96, y: -10 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: -10 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl overflow-hidden rounded-xl border border-foreground/15 bg-card shadow-2xl"
            style={{ boxShadow: "0 0 0 1px oklch(0.78 0.16 195 / 0.15), 0 30px 80px -10px oklch(0 0 0 / 0.7)" }}
          >
            {/* Input */}
            <div className="flex items-center gap-3 border-b border-foreground/10 px-5 py-4">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-5-5" strokeLinecap="round" />
              </svg>
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Search projects, AI security domains, tools, architecture reviews..."
                className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground/60"
              />
              <kbd className="rounded border border-foreground/15 bg-foreground/5 px-1.5 py-0.5 font-mono-tech text-[10px] text-muted-foreground">
                ESC
              </kbd>
            </div>

            {/* Results */}
            <div className="max-h-[50vh] overflow-y-auto p-2">
              {grouped.length === 0 ? (
                <div className="p-8 text-center text-sm text-muted-foreground">
                  No results for "{query}"
                </div>
              ) : (
                grouped.map(([group, entries]) => (
                  <div key={group} className="mb-2">
                    <div className="px-3 py-2 font-mono-tech text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
                      {group}
                    </div>
                    {entries.map((entry) => {
                      const idx = allResults.indexOf(entry);
                      const isActive = idx === safeActiveIdx;
                      return (
                        <button
                          key={entry.id}
                          onMouseEnter={() => setActiveIdx(idx)}
                          onClick={() => execute(entry.target)}
                          className={`flex w-full items-center gap-4 rounded-lg px-3 py-3 text-left transition ${
                            isActive ? "bg-cyan/10" : "hover:bg-foreground/[0.03]"
                          }`}
                        >
                          <div className="min-w-0 flex-1">
                            <div
                              className={`text-sm transition ${
                                isActive ? "text-cyan" : "text-foreground"
                              }`}
                            >
                              {entry.label}
                            </div>
                            <div className="mt-0.5 text-xs text-muted-foreground">
                              {entry.description}
                            </div>
                          </div>
                          {isActive && (
                            <span className="font-mono-tech text-[10px] uppercase tracking-wider text-cyan">
                              ↵
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-foreground/10 px-5 py-3 flex items-center justify-between font-mono-tech text-[10px] uppercase tracking-wider text-muted-foreground/60">
              <div className="flex items-center gap-3">
                <span><kbd className="rounded border border-foreground/15 bg-foreground/5 px-1 py-0.5">↑↓</kbd> Navigate</span>
                <span><kbd className="rounded border border-foreground/15 bg-foreground/5 px-1 py-0.5">↵</kbd> Open</span>
              </div>
              <span>AI Security Explorer</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
