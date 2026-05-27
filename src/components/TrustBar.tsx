const items = [
  "GitHub",
  "TypeScript",
  "Python",
  "Go",
  "Rust",
];

export default function TrustBar() {
  return (
    <section className="px-6 py-12 border-y border-[var(--border)]">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-medium uppercase tracking-widest text-[var(--muted)] text-center mb-6">
          Works with
        </p>
        <div className="flex items-center justify-center gap-8 sm:gap-12 flex-wrap">
          {items.map((item) => (
            <span
              key={item}
              className="text-sm font-medium text-[var(--muted)] tracking-wide"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
