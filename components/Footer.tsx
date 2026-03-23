import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0a0f1e" }}>
      <div
        className="h-px w-full"
        style={{ background: "linear-gradient(90deg, transparent, #f59e0b 40%, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" aria-label="SAMZE Engineering home">
              <Image
                src="/logo - Full.png"
                alt="SAMZE Engineering"
                width={160}
                height={44}
                className="h-10 w-auto object-contain mb-4"
              />
            </Link>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-inter), sans-serif" }}
            >
              Electromechanical, civil, water drilling, and firefighting
              solutions across Ethiopia.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className="text-xs font-bold mb-5 uppercase tracking-widest"
              style={{ color: "#f59e0b", fontFamily: "var(--font-inter), sans-serif" }}
            >
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-xs font-bold mb-5 uppercase tracking-widest"
              style={{ color: "#f59e0b", fontFamily: "var(--font-inter), sans-serif" }}
            >
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 shrink-0" style={{ color: "#f59e0b" }} aria-hidden="true" />
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-inter), sans-serif" }}>
                  Addis Ababa, Ethiopia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="shrink-0" style={{ color: "#f59e0b" }} aria-hidden="true" />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+251930389133"
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    +251930389133
                  </a>
                  <a
                    href="tel:+251913175650"
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    +251913175650
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="shrink-0" style={{ color: "#f59e0b" }} aria-hidden="true" />
                <a
                  href="mailto:info@samze-techsolutions.com"
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-inter), sans-serif" }}
                >
                  info@samze-techsolutions.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)", fontFamily: "var(--font-inter), sans-serif" }}>
            © {new Date().getFullYear()} SAMZE Engineering. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.15)", fontFamily: "var(--font-inter), sans-serif" }}>
            Est. 2020 · Addis Ababa, Ethiopia
          </p>
        </div>
      </div>
    </footer>
  );
}
