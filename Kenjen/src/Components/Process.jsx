import React, { useEffect, useRef } from "react";
import ProcessCards from "./ProcessCards";

export default function Process() {
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
      {
        threshold: 0.1,
        rootMargin: '-50px'
      }
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
    <div className="py-20">
      <h1 ref={titleRef} className="text-3xl sm:text-4xl md:text-5xl text-center text-white leading-tight opacity-0">
        Our process.
      </h1>
      <p className="text-base sm:text-lg text-[#D6D6D6] text-center mt-3">
        Reliable process for achieving distinctiveness.
      </p>
      <div className="flex justify-center items-center h-full flex-wrap gap-6 py-6 px-4">
        <ProcessCards
          number="01"
          title="Discovery and Analysis."
          item1="Understand the client's goals and challenges."
          item2="Assess industry trends and competition."
          item3="Define core functionalities and requirements."
        />
        <ProcessCards
          number="02"
          title="Planning and Ideation."
          item1="Brainstorm innovative software solutions."
          item2="Map out workflows and system architecture."
          item3="Prioritize features for initial development."
        />
        <ProcessCards
          number="03"
          title="Development and Refinement."
          item1="Build the software with a focus on usability."
          item2="Test thoroughly to ensure reliability."
          item3="Iterate based on client feedback."
        />
        <ProcessCards
          number="04"
          title="Deployment and Support."
          item1="Launch the final product with full functionality."
          item2="Provide documentation and training needed."
          item3="Offer support for optimal performance."
        />
      </div>
    </div>
  );
}
