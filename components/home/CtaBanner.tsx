"use client";

import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export default function CtaBanner() {
  return (
    <section
      className="relative overflow-hidden py-20"
      style={{
        background: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 50%, #f59e0b 100%)",
      }}
    >
      {/* Decorative circles */}
      <div
        className="absolute -top-20 -left-20 w-72 h-72 rounded-full opacity-20"
        style={{ background: "#0f172a" }}
      />
      <div
        className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full opacity-15"
        style={{ background: "#0f172a" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ background: "rgba(15,23,42,0.15)" }}
        >
          <Zap size={26} className="text-white" strokeWidth={2} />
        </div>
        <h2
          className="font-bold mb-4"
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            letterSpacing: "-0.02em",
            color: "#0f172a",
          }}
        >
          Ready to Go Solar?
        </h2>
        <p
          className="text-base mb-8 max-w-lg mx-auto"
          style={{ color: "rgba(15,23,42,0.65)", fontFamily: "var(--font-inter), sans-serif" }}
        >
          Join 50+ satisfied clients across Ethiopia. Get a free consultation
          and custom quote for your home or business today.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 font-semibold rounded text-sm transition-all duration-300 hover:scale-105"
            style={{
              background: "#0f172a",
              color: "#ffffff",
              fontFamily: "var(--font-inter), sans-serif",
              boxShadow: "0 8px 30px rgba(15,23,42,0.25)",
            }}
          >
            Contact Us Today
            <ArrowRight
              size={15}
              strokeWidth={2.5}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 font-semibold rounded text-sm transition-all duration-300 hover:bg-black/10"
            style={{
              border: "2px solid rgba(15,23,42,0.3)",
              color: "#0f172a",
              fontFamily: "var(--font-inter), sans-serif",
            }}
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
