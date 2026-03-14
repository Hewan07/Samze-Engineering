// src/pages/ServicesPage.jsx
import React from "react";
import useSEO from "../hooks/useSEO";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

function ServicesPage() {
  useSEO(
    "Our Services",
    "Explore SAMZE Engineering's full range of services: solar panel installation, battery storage systems, inverter setup, and real-time energy monitoring."
  );
  return (
    <div>
      <Services />
      <Testimonials />
    </div>
  );
}

export default ServicesPage;
