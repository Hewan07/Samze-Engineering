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
  metadataBase: new URL("https://samze-techsolutions.com"),
  title: {
    default: "SAMZE Engineering — Electromechanical, Construction & Water Drilling Solutions",
    template: "%s | SAMZE Engineering",
  },
  description:
    "SAMZE Engineering specializes in electromechanical, construction, water drilling, and solar energy solutions across Ethiopia. Trusted by UNHCR and Safaricom.",
  keywords: [
    "electromechanical solutions Ethiopia",
    "water drilling Ethiopia",
    "solar panels Addis Ababa",
    "construction Ethiopia",
    "solar energy Ethiopia",
    "inverters Ethiopia",
    "energy storage Ethiopia",
    "SAMZE Engineering",
  ],
  authors: [{ name: "SAMZE Engineering" }],
  creator: "SAMZE Engineering",
  openGraph: {
    type: "website",
    locale: "en_ET",
    url: "https://samze-techsolutions.com",
    siteName: "SAMZE Engineering",
    title: "SAMZE Engineering — Electromechanical, Construction & Water Drilling",
    description:
      "Electromechanical, construction, water drilling, and solar solutions across Ethiopia.",
    images: [{ url: "/logo - Full.png", width: 400, height: 120, alt: "SAMZE Engineering" }],
  },
  twitter: {
    card: "summary",
    title: "SAMZE Engineering",
    description: "Electromechanical, Construction & Water Drilling Solutions — Ethiopia.",
    images: ["/logo - Full.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SAMZE Engineering",
  alternateName: "SAMZE-TechSolutions",
  description:
    "Electromechanical, Construction and Water Drilling Solutions across Ethiopia.",
  url: "https://samze-techsolutions.com",
  logo: "https://samze-techsolutions.com/logo - Full.png",
  telephone: "+25191330389133",
  email: "info@samze-techsolutions.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Addis Ababa",
    addressCountry: "ET",
  },
  foundingDate: "2020",
  areaServed: "Ethiopia",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-amber-500 focus:text-navy-900 focus:font-semibold"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
