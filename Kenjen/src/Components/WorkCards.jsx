import React, { useEffect, useRef } from "react";

export default function ProcessCards({ software }) {
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

  const changeCursorFollower = () => {
    localStorage.setItem("cursorFollowerExpand", "true");
    localStorage.setItem("cursorFollowerStatus", "work");
  };

  const changeCursorFollowerBack = () => {
    localStorage.setItem("cursorFollowerExpand", "false");
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={changeCursorFollower}
      onMouseLeave={changeCursorFollowerBack}
      className="group relative overflow-hidden font-parkinsans work-card rounded-xl border cursor-pointer w-full bg-black/50 opacity-0"
    >
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out"></div>

      {/* Content */}
      <div className="relative flex flex-col justify-center text-center h-full sm:p-8">
        <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-bold transform transition-transform duration-500 ease-out group-hover:scale-110">
          {software}
        </h1>
      </div>
    </div>
  );
}
