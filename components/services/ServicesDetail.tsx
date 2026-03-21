"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Sun, Battery, Cpu, Activity, Check } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";

const services = [
  {
    icon: Sun,
    title: "Solar Panel Installation",
    description:
      "We supply and install high-performance monocrystalline and polycrystalline solar panels for residential, commercial, and industrial clients across Ethiopia. Every installation is designed for maximum energy yield and longevity.",
    features: [
      "Tier-1 manufacturer panels",
      "25-year performance warranty",
      "Certified installation engineers",
      "Site assessment included",
      "Grid-tie & off-grid systems",
      "Residential to utility-scale",
    ],
    image: "/images/gallery/photo_2026-03-14_22-09-46.jpg",
    label: "Most Popular",
  },
  {
    icon: Battery,
    title: "Energy Storage Systems",
    description:
      "Never lose power again. Our lithium-ion battery storage solutions ensure your home or business has reliable electricity around the clock, even during grid outages or low-sunlight periods.",
    features: [
      "Lithium-ion technology",
      "Scalable capacity options",
      "Remote monitoring & alerts",
      "10-year storage warranty",
      "Hybrid & off-grid configs",
      "Smart energy management",
    ],
    image: "/images/gallery/photo_2026-03-14_22-09-34.jpg",
    label: "Enterprise Ready",
  },
  {
    icon: Cpu,
    title: "Solar Inverters",
    description:
      "Our state-of-the-art inverter systems efficiently convert DC electricity from your solar panels into usable AC power. We offer string, micro, and hybrid inverters to match every system requirement.",
    features: [
      "String, micro & hybrid types",
      "High conversion efficiency",
      "Grid-tie protection built-in",
      "Remote firmware updates",
      "Real-time data export",
      "Compatible with all panel brands",
    ],
    image: "/images/gallery/photo_2026-03-14_22-08-50.jpg",
    label: "High Efficiency",
  },
  {
    icon: Activity,
    title: "Real-time Monitoring",
    description:
      "Stay in complete control of your energy system with our advanced monitoring dashboards. Track production, consumption, and performance from anywhere in the world via mobile or desktop.",
    features: [
      "Live production dashboards",
      "Automated fault detection",
      "Performance analytics & reports",
      "Mobile app included",
      "Email & SMS alerts",
      "Historical data export",
    ],
    image: "/images/gallery/photo_2026-03-14_22-09-51.jpg",
    label: "Smart Analytics",
  },
];

function ServiceRow({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const isReversed = index % 2 !== 0;

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 lg:mb-32 transition-all duration-700 ${isReversed ? "lg:[&>:first-child]:order-2 lg:[&>:last-child]:order-1" : ""}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
      }}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] rounded overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0" style={{ background: "rgba(10,15,30,0.15)" }} />
        <span
          className="absolute top-4 left-4 px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded"
          style={{
            background: "rgba(245,158,11,0.9)",
            color: "#0f172a",
            fontFamily: "var(--font-inter), sans-serif",
          }}
        >
          {service.label}
        </span>
      </div>

      {/* Content */}
      <div>
        <div
          className="w-12 h-12 rounded flex items-center justify-center mb-5"
          style={{ background: "rgba(245,158,11,0.12)" }}
        >
          <service.icon size={22} style={{ color: "#f59e0b" }} strokeWidth={1.5} />
        </div>
        <h3
          className="font-bold mb-4"
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
            color: "#0f172a",
            letterSpacing: "-0.02em",
          }}
        >
          {service.title}
        </h3>
        <p
          className="text-base leading-relaxed mb-6"
          style={{ color: "#6b7280", fontFamily: "var(--font-inter), sans-serif" }}
        >
          {service.description}
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm" style={{ color: "#4b5563" }}>
              <Check size={15} style={{ color: "#f59e0b" }} strokeWidth={2.5} />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ServicesDetail() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <SectionLabel>What We Offer</SectionLabel>
          <h2
            className="mt-4 font-bold"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              letterSpacing: "-0.02em",
              color: "#0f172a",
            }}
          >
            Built for Every Scale
          </h2>
          <p
            className="mt-4 max-w-xl mx-auto text-base leading-relaxed"
            style={{ color: "#6b7280", fontFamily: "var(--font-inter), sans-serif" }}
          >
            Whether you&apos;re a homeowner, a growing business, or a large
            enterprise, we have the right solar solution for you.
          </p>
        </div>

        {services.map((s, i) => (
          <ServiceRow key={s.title} service={s} index={i} />
        ))}
      </div>
    </section>
  );
}
