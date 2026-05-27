export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-10 px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-[var(--accent)] flex items-center justify-center">
            <span className="text-white font-bold text-[10px]">P</span>
          </div>
          <span className="text-sm text-[var(--muted)]">© 2026 Poke Labs</span>
        </div>
        <div className="flex items-center gap-5">
          <a href="https://github.com/pokelabshq/poke" target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--muted)] hover:text-[var(--text)] transition-colors">GitHub</a>
          <a href="mailto:hello@pokelabs.org" className="text-xs text-[var(--muted)] hover:text-[var(--text)] transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
