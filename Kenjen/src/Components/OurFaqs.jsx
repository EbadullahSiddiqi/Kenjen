import React, { useEffect, useRef } from "react";
import FaqsCard from "./FaqsCard";

export default function OurFaqs() {
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
    <div className="service sm:text-4xl p-10 sm:p-4 mt-16">
      <h1 ref={titleRef} className="xl:text-5xl text-center xs:text-3xl text-white leading-tight opacity-0">
        Our faqs.
      </h1>
      <p className="text-lg text-[#D6D6D6] text-center mt-3">
        The most common questions we get asked.
      </p>
      <div className="flex justify-center items-center h-full flex-wrap gap-4 py-9 px-4 rounded-xl">
        <FaqsCard />
      </div>
    </div>
  );
}
