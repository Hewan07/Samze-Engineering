function WhyUs() {
    const points = [
      { title: "Customer-Centric Focus", desc: "Personalized support, tailored solutions, exceptional service." },
      { title: "Quality and Durability", desc: "Highest engineering standards, reliable and built to last." },
      { title: "Innovation and Expertise", desc: "Cutting-edge solutions backed by years of expertise." },
    ];
  
    return (
      <section className="py-20 px-6 bg-gray-50 text-gray-800">
        <h2 className="text-4xl font-bold mb-12 text-center">Why Us?</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {points.map((p) => (
            <div key={p.title} className="p-6 shadow-lg rounded-xl hover:shadow-2xl transition bg-white">
              <h3 className="text-2xl font-semibold mb-3">{p.title}</h3>
              <p className="text-gray-700">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default WhyUs;
  