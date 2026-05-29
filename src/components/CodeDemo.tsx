"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

const tabs = [
  {
    id: "init",
    label: "init",
    code: `$ npx poke init

✓ repo detected: my-app
✓ package manager: npm
✓ test runner: vitest
✓ ci: github actions

watching 1 repo.`,
  },
  {
    id: "fix",
    label: "fix",
    code: `$ npx poke run

scanning 247 files...
found 3 issues:

  ✗ lodash 4.17.20 → CVE-2026-1234
  ✗ @types/node 22.0.0 → 24.1.0
  ✗ unused import in src/utils.ts:14

opening pull request...
✓ PR #42 opened`,
  },
  {
    id: "config",
    label: "config",
    code: `# poke.yml
schedule: "0 6 * * *"
auto_pr: true

rules:
  - update: patch
    auto_merge: true
  - update: major
    auto_merge: false
  - security: any
    auto_merge: true`,
  },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function CodeDemo() {
  const [active, setActive] = useState<TabId>("init");
  const [copied, setCopied] = useState(false);

  const current = tabs.find((t) => t.id === active)!;

  return (
    <section id="how" className="px-6 py-24 border-t border-[var(--border)]">
      <div className="max-w-2xl mx-auto">
        <p className="text-xs font-mono text-[var(--muted)] mb-2">$ what does it actually do</p>

        {/* Tab bar */}
        <div className="flex border border-[var(--border)] rounded-t font-mono text-xs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`px-4 py-2.5 transition-colors cursor-pointer border-r border-[var(--border)] last:border-r-0 ${
                active === tab.id
                  ? "bg-[var(--surface)] text-white"
                  : "text-[var(--muted)] hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Code block */}
        <div className="relative border border-t-0 border-[var(--border)] rounded-b bg-[#050505] overflow-hidden">
          <pre className="p-5 overflow-x-auto text-sm leading-relaxed font-mono">
            <code className="text-[var(--muted-light)] whitespace-pre">{current.code}</code>
          </pre>
          <button
            onClick={() => {
              navigator.clipboard.writeText(current.code);
              setCopied(true);
              setTimeout(() => setCopied(false), 1500);
            }}
            className="absolute top-3 right-3 text-[var(--muted)] hover:text-white transition-colors cursor-pointer"
            aria-label="Copy"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
      </div>
    </section>
  );
}
