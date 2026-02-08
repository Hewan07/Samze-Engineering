import React from "react";

function Services() {
  const services = [
    { title: "Solar Panels", desc: "High-performance solar panels.", img: "/images/solar-panel.png" },
    { title: "Energy Storage Systems", desc: "Cutting-edge storage solutions.", img: "/images/storage.png" },
    { title: "Monitoring Solutions", desc: "Advanced monitoring systems.", img: "/images/monitoring.png" },
    { title: "Solar Inverters", desc: "State-of-the-art inverters.", img: "/images/inverter.png" },
  ];

  return (
    <section className="py-20 px-6 bg-white text-gray-800">
      <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {services.map((s) => (
          <div key={s.title} className="p-6 shadow-lg rounded-xl hover:shadow-2xl transition bg-gray-50">
            <img src={s.img} alt={s.title} className="h-32 w-full object-contain mb-4" />
            <h3 className="text-2xl font-semibold mb-3">{s.title}</h3>
            <p className="text-gray-700">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
