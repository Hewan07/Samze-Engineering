"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";

const services = [
  {
    title: "Electromechanical Work",
    description:
      "Integrated mechanical and electrical installation, fabrication, wiring, testing, and commissioning for commercial and industrial projects.",
    image: "/images/gallery/photo_2026-03-14_22-10-02.jpg",
    delay: 0,
  },
  {
    title: "Civil Work",
    description:
      "Site preparation, concrete bases, trenching, structural supports, and construction execution tailored to field and infrastructure needs.",
    image: "/images/gallery/photo_2026-03-14_22-09-30.jpg",
    delay: 80,
  },
  {
    title: "Water Drilling",
    description:
      "Water access solutions covering drilling support, pumping integration, and dependable delivery for community, agricultural, and project sites.",
    image: "/images/gallery/photo_2026-03-14_22-08-20.jpg",
    delay: 160,
  },
  {
    title: "Firefighting System",
    description:
      "Fire protection system installation with pipework, equipment setup, safety compliance, and readiness support for occupied facilities.",
    image: "/images/gallery/photo_2026-03-14_22-09-46.jpg",
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
      className="group rounded-lg overflow-hidden transition-all duration-500"
      style={{
        background: "#ffffff",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        boxShadow: "0 1px 4px rgba(15,23,42,0.07)",
      }}
    >
      <div className="relative h-44 overflow-hidden">
        <Image
          src={image}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, #ffffff 0%, rgba(255,255,255,0) 60%)" }}
          aria-hidden="true"
        />
      </div>
      <div className="px-6 pb-6 -mt-6 relative">
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
      </div>
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
