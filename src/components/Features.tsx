"use client";

import { motion } from "framer-motion";
import { Brain, Shield, Package, FlaskConical, FileText, Sparkles } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Deep Code Understanding",
    desc: "Poke doesn't just parse files — it understands your architecture, patterns, and conventions across your entire codebase.",
    color: "#a855f7",
  },
  {
    icon: Shield,
    title: "Security First",
    desc: "Auto-detects and patches vulnerabilities before they reach production. No more CVE surprises on Monday morning.",
    color: "#ef4444",
  },
  {
    icon: Package,
    title: "Dependency Intelligence",
    desc: "Smart updates that won't break your build, with automatic rollback if something goes sideways.",
    color: "#22d3ee",
  },
  {
    icon: FlaskConical,
    title: "CI Whisperer",
    desc: "Understands why tests fail and fixes the root cause — not just the symptoms.",
    color: "#f59e0b",
  },
  {
    icon: FileText,
    title: "PR Perfection",
    desc: "Writes descriptions, adds labels, requests reviews, and enforces your team's standards automatically.",
    color: "#3b82f6",
  },
  {
    icon: Sparkles,
    title: "Persistent Memory",
    desc: "Learns your codebase over time and gets smarter with every interaction. Unlike tools that reset every session.",
    color: "#22c55e",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#a855f7]/3 blur-[150px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-[#22d3ee] tracking-widest uppercase mb-3">Features</p>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">
            Everything your repo{" "}
            <span className="gradient-text">needs</span>
          </h2>
          <p className="text-[#a1a1aa] max-w-lg mx-auto">
            From monitoring to shipping, Poke handles the full lifecycle so you can focus on building.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="card-hover gradient-border rounded-xl p-6 bg-[#18181b] group"
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${feat.color}10` }}
                >
                  <Icon className="w-5 h-5" style={{ color: feat.color }} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feat.title}</h3>
                <p className="text-sm text-[#a1a1aa] leading-relaxed">{feat.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
