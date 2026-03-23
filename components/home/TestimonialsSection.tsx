"use client";

import { useEffect, useRef, useState } from "react";
import SectionLabel from "@/components/SectionLabel";

const testimonials = [
  {
    quote: "Outstanding service from initial consultation to final delivery. The team stayed organized, responsive, and committed throughout the project.",
    name: "Michael Johnson",
    title: "CEO Davis & Shirtcliff trading plc",
    delay: 0,
  },
  {
    quote: "We were impressed by the professionalism, speed, and quality of the site work. Communication was clear and the execution was dependable.",
    name: "Eslam Mohamed",
    title: "CFO at Alkan Communication & Information",
    delay: 120,
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
    <section className="py-24 lg:py-32" style={{ background: "#eceef0" }} aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14">
          <SectionLabel>Testimonials</SectionLabel>
          <h2
            id="testimonials-heading"
            className="mt-4 font-bold"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              letterSpacing: "-0.02em",
              color: "#0f172a",
            }}
          >
            What Our Customers Say
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded p-8 transition-all duration-600"
              style={{
                background: "#ffffff",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${t.delay}ms`,
              }}
            >
              <blockquote>
                <p
                  className="text-base leading-relaxed mb-6"
                  style={{ color: "#374151", fontFamily: "var(--font-inter), sans-serif" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>
              <figcaption>
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
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
