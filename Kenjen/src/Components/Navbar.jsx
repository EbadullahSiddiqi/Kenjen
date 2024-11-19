import React, { useState, useEffect } from "react";
import logo from "../assets/Kenjen.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-none backdrop-blur-md" : "bg-transparent shadow-none"
      }`}
    >
      <div className="container text-sm mx-auto px-4 py-4 flex justify-around items-center">
        <a
          href="/"
          className="font-bold text-white text-4xl hover:text-lime-400 transition-all duration-200"
        >
          <img className="h-20 w-20" src={logo} alt="logos" />
        </a>
        <div className="flex gap-8">
          <a href="/about" className="text-white hover:text-[#7aad47] transition-all duration-200">
            Process
          </a>
          <a href="/about" className="text-white hover:text-[#7aad47] transition-all duration-200">
            Work
          </a>
          <a href="/services" className="text-white hover:text-[#7aad47] transition-all duration-200">
            Services
          </a>
          <a href="/contact" className="text-white hover:text-[#7aad47] transition-all duration-200">
            About
          </a>
          <a href="/contact" className="text-white hover:text-[#7aad47] transition-all duration-200">
            FAQs
          </a>
        </div>
        <button className="nav-btn flex justify-center text-sm text-center pl-4 pr-4 pt-3 pb-3 bg-none rounded-xl text-white">
          Book a Call
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
