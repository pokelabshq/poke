export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-6 py-8">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs font-mono text-[var(--muted)]">
          poke labs · toronto · 2026
        </p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/pokelabshq" className="text-xs font-mono text-[var(--muted)] hover:text-white transition-colors">
            github
          </a>
          <a href="https://pokelabs.org" className="text-xs font-mono text-[var(--muted)] hover:text-white transition-colors">
            pokelabs.org
          </a>
        </div>
      </div>
    </footer>
  );
}
