import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with SAMZE Engineering for project consultations and quotes on electromechanical, civil, water drilling, and firefighting works.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get In Touch"
        subtitle="Tell us about your project and our team will help with the next steps, timelines, and tailored support."
        bgImage="/images/gallery/photo_2026-03-14_22-10-14.jpg"
        breadcrumb="Contact"
      />
      <ContactSection />
    </>
  );
}
