import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import MissionSection from "@/components/about/MissionSection";
import MetricsSection from "@/components/about/MetricsSection";
import TimelineSection from "@/components/about/TimelineSection";
import PartnersSection from "@/components/about/PartnersSection";
import CredentialsSection from "@/components/about/CredentialsSection";
import CtaBanner from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Founded in 2020, SAMZE Engineering specializes in electromechanical, construction, water drilling, and solar energy solutions across Ethiopia.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionSection />
      <MetricsSection />
      <TimelineSection />
      <PartnersSection />
      <CredentialsSection />
      <CtaBanner />
    </>
  );
}
