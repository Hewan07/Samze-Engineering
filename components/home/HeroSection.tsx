"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const onScroll = () => {
      const bg = hero.querySelector(".hero-bg") as HTMLElement;
      if (bg) bg.style.transform = `translateY(${window.scrollY * 0.35}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#0a0f1e" }}
      aria-label="Hero"
    >
      {/* Background */}
      <div
        className="hero-bg absolute inset-0 will-change-transform"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: "scale(1.08)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(120deg, rgba(10,15,30,0.88) 0%, rgba(10,15,30,0.65) 100%)" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20 w-full">
        <div className="max-w-2xl">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-5 animate-fade-in-up"
            style={{
              color: "#f59e0b",
              fontFamily: "var(--font-inter), sans-serif",
              animationDelay: "0.1s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            SAMZE Engineering
          </p>

          <h1
            className="font-bold text-white leading-tight mb-4 animate-fade-in-up"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontSize: "clamp(2.6rem, 6.5vw, 5rem)",
              letterSpacing: "-0.03em",
              animationDelay: "0.2s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            Electromechanical,
            <br />
            Construction and
            <br />
            Water Drilling Solutions
          </h1>

          <p
            className="text-base leading-relaxed mb-10 animate-fade-in-up"
            style={{
              color: "rgba(255,255,255,0.6)",
              fontFamily: "var(--font-inter), sans-serif",
              animationDelay: "0.35s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            Reliable electromechanical, civil, firefighting, water drilling,
            and infrastructure delivery for projects across Ethiopia.
          </p>

          <div
            className="flex flex-wrap gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.5s", opacity: 0, animationFillMode: "forwards" }}
          >
            <Link
              href="/contact"
              className="px-7 py-3.5 text-sm font-semibold transition-opacity duration-200 hover:opacity-90"
              style={{
                background: "#f59e0b",
                color: "#0f172a",
                fontFamily: "var(--font-inter), sans-serif",
              }}
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="px-7 py-3.5 text-sm font-semibold transition-colors duration-200 hover:bg-white/10"
              style={{
                border: "1px solid rgba(255,255,255,0.3)",
                color: "rgba(255,255,255,0.85)",
                fontFamily: "var(--font-inter), sans-serif",
              }}
            >
              About Us
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden="true">
        <ChevronDown size={18} className="animate-scroll-bounce" style={{ color: "rgba(255,255,255,0.4)" }} />
      </div>
    </section>
  );
}
