"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

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

export default function InstallCTA() {
  return (
    <section
      id="install"
      className="px-6 py-24 border-t border-[var(--border)]"
    >
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">
          Get started in 30 seconds
        </h2>
        <p className="text-[var(--muted)] mb-8">
          Works with any GitHub repo. No credit card required.
        </p>

        <div className="flex items-center justify-center gap-3 px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-sm font-mono w-fit mx-auto">
          <span className="text-[var(--muted)]">$</span>
          <span className="text-[var(--text)]">npm install -g poke</span>
          <CopyButton text="npm install -g poke" />
        </div>

        <p className="text-xs text-[var(--muted)] mt-6">
          Then run <code className="text-[var(--text)]">npx poke init</code> in
          your repo
        </p>
      </div>
    </section>
  );
}
