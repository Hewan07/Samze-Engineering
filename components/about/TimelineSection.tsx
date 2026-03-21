"use client";

import { useEffect, useRef, useState } from "react";
import SectionLabel from "@/components/SectionLabel";

const milestones = [
  { year: "2020", title: "Founding the Company" },
  { year: "2021", title: "Product Development Begins" },
  { year: "2023", title: "Market Expansion Initiated" },
  { year: "2024", title: "Strategic Partnerships Formed" },
  { year: "2025", title: "Industry Recognition Attained" },
  { year: "2026", title: "Countrywide Market Domination" },
];

export default function TimelineSection() {
  const ref = useRef<HTMLOListElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-24 lg:py-32" style={{ background: "#ffffff" }} aria-labelledby="timeline-heading">
      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        <div className="mb-14">
          <SectionLabel>Business Milestones</SectionLabel>
          <h2
            id="timeline-heading"
            className="mt-4 font-bold"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              letterSpacing: "-0.02em",
              color: "#0f172a",
            }}
          >
            Our Journey
          </h2>
        </div>

        <ol ref={ref} className="relative" aria-label="Company milestones">
          {/* Vertical line */}
          <div
            className="absolute left-[2.25rem] top-2 bottom-2 w-px"
            style={{ background: "#e5e7eb" }}
            aria-hidden="true"
          />

          {milestones.map((m, i) => (
            <li
              key={m.year}
              className="relative flex gap-8 pb-10 last:pb-0 transition-all duration-600"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transitionDelay: `${i * 80}ms`,
              }}
            >
              {/* Year badge */}
              <div className="shrink-0 flex flex-col items-center" style={{ width: "4.5rem" }}>
                <div
                  className="w-4 h-4 rounded-full border-2 mt-0.5 relative z-10"
                  style={{
                    background: "#f59e0b",
                    borderColor: "#f59e0b",
                  }}
                  aria-hidden="true"
                />
              </div>

              {/* Content */}
              <div className="pb-2">
                <span
                  className="block text-xs font-bold uppercase tracking-widest mb-1"
                  style={{ color: "#b45309", fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {m.year}
                </span>
                <p
                  className="font-semibold text-base"
                  style={{ color: "#0f172a", fontFamily: "var(--font-manrope), sans-serif" }}
                >
                  {m.title}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
