import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import MissionSection from "@/components/about/MissionSection";
import TimelineSection from "@/components/about/TimelineSection";
import MetricsSection from "@/components/about/MetricsSection";
import PartnersSection from "@/components/about/PartnersSection";
import CtaBanner from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about SAMZE Engineering — founded in 2020, trusted by UNHCR and Safaricom, powering Ethiopia's clean energy future.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionSection />
      <MetricsSection />
      <TimelineSection />
      <PartnersSection />
      <CtaBanner />
    </>
  );
}
