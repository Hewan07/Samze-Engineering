import React from "react";

function Partners() {
  const logos = [
    "/images/UNHCR.png",
    "/images/Safaricom.png",
    "/images/Alkan.png",
    "/images/InfinityETH.png",
    "/images/mayorpng.png",
  ];

  return (
    <section className="py-20 px-6 bg-gray-50 text-gray-800">
      <h2 className="text-4xl font-bold mb-12 text-center">Trusted By</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {logos.map((logo, i) => (
          <img key={i} src={logo} alt={`Partner ${i}`} className="h-16 object-contain" />
        ))}
      </div>
    </section>
  );
}

export default Partners;
