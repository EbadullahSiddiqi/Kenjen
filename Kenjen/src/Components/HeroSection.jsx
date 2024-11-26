import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";

import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  window.onload = function () {
    localStorage.setItem("cursorFollowerExpand", "false");
  };

  return (
    <div className="p-6 md:p-12 lg:p-24 relative min-h-screen overflow-hidden">
      {/* Gradient overlay */}
      <div className="inset-0 pointer-events-none" />

      {/* Mouse follower */}
      <div
        className={`fixed pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out hidden md:block z-[60] ${
          localStorage.getItem("cursorFollowerExpand") === "false"
            ? "w-3 h-3 rounded-full bg-basegreen"
            : "w-32 h-10 flex justify-center items-center bg-orange-500/40 backdrop-blur-lg border border-basegreen text-white rounded-3xl text-center"
        }`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          boxShadow:
            localStorage.getItem("cursorFollowerExpand") === "false"
              ? "0 0 20px orange"
              : "none",
        }}
      >
        <span className="w-full h-full flex items-center justify-center">
          {localStorage.getItem("cursorFollowerExpand") === "true"
            ? "View Project"
            : ""}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-10">
        <div className="flex flex-col lg:gap-2 gap-4 lg:pt-7 lg:pl-7 z-10 mt-16 hero-text">
          {" "}
          {/*mx-auto pr-0 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-32 */}
          <div className="flex flex-col text-center w-full">
            <h1 className="text-white text-4xl lg:text-6xl lg:text-start">
              Elevate your brand with a <br /> timeless minimal logo.
            </h1>
            <p className="text-sm sm:text-lg text-gray-400 mt-4 sm:mt-6 max-w-xl lg:text-start">
              Design agency crafting minimal brand identities that speak
              volumes.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8">
            <button className="bg-basegreen text-sm px-6 py-3 rounded-xl text-white">
              View plans
            </button>
            <button className="hero-btn text-sm px-6 py-3 rounded-xl text-white">
              Learn more
            </button>
          </div>
        </div>

        {/* Logo marquee */}
        <div className="overflow-hidden mt-10 sm:mt-14">
          <div className="flex gap-6 animate-marquee whitespace-nowrap">
            <img
              className="h-24 w-24 sm:h-32 sm:w-32"
              src={logo1}
              alt="Logo 1"
            />
            <img
              className="h-24 w-24 sm:h-32 sm:w-32"
              src={logo2}
              alt="Logo 2"
            />
            <img
              className="h-24 w-24 sm:h-32 sm:w-32"
              src={logo5}
              alt="Logo 3"
            />
            <img
              className="h-24 w-24 sm:h-32 sm:w-32"
              src={logo6}
              alt="Logo 4"
            />
            {/* Duplicate logos for seamless loop */}
            <img
              className="h-24 w-24 sm:h-32 sm:w-32"
              src={logo1}
              alt="Logo 1"
            />
            <img
              className="h-24 w-24 sm:h-32 sm:w-32"
              src={logo2}
              alt="Logo 2"
            />
            <img
              className="h-24 w-24 sm:h-32 sm:w-32"
              src={logo5}
              alt="Logo 3"
            />
            <img
              className="h-24 w-24 sm:h-32 sm:w-32"
              src={logo6}
              alt="Logo 4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
