"use client";

import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: "40%", label: "Market Share", sublabel: "Ethiopia solar sector" },
  { value: "50+", label: "Projects Delivered", sublabel: "Across all regions" },
  { value: "100%", label: "Client Satisfaction", sublabel: "Verified by clients" },
  { value: "$25K+", label: "Revenue Generated", sublabel: "Annual gross" },
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
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: "#0f172a" }}
    >
      {/* Amber glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(245,158,11,0.08) 0%, transparent 70%)",
        }}
      />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className="text-center transition-all duration-700"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <div
                className="font-bold text-white mb-1"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  letterSpacing: "-0.02em",
                  background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {m.value}
              </div>
              <p
                className="font-semibold text-white mb-1 text-sm"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                {m.label}
              </p>
              <p
                className="text-xs"
                style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-inter), sans-serif" }}
              >
                {m.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
