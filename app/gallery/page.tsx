import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse SAMZE Engineering's project portfolio featuring electromechanical work, civil execution, field installations, and power system delivery.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Project Gallery"
        subtitle="A broader look at our field execution, electromechanical installations, civil support works, and completed project delivery."
        bgImage="/images/gallery/photo_2026-03-14_22-08-20.jpg"
        breadcrumb="Gallery"
      />
      <GalleryGrid />
    </>
  );
}
