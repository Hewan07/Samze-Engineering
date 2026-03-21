"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";

const featured = [
  {
    src: "/images/gallery/photo_2026-03-14_22-08-20.jpg",
    title: "Commercial Rooftop Array",
  },
  {
    src: "/images/gallery/photo_2026-03-14_22-09-42.jpg",
    title: "Industrial Solar Farm",
  },
  {
    src: "/images/gallery/photo_2026-03-14_22-09-38.jpg",
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
    <section className="py-24 lg:py-32" style={{ background: "#0f172a" }} aria-labelledby="gallery-teaser-heading">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)" }}
        >
          <div>
            <SectionLabel>Our Work</SectionLabel>
            <h2
              id="gallery-teaser-heading"
              className="mt-4 font-bold text-white"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Recent Projects
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 hover:text-white shrink-0"
            style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-inter), sans-serif" }}
          >
            View all projects
            <ArrowRight size={14} strokeWidth={2.5} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {featured.map((item, i) => (
            <Link
              key={item.title}
              href="/gallery"
              className="group relative overflow-hidden aspect-4/3 block"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease",
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(10,15,30,0.7) 0%, transparent 60%)" }}
                aria-hidden="true"
              />
              <p
                className="absolute bottom-4 left-4 text-white text-sm font-semibold"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                {item.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
