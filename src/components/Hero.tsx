"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const terminalLines = [
  { text: "$ poke connect github", delay: 0 },
  { text: "→ Authorizing with GitHub...", delay: 800, color: "#a1a1aa" },
  { text: "✓ Connected to 12 repos", delay: 1600, color: "#22d353" },
  { text: "$ poke enable --all", delay: 2400 },
  { text: "✓ Monitoring enabled", delay: 3200, color: "#22d353" },
  { text: "✓ Auto-fix: ON", delay: 3600, color: "#22d353" },
  { text: "✓ Auto-deploy: ON", delay: 4000, color: "#22d353" },
  { text: "✓ Dependency tracking: ON", delay: 4400, color: "#22d353" },
  { text: "$ poke status", delay: 5200 },
  { text: "", delay: 5800 },
  { text: "┌─ Poke Dashboard ──────────────────────┐", delay: 6000, color: "#a855f7" },
  { text: "│ 12 repos monitored                    │", delay: 6200, color: "#22d3ee" },
  { text: "│ 127 bugs fixed this month             │", delay: 6400, color: "#22d3ee" },
  { text: "│ 45 PRs auto-merged                    │", delay: 6600, color: "#22d3ee" },
  { text: "│ 893 deps updated                      │", delay: 6800, color: "#22d3ee" },
  { text: "│ 99.99% uptime                         │", delay: 7000, color: "#22d353" },
  { text: "└───────────────────────────────────────┘", delay: 7200, color: "#a855f7" },
];

function Terminal() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    terminalLines.forEach((line, i) => {
      timers.push(
        setTimeout(() => {
          setVisibleLines(i + 1);
          if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
          }
        }, line.delay)
      );
    });
    // Loop animation
    timers.push(
      setTimeout(() => {
        setVisibleLines(0);
        setTimeout(() => setVisibleLines(terminalLines.length), 500);
      }, 10000)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="terminal-bg rounded-xl overflow-hidden glow-purple max-w-lg w-full mx-auto lg:mx-0">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[#27272a]">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs text-[#555] font-mono">poke — terminal</span>
      </div>
      {/* Content */}
      <div ref={terminalRef} className="p-4 h-[340px] overflow-y-auto font-mono text-sm">
        {terminalLines.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={`${i}-${visibleLines}`}
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.15 }}
            className="leading-6"
            style={{ color: line.color || "#e4e4e7" }}
          >
            {line.text || "\u00A0"}
          </motion.div>
        ))}
        {visibleLines < terminalLines.length && (
          <span className="inline-block w-2 h-4 bg-[#a855f7] ml-0.5 animate-pulse" />
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#a855f7]/8 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-[#22d3ee]/6 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#3b82f6]/4 blur-[140px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#a855f7]/20 bg-[#a855f7]/5 text-xs text-[#a855f7] font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22d353] pulse-dot" />
                Now in Public Beta
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              Your AI Employee{" "}
              <br className="hidden sm:block" />
              That{" "}
              <span className="gradient-text">Never Sleeps</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-[#a1a1aa] max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Poke monitors your repos, fixes bugs, updates dependencies, reviews PRs, and ships code — autonomously.
              <span className="text-foreground font-medium"> So you can actually close your laptop.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <Link
                href="#cta"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#a855f7] via-[#6366f1] to-[#3b82f6] text-white font-medium text-sm transition-all hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.5)] hover:scale-[1.02]"
              >
                Join the Waitlist
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="https://github.com/pokelabs/poke"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#27272a] text-[#a1a1aa] font-medium text-sm hover:border-[#a855f7]/40 hover:text-white transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                Star on GitHub
              </Link>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-4 mt-10 justify-center lg:justify-start"
            >
              <div className="flex -space-x-2">
                {["🧑‍💻", "👩‍💻", "🧑‍🔬", "👩‍🔬", "🦊"].map((emoji, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-[#18181b] border-2 border-[#09090b] flex items-center justify-center text-sm"
                  >
                    {emoji}
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#555]">
                <span className="text-[#a1a1aa] font-medium">2,400+</span> devs on the waitlist
              </p>
            </motion.div>
          </div>

          {/* Right: Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Terminal />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
