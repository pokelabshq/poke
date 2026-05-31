import Link from "next/link";

const products = [
  {
    id: "council",
    name: "AI Council",
    tagline: "Multiple AI perspectives on every decision.",
    desc: "Connect Telegram bots with distinct personalities — a Strategist, an Engineer, a Critic, and more. Pitch ideas and get diverse, actionable perspectives. Every opinion is one bot away.",
    status: "in development",
    href: "/#council",
    emoji: "🎯",
  },
  {
    id: "poke",
    name: "Poke CLI",
    tagline: "Your code, maintained autonomously.",
    desc: "An open-source AI DevOps agent that monitors your repos, fixes bugs, updates dependencies, reviews PRs, and ships code — while you sleep.",
    status: "live",
    href: "https://github.com/pokelabshq/poke",
    emoji: "⚡",
  },
  {
    id: "conductor",
    name: "Conductor",
    tagline: "AI integration hub for developers.",
    desc: "A plugin-based AI integration platform with 25+ plugins. Connect your favorite tools and AI models in one unified workspace.",
    status: "live",
    href: "https://github.com/thealxlabs/conductor",
    emoji: "🎼",
  },
];

export default function Products() {
  return (
    <section id="products" className="px-6 py-24 border-t border-[var(--border)]">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-mono text-[var(--muted)] mb-2">$ ls ./products</p>
        <h2 className="text-2xl font-mono font-bold tracking-tight mb-12">
          what we build
        </h2>

        <div className="space-y-4">
          {products.map((p) => (
            <Link
              key={p.id}
              href={p.href}
              className="block border border-[var(--border)] rounded p-5 bg-[var(--surface)] hover:border-[var(--muted)] transition-colors group"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-lg">{p.emoji}</span>
                  <div>
                    <h3 className="text-sm font-mono font-semibold text-white group-hover:text-[var(--accent-dim)] transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-xs text-[var(--muted)]">{p.tagline}</p>
                  </div>
                </div>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                  p.status === "live"
                    ? "text-green-400 border border-green-900 bg-green-950/30"
                    : "text-yellow-400 border border-yellow-900 bg-yellow-950/30"
                }`}>
                  {p.status}
                </span>
              </div>
              <p className="text-xs text-[var(--muted)] leading-relaxed mt-3 pl-8">
                {p.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
