"use client";

import { motion } from "framer-motion";

const comparisons = [
  {
    product: "Dependabot",
    tagline: "Sends you PRs with zero context",
    poke: "Poke understands your entire codebase and makes smart, safe updates with automatic rollback",
    theirEmoji: "🤖",
    ourEmoji: "🧠",
  },
  {
    product: "Claude Code",
    tagline: "Interactive only — waits for you to ask",
    poke: "Poke runs 24/7 autonomously — monitors, fixes, and ships while you sleep",
    theirEmoji: "💬",
    ourEmoji: "🔄",
  },
  {
    product: "Manual DevOps",
    tagline: "Humans are great. Humans also sleep.",
    poke: "Poke never sleeps, never forgets, and never misses a failing CI build",
    theirEmoji: "😴",
    ourEmoji: "⚡",
  },
];

export default function Comparison() {
  return (
    <section className="py-24 lg:py-32 border-t border-[#27272a]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-[#f59e0b] tracking-widest uppercase mb-3">Why Poke</p>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">
            How does Poke{" "}
            <span className="gradient-text">compare?</span>
          </h2>
          <p className="text-[#a1a1aa] max-w-lg mx-auto">
            We're not here to replace your tools. We're here to make them actually useful.
          </p>
        </motion.div>

        <div className="space-y-5">
          {comparisons.map((comp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="grid md:grid-cols-2 gap-4"
            >
              {/* Their thing — crossed out / muted */}
              <div className="rounded-xl border border-[#27272a] bg-[#0f0f12] p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-red-500/[0.02]" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{comp.theirEmoji}</span>
                    <div>
                      <h4 className="font-semibold text-[#555] line-through">{comp.product}</h4>
                    </div>
                  </div>
                  <p className="text-sm text-[#444]">{comp.tagline}</p>
                </div>
              </div>

              {/* Poke — highlighted */}
              <div className="rounded-xl border border-[#a855f7]/20 bg-[#18181b] p-6 relative">
                <div className="absolute inset-0 bg-[#a855f7]/[0.03] rounded-xl" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{comp.ourEmoji}</span>
                    <div>
                      <h4 className="font-semibold text-[#a855f7]">Poke <span className="text-xs font-normal text-[#555]">vs {comp.product}</span></h4>
                    </div>
                  </div>
                  <p className="text-sm text-[#a1a1aa]">{comp.poke}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
