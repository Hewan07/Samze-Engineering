import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServicesDetail from "@/components/services/ServicesDetail";
import ProcessSection from "@/components/services/ProcessSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaBanner from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Electromechanical work, civil work, water drilling, and firefighting systems from SAMZE Engineering across Ethiopia.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Integrated engineering and infrastructure services delivered with practical planning, disciplined execution, and dependable field support."
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
