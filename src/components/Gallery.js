import React, { useState, useEffect, useRef, useCallback } from "react";

// ─── Injected styles for keyframe animations ──────────────────────────────────
const STYLES = `
  @keyframes samze-fadeInUp {
    from {
      opacity: 0;
      transform: translateY(36px) scale(0.97);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  @keyframes samze-fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes samze-imgPop {
    from { opacity: 0; transform: scale(0.94); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes samze-statCount {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .samze-gallery-item {
    opacity: 0;
    animation: samze-fadeInUp 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }
  .samze-lightbox {
    animation: samze-fadeIn 0.22s ease forwards;
  }
  .samze-lightbox-img {
    animation: samze-imgPop 0.3s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }
  .samze-stat {
    animation: samze-statCount 0.5s ease forwards;
  }
  .samze-filter-btn {
    transition: all 0.25s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .samze-card-img {
    transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .samze-card:hover .samze-card-img {
    transform: scale(1.08);
  }
  .samze-card-overlay {
    transition: opacity 0.35s ease;
    opacity: 0;
  }
  .samze-card:hover .samze-card-overlay {
    opacity: 1;
  }
`;

// ─── Data ─────────────────────────────────────────────────────────────────────
const CATEGORIES = [
  { id: "all",          label: "All Projects"   },
  { id: "installation", label: "Installations"  },
  { id: "commercial",   label: "Commercial"     },
  { id: "residential",  label: "Residential"    },
  { id: "equipment",    label: "Equipment"      },
];

