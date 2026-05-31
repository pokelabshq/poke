"use client";

import { useState, useEffect, useRef, type ReactNode } from "react";

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

function FadeIn({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
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

function IconUsers({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconZap({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function IconTarget({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function IconGitHub({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function IconArrowRight({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function IconCopy({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}

function IconCheck({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function IconMail({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function IconBrain({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
      <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
      <path d="M6 18a4 4 0 0 1-1.967-.516" />
      <path d="M19.967 17.484A4 4 0 0 1 18 18" />
    </svg>
  );
}

function IconRocket({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function IconHammer({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9" />
      <path d="M17.64 15 22 10.64" />
      <path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91" />
    </svg>
  );
}

function IconSkull({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="12" r="1" />
      <circle cx="15" cy="12" r="1" />
      <path d="M8 20v2h8v-2" />
      <path d="m12.5 17-.5-1-.5 1h1z" />
      <path d="M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20" />
    </svg>
  );
}

function IconLeaf({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

const members = [
  { icon: <IconBrain className="w-5 h-5" />, name: "The Strategist", role: "market fit, positioning, moats" },
  { icon: <IconRocket className="w-5 h-5" />, name: "The Hustler", role: "growth, shipping, scrappy tactics" },
  { icon: <IconHammer className="w-5 h-5" />, name: "The Engineer", role: "feasibility, architecture, best practices" },
  { icon: <IconSkull className="w-5 h-5" />, name: "The Critic", role: "devil's advocate, finds flaws" },
  { icon: <IconLeaf className="w-5 h-5" />, name: "The Visionary", role: "big picture, future trends" },
];

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
            <a href="#product" className="text-xs font-mono text-[#666] hover:text-white transition-colors">product</a>
            <a href="#about" className="text-xs font-mono text-[#666] hover:text-white transition-colors">about</a>
            <a href="#contact" className="text-xs font-mono text-[#666] hover:text-white transition-colors">contact</a>
            <a href="https://github.com/pokelabshq" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-[#666] hover:text-white transition-colors flex items-center gap-1.5">
              <IconGitHub className="w-3.5 h-3.5" />
              github
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-14">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <pre className="text-[8px] sm:text-[10px] md:text-xs font-mono text-[#333] leading-[1.15] mb-10 select-none inline-block text-left">{ASCII}</pre>
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
              <a href="#product" className="text-sm font-mono text-black bg-white hover:bg-gray-200 px-6 py-3 rounded transition-colors">
                try ai council
              </a>
              <a href="#about" className="text-sm font-mono text-[#888] border border-[#333] hover:border-[#666] hover:text-white px-6 py-3 rounded transition-colors">
                learn more
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={800}>
            <div className="flex items-center justify-center gap-4 mt-12 text-[11px] font-mono text-[#444]">
              <span>open source</span>
              <span className="text-[#222]">·</span>
              <span>toronto</span>
              <span className="text-[#222]">·</span>
              <span>est. 2026</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PRODUCT — AI COUNCIL */}
      <section id="product" className="border-t border-[#1a1a1a] bg-[#050505]">
        <div className="max-w-5xl mx-auto px-6 py-24 sm:py-32">
          <FadeIn>
            <div className="flex items-center gap-3 mb-2">
              <IconTarget className="w-5 h-5 text-[#666]" />
              <p className="text-xs font-mono text-[#555]">$ ./council --status</p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-mono font-bold tracking-tight mb-3">ai council</h2>
            <p className="text-[#888] text-base leading-relaxed max-w-2xl mb-14">
              Every opinion is one bot away. Connect multiple AI personas with
              distinct personalities and expertise. Pitch an idea, get five
              unique perspectives back.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn delay={100}>
              <div>
                <p className="text-xs font-mono text-[#555] mb-5 flex items-center gap-2">
                  <IconUsers className="w-4 h-4" />
                  $ council list
                </p>
                <div className="space-y-4">
                  {members.map((m, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <span className="text-[#888] w-5">{m.icon}</span>
                      <span className="font-mono text-white">{m.name}</span>
                      <span className="text-[#555] text-xs">— {m.role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div>
                <p className="text-xs font-mono text-[#555] mb-5 flex items-center gap-2">
                  <IconZap className="w-4 h-4" />
                  $ how it works
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Install and run the setup wizard",
                    "Create bots via @BotFather on Telegram",
                    "Connect each bot to a council member",
                    "Create a private group, add all bots",
                    "Pitch your idea — get 5 unique perspectives",
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm">
                      <span className="text-[#444] font-mono w-5 shrink-0 text-xs mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-[#999]">{step}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={copyInstall}
                    className="text-xs font-mono bg-white text-black hover:bg-gray-200 px-4 py-2 rounded transition-colors flex items-center gap-2"
                  >
                    {copied ? <IconCheck className="w-3.5 h-3.5" /> : <IconCopy className="w-3.5 h-3.5" />}
                    {copied ? "copied!" : "npm install -g ai-council"}
                  </button>
                  <a
                    href="https://github.com/pokelabshq/council"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-[#666] border border-[#333] hover:border-[#666] hover:text-white px-4 py-2 rounded transition-colors inline-flex items-center gap-2"
                  >
                    <IconGitHub className="w-3.5 h-3.5" />
                    github
                  </a>
                  <span className="text-[10px] font-mono text-green-400/80 border border-green-900/50 bg-green-950/20 px-2 py-0.5 rounded">
                    live
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto px-6 py-24 sm:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <FadeIn>
              <p className="text-xs font-mono text-[#555] mb-2">$ whoami</p>
              <h2 className="text-3xl sm:text-4xl font-mono font-bold tracking-tight mb-8">about us</h2>
              <div className="space-y-4 text-sm text-[#999] leading-relaxed">
                <p>
                  Poke Labs is an AI company based in Toronto, Ontario.
                  We build autonomous agents that help developers ship
                  better software, faster.
                </p>
                <p>
                  Founded in 2026. Everything we build is open source from day one.
                  We believe the best tools are the ones you can see inside, modify, and trust.
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
              <a href="mailto:hello@pokelabs.org" className="text-[#aaa] hover:text-white transition-colors flex items-center gap-2">
                <IconMail className="w-4 h-4" />
                hello@pokelabs.org
              </a>
              <a href="https://github.com/pokelabshq" target="_blank" rel="noopener noreferrer" className="text-[#aaa] hover:text-white transition-colors flex items-center gap-2">
                <IconGitHub className="w-4 h-4" />
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
