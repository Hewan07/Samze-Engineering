"use client";

import { useEffect, useRef, useState } from "react";
import SectionLabel from "@/components/SectionLabel";

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
    <section className="py-24 lg:py-28" style={{ background: "#ffffff" }} aria-labelledby="mission-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)" }}
        >
          <div>
            <SectionLabel>About Us</SectionLabel>
            <h2
              id="mission-heading"
              className="mt-4 mb-6 font-bold leading-tight"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                letterSpacing: "-0.02em",
                color: "#0f172a",
              }}
            >
              Founded in 2020
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: "#4b5563", fontFamily: "var(--font-inter), sans-serif" }}
            >
              SAMZE-TechSolutions specializes in innovative energy solutions, advancing solar technology and sustainable practices across Ethiopia. We prioritize quality, reliability, and customer satisfaction in every project we undertake.
            </p>
          </div>

          <div>
            <h3
              className="font-semibold mb-6 text-base"
              style={{ color: "#0f172a", fontFamily: "var(--font-manrope), sans-serif" }}
            >
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                "Solar Panels",
                "Energy Storage Systems",
                "Monitoring Solutions",
                "Solar Inverters",
                "Water Drilling",
                "Construction",
                "Electromechanical Solutions",
              ].map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-3 text-sm"
                  style={{ color: "#4b5563", fontFamily: "var(--font-inter), sans-serif" }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: "#f59e0b" }}
                    aria-hidden="true"
                  />
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
