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
              Built to Deliver Integrated Engineering Services
            </h2>
            <p
              className="text-base leading-relaxed mb-5"
              style={{ color: "#4b5563", fontFamily: "var(--font-inter), sans-serif" }}
            >
              Founded in 2020, SAMZE Engineering provides end-to-end project
              support across electromechanical work, civil work, water
              drilling, firefighting systems, and related infrastructure
              services. Our team works across planning, field execution,
              installation, coordination, and handover to keep projects moving
              with clarity and accountability.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "#4b5563", fontFamily: "var(--font-inter), sans-serif" }}
            >
              We serve organizations, contractors, institutions, and private
              clients that need practical engineering delivery backed by strong
              workmanship, responsive communication, and a commitment to safety,
              quality, and long-term reliability.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Electromechanical Work",
                description:
                  "Installation, integration, testing, and commissioning for electrical and mechanical systems.",
              },
              {
                title: "Civil Work",
                description:
                  "Concrete, trenching, supports, structural preparation, and site-ready construction execution.",
              },
              {
                title: "Water Drilling",
                description:
                  "Field coordination and water access solutions for operational, agricultural, and community needs.",
              },
              {
                title: "Firefighting Systems",
                description:
                  "Fire protection installation with compliant equipment setup, pipework, and readiness support.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded p-6"
                style={{
                  background: "#f7f9fb",
                  boxShadow: "0 8px 26px rgba(15,23,42,0.05)",
                }}
              >
                <h3
                  className="mb-3 font-semibold text-base"
                  style={{ color: "#0f172a", fontFamily: "var(--font-manrope), sans-serif" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#4b5563", fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
