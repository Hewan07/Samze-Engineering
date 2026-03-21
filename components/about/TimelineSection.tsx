"use client";

import { useEffect, useRef, useState } from "react";
import SectionLabel from "@/components/SectionLabel";

const milestones = [
  {
    year: "2020",
    title: "Company Founded",
    description:
      "SAMZE Engineering was established in Addis Ababa with a mission to bring affordable clean energy solutions to Ethiopia.",
  },
  {
    year: "2021",
    title: "First Major Installation",
    description:
      "Completed our first large-scale commercial solar installation, establishing our reputation for quality and reliability.",
  },
  {
    year: "2023",
    title: "Market Expansion",
    description:
      "Expanded operations nationwide, delivering projects across multiple Ethiopian regions and scaling our team significantly.",
  },
  {
    year: "2024",
    title: "Strategic Partnerships",
    description:
      "Formed partnerships with UNHCR, Safaricom, and Alkan Communication, cementing our position in the enterprise market.",
  },
  {
    year: "2025",
    title: "Industry Recognition",
    description:
      "Recognized as a leading solar energy provider in Ethiopia, achieving 40% market share and a 100% satisfaction record.",
  },
  {
    year: "2026",
    title: "Countrywide Leadership",
    description:
      "Targeting full national coverage with expanded service offerings including water drilling and construction solutions.",
  },
];

export default function TimelineSection() {
  const ref = useRef<HTMLDivElement>(null);
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
    <section className="py-24 lg:py-32" style={{ background: "#f2f4f6" }}>
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionLabel>Our Journey</SectionLabel>
          <h2
            className="mt-4 font-bold"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              letterSpacing: "-0.02em",
              color: "#0f172a",
            }}
          >
            From Vision to{" "}
            <span style={{ color: "#f59e0b" }}>Impact</span>
          </h2>
        </div>

        <div ref={ref} className="relative">
          {/* Center line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block transition-all duration-1000"
            style={{
              background: "linear-gradient(to bottom, #f59e0b, rgba(245,158,11,0.1))",
              opacity: visible ? 1 : 0,
            }}
          />

          <div className="space-y-12">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={m.year}
                  className="relative flex flex-col md:flex-row items-start md:items-center gap-6 transition-all duration-700"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible
                      ? "translateY(0)"
                      : `translateY(20px)`,
                    transitionDelay: `${i * 100}ms`,
                  }}
                >
                  {/* Left side (even) */}
                  <div
                    className={`md:w-1/2 md:pr-10 ${isLeft ? "md:text-right" : "md:order-3 md:pl-10 md:pr-0 md:text-left"}`}
                  >
                    {isLeft && (
                      <Card year={m.year} title={m.title} description={m.description} />
                    )}
                    {!isLeft && <div className="hidden md:block" />}
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex md:order-2 items-center justify-center shrink-0">
                    <div
                      className="w-4 h-4 rounded-full border-2 border-amber-500 z-10"
                      style={{ background: "#f59e0b" }}
                    />
                  </div>

                  {/* Right side (odd) */}
                  <div
                    className={`md:w-1/2 ${isLeft ? "md:order-3 hidden md:block" : "md:pl-10"}`}
                  >
                    {!isLeft && (
                      <Card year={m.year} title={m.title} description={m.description} />
                    )}
                    {isLeft && <div className="hidden md:block" />}
                  </div>

                  {/* Mobile card */}
                  <div className="md:hidden w-full pl-6" style={{ borderLeft: "2px solid #f59e0b" }}>
                    <Card year={m.year} title={m.title} description={m.description} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ year, title, description }: { year: string; title: string; description: string }) {
  return (
    <div
      className="rounded p-6"
      style={{
        background: "#ffffff",
        boxShadow: "0 4px 16px rgba(15,23,42,0.06)",
      }}
    >
      <span
        className="text-xs font-bold uppercase tracking-widest mb-2 block"
        style={{ color: "#f59e0b", fontFamily: "var(--font-inter), sans-serif" }}
      >
        {year}
      </span>
      <h4
        className="font-bold mb-2"
        style={{ fontFamily: "var(--font-manrope), sans-serif", color: "#0f172a" }}
      >
        {title}
      </h4>
      <p
        className="text-sm leading-relaxed"
        style={{ color: "#6b7280", fontFamily: "var(--font-inter), sans-serif" }}
      >
        {description}
      </p>
    </div>
  );
}
