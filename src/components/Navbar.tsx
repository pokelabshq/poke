import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#09090b]/80 backdrop-blur-xl border-b border-[var(--border)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-[var(--accent)] flex items-center justify-center">
            <span className="text-white font-bold text-xs">P</span>
          </div>
          <span className="font-semibold text-sm tracking-tight">Poke</span>
        </Link>

        <div className="flex items-center gap-5">
          <Link href="#what-is-poke" className="text-xs text-[var(--muted)] hover:text-[var(--text)] transition-colors">What is Poke?</Link>
          <a href="https://github.com/pokelabshq/poke" target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--muted)] hover:text-[var(--text)] transition-colors">GitHub</a>
          <Link href="#install" className="text-xs px-3 py-1.5 rounded-md bg-[var(--accent)] text-white hover:brightness-110 transition-all">Install</Link>
        </div>
      </div>
    </nav>
  );
}
