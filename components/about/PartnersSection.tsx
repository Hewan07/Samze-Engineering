"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SectionLabel from "@/components/SectionLabel";

const partners = [
  { name: "Safaricom Ethiopia", src: "/images/safaricom.png", width: 138 },
  { name: "Alkan", src: "/images/alkan.png", width: 110 },
  { name: "InfinityEth", src: "/images/infinityeth.png", width: 126 },
  { name: "EEU" },
  { name: "Inovies" },
  { name: "Nokia" },
  { name: "Ericson" },
  { name: "Star Charge" },
];

type Partner = (typeof partners)[number];

export default function PartnersSection() {
  const ref = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [visible, setVisible] = useState(false);
  const carouselItems = [...partners, ...partners];

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const updateScale = () => {
      const container = ref.current;
      if (!container) {
        frameRef.current = requestAnimationFrame(updateScale);
        return;
      }

      const bounds = container.getBoundingClientRect();
      const center = bounds.left + bounds.width / 2;
      const maxDistance = bounds.width / 2;

      itemRefs.current.forEach((item: HTMLDivElement | null) => {
        if (!item) return;

        const itemBounds = item.getBoundingClientRect();
        const itemCenter = itemBounds.left + itemBounds.width / 2;
        const distance = Math.min(Math.abs(center - itemCenter), maxDistance);
        const proximity = 1 - distance / maxDistance;
        const scale = 0.92 + proximity * 0.22;
        const opacity = 0.5 + proximity * 0.5;
        const grayscale = 0.72 - proximity * 0.72;

        item.style.setProperty("--partner-scale", scale.toFixed(3));
        item.style.setProperty("--partner-opacity", opacity.toFixed(3));
        item.style.setProperty("--partner-grayscale", grayscale.toFixed(3));
      });

      frameRef.current = requestAnimationFrame(updateScale);
    };

    frameRef.current = requestAnimationFrame(updateScale);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <section className="py-24" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionLabel>Trusted By</SectionLabel>
          <h2
            className="mt-4 font-bold"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
              color: "#0f172a",
              letterSpacing: "-0.02em",
            }}
          >
            Leading Organizations
          </h2>
        </div>
        <div
          ref={ref}
          className="partner-marquee relative overflow-hidden"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.7s ease",
          }}
        >
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-20 z-10"
            style={{ background: "linear-gradient(90deg, #ffffff 0%, rgba(255,255,255,0) 100%)" }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-20 z-10"
            style={{ background: "linear-gradient(270deg, #ffffff 0%, rgba(255,255,255,0) 100%)" }}
            aria-hidden="true"
          />
          <div className="partner-marquee-track flex w-max items-center py-4">
            {carouselItems.map((partner: Partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                ref={(node: HTMLDivElement | null) => {
                  itemRefs.current[index] = node;
                }}
                className="flex items-center justify-center mx-6 transition-[transform,opacity,filter] duration-300 will-change-transform"
                style={{
                  transform: "scale(var(--partner-scale, 0.92))",
                  opacity: "var(--partner-opacity, 0.55)",
                  filter: "grayscale(var(--partner-grayscale, 0.72))",
                }}
              >
                {partner.src ? (
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    width={partner.width ?? 122}
                    height={48}
                    className="h-12 w-auto object-contain"
                  />
                ) : (
                  <span
                    className="text-base font-semibold uppercase tracking-[0.24em] whitespace-nowrap"
                    style={{ color: "#0f172a", fontFamily: "var(--font-manrope), sans-serif" }}
                  >
                    {partner.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
