"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "40%", label: "Market Share" },
  { value: "20%", label: "Profit Margin" },
  { value: "100%", label: "Customer Satisfaction" },
  { value: "$25,000", label: "Annual Gross Revenue" },
];

export default function StatsStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{ background: "#0f172a" }} aria-label="Key metrics">
      <div
        className="h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.4), transparent)" }}
      />
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="text-center transition-all duration-600"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <dt className="sr-only">{s.label}</dt>
              <dd
                className="font-bold text-white mb-1"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                  color: "#f59e0b",
                  lineHeight: 1,
                }}
              >
                {s.value}
              </dd>
              <p
                className="text-xs uppercase tracking-widest"
                style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-inter), sans-serif" }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </dl>
      </div>
      <div
        className="h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.15), transparent)" }}
      />
    </section>
  );
}
