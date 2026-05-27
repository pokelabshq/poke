"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What languages and frameworks does Poke support?",
    a: "TypeScript, Python, Go, Rust, Java, Ruby, PHP, and more. If it has a package manager, Poke supports it. We're constantly adding new language support based on community feedback.",
  },
  {
    q: "Is my code safe? How does authentication work?",
    a: "Poke uses GitHub OAuth with minimal permissions — only repo read/write access. Your code never leaves GitHub's infrastructure. We never store your source code. We're working toward SOC 2 compliance.",
  },
  {
    q: "How does the AI pricing work? What's an 'AI action'?",
    a: "An AI action is one autonomous decision — analyzing a bug, updating a dependency, reviewing a PR, or fixing a test. Think of it like a developer-hour. 50K actions on the Builder plan is roughly equivalent to a full-time DevOps engineer.",
  },
  {
    q: "Can I self-host Poke?",
    a: "Absolutely! Poke's core agent is open-source under the MIT license. You can run it on your own infrastructure. We offer managed hosting for convenience, but you always have the option to go fully self-hosted.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Cancel anytime, no questions asked. Your data is yours — you can export everything. We even help you migrate away if that's what you want. We believe in earning your business, not trapping you.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32 border-t border-[#27272a]">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-[#6366f1] tracking-widest uppercase mb-3">FAQ</p>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">
            Questions?{" "}
            <span className="gradient-text">Answered.</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="border border-[#27272a] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-[#18181b]/50 transition-colors"
              >
                <span className="font-medium text-sm pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#555] shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-5 pb-5 text-sm text-[#a1a1aa] leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
