"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";

const contactInfo = [
  {
    icon: MapPin,
    label: "Office",
    value: "Addis Ababa, Ethiopia",
    href: undefined,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+251930389133",
    href: "tel:+251930389133",
  },
  {
    icon: Phone,
    label: "Alt. Phone",
    value: "+251913175650",
    href: "tel:+251913175650",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@samze-techsolutions.com",
    href: "mailto:info@samze-techsolutions.com",
  },
];

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission (no backend yet)
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="py-24 lg:py-32" style={{ background: "#f2f4f6" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16"
        >
          {/* Left info panel */}
          <div
            className="lg:col-span-2 transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-24px)",
            }}
          >
            <SectionLabel>Contact Us</SectionLabel>
            <h2
              className="mt-4 mb-6 font-bold leading-tight"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                letterSpacing: "-0.02em",
                color: "#0f172a",
              }}
            >
              Let&apos;s Talk About Your{" "}
              <span style={{ color: "#f59e0b" }}>Next Project</span>
            </h2>
            <p
              className="text-base leading-relaxed mb-10"
              style={{ color: "#6b7280", fontFamily: "var(--font-inter), sans-serif" }}
            >
              Whether you need electromechanical work, civil work, water
              drilling, firefighting systems, or general project support,
              we&apos;re ready to discuss the scope and provide a tailored quote.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded flex items-center justify-center shrink-0"
                    style={{ background: "rgba(245,158,11,0.1)" }}
                  >
                    <info.icon size={18} style={{ color: "#f59e0b" }} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-widest mb-1"
                      style={{ color: "#9ca3af", fontFamily: "var(--font-inter), sans-serif" }}
                    >
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-sm font-medium transition-colors hover:text-amber-500"
                        style={{ color: "#0f172a", fontFamily: "var(--font-inter), sans-serif" }}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p
                        className="text-sm font-medium"
                        style={{ color: "#0f172a", fontFamily: "var(--font-inter), sans-serif" }}
                      >
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Hours */}
            <div
              className="mt-10 rounded p-6"
              style={{ background: "#0f172a" }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "#f59e0b", fontFamily: "var(--font-inter), sans-serif" }}
              >
                Business Hours
              </p>
              <div className="space-y-2">
                {[
                  { day: "Mon – Fri", hours: "8:00 AM – 6:00 PM" },
                  { day: "Saturday", hours: "9:00 AM – 3:00 PM" },
                  { day: "Sunday", hours: "Closed" },
                ].map((h) => (
                  <div key={h.day} className="flex justify-between text-sm">
                    <span style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-inter), sans-serif" }}>{h.day}</span>
                    <span style={{ color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-inter), sans-serif" }}>{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right form */}
          <div
            className="lg:col-span-3 transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(24px)",
              transitionDelay: "150ms",
            }}
          >
            <div
              className="rounded p-8 lg:p-10"
              style={{
                background: "#ffffff",
                boxShadow: "0 8px 40px rgba(15,23,42,0.08)",
              }}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle
                    size={56}
                    style={{ color: "#f59e0b" }}
                    strokeWidth={1.5}
                    className="mb-5"
                  />
                  <h3
                    className="font-bold mb-3"
                    style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontSize: "1.5rem",
                      color: "#0f172a",
                    }}
                  >
                    Message Received!
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#6b7280", maxWidth: "340px" }}
                  >
                    Thank you for reaching out. Our team will contact you within
                    one business day to discuss your project.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3
                    className="font-bold mb-6"
                    style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontSize: "1.3rem",
                      color: "#0f172a",
                    }}
                  >
                    Send Us a Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Field
                      label="Full Name"
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(v) => setForm({ ...form, name: v })}
                      required
                    />
                    <Field
                      label="Email Address"
                      type="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={(v) => setForm({ ...form, email: v })}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Field
                      label="Phone Number"
                      type="tel"
                      placeholder="+251 9XX XXX XXX"
                      value={form.phone}
                      onChange={(v) => setForm({ ...form, phone: v })}
                    />
                    <div className="flex flex-col gap-1.5">
                      <label
                        className="text-xs font-semibold uppercase tracking-wider"
                        style={{ color: "#6b7280", fontFamily: "var(--font-inter), sans-serif" }}
                      >
                        Service Interest
                      </label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded outline-none transition-all duration-200 bg-white appearance-none"
                        style={{
                          border: "1.5px solid #e5e7eb",
                          color: form.service ? "#0f172a" : "#9ca3af",
                          fontFamily: "var(--font-inter), sans-serif",
                        }}
                        >
                          <option value="">Select a service</option>
                          <option value="electromechanical">Electromechanical Work</option>
                          <option value="civil-work">Civil Work</option>
                          <option value="water-drilling">Water Drilling</option>
                          <option value="firefighting-system">Firefighting System</option>
                          <option value="other">Other</option>
                        </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-xs font-semibold uppercase tracking-wider"
                      style={{ color: "#6b7280", fontFamily: "var(--font-inter), sans-serif" }}
                    >
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us about your project scope, location, and timeline..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded outline-none transition-all duration-200 resize-none"
                      style={{
                        border: "1.5px solid #e5e7eb",
                        color: "#0f172a",
                        fontFamily: "var(--font-inter), sans-serif",
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-4 font-semibold rounded text-sm transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{
                      background: loading
                        ? "#d97706"
                        : "linear-gradient(135deg, #f59e0b, #fbbf24)",
                      color: "#0f172a",
                      fontFamily: "var(--font-inter), sans-serif",
                      boxShadow: "0 4px 20px rgba(245,158,11,0.3)",
                    }}
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-navy-900 border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={15} strokeWidth={2} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  type,
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        className="text-xs font-semibold uppercase tracking-wider"
        style={{ color: "#6b7280", fontFamily: "var(--font-inter), sans-serif" }}
      >
        {label}
      </label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 text-sm rounded outline-none transition-all duration-200"
        style={{
          border: "1.5px solid #e5e7eb",
          color: "#0f172a",
          fontFamily: "var(--font-inter), sans-serif",
        }}
        onFocus={(e) => (e.target.style.border = "1.5px solid #f59e0b")}
        onBlur={(e) => (e.target.style.border = "1.5px solid #e5e7eb")}
      />
    </div>
  );
}
