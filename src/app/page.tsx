"use client";

import { useState, useEffect, useRef } from "react";

const ASCII = ` ____   ___  _   _ _____       _        ____
|  _ \\ / _ \\| | | | ____|     | |      | __ )
| |_) | | | | |_| |  _|       | |      |  _ \\
|  __/| |_| |  _| | |_| _____| |____  | |_) |
|_|    \\___/ \\__| |____|_____|______| |____/`;

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Page() {
  const [copied, setCopied] = useState(false);

  const copyInstall = () => {
    navigator.clipboard.writeText("npm install -g ai-council");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-sm font-mono font-bold tracking-tight">
            poke<span className="text-[#555]">labs</span>
          </span>
          <div className="flex items-center gap-8">
            <a href="#what" className="text-xs font-mono text-[#666] hover:text-white transition-colors">what we build</a>
            <a href="#council" className="text-xs font-mono text-[#666] hover:text-white transition-colors">council</a>
            <a href="#contact" className="text-xs font-mono text-[#666] hover:text-white transition-colors">contact</a>
            <a href="https://github.com/pokelabshq" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-[#666] hover:text-white transition-colors">github</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-14">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <pre className="text-[9px] sm:text-[11px] md:text-xs font-mono text-[#444] leading-none mb-10 select-none inline-block text-left">
              {ASCII}
            </pre>
          </FadeIn>
          <FadeIn delay={200}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-mono font-bold tracking-tight leading-[1.08] mb-6">
              we poke at the future<br />of software.
            </h1>
          </FadeIn>
          <FadeIn delay={400}>
            <p className="text-[#777] text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10">
              poke labs is an ai company in toronto building autonomous tools
              that maintain your code, review your decisions, and ship software.
            </p>
          </FadeIn>
          <FadeIn delay={600}>
            <div className="flex items-center justify-center gap-4">
              <a href="#council" className="text-sm font-mono text-black bg-white hover:bg-gray-200 px-6 py-3 rounded transition-colors">
                try ai council
              </a>
              <a href="#what" className="text-sm font-mono text-[#888] border border-[#333] hover:border-[#666] hover:text-white px-6 py-3 rounded transition-colors">
                see what we build
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={800}>
            <div className="flex items-center justify-center gap-4 mt-12 text-[11px] font-mono text-[#555]">
              <span>open source</span>
              <span className="text-[#333]">·</span>
              <span>toronto</span>
              <span className="text-[#333]">·</span>
              <span>est. 2026</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section id="what" className="border-t border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto px-6 py-24 sm:py-32">
          <FadeIn>
            <p className="text-xs font-mono text-[#555] mb-2">$ ls ./products</p>
            <h2 className="text-3xl sm:text-4xl font-mono font-bold tracking-tight mb-14">what we build</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                emoji: "🎯",
                name: "AI Council",
                tagline: "multiple ai perspectives, one decision",
                desc: "Connect Telegram bots with distinct personalities — a Strategist, Engineer, Critic, Hustler, and Visionary. Pitch ideas and get diverse, actionable feedback.",
                status: "in development",
              },
              {
                emoji: "⚡",
                name: "Poke CLI",
                tagline: "your code, maintained autonomously",
                desc: "An open-source AI DevOps agent that monitors your repos, fixes bugs, updates dependencies, reviews PRs, and ships code — while you sleep.",
                status: "live",
                href: "https://github.com/pokelabshq/poke",
              },
              {
                emoji: "🎼",
                name: "Conductor",
                tagline: "ai integration hub",
                desc: "A plugin-based platform with 25+ integrations. Connect your favorite tools and AI models in one unified workspace.",
                status: "live",
                href: "https://github.com/pokelabshq/conductor",
              },
            ].map((p, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="border border-[#1a1a1a] hover:border-[#333] rounded-lg p-6 bg-[#080808] transition-colors group h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{p.emoji}</span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                      p.status === "live"
                        ? "text-green-400/80 border border-green-900/50 bg-green-950/20"
                        : "text-yellow-400/80 border border-yellow-900/50 bg-yellow-950/20"
                    }`}>
                      {p.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-mono font-bold mb-1 group-hover:text-white transition-colors">{p.name}</h3>
                  <p className="text-xs font-mono text-[#555] mb-3">{p.tagline}</p>
                  <p className="text-sm text-[#888] leading-relaxed flex-1">{p.desc}</p>
                  {p.href && (
                    <a href={p.href} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-[#666] hover:text-white mt-4 inline-flex items-center gap-1 transition-colors">
                      view on github →
                    </a>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* COUNCIL SPOTLIGHT */}
      <section id="council" className="border-t border-[#1a1a1a] bg-[#050505]">
        <div className="max-w-5xl mx-auto px-6 py-24 sm:py-32">
          <FadeIn>
            <p className="text-xs font-mono text-[#555] mb-2">$ ./council --help</p>
            <h2 className="text-3xl sm:text-4xl font-mono font-bold tracking-tight mb-3">ai council</h2>
            <p className="text-[#888] text-base leading-relaxed max-w-2xl mb-14">
              Every opinion is one bot away. AI Council connects multiple AI personas
              with distinct personalities and expertise. Pitch an idea, get five
              unique perspectives back.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FadeIn delay={100}>
              <div>
                <p className="text-xs font-mono text-[#555] mb-5">$ council list</p>
                <div className="space-y-3">
                  {[
                    { emoji: "🧠", name: "The Strategist", role: "market fit, positioning, moats" },
                    { emoji: "🚀", name: "The Hustler", role: "growth, shipping, scrappy tactics" },
                    { emoji: "🏗️", name: "The Engineer", role: "feasibility, architecture, best practices" },
                    { emoji: "💀", name: "The Critic", role: "devil's advocate, finds flaws" },
                    { emoji: "🌿", name: "The Visionary", role: "big picture, future trends" },
                  ].map((m, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <span className="text-lg w-7">{m.emoji}</span>
                      <span className="font-mono text-white">{m.name}</span>
                      <span className="text-[#555] text-xs">— {m.role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div>
                <p className="text-xs font-mono text-[#555] mb-5">$ how it works</p>
                <div className="space-y-4 mb-8">
                  {[
                    "Install and run the setup wizard",
                    "Create bots via @BotFather on Telegram",
                    "Connect each bot to a council member",
                    "Create a private group, add all bots",
                    "Pitch your idea — get 5 unique perspectives",
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm">
                      <span className="text-[#555] font-mono w-5 shrink-0 text-xs mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-[#999]">{step}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={copyInstall}
                    className="text-xs font-mono bg-white text-black hover:bg-gray-200 px-4 py-2 rounded transition-colors"
                  >
                    {copied ? "✓ copied" : "npm install -g ai-council"}
                  </button>
                  <a
                    href="https://github.com/pokelabshq/council"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-[#666] border border-[#333] hover:border-[#666] hover:text-white px-4 py-2 rounded transition-colors"
                  >
                    github →
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ABOUT / PHILOSOPHY */}
      <section className="border-t border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto px-6 py-24 sm:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <FadeIn>
              <p className="text-xs font-mono text-[#555] mb-2">$ whoami</p>
              <h2 className="text-3xl sm:text-4xl font-mono font-bold tracking-tight mb-8">about us</h2>
              <div className="space-y-4 text-sm text-[#999] leading-relaxed">
                <p>
                  Poke Labs is an AI research and development lab based in Toronto,
                  Ontario. We build autonomous agents that help developers ship
                  better software, faster.
                </p>
                <p>
                  Founded in 2026. Everything we build is open source, from day one.
                  We believe the best tools are the ones you can see inside, modify,
                  and trust.
                </p>
                <p>
                  We ship fast, iterate constantly, and use our own tools every day.
                  If it doesn't work for us, it doesn't ship.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <p className="text-xs font-mono text-[#555] mb-2">$ cat ./values</p>
              <h2 className="text-3xl sm:text-4xl font-mono font-bold tracking-tight mb-8">our values</h2>
              <div className="space-y-5">
                {[
                  { title: "Open Source, Always", desc: "MIT licensed. No paywalled features. No vendor lock-in. You own your stack." },
                  { title: "Ship Fast", desc: "Perfect is the enemy of done. We ship imperfect products and iterate on real feedback." },
                  { title: "Code First", desc: "We build for developers. Our tools integrate into your workflow — not the other way around." },
                  { title: "Dogfood Everything", desc: "We use our own tools every single day. If it breaks for you, it breaks for us first." },
                ].map((v, i) => (
                  <div key={i} className="border-l-2 border-[#222] pl-4">
                    <h3 className="text-sm font-mono font-bold text-white mb-1">{v.title}</h3>
                    <p className="text-xs text-[#777] leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-[#1a1a1a] bg-[#050505]">
        <div className="max-w-5xl mx-auto px-6 py-24 sm:py-32">
          <FadeIn>
            <p className="text-xs font-mono text-[#555] mb-2">$ ping pokelabs.org</p>
            <h2 className="text-3xl sm:text-4xl font-mono font-bold tracking-tight mb-6">get in touch</h2>
            <p className="text-[#888] text-base leading-relaxed max-w-lg mb-10">
              Questions? Ideas? Want to collaborate? We're always looking for
              interesting problems to poke at.
            </p>
            <div className="flex items-center gap-6 text-sm font-mono">
              <a href="mailto:hello@pokelabs.org" className="text-[#aaa] hover:text-white transition-colors">
                hello@pokelabs.org
              </a>
              <a href="https://github.com/pokelabshq" target="_blank" rel="noopener noreferrer" className="text-[#aaa] hover:text-white transition-colors">
                github
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] font-mono text-[#444]">
            © 2026 Poke Labs. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["toronto", "open source", "est. 2026"].map((t, i) => (
              <span key={i} className="text-[11px] font-mono text-[#444]">
                {t}{i < 2 ? <span className="text-[#222] ml-4">·</span> : null}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
