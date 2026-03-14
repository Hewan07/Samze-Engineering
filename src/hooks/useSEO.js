import { useEffect } from "react";

const SITE_NAME = "SAMZE Engineering";

/**
 * Sets document.title and the <meta name="description"> for each page.
 * @param {string} title       - Page-specific title (appended with site name)
 * @param {string} description - Page-specific meta description
 */
export default function useSEO(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && description) {
      metaDesc.setAttribute("content", description);
    }

    // Reset to defaults on unmount
    return () => {
      document.title = `${SITE_NAME} | Solar Energy Solutions in Ethiopia`;
      if (metaDesc) {
        metaDesc.setAttribute(
          "content",
          "SAMZE Engineering specialises in solar panel installation, energy storage, inverter systems, and smart monitoring across Ethiopia."
        );
      }
    };
  }, [title, description]);
}
