import Link from "next/link";
import { Zap, MapPin, Phone, Mail } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "Solar Panel Installation",
  "Energy Storage Systems",
  "Solar Inverters",
  "Real-time Monitoring",
  "Electromechanical Solutions",
  "Water Drilling",
];

export default function Footer() {
  return (
    <footer style={{ background: "#0a0f1e" }}>
      {/* Top border accent */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, #f59e0b 30%, #fbbf24 70%, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
                }}
              >
                <Zap size={18} className="text-white" strokeWidth={2.5} />
              </div>
              <span
                className="font-bold text-white text-lg"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                SAMZE<span style={{ color: "#f59e0b" }}> Eng.</span>
              </span>
            </Link>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Making clean energy accessible, affordable, and dependable for
              homes, businesses, and communities across Ethiopia.
            </p>
            <div className="flex items-center gap-1">
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "#22c55e" }}
              />
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                Serving all of Ethiopia
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-sm font-semibold mb-5 uppercase tracking-widest"
              style={{ color: "#f59e0b", fontFamily: "var(--font-inter), sans-serif" }}
            >
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-amber-400"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-sm font-semibold mb-5 uppercase tracking-widest"
              style={{ color: "#f59e0b", fontFamily: "var(--font-inter), sans-serif" }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <span
                    className="text-sm"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-sm font-semibold mb-5 uppercase tracking-widest"
              style={{ color: "#f59e0b", fontFamily: "var(--font-inter), sans-serif" }}
            >
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="mt-0.5 shrink-0"
                  style={{ color: "#f59e0b" }}
                />
                <span
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  Addis Ababa, Ethiopia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0" style={{ color: "#f59e0b" }} />
                <a
                  href="tel:+251913303891"
                  className="text-sm transition-colors duration-200 hover:text-amber-400"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  +251 913 303 891
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0" style={{ color: "#f59e0b" }} />
                <a
                  href="mailto:info@samze-techsolutions.com"
                  className="text-sm transition-colors duration-200 hover:text-amber-400"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  info@samze-techsolutions.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            © {new Date().getFullYear()} SAMZE Engineering. All rights reserved.
          </p>
          <p
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            Addis Ababa · Ethiopia · Est. 2020
          </p>
        </div>
      </div>
    </footer>
  );
}
