"use client";

import { useState } from "react";
import { Copy, Check, Terminal, FileCode, LayoutDashboard } from "lucide-react";

const tabs = [
  { id: "terminal", label: "Terminal", icon: Terminal },
  { id: "actions", label: "GitHub Actions", icon: FileCode },
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
] as const;

type TabId = (typeof tabs)[number]["id"];

const codeContent: Record<TabId, { language: string; code: string }> = {
  terminal: {
    language: "bash",
    code: `$ npx poke init

  Poke initialized. Connecting to GitHub...

  ✓ Repo access granted
  ✓ CI/CD pipeline detected
  ✓ Package manager found (npm)
  ✓ Test framework configured (vitest)

  $ npx poke status

  Repo: pokelabs/poke
  Status: ● watching
  PRs opened: 12
  Bugs fixed: 8
  Dependencies updated: 34`,
  },
  actions: {
    language: "yaml",
    code: `name: Poke Maintenance
on:
  schedule:
    - cron: '0 6 * * *'   # daily at 6 AM UTC
  workflow_dispatch:       # manual trigger

jobs:
  poke:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pokelabs/poke-action@v1
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          auto_pr: true
          labels: "poke, automated"`,
  },
  dashboard: {
    language: "text",
    code: `┌─────────────────────────────────────────────┐
│              poke status                      │
├─────────────────────────────────────────────┤
│                                              │
│  Repository: pokelabs/poke                   │
│  Status:     ● active (last run: 2m ago)    │
│  Branch:     main                            │
│                                              │
│  ── Overview ──                              │
│  Open PRs          12                        │
│  Issues found      3                         │
│  Dependencies      142 (12 outdated)         │
│  Test coverage     94%                       │
│                                              │
│  ── Recent Activity ──                       │
│  [2026-05-27] Updated lodash 4.17.21→4.18.0  │
│  [2026-05-27] Fixed CVE-2026-1234 in axios   │
│  [2026-05-26] Bumped @types/node 22→24       │
│  [2026-05-26] Patched memory leak in parser  │
│                                              │
│  ── Actions ──                               │
│  $ poke run        # trigger now             │
│  $ poke logs       # view recent runs        │
│  $ poke config     # edit settings           │
│                                              │
└─────────────────────────────────────────────┘`,
  },
};

function CopyBlock({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="absolute top-3 right-3 flex items-center gap-1.5 text-xs transition-colors text-[var(--muted)] hover:text-[var(--text)] cursor-pointer"
      aria-label="Copy code block"
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

export default function CodeDemo() {
  const [activeTab, setActiveTab] = useState<TabId>("terminal");

  const content = codeContent[activeTab];

  return (
    <section id="what-is-poke" className="px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3 text-center">
          What is Poke?
        </h2>
        <p className="text-[var(--muted)] text-center mb-10 max-w-lg mx-auto">
          See exactly how Poke works — no magic, just code.
        </p>

        <div className="flex border border-[var(--border)] rounded-lg overflow-hidden">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-colors cursor-pointer ${
                  active
                    ? "bg-[var(--surface)] text-[var(--text)] border-b-2 border-[var(--accent)]"
                    : "text-[var(--muted)] hover:text-[var(--text)] border-b-2 border-transparent"
                }`}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="relative border border-t-0 border-[var(--border)] rounded-b-lg bg-[var(--surface)] overflow-hidden">
          <pre className="p-5 pt-4 pb-6 overflow-x-auto text-sm leading-relaxed">
            <code className="text-[var(--text)] whitespace-pre">
              {content.code}
            </code>
          </pre>
          <CopyBlock text={content.code} />
        </div>
      </div>
    </section>
  );
}
