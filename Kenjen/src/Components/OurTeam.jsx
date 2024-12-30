import React, { useEffect, useRef } from "react";
import TeamCards from "./TeamCards";
import ebad from "../assets/Ebadullah Siddiqi.jpeg";
import haider from "../assets/Haider.jpeg";
import zayan from "../assets/Zayan.jpeg";
import khuzaima from "../assets/Khuzaima.jpeg";

export default function OurTeam() {
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
    <div className="py-28">
      <h1 ref={titleRef} className="text-3xl sm:text-4xl md:text-5xl text-center text-white leading-tight opacity-0">
        Our team.
      </h1>
      <p className="text-base sm:text-lg text-[#D6D6D6] text-center mt-3">
        Meet our talented team proud in delivering your company's software.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-10 py-9 px-4">
        <TeamCards
          img={ebad}
          name="Ebadullah Siddiqi"
          role="Founder of Kenjen"
        />
        <TeamCards img={khuzaima} name="Khuzaima" role="Head of Design" />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-10 py-9 px-1">
        <TeamCards img={zayan} name="Zayan Tariq" role="Lead Developer" />
        <TeamCards img={haider} name="Haider Ali" role="Head of Sales" />
      </div>
    </div>
  );
}
