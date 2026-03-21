import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServicesDetail from "@/components/services/ServicesDetail";
import ProcessSection from "@/components/services/ProcessSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaBanner from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Solar panels, energy storage, inverters, monitoring & electromechanical solutions from SAMZE Engineering — Ethiopia's premier energy company.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive clean energy and electromechanical solutions, engineered for Ethiopia's homes, businesses, and communities."
        bgImage="/images/gallery/photo_2026-03-14_22-09-30.jpg"
        breadcrumb="Services"
      />
      <ServicesDetail />
      <ProcessSection />
      <TestimonialsSection />
      <CtaBanner />
    </>
  );
}
