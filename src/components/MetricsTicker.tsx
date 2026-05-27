"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  { value: 12847, suffix: "", label: "bugs auto-fixed", prefix: "" },
  { value: 3291, suffix: "", label: "dependencies updated", prefix: "" },
  { value: 847, suffix: "", label: "days of dev time saved", prefix: "" },
  { value: 99.99, suffix: "%", label: "uptime", prefix: "" },
];

function AnimatedNumber({ value, suffix, prefix }: { value: number; suffix: string; prefix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(Number.isInteger(value) ? Math.floor(current) : parseFloat(current.toFixed(2)));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}{Number.isInteger(value) ? display.toLocaleString() : display.toFixed(2)}{suffix}
    </span>
  );
}

export default function MetricsTicker() {
  return (
    <section className="py-16 border-y border-[#27272a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-bold gradient-text mb-1">
                <AnimatedNumber value={m.value} suffix={m.suffix} prefix={m.prefix} />
              </div>
              <p className="text-sm text-[#555]">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
