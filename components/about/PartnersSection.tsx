"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SectionLabel from "@/components/SectionLabel";

const partners = [
  { src: "/images/UNHCR.png", alt: "UNHCR" },
  { src: "/images/safaricom.png", alt: "Safaricom" },
  { src: "/images/alkan.png", alt: "Alkan Communication" },
  { src: "/images/infinityeth.png", alt: "InfinityETH" },
  { src: "/images/mayorpng.png", alt: "Mayor" },
];

export default function PartnersSection() {
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
    <section className="py-24" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionLabel>Partnerships</SectionLabel>
          <h2
            className="mt-4 font-bold"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
              color: "#0f172a",
              letterSpacing: "-0.02em",
            }}
          >
            Trusted by Leading Organizations
          </h2>
        </div>
        <div
          ref={ref}
          className="flex flex-wrap items-center justify-center gap-4"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.7s ease",
          }}
        >
          {partners.map((p) => (
            <div
              key={p.alt}
              className="flex items-center justify-center px-8 py-6 rounded transition-all duration-300 hover:shadow-md group"
              style={{ background: "#f2f4f6" }}
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={120}
                height={56}
                className="object-contain h-12 w-auto grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
