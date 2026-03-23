"use client";

import { useEffect, useRef, useState } from "react";
import { ShieldCheck, FileCheck, Droplets, Building2 } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";

const credentials = [
  {
    icon: Building2,
    title: "Licensed Engineering Firm",
    description:
      "Fully licensed business with competency certification to operate across electromechanical, civil, and infrastructure sectors in Ethiopia.",
  },
  {
    icon: FileCheck,
    title: "VAT Registered",
    description:
      "Registered with the Ethiopian tax authority for Value Added Tax, ensuring full regulatory compliance on all projects.",
  },
  {
    icon: Droplets,
    title: "Water Drilling License",
    description:
      "Holds a dedicated water drilling license authorizing field operations for community, agricultural, and commercial water access.",
  },
  {
    icon: ShieldCheck,
    title: "Continuously Renewed",
    description:
      "All business licenses, competency certificates, and operational permits are kept current through regular renewals.",
  },
];

export default function CredentialsSection() {
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
    <section className="py-20" style={{ background: "#f2f4f6" }} aria-labelledby="credentials-heading">
      <div ref={ref} className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionLabel>Credentials</SectionLabel>
          <h2
            id="credentials-heading"
            className="mt-4 font-bold"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
              letterSpacing: "-0.02em",
              color: "#0f172a",
            }}
          >
            Licenses & Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {credentials.map((cred, i) => {
            const Icon = cred.icon;
            return (
              <div
                key={cred.title}
                className="flex gap-4 p-6 rounded-lg transition-all duration-600"
                style={{
                  background: "#ffffff",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(12px)",
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0"
                  style={{ background: "#fef3c7" }}
                >
                  <Icon size={20} style={{ color: "#b45309" }} aria-hidden="true" />
                </div>
                <div>
                  <h3
                    className="text-sm font-semibold mb-1"
                    style={{ color: "#0f172a", fontFamily: "var(--font-manrope), sans-serif" }}
                  >
                    {cred.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#4b5563", fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    {cred.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
