"use client";

import { useEffect, useRef, useState } from "react";
import { MessageSquare, Ruler, Wrench, HeartHandshake } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Project Consultation",
    description:
      "We begin by understanding the scope, site conditions, timelines, and operational requirements of your project.",
  },
  {
    number: "02",
    icon: Ruler,
    title: "Site Review & Planning",
    description:
      "Our team reviews technical needs, field constraints, and delivery priorities before mobilization begins.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Execution & Installation",
    description:
      "We execute the work with close coordination, quality checks, and practical site management from start to finish.",
  },
  {
    number: "04",
    icon: HeartHandshake,
    title: "Ongoing Support",
    description:
      "We remain available for follow-up, maintenance support, and post-handover coordination as project needs evolve.",
  },
];

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-24 lg:py-32" style={{ background: "#f2f4f6" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionLabel>How We Work</SectionLabel>
          <h2
            className="mt-4 font-bold"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              letterSpacing: "-0.02em",
              color: "#0f172a",
            }}
          >
            A Process Built on <span style={{ color: "#f59e0b" }}>Excellence</span>
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop) */}
          <div
            className="absolute top-10 left-[calc(12.5%+1.5rem)] right-[calc(12.5%+1.5rem)] h-px hidden lg:block transition-all duration-1000"
            style={{
              background: "linear-gradient(90deg, #f59e0b, rgba(245,158,11,0.2))",
              opacity: visible ? 1 : 0,
            }}
          />

          {steps.map((step, i) => (
            <div
              key={step.title}
              className="relative rounded p-7 transition-all duration-700"
              style={{
                background: "#ffffff",
                boxShadow: "0 4px 20px rgba(15,23,42,0.06)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${i * 100}ms`,
              }}
            >
              {/* Step number badge */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-5 relative z-10"
                style={{
                  background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
                  boxShadow: "0 0 0 4px rgba(245,158,11,0.15)",
                }}
              >
                <span
                  className="text-xs font-bold"
                  style={{ color: "#0f172a", fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {step.number}
                </span>
              </div>

              <step.icon
                size={22}
                style={{ color: "#f59e0b" }}
                strokeWidth={1.5}
                className="mb-4"
              />
              <h4
                className="font-bold mb-3"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  color: "#0f172a",
                  fontSize: "1.05rem",
                }}
              >
                {step.title}
              </h4>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#6b7280", fontFamily: "var(--font-inter), sans-serif" }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
