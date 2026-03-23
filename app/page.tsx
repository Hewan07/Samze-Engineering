import HeroSection from "@/components/home/HeroSection";
import StatsStrip from "@/components/home/StatsStrip";
import ServicesSection from "@/components/home/ServicesSection";
import AboutTeaser from "@/components/home/AboutTeaser";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaBanner from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <ServicesSection />
      <AboutTeaser />
      <TestimonialsSection />
      <CtaBanner />
    </>
  );
}