const IMAGES = [
  {
    id: 1,
    src: "/images/gallery/photo_2026-03-14_22-08-20.jpg",
    category: "installation",
    title: "Commercial Rooftop Array",
    description: "Large-scale solar panel installation for an industrial facility, designed for maximum energy yield.",
    wide: true,
  },
  {
    id: 2,
    src: "/images/gallery/photo_2026-03-14_22-08-45.jpg",
    category: "residential",
    title: "Home Solar System",
    description: "Complete residential solar solution with grid-tie and backup capability.",
    wide: false,
  },
  {
    id: 3,
    src: "/images/gallery/photo_2026-03-14_22-08-50.jpg",
    category: "equipment",
    title: "Inverter Installation",
    description: "High-efficiency inverter commissioning and wiring configuration.",
    wide: false,
  },
  {
    id: 4,
    src: "/images/gallery/photo_2026-03-14_22-09-01.jpg",
    category: "installation",
    title: "Precision Panel Mounting",
    description: "Structural mounting system installed on a commercial building with custom racking.",
    wide: true,
  },
  {
    id: 5,
    src: "/images/gallery/photo_2026-03-14_22-09-30.jpg",
    category: "commercial",
    title: "Office Complex Solar",
    description: "Multi-building solar energy integration serving an entire office park campus.",
    wide: false,
  },
  {
    id: 6,
    src: "/images/gallery/photo_2026-03-14_22-09-34.jpg",
    category: "equipment",
    title: "Battery Storage Unit",
    description: "Lithium-ion energy storage system providing round-the-clock power supply.",
    wide: false,
  },
  {
    id: 7,
    src: "/images/gallery/photo_2026-03-14_22-09-38.jpg",
    category: "residential",
    title: "Villa Solar Project",
    description: "Premium residential installation with smart monitoring and automated shading.",
    wide: false,
  },
  {
    id: 8,
    src: "/images/gallery/photo_2026-03-14_22-09-42.jpg",
    category: "commercial",
    title: "Industrial Solar Farm",
    description: "Utility-scale solar farm supplying clean energy to a manufacturing facility.",
    wide: true,
  },
  {
    id: 9,
    src: "/images/gallery/photo_2026-03-14_22-09-46.jpg",
    category: "installation",
    title: "Grid Connection Works",
    description: "Smart grid tie-in and metering infrastructure for a commercial client.",
    wide: false,
  },
  {
    id: 10,
    src: "/images/gallery/photo_2026-03-14_22-09-51.jpg",
    category: "equipment",
    title: "Monitoring Dashboard",
    description: "Real-time energy monitoring and analytics station installed on-site.",
    wide: false,
  },
  {
    id: 11,
    src: "/images/gallery/photo_2026-03-14_22-09-54.jpg",
    category: "residential",
    title: "Apartment Block Install",
    description: "Multi-unit residential complex with shared solar generation and metered distribution.",
    wide: false,
  },
  {
    id: 12,
    src: "/images/gallery/photo_2026-03-14_22-09-58.jpg",
    category: "commercial",
    title: "Warehouse Rooftop",
    description: "Large warehouse converted to net-zero with a 200kW solar installation.",
    wide: false,
  },
  {
    id: 13,
    src: "/images/gallery/photo_2026-03-14_22-10-02.jpg",
    category: "installation",
    title: "Cable Management",
    description: "Professional conduit routing, cable management, and safety tagging.",
    wide: false,
  },
  {
    id: 14,
    src: "/images/gallery/photo_2026-03-14_22-10-05.jpg",
    category: "equipment",
    title: "Panel Array Configuration",
    description: "High-performance monocrystalline panel arrangement with optimal tilt angles.",
    wide: true,
  },
  {
    id: 15,
    src: "/images/gallery/photo_2026-03-14_22-10-10.jpg",
    category: "residential",
    title: "Eco Home Project",
    description: "Fully off-grid residential setup with solar, storage, and water heating.",
    wide: false,
  },
  {
    id: 16,
    src: "/images/gallery/photo_2026-03-14_22-10-14.jpg",
    category: "commercial",
    title: "School Energy Project",
    description: "Powering an educational institution with clean, affordable solar energy.",
    wide: false,
  },
  {
    id: 17,
    src: "/images/gallery/photo_2026-03-14_22-10-18.jpg",
    category: "installation",
    title: "Project Handover",
    description: "Final inspection and client handover for a successfully completed installation.",
    wide: false,
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleImages, setVisibleImages] = useState(IMAGES);
  const [transitioning, setTransitioning] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  // Parallax on scroll
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Filter with brief exit → enter animation
  const handleFilter = useCallback(
    (id) => {
      if (id === activeFilter || transitioning) return;
      setTransitioning(true);
      setVisibleImages([]); // unmount current cards
      setTimeout(() => {
        setActiveFilter(id);
        setVisibleImages(id === "all" ? IMAGES : IMAGES.filter((img) => img.category === id));
        setTransitioning(false);
      }, 180);
    },
    [activeFilter, transitioning]
  );

  // Lightbox navigation
  const navigate = useCallback(
    (dir) => {
      const idx = visibleImages.findIndex((img) => img.id === lightbox.id);
      const next = (idx + dir + visibleImages.length) % visibleImages.length;
      setLightbox(visibleImages[next]);
    },
    [lightbox, visibleImages]
  );

  // Keyboard for lightbox
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => {
      if (e.key === "Escape")      setLightbox(null);
      if (e.key === "ArrowRight")  navigate(1);
      if (e.key === "ArrowLeft")   navigate(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, navigate]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  const categoryCount = (id) =>
    id === "all" ? IMAGES.length : IMAGES.filter((img) => img.category === id).length;

  const lightboxIndex = lightbox
    ? visibleImages.findIndex((img) => img.id === lightbox.id)
    : -1;

  return (
    <>
      <style>{STYLES}</style>

      {/* ── Hero with Parallax ─────────────────────────────────────────────── */}
      <section className="relative h-72 md:h-96 lg:h-[420px] overflow-hidden bg-blue-900">
        {/* Parallax background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/gallery/photo_2026-03-14_22-08-20.jpg')`,
            transform: `translateY(${scrollY * 0.38}px)`,
            willChange: "transform",
            top: "-10%",
            height: "120%",
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-900/60 to-blue-900/85" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <span
            className="inline-block text-yellow-400 text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
            style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(4px)" }}
          >
            Our Work in Action
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-3">
            Project Gallery
          </h1>
          <p className="text-blue-200 text-base md:text-lg max-w-lg leading-relaxed">
            Solar energy installations and engineering milestones across Ethiopia and beyond.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <div className="w-8 h-px bg-yellow-400/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-8 h-px bg-yellow-400/60" />
          </div>
        </div>
      </section>

      {/* ── Stats Strip ────────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-gray-100 py-7">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { number: "50+",  label: "Projects Completed"   },
            { number: "17+",  label: "Documented Installs"  },
            { number: "5+",   label: "Years of Excellence"  },
            { number: "100%", label: "Client Satisfaction"  },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="samze-stat"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="text-3xl font-extrabold text-blue-900">{stat.number}</div>
              <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Gallery Body ───────────────────────────────────────────────────── */}
      <section className="py-14 px-4 md:px-6 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto">

          {/* Section heading */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Explore Our Installations
            </h2>
            <p className="text-gray-500 mt-2 text-sm md:text-base">
              Browse by category or view the full portfolio.
            </p>
          </div>

          {/* ── Filter Pills ─────────────────────────────────────────────── */}
          <div className="flex flex-wrap gap-2.5 justify-center mb-10">
            {CATEGORIES.map((cat) => {
              const isActive = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleFilter(cat.id)}
                  className={`samze-filter-btn flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold border ${
                    isActive
                      ? "bg-blue-900 text-white border-blue-900 shadow-lg shadow-blue-900/20 scale-105"
                      : "bg-white text-gray-600 border-gray-200 hover:border-blue-400 hover:text-blue-800 hover:shadow-sm"
                  }`}
                >
                  {cat.label}
                  <span
                    className={`text-xs font-normal rounded-full px-1.5 py-0.5 ${
                      isActive ? "bg-white/20 text-yellow-300" : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {categoryCount(cat.id)}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ── Grid ─────────────────────────────────────────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {visibleImages.map((img, index) => (
              <div
                key={img.id}
                className={`samze-card samze-gallery-item relative overflow-hidden rounded-2xl cursor-pointer shadow-md ${
                  img.wide ? "sm:col-span-2" : ""
                }`}
                style={{
                  animationDelay: `${index * 0.055}s`,
                  aspectRatio: img.wide ? "16 / 7" : "4 / 3",
                }}
                onClick={() => setLightbox(img)}
              >
                {/* Image */}
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  className="samze-card-img w-full h-full object-cover"
                />

                {/* Always-visible category badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="text-xs font-semibold text-white px-2.5 py-1 rounded-full"
                    style={{ background: "rgba(30,58,138,0.75)", backdropFilter: "blur(6px)" }}>
                    {CATEGORIES.find((c) => c.id === img.category)?.label}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="samze-card-overlay absolute inset-0 bg-gradient-to-t from-blue-900/92 via-blue-900/40 to-transparent flex flex-col justify-end p-5">
                  <p className="text-yellow-400 text-xs font-semibold uppercase tracking-widest mb-1">
                    {CATEGORIES.find((c) => c.id === img.category)?.label}
                  </p>
                  <h3 className="text-white font-bold text-base md:text-lg leading-snug">
                    {img.title}
                  </h3>
                  <p className="text-blue-200 text-sm mt-1 leading-snug line-clamp-2">
                    {img.description}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-yellow-400 text-sm font-medium">
                    <span>View image</span>
                    <span className="text-base">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {!transitioning && visibleImages.length === 0 && (
            <div className="text-center py-24 text-gray-400">
              <div className="text-6xl mb-4">🔆</div>
              <p className="text-lg font-medium">No projects in this category yet.</p>
              <p className="text-sm mt-1">Check back soon or browse all projects.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── Lightbox ───────────────────────────────────────────────────────── */}
      {lightbox && (
        <div
          className="samze-lightbox fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.93)" }}
          onClick={(e) => e.currentTarget === e.target && setLightbox(null)}
        >
          {/* Close */}
          <button
            aria-label="Close"
            className="absolute top-4 right-5 text-white/70 hover:text-white transition-colors text-4xl font-light leading-none z-20"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>

          {/* Counter */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 text-gray-400 text-sm z-20">
            {lightboxIndex + 1} / {visibleImages.length}
          </div>

          {/* Prev */}
          <button
            aria-label="Previous"
            onClick={() => navigate(-1)}
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center rounded-full text-white text-2xl font-light transition-all"
            style={{ background: "rgba(255,255,255,0.1)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
          >
            ‹
          </button>

          {/* Image + caption */}
          <div className="samze-lightbox-img max-w-4xl w-full px-16 md:px-20" key={lightbox.id}>
            <img
              src={lightbox.src}
              alt={lightbox.title}
              className="w-full max-h-[70vh] object-contain rounded-xl shadow-2xl"
            />
            <div className="mt-5 text-center">
              <span className="text-yellow-400 text-xs font-bold uppercase tracking-widest">
                {CATEGORIES.find((c) => c.id === lightbox.category)?.label}
              </span>
              <h3 className="text-white text-xl font-bold mt-1">{lightbox.title}</h3>
              <p className="text-gray-400 text-sm mt-1 max-w-md mx-auto leading-relaxed">
                {lightbox.description}
              </p>
            </div>
          </div>

          {/* Next */}
          <button
            aria-label="Next"
            onClick={() => navigate(1)}
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center rounded-full text-white text-2xl font-light transition-all"
            style={{ background: "rgba(255,255,255,0.1)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
