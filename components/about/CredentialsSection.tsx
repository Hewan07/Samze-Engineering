import { FileText } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";

const documents = [
  {
    title: "Business License & Competency Certificate",
    file: "/resources/Business license and business competency certificate (1).pdf",
  },
  {
    title: "VAT Registration",
    file: "/resources/SAMZE ENGNERING VAT Registration .pdf",
  },
  {
    title: "Company License Renewal (2018)",
    file: "/resources/Samze Liccens 2018 renew (1).pdf",
  },
  {
    title: "Water Drilling License",
    file: "/resources/water licens (1) (1).pdf",
  },
  {
    title: "Power of Attorney",
    file: "/resources/Power of Attorney SIGNED_copy.pdf",
  },
];

export default function CredentialsSection() {
  return (
    <section className="py-20" style={{ background: "#f2f4f6" }} aria-labelledby="credentials-heading">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <SectionLabel>Legal & Compliance</SectionLabel>
        <h2
          id="credentials-heading"
          className="mt-4 mb-10 font-bold"
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
            letterSpacing: "-0.02em",
            color: "#0f172a",
          }}
        >
          Company Documents
        </h2>

        <ul className="divide-y" style={{ borderColor: "#e5e7eb" }} role="list">
          {documents.map((doc) => (
            <li key={doc.title}>
              <a
                href={doc.file}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 py-4 group transition-colors duration-200 hover:text-amber-700"
                style={{ color: "#0f172a" }}
              >
                <div className="flex items-center gap-3">
                  <FileText
                    size={16}
                    className="shrink-0"
                    style={{ color: "#9ca3af" }}
                    aria-hidden="true"
                  />
                  <span
                    className="text-sm font-medium"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    {doc.title}
                  </span>
                </div>
                <span
                  className="text-xs font-semibold uppercase tracking-wider shrink-0"
                  style={{ color: "#b45309", fontFamily: "var(--font-inter), sans-serif" }}
                >
                  PDF
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
