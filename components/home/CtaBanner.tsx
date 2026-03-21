import Link from "next/link";

export default function CtaBanner() {
  return (
    <section
      className="py-20"
      style={{ background: "#0f172a" }}
      aria-labelledby="cta-heading"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2
          id="cta-heading"
          className="font-bold text-white mb-4"
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
            letterSpacing: "-0.02em",
          }}
        >
          Contact Us
        </h2>
        <p
          className="text-base mb-8"
          style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-inter), sans-serif" }}
        >
          Ready to get started? Reach out to discuss your project.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3.5 font-semibold text-sm transition-opacity hover:opacity-90"
          style={{
            background: "#f59e0b",
            color: "#0f172a",
            fontFamily: "var(--font-inter), sans-serif",
          }}
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
