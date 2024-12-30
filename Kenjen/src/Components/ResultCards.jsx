import React, { useEffect, useRef } from "react";

export default function ResultCards({ review, name, company }) {
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
    <div ref={cardRef} className="text-basegreen result-card rounded-xl flex flex-col gap-4 p-6 max-w-[350px] w-full opacity-0">
      <div className="flex gap-1 text-sm">
        <span className="fa fa-star checked" />
        <span className="fa fa-star checked" />
        <span className="fa fa-star checked" />
        <span className="fa fa-star" />
        <span className="fa fa-star" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-white text-xl break-words whitespace-normal">
          {review}
        </p>
        <p className="text-white text-sm">
          {name} <br />
          CEO {company}
        </p>
      </div>
    </div>
  );
}
