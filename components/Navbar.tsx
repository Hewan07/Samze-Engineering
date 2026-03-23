"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

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
        background: scrolled ? "rgba(15, 23, 42, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <nav
        className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" aria-label="SAMZE Engineering home">
          <Image
            src="/logo_dark.png"
            alt="SAMZE Engineering"
            width={220}
            height={62}
            className="h-16 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className="relative text-sm font-medium transition-colors duration-200"
                style={{
                  color: isActive ? "#f59e0b" : "rgba(255,255,255,0.8)",
                  fontFamily: "var(--font-inter), sans-serif",
                  letterSpacing: "0.02em",
                }}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute -bottom-0.5 left-0 right-0 h-px"
                    style={{ background: "#f59e0b" }}
                  />
                )}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="px-5 py-2.5 text-sm font-semibold transition-opacity duration-200 hover:opacity-90"
            style={{
              background: "#f59e0b",
              color: "#0f172a",
              fontFamily: "var(--font-inter), sans-serif",
            }}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className="lg:hidden overflow-hidden transition-all duration-400"
        style={{
          maxHeight: mobileOpen ? "400px" : "0px",
          background: "rgba(10, 15, 30, 0.98)",
        }}
      >
        <div className="px-6 py-6 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className="text-base font-medium py-3 border-b"
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
            className="mt-4 py-3 text-sm font-semibold text-center"
            style={{ background: "#f59e0b", color: "#0f172a" }}
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
