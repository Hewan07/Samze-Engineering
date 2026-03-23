"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Bolt, Building2, Droplets, ShieldCheck, Check } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";

const services = [
  {
    icon: Bolt,
    title: "Electromechanical Work",
    description:
      "We handle integrated electromechanical scopes including equipment installation, cable routing, control panels, system integration, testing, and commissioning for field, industrial, and facility-based projects.",
    features: [
      "Electrical and mechanical coordination",
      "Control panel and power system installation",
      "Testing and commissioning support",
      "Site troubleshooting and rectification",
      "Installation supervision",
      "Quality-focused execution",
    ],
    image: "/images/gallery/photo_2026-03-14_22-10-02.jpg",
    label: "Core Service",
  },
  {
    icon: Building2,
    title: "Civil Work",
    description:
      "Our civil work capability supports engineering projects through site preparation, trenching, structural supports, concrete bases, and execution that keeps field operations on schedule.",
    features: [
      "Site preparation and layout",
      "Concrete and foundation works",
      "Trenching and duct routing",
      "Structural base construction",
      "Infrastructure support works",
      "Field-ready finishing",
    ],
    image: "/images/gallery/photo_2026-03-14_22-09-30.jpg",
    label: "Field Support",
  },
  {
    icon: Droplets,
    title: "Water Drilling",
    description:
      "We support water drilling projects with dependable field coordination, pumping system integration, and delivery planning for remote, agricultural, institutional, and utility needs.",
    features: [
      "Water access project support",
      "Pump and infrastructure integration",
      "Rural and remote site coordination",
      "Installation planning assistance",
      "Operational reliability focus",
      "End-use readiness support",
    ],
    image: "/images/gallery/photo_2026-03-14_22-08-20.jpg",
    label: "Utility Ready",
  },
  {
    icon: ShieldCheck,
    title: "Firefighting System",
    description:
      "Our firefighting system work covers equipment installation, pipework coordination, system setup, and readiness support to help facilities meet safety and operational requirements.",
    features: [
      "Fire system pipework coordination",
      "Safety equipment installation",
      "Facility readiness support",
      "Testing and handover assistance",
      "Compliance-minded delivery",
      "Maintenance-oriented setup",
    ],
    image: "/images/gallery/photo_2026-03-14_22-09-46.jpg",
    label: "Safety Focused",
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
            From site preparation to installation and system handover, we
            support practical project delivery across multiple engineering
            service lines.
          </p>
        </div>

        {services.map((s, i) => (
          <ServiceRow key={s.title} service={s} index={i} />
        ))}
      </div>
    </section>
  );
}
