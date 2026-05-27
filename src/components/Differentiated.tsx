const problems = [
  {
    contrast: "You're a builder, not a DevOps engineer.",
    hook: "Poke handles the plumbing.",
    body: "You started building software to ship features, not wrangle CI/CD pipelines, dependency graphs, and security patches. Poke automates the maintenance so you can focus on what matters.",
  },
  {
    contrast: "Dependabot opens PRs. Poke fixes the root cause.",
    hook: "We understand your code, not just your lockfile.",
    body: "Automated dependency tools surface alerts. Poke reads your code, understands the breaking change, applies the fix, and opens a PR that actually passes CI. It doesn't just tell you there's a problem — it solves it.",
  },
  {
    contrast: "Claude Code needs your hand. Poke runs on its own.",
    hook: "Autonomous by design, interactive when needed.",
    body: "Other AI coding tools require you to sit at a terminal and review every prompt. Poke runs as a scheduled GitHub Action, scans your entire repo, makes targeted fixes, and opens PRs for review. You wake up to a healthier codebase.",
  },
];

export default function Differentiated() {
  return (
    <section className="px-6 py-24 border-t border-[var(--border)]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3 text-center">
          Why Poke exists
        </h2>
        <p className="text-[var(--muted)] text-center mb-14 max-w-lg mx-auto">
          Three problems. One answer.
        </p>

        <div className="space-y-12">
          {problems.map((item, i) => (
            <div key={i} className="border-l-2 border-[var(--border)] pl-6">
              <p className="text-sm text-[var(--muted)] mb-1.5 line-through decoration-[var(--muted)]/40">
                {item.contrast}
              </p>
              <h3 className="text-xl font-semibold tracking-tight mb-3 text-[var(--text)]">
                {item.hook}
              </h3>
              <p className="text-[var(--muted)] leading-relaxed max-w-xl">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
