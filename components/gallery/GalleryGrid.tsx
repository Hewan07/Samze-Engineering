"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Category = "All" | "Installations" | "Commercial" | "Residential" | "Equipment";

const projects: {
  src: string;
  title: string;
  category: Exclude<Category, "All">;
  span: 4 | 2; // out of 6 columns
}[] = [
  { src: "/images/gallery/photo_2026-03-14_22-08-20.jpg", title: "Commercial Rooftop Array", category: "Commercial", span: 4 },
  { src: "/images/gallery/photo_2026-03-14_22-08-45.jpg", title: "Home Solar System", category: "Residential", span: 2 },
  { src: "/images/gallery/photo_2026-03-14_22-08-50.jpg", title: "Inverter Installation", category: "Equipment", span: 2 },
  { src: "/images/gallery/photo_2026-03-14_22-09-01.jpg", title: "Precision Panel Mounting", category: "Installations", span: 4 },
  { src: "/images/gallery/photo_2026-03-14_22-09-30.jpg", title: "Office Complex Solar", category: "Commercial", span: 2 },
  { src: "/images/gallery/photo_2026-03-14_22-09-34.jpg", title: "Battery Storage Unit", category: "Equipment", span: 2 },
  { src: "/images/gallery/photo_2026-03-14_22-09-38.jpg", title: "Villa Solar Project", category: "Residential", span: 2 },
  { src: "/images/gallery/photo_2026-03-14_22-09-42.jpg", title: "Industrial Solar Farm", category: "Commercial", span: 4 },
  { src: "/images/gallery/photo_2026-03-14_22-09-46.jpg", title: "Grid Connection Works", category: "Installations", span: 2 },
  { src: "/images/gallery/photo_2026-03-14_22-09-51.jpg", title: "Monitoring Dashboard", category: "Equipment", span: 2 },
  { src: "/images/gallery/photo_2026-03-14_22-09-54.jpg", title: "Apartment Block Install", category: "Commercial", span: 2 },
  { src: "/images/gallery/photo_2026-03-14_22-09-58.jpg", title: "Warehouse Rooftop", category: "Commercial", span: 2 },
  { src: "/images/gallery/photo_2026-03-14_22-10-02.jpg", title: "Cable Management", category: "Equipment", span: 2 },
  { src: "/images/gallery/photo_2026-03-14_22-10-05.jpg", title: "Panel Array Configuration", category: "Installations", span: 4 },
  { src: "/images/gallery/photo_2026-03-14_22-10-10.jpg", title: "Eco Home Project", category: "Residential", span: 2 },
  { src: "/images/gallery/photo_2026-03-14_22-10-14.jpg", title: "School Energy Project", category: "Commercial", span: 2 },
  { src: "/images/gallery/photo_2026-03-14_22-10-18.jpg", title: "Project Handover", category: "Residential", span: 2 },
];

const categories: Category[] = ["All", "Installations", "Commercial", "Residential", "Equipment"];

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
    <section className="py-16 lg:py-20" style={{ background: "#f2f4f6" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter by category">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActive(cat); setLightbox(null); }}
              aria-pressed={active === cat}
              className="px-4 py-2 text-sm font-medium transition-all duration-200"
              style={{
                background: active === cat ? "#0f172a" : "#ffffff",
                color: active === cat ? "#f59e0b" : "#4b5563",
                fontFamily: "var(--font-inter), sans-serif",
                border: "1px solid",
                borderColor: active === cat ? "#0f172a" : "#e5e7eb",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bento grid — 6 columns, 240px rows */}
        <div
          className="grid gap-3"
          style={{
            gridTemplateColumns: "repeat(6, 1fr)",
            gridAutoRows: "240px",
          }}
        >
          {filtered.map((item, i) => (
            <button
              key={item.src}
              className="group relative overflow-hidden rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              style={{ gridColumn: `span ${item.span}` }}
              onClick={() => setLightbox(i)}
              aria-label={`View ${item.title}`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Caption on hover */}
              <div
                className="absolute inset-0 flex flex-col items-start justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(to top, rgba(10,15,30,0.85) 0%, transparent 60%)" }}
                aria-hidden="true"
              >
                <p
                  className="text-white text-sm font-semibold leading-tight"
                  style={{ fontFamily: "var(--font-manrope), sans-serif" }}
                >
                  {item.title}
                </p>
                <span
                  className="text-xs mt-1"
                  style={{ color: "#fbbf24", fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {item.category}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Image: ${filtered[lightbox].title}`}
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.95)" }}
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center transition-colors duration-200 hover:bg-white/10"
            style={{ color: "rgba(255,255,255,0.7)" }}
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={20} aria-hidden="true" />
          </button>

          {/* Counter */}
          <p
            className="absolute top-5 left-5 text-xs"
            style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-inter), sans-serif" }}
            aria-live="polite"
          >
            {lightbox + 1} / {filtered.length}
          </p>

          {/* Prev */}
          <button
            className="absolute left-4 md:left-8 w-11 h-11 flex items-center justify-center hover:bg-white/10 transition-colors"
            style={{ color: "white" }}
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            aria-label="Previous image"
          >
            <ChevronLeft size={22} aria-hidden="true" />
          </button>

          {/* Image */}
          <div
            className="relative w-full h-full mx-14 md:mx-20 max-w-5xl max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[lightbox].src}
              alt={filtered[lightbox].title}
              fill
              className="object-contain"
              sizes="90vw"
            />
            <div
              className="absolute bottom-0 left-0 right-0 py-3 px-4 text-center"
              style={{ background: "rgba(0,0,0,0.4)" }}
            >
              <p className="text-white text-sm font-medium" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>
                {filtered[lightbox].title}
              </p>
            </div>
          </div>

          {/* Next */}
          <button
            className="absolute right-4 md:right-8 w-11 h-11 flex items-center justify-center hover:bg-white/10 transition-colors"
            style={{ color: "white" }}
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            aria-label="Next image"
          >
            <ChevronRight size={22} aria-hidden="true" />
          </button>
        </div>
      )}
    </section>
  );
}
