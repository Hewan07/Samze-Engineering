"use client";

import { useEffect, useRef, useState } from "react";
import { FolderKanban, TrendingUp, Star, CalendarDays } from "lucide-react";

const stats = [
  { icon: FolderKanban, value: "50+", label: "Projects Completed", delay: 0 },
  { icon: TrendingUp, value: "40%", label: "Market Share", delay: 100 },
  { icon: Star, value: "100%", label: "Client Satisfaction", delay: 200 },
  { icon: CalendarDays, value: "2020", label: "Year Founded", delay: 300 },
];

function StatCard({
  icon: Icon,
  value,
  label,
  delay,
}: (typeof stats)[0]) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
      }}
    >
      <div
        className="w-12 h-12 rounded flex items-center justify-center mb-4"
        style={{ background: "rgba(245,158,11,0.15)" }}
      >
        <Icon size={22} style={{ color: "#f59e0b" }} strokeWidth={1.5} />
      </div>
      <span
        className="font-bold text-white mb-1"
        style={{
          fontFamily: "var(--font-manrope), sans-serif",
          fontSize: "2rem",
          lineHeight: 1,
        }}
      >
        {value}
      </span>
      <span
        className="text-sm uppercase tracking-wider"
        style={{
          color: "rgba(255,255,255,0.45)",
          fontFamily: "var(--font-inter), sans-serif",
          letterSpacing: "0.1em",
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default function StatsStrip() {
  return (
    <section style={{ background: "#0f172a" }}>
      {/* Top separator */}
      <div
        className="h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(245,158,11,0.3), transparent)",
        }}
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </div>
      <div
        className="h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(245,158,11,0.15), transparent)",
        }}
      />
    </section>
  );
}
