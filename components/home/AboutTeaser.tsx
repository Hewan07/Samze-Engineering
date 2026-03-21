"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";

const partners = [
  { src: "/images/UNHCR.png", alt: "UNHCR" },
  { src: "/images/safaricom.png", alt: "Safaricom" },
  { src: "/images/alkan.png", alt: "Alkan" },
  { src: "/images/infinityeth.png", alt: "InfinityETH" },
  { src: "/images/mayorpng.png", alt: "Mayor" },
];

const values = [
  "Over 50 completed projects across Ethiopia",
  "Partnered with UNHCR and Safaricom",
  "40% market share in solar installations",
  "100% customer satisfaction rating",
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
    <section className="py-24 lg:py-32" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <div
            ref={leftRef}
            className="transition-all duration-700"
            style={{
              opacity: leftVisible ? 1 : 0,
              transform: leftVisible ? "translateX(0)" : "translateX(-24px)",
            }}
          >
            <SectionLabel>About SAMZE</SectionLabel>
            <h2
              className="mt-4 mb-6 font-bold leading-tight"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                letterSpacing: "-0.02em",
                color: "#0f172a",
              }}
            >
              Trusted by Ethiopia&apos;s{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                leading organizations
              </span>
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "#6b7280", fontFamily: "var(--font-inter), sans-serif" }}
            >
              Founded in 2020, SAMZE Engineering has grown to become one of
              Ethiopia&apos;s premier energy solutions providers. Our mission is to
              make clean energy accessible, affordable, and dependable for
              homes, businesses, and communities nationwide.
            </p>

            {/* Values list */}
            <ul className="space-y-3 mb-10">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="mt-0.5 shrink-0"
                    style={{ color: "#f59e0b" }}
                    strokeWidth={2}
                  />
                  <span
                    className="text-sm"
                    style={{ color: "#4b5563", fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    {v}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="group inline-flex items-center gap-2 px-7 py-3.5 font-semibold rounded text-sm transition-all duration-300 hover:scale-105"
              style={{
                background: "#0f172a",
                color: "#ffffff",
                fontFamily: "var(--font-inter), sans-serif",
              }}
            >
              Our Story
              <ArrowRight
                size={15}
                strokeWidth={2.5}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Right — Partner logos */}
          <div
            ref={rightRef}
            className="transition-all duration-700"
            style={{
              opacity: rightVisible ? 1 : 0,
              transform: rightVisible ? "translateX(0)" : "translateX(24px)",
            }}
          >
            <div
              className="rounded p-10"
              style={{ background: "#f2f4f6" }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-8 text-center"
                style={{ color: "#9ca3af", fontFamily: "var(--font-inter), sans-serif" }}
              >
                Trusted Partners
              </p>
              <div className="grid grid-cols-3 gap-6">
                {partners.map((p) => (
                  <div
                    key={p.alt}
                    className="flex items-center justify-center p-4 rounded transition-all duration-300 hover:bg-white hover:shadow-md group"
                    style={{ background: "rgba(255,255,255,0.6)" }}
                  >
                    <Image
                      src={p.src}
                      alt={p.alt}
                      width={100}
                      height={48}
                      className="object-contain h-10 w-auto transition-all duration-300 grayscale group-hover:grayscale-0"
                    />
                  </div>
                ))}
              </div>

              {/* Decorative stat */}
              <div
                className="mt-8 p-6 rounded"
                style={{
                  background: "linear-gradient(135deg, #0f172a, #1e293b)",
                }}
              >
                <div className="flex items-end gap-4">
                  <span
                    className="font-bold text-white"
                    style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontSize: "3rem",
                      lineHeight: 1,
                    }}
                  >
                    5+
                  </span>
                  <div className="pb-1">
                    <p
                      className="text-sm font-medium"
                      style={{ color: "#f59e0b" }}
                    >
                      Years of Excellence
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                    >
                      Serving Ethiopia since 2020
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
