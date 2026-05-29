"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";


const installCmd = "npm install -g poke";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-12">
      <div className="max-w-2xl mx-auto">
        {/* ASCII art logo */}
        <pre className="text-[10px] sm:text-xs font-mono text-[var(--muted)] leading-none mb-12 select-none">
{` ____   ___  _   _ _____
|  _ \\ / _ \\| | | | ____|
| |_) | | | | |_| |  _|
|  __/| |_| |  _  |_| |
|_|    \\___/|_| |_(_)`}
        </pre>

        <h1 className="text-4xl sm:text-5xl font-mono font-bold tracking-tight leading-[1.1] mb-6">
          your code,<br />
          maintained<br />
          autonomously.
        </h1>

        <p className="text-[var(--muted)] text-base leading-relaxed max-w-md mb-10">
          poke watches your repos. fixes bugs. updates deps. opens prs.
          you wake up to a healthier codebase. no dashboard required.
        </p>

        <div className="flex flex-col sm:flex-row items-start gap-3">
          <div className="flex items-center gap-3 px-4 py-2.5 rounded border border-[var(--border)] bg-[var(--surface)] font-mono text-sm">
            <span className="text-[var(--muted)]">$</span>
            <span className="text-white">{installCmd}</span>
            <button
              onClick={() => {
                navigator.clipboard.writeText(installCmd);
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
              }}
              className="text-[var(--muted)] hover:text-white transition-colors ml-1 cursor-pointer"
              aria-label="Copy install command"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-8 text-xs font-mono text-[var(--muted)]">
          <span>npm</span>
          <span className="text-[var(--border)]">·</span>
          <span>MIT</span>
          <span className="text-[var(--border)]">·</span>
          <span>works offline</span>
        </div>
      </div>
    </section>
  );
}
