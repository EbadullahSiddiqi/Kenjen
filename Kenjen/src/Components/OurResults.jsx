import React, { useEffect, useRef } from "react";
import ResultCards from "./ResultCards";

export default function OurResults() {
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
    <div className="p-14 pt-28">
      <h1 ref={titleRef} className="xl:text-5xl xs:text-3xl text-center text-white leading-tight opacity-0">
        Our Results
      </h1>
      <p className="text-lg text-[#D6D6D6] text-center mt-3">
        Hear what our clients have to say about out team and our services.
      </p>
      <div className="overflow-hidden mt-10 sm:mt-14">
        <div className="flex gap-4 animate-marquee justify-center h-full items-center">
          <div className="flex gap-6 shrink-0">
            <ResultCards
              review="Kenjen’s software has had a direct impact on our bottom line. It’s been a fantastic investment."
              name="Peter Lang"
              company="Nova Retail Group"
            />
            <ResultCards
              review="Their custom software has drastically improved how we manage cases. We highly recommend them!"
              name="Laura Fields"
              company="Summit Legal Associates"
            />
            <ResultCards
              review="This software has been transformative for our accounting processes. We’re more efficient than ever!"
              name="James Whitaker"
              company="Quantum Financials"
            />
            <ResultCards
              review="Kenjen’s software made our gym operations seamless. We’ve never been this organized and efficient!"
              name="Daniel Wong"
              company="Velocity Fitness"
            />
            <ResultCards
              review="Kenjen’s software has revolutionized how we track property listings."
              name="Angela Carter"
              company="Apex Realty Solutions"
            />
            <ResultCards
              review="Kenjen transformed the way we manage logistics. Their customized software saved us both, time and money."
              name="Mark Donovan"
              company="Stellar Logistics"
            />
            <ResultCards
              review="Kenjen didn’t just deliver software; they delivered results."
              name="Emily Hayes"
              company="GreenTech Solutions"
            />
            <ResultCards
              review="Our clinic has seen significant growth thanks to Kenjen’s tailored solutions."
              name="Dr. Henry Lawson"
              company="MedAxis Clinics"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
