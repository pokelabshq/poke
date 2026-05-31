export default function About() {
  return (
    <section id="about" className="px-6 py-24 border-t border-[var(--border)]">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs font-mono text-[var(--muted)] mb-2">$ whoami</p>
            <h2 className="text-2xl font-mono font-bold tracking-tight mb-6">
              about us
            </h2>
            <div className="space-y-4 text-sm text-[var(--muted)] leading-relaxed">
              <p>
                poke Labs is an AI research and development lab based in Toronto,
                Ontario. We build autonomous agents that help developers ship
                better software, faster.
              </p>
              <p>
                Founded in 2026 by <a href="https://thealxlabs.ca" target="_blank" rel="noopener noreferrer" className="text-[var(--muted-light)] hover:text-white transition-colors underline underline-offset-2">Alexander Wondwossen</a> as
                an extension of <a href="https://thealxlabs.ca" target="_blank" rel="noopener noreferrer" className="text-[var(--muted-light)] hover:text-white transition-colors underline underline-offset-2">TheAlxLabs</a>, our
                focus is on practical AI tools — not demos, not research papers.
                Ship fast. Iterate faster.
              </p>
              <p>
                We are part of the <a href="https://hackclub.com" target="_blank" rel="noopener noreferrer" className="text-[var(--muted-light)] hover:text-white transition-colors underline underline-offset-2">Hack Club</a> community
                and believe deeply in open-source development. Everything we
                build is free to use and modify.
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-mono text-[var(--muted)] mb-2">$ cat principles.md</p>
            <h2 className="text-2xl font-mono font-bold tracking-tight mb-6">
              principles
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Open Source, Always",
                  desc: "Every tool we release is MIT licensed. No paywalled features. No vendor lock-in. Your code, your rules.",
                },
                {
                  title: "Ship Fast",
                  desc: "Perfect is the enemy of done. We ship imperfect products quickly and iterate based on real feedback.",
                },
                {
                  title: "Code First",
                  desc: "We are developers building for developers. Our tools integrate into your workflow — not the other way around.",
                },
                {
                  title: "Type Safe",
                  desc: "TypeScript, strict mode, all the time. If it's not typed, it's not done.",
                },
              ].map((p, i) => (
                <div key={i} className="border-l-2 border-[var(--border)] pl-4">
                  <h3 className="text-sm font-mono font-semibold text-white mb-1">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[var(--muted)] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
