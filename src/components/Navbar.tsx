import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-[var(--border)]">
      <div className="max-w-4xl mx-auto px-6 h-12 flex items-center justify-between">
        <Link href="/" className="text-sm font-mono font-bold tracking-tight">
          poke<span className="text-[var(--muted)]">.sh</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link href="#install" className="text-xs font-mono text-[var(--muted)] hover:text-white transition-colors">
            install
          </Link>
          <a href="#how" className="text-xs font-mono text-[var(--muted)] hover:text-white transition-colors">
            how
          </a>
          <a
            href="https://github.com/pokelabshq/poke"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-[var(--muted)] hover:text-white transition-colors"
          >
            github
          </a>
        </div>
      </div>
    </nav>
  );
}
