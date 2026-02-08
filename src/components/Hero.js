import React from "react";

function Hero() {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(/images/hero-bg.png)" }}
    >
      <div className="absolute inset-0 bg-black/40"></div> {/* overlay */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Innovative Solar Energy,<br /> Electromechanical, Construction and Water Drilling Solutions
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mb-8">
          Reliable solar panels, inverters, and storage systems across Ethiopia
        </p>
        <button className="bg-yellow-500 text-blue-900 font-bold px-8 py-3 rounded-lg hover:bg-yellow-400 transition">
          Get Started
        </button>
      </div>
    </div>
  );
}


export default Hero;
