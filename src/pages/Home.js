// src/pages/Home.jsx
import React from "react";
import useSEO from "../hooks/useSEO";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Partners from "../components/Partners";
import Testimonials from "../components/Testimonials";
import Timeline from "../components/Timeline";
import Metrics from "../components/Metrics";
import Contact from "../components/Contact";

function Home() {
  useSEO(
    "Solar Energy Solutions in Ethiopia",
    "SAMZE Engineering delivers solar panel installation, energy storage, inverter systems, and smart monitoring across Ethiopia. Quality and reliability since 2020."
  );
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Partners />
      <Testimonials />
      <Timeline />
      <Metrics />
      <Contact />
    </div>
  );
}

export default Home;
