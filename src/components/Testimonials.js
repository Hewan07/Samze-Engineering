function Testimonials() {
    const testimonials = [
      { name: "Michael Johnson", role: "CEO Davis & Shirtcliff trading plc", text: "Outstanding service, from initial consultation to final installation. Highly recommend for solar solutions!" },
      { name: "Eslam Mohamed", role: "CFO at Alkan Communication & Information", text: "Extremely pleased with the professionalism, efficiency, and quality of the solar panel installation." },
    ];
  
    return (
      <section className="py-20 px-6 bg-white text-gray-800">
        <h2 className="text-4xl font-bold mb-12 text-center">What Our Customers Say</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="p-6 shadow-lg rounded-xl hover:shadow-2xl transition bg-gray-50">
              <p className="mb-4 text-gray-800">&quot;{t.text}&quot;</p>
              <p className="font-bold">{t.name}</p>
              <p className="text-sm text-gray-600">{t.role}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Testimonials;
  