"use client";

import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";

const testimonials = [
  {
    name: "Michael Johnson",
    title: "CEO, Davis & Shirtcliff Trading plc",
    quote:
      "SAMZE Engineering delivered an exceptional solar installation for our facility. The team was professional, knowledgeable, and the quality of their work exceeded our expectations. Our energy costs have dropped significantly.",
    stars: 5,
    initials: "MJ",
    delay: 0,
  },
  {
    name: "Eslam Mohamed",
    title: "CFO, Alkan Communication & Information",
    quote:
      "Working with SAMZE was a seamless experience from consultation to installation. Their monitoring system gives us complete visibility into our energy usage, and the ROI has been remarkable.",
    stars: 5,
    initials: "EM",
    delay: 150,
  },
];

export default function TestimonialsSection() {
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
    <section className="py-24 lg:py-32" style={{ background: "#eceef0" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div
          className="text-center mb-16 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <SectionLabel>Testimonials</SectionLabel>
          <h2
            className="mt-4 font-bold"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              letterSpacing: "-0.02em",
              color: "#0f172a",
            }}
          >
            What Our Clients Say
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="rounded p-8 relative transition-all duration-700"
              style={{
                background: "#ffffff",
                boxShadow: "0 4px 24px rgba(15,23,42,0.06)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transitionDelay: `${t.delay}ms`,
              }}
            >
              {/* Quote icon */}
              <Quote
                size={32}
                className="mb-4"
                style={{ color: "rgba(245,158,11,0.3)" }}
                strokeWidth={1.5}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    fill="#f59e0b"
                    style={{ color: "#f59e0b" }}
                  />
                ))}
              </div>

              {/* Quote text */}
              <p
                className="text-base leading-relaxed mb-8 italic"
                style={{ color: "#4b5563", fontFamily: "var(--font-inter), sans-serif" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
                    color: "#0f172a",
                    fontFamily: "var(--font-manrope), sans-serif",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p
                    className="font-semibold text-sm"
                    style={{ color: "#0f172a", fontFamily: "var(--font-manrope), sans-serif" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: "#9ca3af", fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    {t.title}
                  </p>
                </div>
              </div>

              {/* Accent corner */}
              <div
                className="absolute top-0 right-8 w-1 h-12 rounded-b"
                style={{ background: "linear-gradient(to bottom, #f59e0b, transparent)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
