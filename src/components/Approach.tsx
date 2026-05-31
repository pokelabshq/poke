export default function Approach() {
  return (
    <section id="approach" className="px-6 py-24 border-t border-[var(--border)]">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-mono text-[var(--muted)] mb-2">$ cat approach.md</p>
        <h2 className="text-2xl font-mono font-bold tracking-tight mb-10">
          how we work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              num: "01",
              title: "Build in Public",
              desc: "Every project is open source from day one. We develop in the open on GitHub and share our progress openly.",
            },
            {
              num: "02",
              title: "Dogfood Relentlessly",
              desc: "We use our own tools every day. If it doesn't work for us, it doesn't ship. No exceptions.",
            },
            {
              num: "03",
              title: "Think Long-Term",
              desc: "We build tools that last. Clean architecture, typed code, comprehensive tests. No technical debt shortcuts.",
            },
          ].map((item, i) => (
            <div key={i} className="border border-[var(--border)] rounded p-5 bg-[var(--surface)]">
              <p className="text-xs font-mono text-[var(--muted)] mb-3">{item.num}</p>
              <h3 className="text-sm font-mono font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
