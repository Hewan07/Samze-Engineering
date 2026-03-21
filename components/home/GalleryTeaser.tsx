"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";

const featured = [
  {
    src: "/images/gallery/photo_2026-03-14_22-08-20.jpg",
    label: "Commercial",
    title: "Commercial Rooftop Array",
  },
  {
    src: "/images/gallery/photo_2026-03-14_22-09-42.jpg",
    label: "Industrial",
    title: "Industrial Solar Farm",
  },
  {
    src: "/images/gallery/photo_2026-03-14_22-09-38.jpg",
    label: "Residential",
    title: "Villa Solar Project",
  },
];

export default function GalleryTeaser() {
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
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "#0f172a" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(245,158,11,0.07)" }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-6 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <div>
            <SectionLabel>Project Portfolio</SectionLabel>
            <h2
              className="mt-4 font-bold text-white"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Our Work, <span style={{ color: "#f59e0b" }}>Our Pride</span>
            </h2>
          </div>
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 hover:text-amber-400 shrink-0"
            style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-inter), sans-serif" }}
          >
            View All Projects
            <ArrowRight
              size={15}
              strokeWidth={2.5}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featured.map((item, i) => (
            <Link
              key={item.title}
              href="/gallery"
              className="group relative overflow-hidden rounded aspect-[4/3] block transition-all duration-700"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transitionDelay: `${i * 120}ms`,
              }}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(to top, rgba(10,15,30,0.85) 0%, rgba(10,15,30,0.2) 60%, transparent 100%)",
                }}
              />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span
                  className="inline-block px-2.5 py-1 text-xs font-semibold uppercase tracking-widest rounded mb-2"
                  style={{
                    background: "rgba(245,158,11,0.9)",
                    color: "#0f172a",
                    fontFamily: "var(--font-inter), sans-serif",
                  }}
                >
                  {item.label}
                </span>
                <p
                  className="text-white font-semibold text-sm"
                  style={{ fontFamily: "var(--font-manrope), sans-serif" }}
                >
                  {item.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
