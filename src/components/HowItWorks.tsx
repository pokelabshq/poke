const steps = [
  {
    cmd: "$ npx poke init",
    desc: "scans your repo. detects your stack. starts watching.",
  },
  {
    cmd: "$ npx poke run",
    desc: "fixes bugs, patches deps, opens prs. or schedule it.",
  },
  {
    cmd: "# that's it",
    desc: "review prs. merge. repeat.",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-6 py-24 border-t border-[var(--border)]">
      <div className="max-w-2xl mx-auto">
        <p className="text-xs font-mono text-[var(--muted)] mb-10">$ how it works</p>

        <div className="space-y-6">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-4 items-start">
              <span className="text-xs font-mono text-[var(--muted)] mt-1.5 w-4 shrink-0">
                {(i + 1).toString().padStart(2, "0")}
              </span>
              <div>
                <code className="text-sm font-mono text-white">{step.cmd}</code>
                <p className="text-sm text-[var(--muted)] mt-1">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
