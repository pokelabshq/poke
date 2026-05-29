"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

const faqs = [
  {
    q: "what if it breaks my code?",
    a: "every change is a pull request. you review. you approve. poke never pushes to main unless you tell it to.",
  },
  {
    q: "is this another ai wrapper?",
    a: "no. poke reads your codebase, understands context, and makes targeted fixes. it's not a generic llm bolted onto a cron job.",
  },
  {
    q: "what languages?",
    a: "anything with a package manager — npm, pip, cargo, go mod, gem, apt. if it has deps, poke maintains it.",
  },
  {
    q: "can i self-host?",
    a: "you already are. poke runs in your github actions. your code never leaves your infra.",
  },
  {
    q: "why is it free?",
    a: "open source software should be free. we'll offer optional hosted features later, but the core tool is and will always be mit licensed.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="px-6 py-24 border-t border-[var(--border)]">
      <div className="max-w-2xl mx-auto">
        <p className="text-xs font-mono text-[var(--muted)] mb-10">$ faq</p>

        <div className="border-t border-[var(--border)]">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-[var(--border)]">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-4 text-left cursor-pointer group"
                >
                  <span className="text-sm font-mono text-white group-hover:underline">
                    {faq.q}
                  </span>
                  <ChevronRight
                    size={14}
                    className={`text-[var(--muted)] transition-transform duration-200 shrink-0 ml-4 ${
                      isOpen ? "rotate-90" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="text-sm text-[var(--muted)] leading-relaxed pb-4 pr-8">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
