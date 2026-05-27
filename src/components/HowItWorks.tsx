const steps = [
  {
    number: "01",
    title: "Connect",
    description: "Run one command in your repo root.",
    code: "$ npx poke init",
  },
  {
    number: "02",
    title: "Configure",
    description: "Set rules in YAML or the dashboard.",
    code: `# poke.yml
schedule: "daily"
auto_pr: true
labels: ["poke"]`,
  },
  {
    number: "03",
    title: "Forget",
    description: "Poke handles the rest. Automatically.",
    code: "# That's it.",
    highlight: true,
  },
];

export default function HowItWorks() {
  return (
    <section className="px-6 py-24 border-t border-[var(--border)]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-14 text-center">
          How it works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`rounded-xl border p-6 ${
                step.highlight
                  ? "border-[var(--accent)] bg-[var(--accent-muted)]"
                  : "border-[var(--border)] bg-[var(--surface)]"
              }`}
            >
              <span
                className={`text-sm font-mono mb-3 block ${
                  step.highlight ? "text-[var(--accent)]" : "text-[var(--muted)]"
                }`}
              >
                {step.number}
              </span>
              <h3
                className={`text-lg font-semibold tracking-tight mb-2 ${
                  step.highlight ? "text-[var(--accent)]" : ""
                }`}
              >
                {step.title}
              </h3>
              <p className="text-sm text-[var(--muted)] mb-4">
                {step.description}
              </p>
              <pre className="text-xs font-mono bg-black/30 rounded-lg p-3 overflow-x-auto">
                <code>{step.code}</code>
              </pre>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
