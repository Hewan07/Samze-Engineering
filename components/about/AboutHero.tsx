import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex items-end pb-20 overflow-hidden" style={{ background: "#0a0f1e" }}>
      {/* BG */}
      <Image
        src="/images/gallery/photo_2026-03-14_22-09-01.jpg"
        alt="SAMZE Engineering project"
        fill
        className="object-cover"
        priority
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(10,15,30,0.92) 0%, rgba(10,15,30,0.6) 60%, rgba(10,15,30,0.5) 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-32">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-inter), sans-serif" }}>
          <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
          <span>/</span>
          <span style={{ color: "#f59e0b" }}>About</span>
        </div>

        <h1
          className="font-bold text-white mb-4 animate-fade-in-up"
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            letterSpacing: "-0.03em",
          }}
        >
          Our Story
        </h1>
        <p
          className="max-w-xl text-base leading-relaxed"
          style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-inter), sans-serif" }}
        >
          From a bold vision in 2020 to becoming Ethiopia&apos;s trusted
          electromechanical and solar energy partner.
        </p>
      </div>
    </section>
  );
}
