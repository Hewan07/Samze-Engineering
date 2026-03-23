"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";

const partners = [
  { name: "Safaricom Ethiopia", src: "/images/safaricom.png", width: 132 },
  { name: "Alkan", src: "/images/alkan.png", width: 104 },
  { name: "InfinityEth", src: "/images/infinityeth.png", width: 124 },
  { name: "EEU" },
  { name: "Inovies" },
  { name: "Nokia" },
  { name: "Ericson" },
  { name: "Star Charge" },
];

export default function AboutTeaser() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);

  useEffect(() => {
    const obsLeft = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setLeftVisible(true); obsLeft.disconnect(); } },
      { threshold: 0.2 }
    );
    const obsRight = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setRightVisible(true); obsRight.disconnect(); } },
      { threshold: 0.2 }
    );
    if (leftRef.current) obsLeft.observe(leftRef.current);
    if (rightRef.current) obsRight.observe(rightRef.current);
    return () => { obsLeft.disconnect(); obsRight.disconnect(); };
  }, []);

  return (
    <section className="py-24 lg:py-32" style={{ background: "#ffffff" }} aria-labelledby="about-teaser-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div
            ref={leftRef}
            className="transition-all duration-700"
            style={{ opacity: leftVisible ? 1 : 0, transform: leftVisible ? "translateX(0)" : "translateX(-20px)" }}
          >
            <SectionLabel>About Us</SectionLabel>
            <h2
              id="about-teaser-heading"
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
              className="text-base leading-relaxed mb-8"
              style={{ color: "#4b5563", fontFamily: "var(--font-inter), sans-serif" }}
            >
              SAMZE Engineering delivers electromechanical work, civil work,
              water drilling support, firefighting systems, and related field
              infrastructure with a practical, quality-first approach.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 hover:opacity-80"
              style={{ color: "#b45309", fontFamily: "var(--font-inter), sans-serif" }}
            >
              More about us
              <ArrowRight size={14} strokeWidth={2.5} aria-hidden="true" />
            </Link>
          </div>

          {/* Right — Partners */}
          <div
            ref={rightRef}
            className="transition-all duration-700"
            style={{ opacity: rightVisible ? 1 : 0, transform: rightVisible ? "translateX(0)" : "translateX(20px)", transitionDelay: "100ms" }}
          >
            <p
              className="text-xs font-bold uppercase tracking-widest mb-6"
              style={{ color: "#9ca3af", fontFamily: "var(--font-inter), sans-serif" }}
            >
              Trusted By
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-6">
              {partners.map((p) => (
                <div
                  key={p.name}
                  className="flex items-center justify-center py-3"
                >
                  {p.src ? (
                    <Image
                      src={p.src}
                      alt={p.name}
                      width={p.width ?? 108}
                      height={42}
                      className="h-9 w-auto object-contain"
                    />
                  ) : (
                    <span
                      className="text-sm font-semibold uppercase tracking-[0.2em]"
                      style={{ color: "#0f172a", fontFamily: "var(--font-manrope), sans-serif" }}
                    >
                      {p.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
