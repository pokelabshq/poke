"use client";

import { motion } from "framer-motion";
import { Plug, Settings, Eye, Rocket } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Connect",
    desc: "Link your GitHub repos in 30 seconds. One OAuth flow, that's it.",
    icon: Plug,
    color: "#a855f7",
  },
  {
    num: "02",
    title: "Configure",
    desc: "Set your rules — auto-merge, auto-deploy, notification preferences.",
    icon: Settings,
    color: "#6366f1",
  },
  {
    num: "03",
    title: "Monitor",
    desc: "Poke watches your code 24/7, learning your patterns over time.",
    icon: Eye,
    color: "#22d3ee",
  },
  {
    num: "04",
    title: "Ship",
    desc: "Poke opens PRs, fixes bugs, updates deps — you just review and merge.",
    icon: Rocket,
    color: "#3b82f6",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-[#a855f7] tracking-widest uppercase mb-3">How It Works</p>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">
            Up and running in{" "}
            <span className="gradient-text">minutes</span>
          </h2>
          <p className="text-[#a1a1aa] max-w-lg mx-auto">
            No YAML configs. No complex setup. Just connect and let Poke handle the rest.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative group"
              >
                <div className="card-hover gradient-border rounded-xl p-6 bg-[#18181b] h-full">
                  {/* Step number */}
                  <span className="text-xs font-mono text-[#555] mb-4 block">{step.num}</span>
                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${step.color}12` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: step.color }} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-[#a1a1aa] leading-relaxed">{step.desc}</p>
                </div>
                {/* Connector line (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-[#27272a] to-transparent" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
