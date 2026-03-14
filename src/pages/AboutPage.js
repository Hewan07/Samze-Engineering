import React, { useRef, useEffect } from "react";
import useSEO from "../hooks/useSEO";

// ── Injected keyframe styles ──────────────────────────────────────────────────
const STYLES = `
  @keyframes about-fadeInUp {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes about-fadeInLeft {
    from { opacity: 0; transform: translateX(-28px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes about-fadeInRight {
    from { opacity: 0; transform: translateX(28px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  .about-fade-up   { animation: about-fadeInUp   0.6s cubic-bezier(0.22,1,0.36,1) forwards; opacity: 0; }
  .about-fade-left { animation: about-fadeInLeft  0.6s cubic-bezier(0.22,1,0.36,1) forwards; opacity: 0; }
  .about-fade-right{ animation: about-fadeInRight 0.6s cubic-bezier(0.22,1,0.36,1) forwards; opacity: 0; }
`;

const MILESTONES = [
  { year: "2020", title: "Company Founded",           desc: "SAMZE Engineering was established with a vision to accelerate clean energy adoption across Ethiopia." },
  { year: "2021", title: "First Major Installation",  desc: "Delivered our first commercial solar project, setting the benchmark for quality and reliability." },
  { year: "2023", title: "Market Expansion",          desc: "Extended operations to new regions, growing our client base and installation capacity." },
  { year: "2024", title: "Strategic Partnerships",    desc: "Formed key alliances with global suppliers and NGOs including UNHCR and Safaricom." },
  { year: "2025", title: "Industry Recognition",      desc: "Awarded for innovation in renewable energy solutions at national level." },
  { year: "2026", title: "Countrywide Reach",         desc: "Scaling operations to serve clients nationwide with a full suite of energy engineering services." },
];

const METRICS = [
  { value: "40%",     label: "Market Share"           },
  { value: "50+",     label: "Completed Projects"      },
  { value: "100%",    label: "Customer Satisfaction"   },
  { value: "$25K+",   label: "Annual Gross Revenue"    },
];

const PARTNERS = [
  { src: "/images/UNHCR.png",       alt: "UNHCR"        },
  { src: "/images/Safaricom.png",   alt: "Safaricom"    },
  { src: "/images/Alkan.png",       alt: "Alkan"        },
  { src: "/images/InfinityETH.png", alt: "InfinityETH"  },
  { src: "/images/mayorpng.png",    alt: "Mayor"        },
];

const VALUES = [
  {
    icon: "⚡",
    title: "Innovation",
    desc: "We continuously adopt cutting-edge solar and energy-storage technologies to deliver superior results.",
  },
  {
    icon: "🛡️",
    title: "Reliability",
    desc: "Every installation is built to last — rigorously tested and backed by comprehensive after-sales support.",
  },
  {
    icon: "🌱",
    title: "Sustainability",
    desc: "Our work reduces carbon emissions and lowers energy costs, creating lasting value for communities.",
  },
];

export default function AboutPage() {
  useSEO(
    "About Us",
    "Learn about SAMZE Engineering — our mission, values, journey, and team dedicated to advancing solar energy solutions across Ethiopia since 2020."
  );
  const parallaxBgRef = useRef(null);

  // Smooth parallax via RAF — no React state, no re-renders
  useEffect(() => {
    let rafId;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (parallaxBgRef.current) {
          parallaxBgRef.current.style.transform = `translateY(${window.scrollY * 0.38}px)`;
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <style>{STYLES}</style>

      {/* ── Hero with Parallax ───────────────────────────────────────────── */}
      <section className="relative h-72 md:h-96 lg:h-[420px] overflow-hidden bg-blue-900">
        <div
          ref={parallaxBgRef}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/gallery/photo_2026-03-14_22-09-42.jpg')`,
            willChange: "transform",
            top: "-10%",
            height: "120%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-900/60 to-blue-900/85" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-3">
            About Us
          </h1>
          <p className="text-blue-200 text-base md:text-lg max-w-lg leading-relaxed">
            Engineering a sustainable future through solar innovation since 2020.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <div className="w-8 h-px bg-yellow-400/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-8 h-px bg-yellow-400/60" />
          </div>
        </div>
      </section>

      {/* ── Mission ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          {/* Left – text */}
          <div className="about-fade-left" style={{ animationDelay: "0.1s" }}>
            <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">Our Mission</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-6">
              Powering Ethiopia with Clean, Reliable Solar Energy
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Founded in 2020, SAMZE Engineering specialises in innovative solar energy solutions — from residential rooftop systems to large-scale commercial installations. We combine technical expertise with a deep commitment to quality, ensuring every project delivers lasting value.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our mission is simple: make clean energy accessible, affordable, and dependable for homes, businesses, and communities across Ethiopia and beyond.
            </p>
          </div>
          {/* Right – pull-quote / highlight */}
          <div
            className="about-fade-right rounded-2xl p-8 md:p-10"
            style={{ animationDelay: "0.2s", background: "linear-gradient(135deg,#1e3a8a 0%,#1e40af 100%)" }}
          >
            <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">Why Choose Us</p>
            <ul className="space-y-4">
              {[
                "5+ years of hands-on solar engineering experience",
                "50+ successful installations across commercial & residential sectors",
                "Certified partnerships with leading global equipment suppliers",
                "End-to-end service: design, installation, monitoring & maintenance",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-white text-sm leading-relaxed">
                  <span className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full bg-yellow-400 flex items-center justify-center text-blue-900 font-bold text-xs">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Core Values ──────────────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-2">What Drives Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className="about-fade-up bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-2">Since 2020</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Journey</h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-7 top-0 bottom-0 w-px bg-gray-200" />
            <div className="space-y-10">
              {MILESTONES.map((m, i) => (
                <div
                  key={m.year}
                  className="about-fade-up relative flex items-start gap-6"
                  style={{ animationDelay: `${0.05 + i * 0.08}s` }}
                >
                  {/* Year badge + dot */}
                  <div className="relative flex-shrink-0 w-14 flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-blue-900 ring-4 ring-blue-100 z-10" />
                    <span className="mt-2 text-xs font-bold text-blue-900 tracking-wide">{m.year}</span>
                  </div>
                  {/* Content */}
                  <div className="pb-2 pt-0.5">
                    <h3 className="font-bold text-gray-900 text-base mb-1">{m.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Metrics ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-blue-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-2">Impact</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">By the Numbers</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {METRICS.map((m, i) => (
              <div
                key={m.label}
                className="about-fade-up text-center p-6 rounded-2xl"
                style={{
                  animationDelay: `${0.1 + i * 0.08}s`,
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">{m.value}</div>
                <div className="text-blue-300 text-sm font-medium">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partners ─────────────────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-10">
            Trusted By Industry Leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {PARTNERS.map((p) => (
              <img
                key={p.alt}
                src={p.src}
                alt={p.alt}
                className="h-12 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
