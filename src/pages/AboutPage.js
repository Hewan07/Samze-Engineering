// src/pages/AboutPage.jsx
import React from "react";
import About from "../components/About";
import Timeline from "../components/Timeline";
import Metrics from "../components/Metrics";
import Partners from "../components/Partners";

function AboutPage() {
  return (
    <div>
      <About />
      <Timeline />
      <Metrics />
      <Partners />
    </div>
  );
}

export default AboutPage;
