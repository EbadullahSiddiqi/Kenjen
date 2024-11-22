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

  return (
    <div className="p-24 relative min-h-screen overflow-hidden">
      {/* Gradient overlay */}
      <div className="inset-0 pointer-events-none" />

      {/* Mouse follower */}
      <div
        className="pointer-events-none fixed w-3 h-3 rounded-full bg-basegreen transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          boxShadow: "0 0 20px orange",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32">
        <h1 className="text-6xl text-white max-w-4xl">
          Elevate your brand with a timeless minimal logo.
        </h1>
        <p className="text-lg text-gray-400 mt-6 max-w-2xl">
          Design agency crafting minimal brand identities that speaks volumes.
        </p>
        <div className="flex gap-4 mt-8">
          <button className="bg-basegreen flex justify-center text-sm text-center p-4 bg-none rounded-xl text-white">
            View plans
          </button>
          <button className="nav-btn flex justify-center text-sm text-center p-4 bg-none rounded-xl text-white">
            Learn more
          </button>
        </div>
      </div>
      <marquee behavior="scroll" direction="left">
        <div className="flex gap-7 pt-14">
          <img className="h-32 w-32" src={logo1} alt="" />
          <img className="h-32 w-32" src={logo2} alt="" />
          <img className="h-32 w-32" src={logo5} alt="" />
          <img className="h-32 w-32" src={logo6} alt="" />
        </div>
      </marquee>
    </div>
  );
};

export default HeroSection;
