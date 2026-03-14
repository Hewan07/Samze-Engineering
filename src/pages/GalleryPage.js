import React from "react";
import useSEO from "../hooks/useSEO";
import Gallery from "../components/Gallery";

function GalleryPage() {
  useSEO(
    "Project Gallery",
    "Browse SAMZE Engineering's portfolio of completed solar installations — commercial, residential, and industrial projects across Ethiopia."
  );
  return <Gallery />;
}

export default GalleryPage;
