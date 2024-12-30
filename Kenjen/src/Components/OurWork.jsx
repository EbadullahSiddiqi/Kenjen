import React, { useEffect, useRef } from "react";
import WorkCards from "./WorkCards";

export default function OurWork() {
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

  return (
    <div className="p-10">
      <h1 ref={titleRef} className="xl:text-5xl xs:text-3xl text-center text-white leading-tight opacity-0">
        Our work.
      </h1>
      <p className="text-lg text-[#D6D6D6] text-center mt-3">
        View our expertly crafted minimal logos, designed to convey simplicity
        and elegance.
      </p>
      <div className="flex justify-center items-center h-full flex-wrap gap-4 py-9 px-4">
        <WorkCards software="Appointment Reminder Software" />
        <WorkCards software="Order Confirmation Software" />
        <WorkCards software="Personalized Member Engagement Software" />
        <WorkCards software="Tenant Lease Managemet Software" />
      </div>
    </div>
  );
}
