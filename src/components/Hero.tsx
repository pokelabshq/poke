"use client";

import { useState } from "react";
import { Copy, Check, ArrowRight, GitBranch } from "lucide-react";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="flex items-center gap-1.5 text-xs transition-colors text-[var(--muted)] hover:text-[var(--text)] cursor-pointer"
      aria-label="Copy install command"
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

export default function Hero() {
  return (
    <section className="min-h-[40vh] flex items-center justify-center px-6 pt-24 pb-16">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--surface)] text-sm text-[var(--muted)] mb-8">
          <GitBranch size={14} />
          Works with GitHub
        </div>

        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1] mb-5 text-[var(--text)]">
          Your code, maintained autonomously.
        </h1>

        <p className="text-[var(--muted)] text-lg leading-relaxed max-w-xl mx-auto mb-10">
          Poke is an AI DevOps agent that monitors your repos, fixes bugs,
          updates dependencies, and ships code while you sleep.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#install"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--accent)] text-white text-sm font-medium hover:brightness-110 transition-all"
          >
            Install Poke
            <ArrowRight size={16} />
          </a>

          <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-sm font-mono">
            <span className="text-[var(--muted)]">$</span>
            <span className="text-[var(--text)]">npm install -g poke</span>
            <CopyButton text="npm install -g poke" />
          </div>
        </div>
      </div>
    </section>
  );
}
