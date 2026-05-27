"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What if Poke breaks my code?",
    a: "Every change Poke makes is submitted as a pull request. You review and approve before anything is merged. Poke never pushes directly to main unless you explicitly configure it to.",
  },
  {
    q: "Is this another AI wrapper?",
    a: "No. Poke is a purpose-built agent with persistent memory per repository. It understands your codebase history, learns from your merge patterns, and makes context-aware fixes. It's not a generic LLM bolted onto a cron job.",
  },
  {
    q: "What languages and frameworks do you support?",
    a: "Anything with a package manager — npm, pip, cargo, go mod, gem, apt, and more. If you can express a dependency, Poke can maintain it. Framework-specific support (Next.js, Django, Rails) is actively expanding.",
  },
  {
    q: "Can I self-host?",
    a: "Yes. Poke is MIT licensed. You can run the CLI locally, host the action on your own runners, and manage everything without ever touching our servers.",
  },
  {
    q: "What about my code privacy?",
    a: "Poke runs inside your GitHub Actions. Your code never leaves your infrastructure. The agent processes data in-memory during runs and only communicates with GitHub's API. No code is sent to external servers.",
  },
  {
    q: "How is this different from writing a GitHub Action?",
    a: "A custom Action is a static script. Poke is an AI agent that reads your entire codebase, understands the context of errors, and generates targeted fixes. It's the difference between a spellchecker and an editor.",
  },
  {
    q: "Can I limit what Poke can do?",
    a: "Absolutely. Configure per-repo permissions: restrict which files it can modify, which dependency types to touch, what hours it can run, and whether it needs approval for certain operations. Fine-grained control out of the box.",
  },
  {
    q: "What happens if I cancel?",
    a: "The CLI keeps working forever — it's MIT licensed. You only lose access to the cloud dashboard and automated scheduling. Your local setup, configs, and workflow files remain intact.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="px-6 py-24 border-t border-[var(--border)]">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3 text-center">
          FAQ
        </h2>
        <p className="text-[var(--muted)] text-center mb-10 max-w-lg mx-auto">
          Questions a developer would actually ask.
        </p>

        <div className="space-y-2">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="border border-[var(--border)] rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-sm font-medium text-left text-[var(--text)] hover:bg-[var(--surface)] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className={`text-[var(--muted)] transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-sm text-[var(--muted)] leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
