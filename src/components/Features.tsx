const features = [
  {
    title: "Dependency Updates",
    desc: "Scans every dependency. Patches, minors, majors. Opens PRs with changelogs. Auto-merges patch updates if you want.",
  },
  {
    title: "Security Fixes",
    desc: "Monitors CVE databases. When a vulnerability drops, Poke patches it, opens a PR, and notifies you. No waiting for bots.",
  },
  {
    title: "Bug Detection",
    desc: "Reads your code for common bugs — memory leaks, race conditions, unused imports, type errors. Fixes them before users notice.",
  },
  {
    title: "CI Maintenance",
    desc: "Keeps your CI/CD configs up to date. GitHub Actions versions, Node runners, deprecated syntax — Poke handles the plumbing.",
  },
  {
    title: "PR Automation",
    desc: "Opens PRs with clear descriptions. Labels them. Assigns reviewers. Links to the issue. Does the busywork so you don't have to.",
  },
  {
    title: "Works Offline",
    desc: "Runs entirely in your GitHub Actions. No external servers. No SaaS dashboard. Your code never leaves your infrastructure.",
  },
];

export default function Features() {
  return (
    <section className="px-6 py-24 border-t border-[var(--border)]">
      <div className="max-w-2xl mx-auto">
        <p className="text-xs font-mono text-[var(--muted)] mb-10">$ features</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="border border-[var(--border)] rounded p-4 bg-[var(--surface)]"
            >
              <h3 className="text-sm font-mono font-semibold text-white mb-2">
                {f.title}
              </h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
