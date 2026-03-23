import Image from "next/image";
import Link from "next/link";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  bgImage: string;
  breadcrumb: string;
}

export default function PageHero({ title, subtitle, bgImage, breadcrumb }: PageHeroProps) {
  return (
    <section
      className="relative min-h-[55vh] flex items-end pb-20 overflow-hidden"
      style={{ background: "#0a0f1e" }}
    >
      <Image
        src={bgImage}
        alt={title}
        fill
        className="object-cover"
        priority
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(10,15,30,0.93) 0%, rgba(10,15,30,0.65) 60%, rgba(10,15,30,0.5) 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-32">
        <div
          className="flex items-center gap-2 mb-6 text-xs uppercase tracking-widest"
          style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-inter), sans-serif" }}
        >
          <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
          <span>/</span>
          <span style={{ color: "#f59e0b" }}>{breadcrumb}</span>
        </div>
        <h1
          className="font-bold text-white mb-4"
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            letterSpacing: "-0.03em",
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="max-w-xl text-base leading-relaxed"
            style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-inter), sans-serif" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
