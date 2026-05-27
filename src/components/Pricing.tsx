"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

const tiers = [
  {
    name: "Curious",
    emoji: "🐣",
    price: 0,
    period: "free forever",
    desc: "Just want to poke around? (pun intended)",
    features: [
      "3 repos",
      "1,000 AI actions/month",
      "Community support",
      "Basic monitoring",
      "Auto-fix for simple bugs",
    ],
    cta: "Get Started Free",
    popular: false,
    style: "border-[#27272a]",
  },
  {
    name: "Builder",
    emoji: "🔧",
    price: 19,
    period: "/month",
    desc: "For serious devs who ship daily",
    features: [
      "Unlimited repos",
      "50,000 AI actions/month",
      "Priority support",
      "Advanced rules & filters",
      "Auto-deploy on green CI",
      "Dependency intelligence",
      "Security patching",
    ],
    cta: "Start Building",
    popular: true,
    style: "border-[#a855f7]/30",
  },
  {
    name: "Shipper",
    emoji: "🚀",
    price: 49,
    period: "/repo/month",
    desc: "For teams that move fast and break nothing",
    features: [
      "Everything in Builder",
      "Team management",
      "SSO / SAML",
      "Audit logs",
      "Custom SLA",
      "Dedicated support",
      "On-premise option",
    ],
    cta: "Scale Up",
    popular: false,
    style: "border-[#27272a]",
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-[#22c55e] tracking-widest uppercase mb-3">Pricing</p>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">
            Simple, honest{" "}
            <span className="gradient-text">pricing</span>
          </h2>
          <p className="text-[#a1a1aa] max-w-lg mx-auto mb-8">
            No hidden fees. No surprise bills. Pay for what you use.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-[#18181b] rounded-full p-1 border border-[#27272a]">
            <button
              onClick={() => setAnnual(false)}
              className={`text-sm px-4 py-1.5 rounded-full transition-all ${
                !annual ? "bg-[#a855f7] text-white" : "text-[#555] hover:text-[#a1a1aa]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`text-sm px-4 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                annual ? "bg-[#a855f7] text-white" : "text-[#555] hover:text-[#a1a1aa]"
              }`}
            >
              Annual
              <span className="text-[10px] bg-[#22c55e]/20 text-[#22c55e] px-1.5 py-0.5 rounded-full font-medium">
                -20%
              </span>
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {tiers.map((tier, i) => {
            const displayPrice = annual ? Math.round(tier.price * 0.8) : tier.price;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`relative rounded-xl p-6 bg-[#0f0f12] card-hover ${tier.style} ${
                  tier.popular ? "ring-1 ring-[#a855f7]/20" : "border"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-medium bg-gradient-to-r from-[#a855f7] to-[#3b82f6] text-white px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="mb-5">
                  <span className="text-2xl mr-2">{tier.emoji}</span>
                  <span className="text-lg font-semibold">{tier.name}</span>
                </div>

                <div className="mb-1">
                  <span className="text-4xl font-bold">${displayPrice}</span>
                  <span className="text-sm text-[#555]">{tier.period}</span>
                </div>
                <p className="text-sm text-[#555] mb-6">{tier.desc}</p>

                <ul className="space-y-3 mb-6">
                  {tier.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-[#a1a1aa]">
                      <Check className="w-4 h-4 text-[#22c55e] mt-0.5 shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <Link
                  href="#cta"
                  className={`block text-center py-2.5 rounded-full text-sm font-medium transition-all ${
                    tier.popular
                      ? "bg-gradient-to-r from-[#a855f7] to-[#3b82f6] text-white hover:opacity-90 hover:scale-[1.02]"
                      : "border border-[#27272a] text-[#a1a1aa] hover:border-[#a855f7]/40 hover:text-white"
                  }`}
                >
                  {tier.cta}
                </Link>
              </motion.div>
            );
          })}
        </div>

        <p className="text-center text-xs text-[#444] mt-8">
          All prices in USD. Cancel anytime. No questions asked. Enterprise pricing available —{" "}
          <Link href="mailto:hello@pokelabs.org" className="text-[#555] hover:text-[#a855f7] transition-colors">
            contact us
          </Link>
        </p>
      </div>
    </section>
  );
}
