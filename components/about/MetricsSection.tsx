"use client";

import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: "6+", label: "Core service areas" },
  { value: "360°", label: "Project support" },
  { value: "24/7", label: "Field responsiveness" },
  { value: "2020", label: "Year established" },
];

export default function MetricsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-20" style={{ background: "#0f172a" }} aria-labelledby="metrics-heading">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 id="metrics-heading" className="sr-only">Key Metrics</h2>
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className="text-center transition-all duration-600"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <dt className="sr-only">{m.label}</dt>
              <dd
                className="font-bold mb-2"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "clamp(1.8rem, 4vw, 3rem)",
                  color: "#f59e0b",
                  lineHeight: 1,
                }}
              >
                {m.value}
              </dd>
              <p
                className="text-sm font-medium text-white"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {m.label}
              </p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
