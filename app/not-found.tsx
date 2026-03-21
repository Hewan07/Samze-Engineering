import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-6"
      style={{ background: "#0f172a" }}
    >
      <div className="text-center max-w-lg">
        <Link href="/" className="inline-block mb-10" aria-label="SAMZE Engineering home">
          <Image
            src="/logo - Full.png"
            alt="SAMZE Engineering"
            width={160}
            height={44}
            className="h-10 w-auto object-contain mx-auto"
          />
        </Link>

        <p
          className="font-bold mb-4"
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontSize: "clamp(4rem, 12vw, 8rem)",
            color: "#f59e0b",
            lineHeight: 1,
          }}
          aria-hidden="true"
        >
          404
        </p>

        <h1
          className="font-bold text-white mb-4"
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontSize: "clamp(1.4rem, 3vw, 2rem)",
            letterSpacing: "-0.02em",
          }}
        >
          Page Not Found
        </h1>

        <p
          className="text-base mb-10"
          style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-inter), sans-serif" }}
        >
          The page you are looking for does not exist or has been moved.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="px-7 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ background: "#f59e0b", color: "#0f172a", fontFamily: "var(--font-inter), sans-serif" }}
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="px-7 py-3 text-sm font-semibold transition-colors hover:text-white"
            style={{
              border: "1px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.6)",
              fontFamily: "var(--font-inter), sans-serif",
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
