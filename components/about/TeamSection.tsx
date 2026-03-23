"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";

const team = [
  {
    name: "Robel Befirdu",
    role: "Project Coordination & Client Delivery",
    bio: "Oversees day-to-day execution, scheduling, client follow-up, and coordination across active engineering and infrastructure projects.",
    image: "/images/team/robel.png",
    initials: "RB",
  },
  {
    name: "Site Engineering Lead",
    role: "Electromechanical & Field Implementation",
    bio: "Supports site readiness, installation quality, team supervision, and practical problem-solving during civil, mechanical, and technical works.",
    image: null as string | null,
    initials: "SE",
  },
];

export default function TeamSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-24 lg:py-28" style={{ background: "#f5f0eb" }} aria-labelledby="team-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <SectionLabel>Our Team</SectionLabel>
          <h2
            id="team-heading"
            className="mt-4 mb-4 font-bold"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontSize: "clamp(1.7rem, 3vw, 2.5rem)",
              color: "#0f172a",
              letterSpacing: "-0.02em",
            }}
          >
            The People Behind the Work
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: "#4b5563", fontFamily: "var(--font-inter), sans-serif" }}
          >
            Leadership and field expertise that drive SAMZE Engineering&apos;s
            project delivery from planning through handover.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <article
              key={member.name}
              className="group relative overflow-hidden rounded-xl transition-all duration-700"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Portrait container — 3:4 aspect ratio */}
              <div className="relative" style={{ aspectRatio: "3 / 4" }}>
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                ) : (
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      background: "linear-gradient(145deg, #e8e0d8 0%, #d9cfc5 50%, #e2d8ce 100%)",
                    }}
                  >
                    <span
                      className="font-bold select-none"
                      style={{
                        fontFamily: "var(--font-manrope), sans-serif",
                        fontSize: "clamp(4rem, 8vw, 7rem)",
                        color: "rgba(180,83,9,0.1)",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {member.initials}
                    </span>
                  </div>
                )}

                {/* Cinematic gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(10,15,30,0.95) 0%, rgba(10,15,30,0.6) 35%, rgba(10,15,30,0.0) 60%)",
                  }}
                  aria-hidden="true"
                />

                {/* Subtle top vignette */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(10,15,30,0.3) 0%, transparent 25%)",
                  }}
                  aria-hidden="true"
                />

                {/* Content overlaid at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4"
                    style={{
                      background: "rgba(245,158,11,0.15)",
                      color: "#fbbf24",
                      fontFamily: "var(--font-inter), sans-serif",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {member.role}
                  </div>
                  <h3
                    className="font-bold text-white text-2xl mb-3"
                    style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      fontFamily: "var(--font-inter), sans-serif",
                    }}
                  >
                    {member.bio}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
