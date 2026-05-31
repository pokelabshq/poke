"use client";

import { ArrowRight, Copy, Check } from "lucide-react";
import { useState } from "react";

const councilMembers = [
  { emoji: "🧠", name: "The Strategist", role: "Market fit, positioning, competitive analysis" },
  { emoji: "🚀", name: "The Hustler", role: "Growth, shipping speed, scrappy execution" },
  { emoji: "🏗️", name: "The Engineer", role: "Technical feasibility, architecture, best practices" },
  { emoji: "💀", name: "The Critic", role: "Devil's advocate, finds flaws, stress-tests ideas" },
  { emoji: "🌿", name: "The Visionary", role: "Big picture, future trends, bold ideas" },
];

export default function CouncilSpotlight() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npm install -g ai-council");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="council" className="px-6 py-24 border-t border-[var(--border)]">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-mono text-[var(--muted)] mb-2">$ head -1 ./council/README.md</p>
        <h2 className="text-2xl font-mono font-bold tracking-tight mb-2">
          🎯 AI Council
        </h2>
        <p className="text-sm text-[var(--muted)] mb-8 max-w-lg">
          Multiple AI perspectives on every decision. Connect Telegram bots
          with distinct personalities and get diverse, actionable feedback on your ideas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div>
            <p className="text-xs font-mono text-[var(--muted)] mb-4">$ council list</p>
            <div className="space-y-2">
              {councilMembers.map((m, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <span className="text-base">{m.emoji}</span>
                  <span className="font-mono text-white">{m.name}</span>
                  <span className="text-[var(--muted)] text-xs">— {m.role}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-mono text-[var(--muted)] mb-4">$ how it works</p>
            <div className="space-y-3">
              {[
                "Install and run the setup wizard",
                "Connect your Telegram bots (one per member)",
                "Create a private group, add all bots",
                "Pitch your idea — get 5 unique perspectives",
                "Customize personalities, add your own members",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3 text-xs">
                  <span className="text-[var(--muted)] font-mono w-4 shrink-0">{i + 1}.</span>
                  <span className="text-[var(--muted-light)]">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/pokelabshq/council"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-black bg-white hover:bg-gray-200 px-4 py-2 rounded transition-colors inline-flex items-center gap-2"
          >
            View on GitHub <ArrowRight size={12} />
          </a>
          <button
            onClick={handleCopy}
            className="text-xs font-mono text-[var(--muted)] border border-[var(--border)] hover:border-[var(--muted)] hover:text-white px-4 py-2 rounded transition-colors inline-flex items-center gap-2"
          >
            {copied ? <Check size={12} /> : <Copy size={12} />}
            {copied ? "copied!" : "npm install -g ai-council"}
          </button>
          <span className="text-[10px] font-mono text-[var(--muted)] border border-yellow-900 text-yellow-400 px-2 py-0.5 rounded">
            in development
          </span>
        </div>
      </div>
    </section>
  );
}
