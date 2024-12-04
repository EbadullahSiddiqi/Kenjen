import React, { useState, useEffect } from "react";
import logo from "../assets/Kenjen.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <div className="container px-4 sm:px-6 lg:px-8 py-2 sm:py-4 flex justify-around items-center">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            className="h-12 w-12 xs:h-14 xs:w-14 sm:h-16 sm:w-16 md:h-18 md:w-18 lg:h-20 lg:w-20"
            src={logo}
            alt="Kenjen logo"
          />
        </a>

        {/* Menu for larger screens */}
        <div className="hidden lg:flex gap-4 xl:gap-8 justify-center items-center">
          <div className="flex gap-4 xl:gap-8">
            <a
              href="/about"
              className="text-sm xl:text-sm text-white hover:text-[#7aad47] transition-all duration-200"
            >
              Process
            </a>
            <a
              href="/about"
              className="text-sm xl:text-sm text-white hover:text-[#7aad47] transition-all duration-200"
            >
              Work
            </a>
            <a
              href="/services"
              className="text-sm xl:text-sm text-white hover:text-[#7aad47] transition-all duration-200"
            >
              Services
            </a>
            <a
              href="/contact"
              className="text-sm xl:text-sm text-white hover:text-[#7aad47] transition-all duration-200"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-sm xl:text-sm text-white hover:text-[#7aad47] transition-all duration-200"
            >
              FAQs
            </a>
          </div>
        </div>
        <button className="hidden lg:flex nav-btn justify-center items-center text-xs xl:text-sm pl-3 pr-3 xl:pl-4 xl:pr-4 pt-2 pb-2 bg-none rounded-xl text-white border border-[#7aad47] hover:text-[#7aad47] transition-all duration-200">
          Book a Call
        </button>

        {/* Hamburger Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-[60px] sm:top-[72px] left-0 w-full bg-black/90 backdrop-blur-sm transition-all duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="flex flex-col gap-4 p-4 sm:p-6">
            <a
              href="/about"
              className="text-sm sm:text-sm text-white hover:text-[#7aad47] transition-all duration-200"
            >
              Process
            </a>
            <a
              href="/about"
              className="text-sm sm:text-sm text-white hover:text-[#7aad47] transition-all duration-200"
            >
              Work
            </a>
            <a
              href="/services"
              className="text-sm sm:text-sm text-white hover:text-[#7aad47] transition-all duration-200"
            >
              Services
            </a>
            <a
              href="/contact"
              className="text-sm sm:text-sm text-white hover:text-[#7aad47] transition-all duration-200"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-sm sm:text-sm text-white hover:text-[#7aad47] transition-all duration-200"
            >
              FAQs
            </a>
            <button className="nav-btn-mobile flex justify-center text-sm pl-4 pr-4 pt-2 pb-2 bg-none rounded-xl text-white border border-[#7aad47] hover:text-[#7aad47] transition-all duration-200 w-full sm:w-auto">
              Book a Call
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
