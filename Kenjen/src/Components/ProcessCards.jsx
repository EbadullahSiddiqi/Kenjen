import React, { useEffect, useRef } from "react";

export default function ProcessCards({ number, title, item1, item2, item3 }) {
  const cardRef = useRef(null);

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
      { threshold: 0.1, rootMargin: '-50px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div ref={cardRef} className="proces-card rounded-xl border w-full max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg bg-black/30 opacity-0">
      <div className="flex flex-col p-4 sm:p-6 md:p-8 gap-3 sm:gap-4 md:gap-6">
        {/* Step Number */}
        <p className="text-basegreen text-lg sm:text-xl md:text-xl font-semibold">
          {number}
        </p>

        {/* Card Title */}
        <p className="text-white text-xl sm:text-2xl md:text-2xl leading-tight">
          {title}
        </p>

        {/* Card Items */}
        <ul className="text-sm sm:text-base md:text-lg text-[#D6D6D6] flex flex-col gap-1.5 sm:gap-2 list-disc pl-4 sm:pl-5">
          <li>{item1}</li>
          <li>{item2}</li>
          <li>{item3}</li>
        </ul>
      </div>
    </div>
  );
}
