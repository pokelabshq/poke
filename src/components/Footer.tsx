export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="text-xs font-mono font-bold mb-3">poke<span className="text-[var(--muted)]">labs</span></p>
            <p className="text-xs text-[var(--muted)] leading-relaxed">
              An AI lab building autonomous developer tools.
              Based in Toronto, Ontario.
            </p>
          </div>
          <div>
            <p className="text-xs font-mono text-[var(--muted)] mb-3">products</p>
            <div className="space-y-1.5">
              <a href="/#council" className="block text-xs text-[var(--muted)] hover:text-white transition-colors">AI Council</a>
              <a href="https://github.com/pokelabshq/poke" target="_blank" rel="noopener noreferrer" className="block text-xs text-[var(--muted)] hover:text-white transition-colors">Poke CLI</a>
              <a href="https://github.com/thealxlabs/conductor" target="_blank" rel="noopener noreferrer" className="block text-xs text-[var(--muted)] hover:text-white transition-colors">Conductor</a>
            </div>
          </div>
          <div>
            <p className="text-xs font-mono text-[var(--muted)] mb-3">connect</p>
            <div className="space-y-1.5">
              <a href="https://github.com/pokelabshq" target="_blank" rel="noopener noreferrer" className="block text-xs text-[var(--muted)] hover:text-white transition-colors">GitHub</a>
              <a href="https://thealxlabs.ca" target="_blank" rel="noopener noreferrer" className="block text-xs text-[var(--muted)] hover:text-white transition-colors">TheAlxLabs</a>
              <a href="mailto:hello@pokelabs.org" className="block text-xs text-[var(--muted)] hover:text-white transition-colors">hello@pokelabs.org</a>
            </div>
          </div>
        </div>
        <div className="border-t border-[var(--border)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-mono text-[var(--muted)]">
            © 2026 Poke Labs. All rights reserved.
          </p>
          <p className="text-[10px] font-mono text-[var(--muted)]">
            open source · toronto · est. 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
