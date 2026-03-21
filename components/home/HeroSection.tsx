"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    // Parallax on scroll
    const onScroll = () => {
      const scrollY = window.scrollY;
      if (hero) {
        const bg = hero.querySelector(".hero-bg") as HTMLElement;
        if (bg) bg.style.transform = `translateY(${scrollY * 0.4}px)`;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#0a0f1e" }}
    >
      {/* Background image with parallax */}
      <div
        className="hero-bg absolute inset-0 will-change-transform"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale: "1.1",
        }}
      />

      {/* Cinematic overlay layers */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(10,15,30,0.92) 0%, rgba(15,23,42,0.75) 50%, rgba(10,15,30,0.88) 100%)",
        }}
      />
      {/* Amber accent glow bottom-right */}
      <div
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(245,158,11,0.12)" }}
      />
      {/* Blue accent glow top-left */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(30,58,138,0.3)" }}
      />

      {/* Grain texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-3xl">
          {/* Label */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded mb-8 animate-fade-in-up"
            style={{
              background: "rgba(245,158,11,0.12)",
              border: "1px solid rgba(245,158,11,0.25)",
              animationDelay: "0.1s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#f59e0b" }}
            />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#f59e0b", fontFamily: "var(--font-inter), sans-serif" }}
            >
              Electromechanical · Solar · Water Drilling
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-bold leading-none mb-6 text-white animate-fade-in-up"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              letterSpacing: "-0.03em",
              animationDelay: "0.25s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            Powering
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #f59e0b, #fbbf24 60%, #f59e0b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Ethiopia&apos;s Future
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg leading-relaxed mb-10 animate-fade-in-up"
            style={{
              color: "rgba(255,255,255,0.65)",
              maxWidth: "540px",
              fontFamily: "var(--font-inter), sans-serif",
              animationDelay: "0.4s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            Premium solar panels, energy storage, electromechanical solutions,
            and water drilling across Ethiopia. Trusted by UNHCR, Safaricom,
            and leading organizations.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap items-center gap-4 animate-fade-in-up"
            style={{
              animationDelay: "0.55s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 px-7 py-3.5 font-semibold rounded text-sm transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
                color: "#0f172a",
                fontFamily: "var(--font-inter), sans-serif",
                boxShadow: "0 0 30px rgba(245,158,11,0.35)",
              }}
            >
              Explore Solutions
              <ArrowRight
                size={16}
                strokeWidth={2.5}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-2 px-7 py-3.5 font-semibold rounded text-sm transition-all duration-300 hover:bg-white/10"
              style={{
                border: "1px solid rgba(255,255,255,0.25)",
                color: "rgba(255,255,255,0.85)",
                fontFamily: "var(--font-inter), sans-serif",
              }}
            >
              View Our Work
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up"
          style={{
            animationDelay: "1s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <span
            className="text-xs uppercase tracking-widest"
            style={{
              color: "rgba(255,255,255,0.35)",
              fontFamily: "var(--font-inter), sans-serif",
            }}
          >
            Scroll
          </span>
          <ChevronDown
            size={18}
            className="animate-scroll-bounce"
            style={{ color: "#f59e0b" }}
          />
        </div>
      </div>
    </section>
  );
}
