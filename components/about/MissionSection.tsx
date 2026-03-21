"use client";

import { useEffect, useRef, useState } from "react";
import { Lightbulb, Shield, Leaf } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously adopt cutting-edge solar technology and best practices to deliver superior energy solutions that outperform the market.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description:
      "Every system we install is built to last. We back our work with rigorous testing, quality components, and after-sales support.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Our installations reduce carbon emissions and lower energy costs, contributing to a greener, more sustainable Ethiopia.",
  },
];

export default function MissionSection() {
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
    <section className="py-24 lg:py-32" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Mission text */}
          <div
            ref={ref}
            className="transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-24px)",
            }}
          >
            <SectionLabel>Our Mission</SectionLabel>
            <h2
              className="mt-4 mb-6 font-bold leading-tight"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                letterSpacing: "-0.02em",
                color: "#0f172a",
              }}
            >
              Clean energy, accessible to{" "}
              <span style={{ color: "#f59e0b" }}>every Ethiopian</span>
            </h2>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "#6b7280", fontFamily: "var(--font-inter), sans-serif" }}
            >
              SAMZE Engineering was founded on the belief that reliable,
              affordable clean energy should not be a luxury. Since 2020, we
              have worked tirelessly to bring world-class solar and
              electromechanical solutions to homes, businesses, and communities
              across Ethiopia.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "#6b7280", fontFamily: "var(--font-inter), sans-serif" }}
            >
              Our team of certified engineers and technicians delivers projects
              of every scale — from single-home rooftop installations to large
              commercial solar farms — with the same commitment to excellence
              and long-term performance.
            </p>
          </div>

          {/* Quote block */}
          <div
            className="transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(24px)",
              transitionDelay: "150ms",
            }}
          >
            <blockquote
              className="relative rounded p-8"
              style={{
                background: "#0f172a",
                borderLeft: "4px solid #f59e0b",
              }}
            >
              <p
                className="text-lg leading-relaxed italic text-white mb-4"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                &ldquo;Make clean energy accessible, affordable, and dependable
                for homes, businesses, and communities across Ethiopia and
                beyond.&rdquo;
              </p>
              <footer
                className="text-sm font-semibold"
                style={{ color: "#f59e0b", fontFamily: "var(--font-inter), sans-serif" }}
              >
                — SAMZE Engineering Mission Statement
              </footer>
            </blockquote>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3
            className="text-center font-bold mb-12 text-center"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontSize: "1.5rem",
              color: "#0f172a",
            }}
          >
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="rounded p-8 transition-all duration-700"
                style={{
                  background: "#f2f4f6",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${300 + i * 100}ms`,
                }}
              >
                <div
                  className="w-12 h-12 rounded flex items-center justify-center mb-5"
                  style={{ background: "rgba(245,158,11,0.12)" }}
                >
                  <v.icon size={22} style={{ color: "#f59e0b" }} strokeWidth={1.5} />
                </div>
                <h4
                  className="font-bold mb-3"
                  style={{ fontFamily: "var(--font-manrope), sans-serif", color: "#0f172a" }}
                >
                  {v.title}
                </h4>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#6b7280", fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
