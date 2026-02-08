// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Partners from "../components/Partners";
import Testimonials from "../components/Testimonials";
import Timeline from "../components/Timeline";
import Metrics from "../components/Metrics";
import Contact from "../components/Contact";

function Home() {
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
