// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">SAMZE Engineering</div>

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          &#9776; {/* Hamburger icon */}
        </button>
      </div>

      <ul
        className={`md:flex md:space-x-6 absolute md:static bg-blue-900 w-full md:w-auto left-0 md:left-auto transition-all ${
          isOpen ? "top-16 block" : "top-[-500px] hidden"
        }`}
      >
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        </li>
        <li>
          <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
