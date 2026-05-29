export default function Pricing() {
  return (
    <section className="px-6 py-24 border-t border-[var(--border)]">
      <div className="max-w-2xl mx-auto">
        <p className="text-xs font-mono text-[var(--muted)] mb-4">$ pricing</p>
        <p className="text-sm font-mono text-white mb-2">free. forever.</p>
        <p className="text-sm text-[var(--muted)] max-w-md">
          poke is open source. MIT licensed. run it yourself, schedule it
          with github actions, host it on your own hardware. no account
          required.
        </p>
        <div className="mt-8 font-mono text-xs text-[var(--muted)]">
          <p>one repo · unlimited repos · your servers</p>
          <p className="mt-1">$0/mo &nbsp; $0/mo &nbsp; $0/mo</p>
        </div>
      </div>
    </section>
  );
}
