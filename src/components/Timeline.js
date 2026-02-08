function Timeline() {
    const milestones = [
      { year: "2020", title: "Founding the Company" },
      { year: "2021", title: "Product Development Begins" },
      { year: "2023", title: "Market Expansion Initiated" },
      { year: "2024", title: "Strategic Partnerships Formed" },
      { year: "2025", title: "Industry Recognition Attained" },
      { year: "2026", title: "Countrywide Market Domination" },
    ];
  
    return (
      <section className="py-20 px-6 bg-gray-50 text-gray-800">
        <h2 className="text-4xl font-bold mb-12 text-center">Business Milestones</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {milestones.map((m) => (
            <div key={m.year} className="border-l-4 border-blue-900 pl-6">
              <p className="font-bold text-xl">{m.year}</p>
              <p className="text-gray-700">{m.title}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Timeline;
  