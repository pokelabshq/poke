"use client";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-12">
      <div className="max-w-2xl mx-auto">
        <pre className="text-[10px] sm:text-xs font-mono text-[var(--muted)] leading-none mb-12 select-none">
{` ____   ___  _   _ _____       _        ____
|  _ \\ / _ \\| | | | ____|     | |      | __ )
| |_) | | | | |_| |  _|       | |      |  _ \\
|  __/| |_| |  _| | |_| _____| |____  | |_) |
|_|    \\___/ \\__| |____|_____|______| |____/`}
        </pre>

        <h1 className="text-4xl sm:text-5xl font-mono font-bold tracking-tight leading-[1.1] mb-6">
          poking at the future<br />
          of software.
        </h1>

        <p className="text-[var(--muted)] text-base leading-relaxed max-w-lg mb-6">
          we are a toronto-based ai lab building tools that maintain your
          code autonomously. from dependency updates to architectural
          review — we ship agents that think.
        </p>

        <p className="text-[var(--muted)] text-sm leading-relaxed max-w-lg mb-10">
          poke labs is a project by <a href="https://thealxlabs.ca" target="_blank" rel="noopener noreferrer" className="text-[var(--muted-light)] hover:text-white transition-colors underline underline-offset-2">thealxlabs</a>.
          everything we build is open source.
        </p>

        <div className="flex items-center gap-4 mt-8">
          <a
            href="/#products"
            className="text-xs font-mono text-black bg-white hover:bg-gray-200 px-4 py-2 rounded transition-colors"
          >
            our products
          </a>
          <a
            href="/team"
            className="text-xs font-mono text-[var(--muted)] border border-[var(--border)] hover:border-[var(--muted)] hover:text-white px-4 py-2 rounded transition-colors"
          >
            team
          </a>
        </div>

        <div className="flex items-center gap-4 mt-10 text-xs font-mono text-[var(--muted)]">
          <span>open source</span>
          <span className="text-[var(--border)]">·</span>
          <span>toronto</span>
          <span className="text-[var(--border)]">·</span>
          <span>est. 2026</span>
        </div>
      </div>
    </section>
  );
}
