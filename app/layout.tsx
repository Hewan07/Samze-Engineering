import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SAMZE Engineering — Powering Ethiopia's Future",
    template: "%s | SAMZE Engineering",
  },
  description:
    "Premium solar energy, electromechanical, construction and water drilling solutions across Ethiopia. Trusted by UNHCR, Safaricom, and more.",
  keywords: [
    "solar energy Ethiopia",
    "solar panels Addis Ababa",
    "electromechanical solutions",
    "water drilling Ethiopia",
    "energy storage",
    "solar inverters",
  ],
  authors: [{ name: "SAMZE Engineering" }],
  openGraph: {
    type: "website",
    locale: "en_ET",
    siteName: "SAMZE Engineering",
    title: "SAMZE Engineering — Powering Ethiopia's Future",
    description:
      "Premium solar energy, electromechanical, construction and water drilling solutions across Ethiopia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAMZE Engineering — Powering Ethiopia's Future",
    description:
      "Premium solar energy, electromechanical, construction and water drilling solutions across Ethiopia.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
