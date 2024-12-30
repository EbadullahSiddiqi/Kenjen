import React, { useEffect, useRef } from "react";
import ServiceCards from "./ServiceCards";

export default function OurServices() {
  const titleRef = useRef(null);
  
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

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  const list1 = [
    "Core software functionality",
    "Optimized performance",
    "72-hour delivery",
    "Max 1 revision",
    "Dedicated support",
  ];

  const list2 = [
    "Core software functionality",
    "Monthly performance optimization",
    "72-hour delivery",
    "Up to 1 revision per month",
    "Dedicated support",
  ];

  return (
    <div className="service sm:text-4xl p-10 sm:p-4 mt-28">
      <h1 ref={titleRef} className="xl:text-5xl text-center xs:text-3xl text-white leading-tight opacity-0">
        Our services.
      </h1>
      <p className="text-lg text-[#D6D6D6] text-center mt-3">
        Fixed-cost plans to avoid negotiations and start creating.
      </p>
      <div className="flex justify-center items-center h-full flex-wrap gap-4 py-9 px-4">
        <ServiceCards
          type="Standard"
          price="Rs. 30,000"
          description="Acquire the software quickly with a one time payment with cutomer support."
          items={list1}
          priority={true}
        />
        <ServiceCards
          type="Monthly"
          price="Rs. 5000/m"
          description="Acquire the software quickly with a one time payment with cutomer support."
          items={list2}
        />
      </div>
    </div>
  );
}
