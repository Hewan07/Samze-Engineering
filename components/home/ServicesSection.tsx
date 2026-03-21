"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";

const services = [
  {
    title: "Solar Panels",
    description: "High-performance solar panels.",
    image: "/images/solar-panel.png",
    delay: 0,
  },
  {
    title: "Energy Storage Systems",
    description: "Cutting-edge storage solutions.",
    image: "/images/storage.png",
    delay: 80,
  },
  {
    title: "Monitoring Solutions",
    description: "Advanced monitoring systems.",
    image: "/images/monitoring.png",
    delay: 160,
  },
  {
    title: "Solar Inverters",
    description: "State-of-the-art inverters.",
    image: "/images/inverter.png",
    delay: 240,
  },
];

function ServiceCard({ title, description, image, delay }: (typeof services)[0]) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTimeout(() => setVisible(true), delay); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <article
      ref={ref}
      className="group rounded p-7 transition-all duration-500"
      style={{
        background: "#ffffff",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        boxShadow: "0 1px 4px rgba(15,23,42,0.07)",
      }}
    >
      <div className="w-14 h-14 mb-5 relative">
        <Image src={image} alt="" width={56} height={56} className="object-contain" aria-hidden="true" />
      </div>
      <h3
        className="font-bold mb-2 text-base"
        style={{ fontFamily: "var(--font-manrope), sans-serif", color: "#0f172a" }}
      >
        {title}
      </h3>
      <p
        className="text-sm leading-relaxed mb-5"
        style={{ color: "#4b5563", fontFamily: "var(--font-inter), sans-serif" }}
      >
        {description}
      </p>
      <Link
        href="/services"
        className="inline-flex items-center gap-1.5 text-sm font-semibold"
        style={{ color: "#b45309", fontFamily: "var(--font-inter), sans-serif" }}
        aria-label={`Learn more about ${title}`}
      >
        Learn more
        <ArrowRight size={13} strokeWidth={2.5} className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </article>
  );
}

export default function ServicesSection() {
  const headRef = useRef<HTMLDivElement>(null);
  const [headVisible, setHeadVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setHeadVisible(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    if (headRef.current) obs.observe(headRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-24 lg:py-32" style={{ background: "#f2f4f6" }} aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={headRef}
          className="mb-14 transition-all duration-600"
          style={{ opacity: headVisible ? 1 : 0, transform: headVisible ? "translateY(0)" : "translateY(16px)" }}
        >
          <SectionLabel>Our Services</SectionLabel>
          <h2
            id="services-heading"
            className="mt-4 font-bold"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              letterSpacing: "-0.02em",
              color: "#0f172a",
            }}
          >
            What We Offer
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
