"use client";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-12">
      <div className="max-w-2xl mx-auto">
        {/* ASCII art logo */}
        <pre className="text-[10px] sm:text-xs font-mono text-[var(--muted)] leading-none mb-12 select-none">
{` ____   ___  _   _ _____       _        ____
|  _ \\ / _ \\| | | | ____|     | |      | __ )
| |_) | | | | |_| |  _|       | |      |  _ \\
|  __/| |_| |  |_| |_| | _____| |____  | |_) |
|_|    \\___/|_| |_(_)  |_____|______| |____/`}
        </pre>

        <h1 className="text-4xl sm:text-5xl font-mono font-bold tracking-tight leading-[1.1] mb-6">
          we build software,<br />
          autonomously.
        </h1>

        <p className="text-[var(--muted)] text-base leading-relaxed max-w-md mb-10">
          poke labs is an ai devops company. we make tools that maintain your
          code, fix bugs, and ship updates — while you sleep.
        </p>

        <div className="flex items-center gap-4 mt-8 text-xs font-mono text-[var(--muted)]">
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
