import React, { useEffect, useRef } from "react";

export default function HeroExtraText() {
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            entry.target.classList.remove('fade-out');
          } else {
            entry.target.classList.add('fade-out');
            entry.target.classList.remove('fade-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-50px'
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div ref={textRef} className="p-6 md:p-10 lg:p-14 opacity-0 transition-opacity duration-1000">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-center text-white leading-tight">
        We specialize in creating sleek software solutions that capture the core
        of your business.
        <br className="hidden sm:block" />
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-400 text-center mt-6 sm:mt-8 lg:mt-10">
        First impressions matter. That's why our mission is to deliver
        intuitive, enduring software solutions that elevate your business with
        simplicity and efficiency. Engage your audience with innovative tools
        that leave a lasting impact. <br className="hidden sm:block" />
      </p>
    </div>
  );
}
