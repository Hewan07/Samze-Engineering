"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(15, 23, 42, 0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        boxShadow: scrolled
          ? "0 1px 0 rgba(255,255,255,0.05)"
          : "none",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div
            className="w-9 h-9 rounded flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
            style={{ background: "linear-gradient(135deg, #f59e0b, #fbbf24)" }}
          >
            <Zap size={18} className="text-white" strokeWidth={2.5} />
          </div>
          <span
            className="font-bold text-white tracking-tight"
            style={{ fontFamily: "var(--font-manrope), sans-serif", fontSize: "1.1rem" }}
          >
            SAMZE
            <span style={{ color: "#f59e0b" }}> Engineering</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium transition-colors duration-200 group"
                style={{
                  color: isActive ? "#f59e0b" : "rgba(255,255,255,0.8)",
                  fontFamily: "var(--font-inter), sans-serif",
                  letterSpacing: "0.02em",
                }}
              >
                {link.label}
                <span
                  className="absolute -bottom-0.5 left-0 h-px transition-all duration-300"
                  style={{
                    background: "#f59e0b",
                    width: isActive ? "100%" : "0%",
                  }}
                />
                <span
                  className="absolute -bottom-0.5 left-0 h-px transition-all duration-300 group-hover:w-full"
                  style={{
                    background: "#f59e0b",
                    width: "0%",
                  }}
                />
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="px-5 py-2.5 text-sm font-semibold rounded transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
              color: "#0f172a",
              fontFamily: "var(--font-inter), sans-serif",
              boxShadow: "0 0 20px rgba(245, 158, 11, 0.3)",
            }}
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-white rounded transition-colors duration-200"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{ background: "rgba(255,255,255,0.08)" }}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-500"
        style={{
          maxHeight: mobileOpen ? "400px" : "0px",
          background: "rgba(10, 15, 30, 0.97)",
          backdropFilter: "blur(16px)",
        }}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium py-2 border-b transition-colors duration-200"
                style={{
                  color: isActive ? "#f59e0b" : "rgba(255,255,255,0.75)",
                  borderColor: "rgba(255,255,255,0.06)",
                  fontFamily: "var(--font-inter), sans-serif",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="mt-2 px-5 py-3 text-sm font-semibold rounded text-center"
            style={{
              background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
              color: "#0f172a",
            }}
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
