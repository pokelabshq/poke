const points = [
  {
    old: "Dependabot opens PRs you ignore.",
    new: "Poke fixes the actual code, not just the version number.",
  },
  {
    new: "Runs as a GitHub Action. No servers. No dashboard. No SaaS.",
  },
  {
    old: "AI coding tools need you at a terminal.",
    new: "Poke runs on a schedule. You review PRs with your morning coffee.",
  },
];

export default function Differentiated() {
  return (
    <section className="px-6 py-24 border-t border-[var(--border)]">
      <div className="max-w-2xl mx-auto">
        <p className="text-xs font-mono text-[var(--muted)] mb-10">$ why not just...</p>

        <div className="space-y-10">
          {points.map((point, i) => (
            <div key={i} className="font-mono">
              {point.old && (
                <p className="text-sm text-[var(--muted)] line-through mb-1.5">
                  {point.old}
                </p>
              )}
              <p className="text-sm text-white">
                → {point.new}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
