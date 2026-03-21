import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with SAMZE Engineering for a free consultation and quote on solar energy solutions across Ethiopia.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get In Touch"
        subtitle="Ready to start your solar journey? Our team is standing by to answer questions and provide a free consultation."
        bgImage="/images/gallery/photo_2026-03-14_22-10-14.jpg"
        breadcrumb="Contact"
      />
      <ContactSection />
    </>
  );
}
