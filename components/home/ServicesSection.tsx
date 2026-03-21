"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Sun, Battery, Cpu, Activity, ArrowRight } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";

const services = [
  {
    icon: Sun,
    title: "Solar Panels",
    description:
      "High-performance monocrystalline and polycrystalline solar panels for residential, commercial, and industrial applications.",
    features: ["Tier-1 manufacturers", "25-year performance warranty", "Certified installers"],
    delay: 0,
  },
  {
    icon: Battery,
    title: "Energy Storage",
    description:
      "Cutting-edge lithium-ion battery storage systems that ensure reliable power around the clock, even off-grid.",
    features: ["Lithium-ion technology", "Remote monitoring", "Scalable capacity"],
    delay: 100,
  },
  {
    icon: Cpu,
    title: "Solar Inverters",
    description:
      "State-of-the-art inverter systems that convert DC solar power to AC electricity with maximum efficiency.",
    features: ["Grid-tie & off-grid", "High efficiency ratings", "Smart management"],
    delay: 200,
  },
  {
    icon: Activity,
    title: "Real-time Monitoring",
    description:
      "Advanced monitoring and analytics platforms that give you complete visibility into your energy system's performance.",
    features: ["Live dashboards", "Fault detection", "Performance analytics"],
    delay: 300,
  },
];

function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  delay,
}: (typeof services)[0]) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded p-8 cursor-pointer transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        background: hovered ? "#ffffff" : "#f7f9fb",
        boxShadow: hovered
          ? "0 20px 60px rgba(15,23,42,0.12), 0 1px 0 rgba(245,158,11,0.3) inset"
          : "0 1px 3px rgba(15,23,42,0.06)",
        borderTop: hovered ? "3px solid #f59e0b" : "3px solid transparent",
      }}
    >
      {/* Icon */}
      <div
        className="w-14 h-14 rounded flex items-center justify-center mb-6 transition-all duration-300"
        style={{
          background: hovered
            ? "linear-gradient(135deg, #f59e0b, #fbbf24)"
            : "rgba(245,158,11,0.1)",
        }}
      >
        <Icon
          size={26}
          strokeWidth={1.5}
          style={{ color: hovered ? "#ffffff" : "#f59e0b" }}
          className="transition-colors duration-300"
        />
      </div>

      {/* Title */}
      <h3
        className="font-bold mb-3 transition-colors duration-300"
        style={{
          fontFamily: "var(--font-manrope), sans-serif",
          fontSize: "1.2rem",
          color: hovered ? "#0f172a" : "#191c1e",
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="text-sm leading-relaxed mb-6"
        style={{ color: "#6b7280", fontFamily: "var(--font-inter), sans-serif" }}
      >
        {description}
      </p>

      {/* Features */}
      <ul className="space-y-2 mb-6">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm" style={{ color: "#4b5563" }}>
            <span
              className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{ background: "#f59e0b" }}
            />
            {f}
          </li>
        ))}
      </ul>

      {/* Link */}
      <Link
        href="/services"
        className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-300 group/link"
        style={{ color: "#f59e0b", fontFamily: "var(--font-inter), sans-serif" }}
      >
        Learn more
        <ArrowRight
          size={14}
          strokeWidth={2.5}
          className="transition-transform duration-300 group-hover/link:translate-x-1"
        />
      </Link>
    </div>
  );
}

export default function ServicesSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const [headingVisible, setHeadingVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setHeadingVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (headingRef.current) obs.observe(headingRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-24 lg:py-32" style={{ background: "#f2f4f6" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div
          ref={headingRef}
          className="mb-16 transition-all duration-700"
          style={{
            opacity: headingVisible ? 1 : 0,
            transform: headingVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <SectionLabel>What We Do</SectionLabel>
          <h2
            className="mt-4 font-bold text-white"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.02em",
              color: "#0f172a",
            }}
          >
            End-to-End Energy{" "}
            <span style={{ color: "#f59e0b" }}>Solutions</span>
          </h2>
          <p
            className="mt-4 max-w-xl text-base leading-relaxed"
            style={{ color: "#6b7280", fontFamily: "var(--font-inter), sans-serif" }}
          >
            From initial consultation to long-term monitoring, we handle
            every step of your solar energy journey across Ethiopia.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
