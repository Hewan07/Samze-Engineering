"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

type Category = "All" | "Commercial" | "Residential" | "Industrial" | "Equipment";

const projects: {
  src: string;
  title: string;
  category: Exclude<Category, "All">;
  wide?: boolean;
}[] = [
  { src: "/images/gallery/photo_2026-03-14_22-08-20.jpg", title: "Commercial Rooftop Array", category: "Commercial", wide: true },
  { src: "/images/gallery/photo_2026-03-14_22-08-45.jpg", title: "Home Solar System", category: "Residential" },
  { src: "/images/gallery/photo_2026-03-14_22-08-50.jpg", title: "Inverter Installation", category: "Equipment" },
  { src: "/images/gallery/photo_2026-03-14_22-09-01.jpg", title: "Precision Panel Mounting", category: "Commercial", wide: true },
  { src: "/images/gallery/photo_2026-03-14_22-09-30.jpg", title: "Office Complex Solar", category: "Commercial" },
  { src: "/images/gallery/photo_2026-03-14_22-09-34.jpg", title: "Battery Storage Unit", category: "Equipment" },
  { src: "/images/gallery/photo_2026-03-14_22-09-38.jpg", title: "Villa Solar Project", category: "Residential" },
  { src: "/images/gallery/photo_2026-03-14_22-09-42.jpg", title: "Industrial Solar Farm", category: "Industrial", wide: true },
  { src: "/images/gallery/photo_2026-03-14_22-09-46.jpg", title: "Grid Connection Works", category: "Commercial" },
  { src: "/images/gallery/photo_2026-03-14_22-09-51.jpg", title: "Monitoring Dashboard", category: "Equipment" },
  { src: "/images/gallery/photo_2026-03-14_22-09-54.jpg", title: "Apartment Block Install", category: "Commercial" },
  { src: "/images/gallery/photo_2026-03-14_22-09-58.jpg", title: "Warehouse Rooftop", category: "Industrial" },
  { src: "/images/gallery/photo_2026-03-14_22-10-02.jpg", title: "Cable Management", category: "Equipment" },
  { src: "/images/gallery/photo_2026-03-14_22-10-05.jpg", title: "Panel Array Configuration", category: "Industrial", wide: true },
  { src: "/images/gallery/photo_2026-03-14_22-10-10.jpg", title: "Eco Home Project", category: "Residential" },
  { src: "/images/gallery/photo_2026-03-14_22-10-14.jpg", title: "School Energy Project", category: "Commercial" },
  { src: "/images/gallery/photo_2026-03-14_22-10-18.jpg", title: "Project Handover", category: "Residential" },
];

const categories: Category[] = ["All", "Commercial", "Residential", "Industrial", "Equipment"];

export default function GalleryGrid() {
  const [active, setActive] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const prevImage = useCallback(() => {
    setLightbox((i) => (i !== null ? (i === 0 ? filtered.length - 1 : i - 1) : null));
  }, [filtered.length]);

  const nextImage = useCallback(() => {
    setLightbox((i) => (i !== null ? (i === filtered.length - 1 ? 0 : i + 1) : null));
  }, [filtered.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [closeLightbox, prevImage, nextImage]);

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  return (
    <section className="py-16 lg:py-24" style={{ background: "#f2f4f6" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Stats strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {[
            { v: "50+", l: "Projects" },
            { v: "17+", l: "Documented" },
            { v: "5+", l: "Years" },
            { v: "100%", l: "Satisfaction" },
          ].map((s) => (
            <div
              key={s.l}
              className="text-center rounded py-5 px-4"
              style={{ background: "#0f172a" }}
            >
              <div
                className="font-bold text-2xl mb-1"
                style={{
                  color: "#f59e0b",
                  fontFamily: "var(--font-manrope), sans-serif",
                }}
              >
                {s.v}
              </div>
              <div
                className="text-xs uppercase tracking-widest"
                style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-inter), sans-serif" }}
              >
                {s.l}
              </div>
            </div>
          ))}
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-5 py-2.5 text-sm font-medium rounded transition-all duration-300"
              style={{
                background: active === cat ? "#0f172a" : "#ffffff",
                color: active === cat ? "#f59e0b" : "#6b7280",
                fontFamily: "var(--font-inter), sans-serif",
                boxShadow: active === cat ? "0 4px 16px rgba(15,23,42,0.15)" : "none",
                border: active === cat ? "none" : "1px solid #e5e7eb",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((item, i) => (
            <div
              key={item.src}
              className="break-inside-avoid group relative overflow-hidden rounded cursor-pointer"
              onClick={() => setLightbox(i)}
              style={{ boxShadow: "0 2px 8px rgba(15,23,42,0.08)" }}
            >
              <div className={`relative ${item.wide ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center"
                  style={{ background: "rgba(10,15,30,0.75)" }}
                >
                  <ZoomIn size={28} className="text-white mb-3" strokeWidth={1.5} />
                  <p
                    className="text-white text-sm font-semibold text-center px-4"
                    style={{ fontFamily: "var(--font-manrope), sans-serif" }}
                  >
                    {item.title}
                  </p>
                  <span
                    className="mt-2 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider rounded"
                    style={{ background: "rgba(245,158,11,0.9)", color: "#0f172a" }}
                  >
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.95)" }}
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-white/10"
            style={{ color: "rgba(255,255,255,0.7)" }}
            onClick={closeLightbox}
          >
            <X size={20} />
          </button>

          {/* Counter */}
          <div
            className="absolute top-5 left-5 text-xs font-semibold uppercase tracking-widest"
            style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-inter), sans-serif" }}
          >
            {lightbox + 1} / {filtered.length}
          </div>

          {/* Prev */}
          <button
            className="absolute left-4 md:left-8 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{ background: "rgba(255,255,255,0.1)", color: "white" }}
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
          >
            <ChevronLeft size={22} />
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[lightbox].src}
              alt={filtered[lightbox].title}
              fill
              className="object-contain"
            />
            {/* Caption */}
            <div
              className="absolute bottom-0 left-0 right-0 py-3 px-5 text-center"
              style={{ background: "rgba(0,0,0,0.5)" }}
            >
              <p className="text-white text-sm font-semibold" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>
                {filtered[lightbox].title}
              </p>
              <span
                className="text-xs"
                style={{ color: "#f59e0b", fontFamily: "var(--font-inter), sans-serif" }}
              >
                {filtered[lightbox].category}
              </span>
            </div>
          </div>

          {/* Next */}
          <button
            className="absolute right-4 md:right-8 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{ background: "rgba(255,255,255,0.1)", color: "white" }}
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
          >
            <ChevronRight size={22} />
          </button>
        </div>
      )}
    </section>
  );
}
