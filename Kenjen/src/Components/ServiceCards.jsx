import React, { useEffect, useRef } from "react";

export default function ServiceCards({
  type,
  price,
  description,
  items,
  priority,
}) {
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
    <div ref={cardRef} className="service-card rounded-xl border w-full max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg bg-black/30 relative overflow-hidden opacity-0">
      {priority && (
        <div className="service-grad bg-basegreen rounded-full blur-3xl absolute"></div>
      )}
      <div className="flex flex-col p-4 sm:p-6 md:p-8 gap-3 sm:gap-4 md:gap-6 relative z-10">
        <p className="text-basegreen text-base sm:text-xl md:text-base">
          {type}
        </p>

        <p className="text-white text-[3rem] md:text-[3rem] xs:text-2xl leading-tight">
          {price}
        </p>

        <p className="text-lg text-[#D6D6D6] text-left mt-3">{description}</p>

        <ul className="text-sm sm:text-base md:text-sm text-[#D6D6D6] flex flex-col gap-4 md:gap-4 sm:gap-2 list-disc pl-4 sm:pl-5">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <button
          className={`${
            priority
              ? "w-full h-[3.5rem] rounded-xl text-white text-sm bg-basegreen"
              : "service-btn-non-priority w-full h-[3.5rem] rounded-xl text-white text-sm bg-transparent"
          }`}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
