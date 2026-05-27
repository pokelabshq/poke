const tiers = [
  {
    name: "Free",
    price: "0",
    desc: "Just trying it out.",
    body: "One repository, community support via Discord. All core features included — no feature gating.",
  },
  {
    name: "Pro",
    price: "9",
    desc: "Building in production.",
    body: "Unlimited repositories, priority email support, advanced configuration, and team dashboard access.",
  },
  {
    name: "Team",
    price: "29",
    desc: "Scaling your org.",
    body: "Everything in Pro, plus team management, audit logs, custom Slack integration, and a dedicated onboarding call.",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-24 border-t border-[var(--border)]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3 text-center">
          Pricing
        </h2>
        <p className="text-[var(--muted)] text-center mb-14 max-w-lg mx-auto">
          Simple, honest pricing. No games.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 flex flex-col"
            >
              <h3 className="text-lg font-semibold tracking-tight mb-1">
                {tier.name}
              </h3>
              <p className="text-sm text-[var(--muted)] mb-4">{tier.desc}</p>
              <p className="text-3xl font-semibold tracking-tight mb-4">
                <span className="text-[var(--muted)] text-lg font-normal">
                  $
                </span>
                {tier.price}
                <span className="text-sm text-[var(--muted)] font-normal">
                  /mo
                </span>
              </p>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {tier.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
