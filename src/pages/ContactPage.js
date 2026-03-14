// src/pages/ContactPage.jsx
import React from "react";
import useSEO from "../hooks/useSEO";
import Contact from "../components/Contact";
import Partners from "../components/Partners";

function ContactPage() {
  useSEO(
    "Contact Us",
    "Get in touch with SAMZE Engineering for solar energy consultations, project quotes, or support. We're based in Ethiopia and ready to help."
  );
  return (
    <div>
      <Contact />
      <Partners />
    </div>
  );
}

export default ContactPage;
