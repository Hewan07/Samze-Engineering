function Metrics() {
    const data = [
      { label: "Market Share", value: "40%" },
      { label: "Profit Margin", value: "20%" },
      { label: "Customer Satisfaction", value: "100%" },
      { label: "Annual Gross Revenue", value: "$25,000" },
    ];
  
    return (
      <section className="py-20 px-6 bg-blue-900 text-white">
        <h2 className="text-4xl font-bold mb-12 text-center">Key Metrics</h2>
        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto text-center">
          {data.map((d) => (
            <div key={d.label} className="bg-blue-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
              <p className="text-3xl md:text-4xl font-bold">{d.value}</p>
              <p className="mt-2 text-lg">{d.label}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Metrics;
  