"use client";

import { ArrowRight, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function InstallCTA() {
  const [copied, setCopied] = useState(false);

  return (
    <section id="install" className="px-6 py-32">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-xs font-mono text-[var(--muted)] mb-4">{">"} ready?</p>
        <h2 className="text-3xl sm:text-4xl font-mono font-bold tracking-tight mb-6">
          try it now.
        </h2>

        <div className="flex items-center justify-center">
          <div className="flex items-center gap-3 px-5 py-3 rounded border border-[var(--border)] bg-[var(--surface)] font-mono text-sm">
            <span className="text-[var(--muted)]">$</span>
            <span className="text-white">npm install -g poke</span>
            <button
              onClick={() => {
                navigator.clipboard.writeText("npm install -g poke");
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
              }}
              className="text-[var(--muted)] hover:text-white transition-colors ml-2 cursor-pointer"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
            </button>
          </div>
        </div>

        <p className="text-xs font-mono text-[var(--muted)] mt-6">
          npm · MIT · works offline
        </p>
      </div>
    </section>
  );
}
