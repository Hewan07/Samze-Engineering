import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse SAMZE Engineering's project portfolio — 50+ completed solar installations across Ethiopia.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Project Gallery"
        subtitle="A showcase of our completed solar installations, energy systems, and electromechanical projects across Ethiopia."
        bgImage="/images/gallery/photo_2026-03-14_22-08-20.jpg"
        breadcrumb="Gallery"
      />
      <GalleryGrid />
    </>
  );
}
