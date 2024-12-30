import React, { useEffect, useRef } from "react";

export default function ({ img, name, role }) {
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
    localStorage.setItem("cursorFollowerStatus", "profile");
  };

  const changeCursorFollowerBack = () => {
    localStorage.setItem("cursorFollowerExpand", "false");
  };

  return (
    <div ref={cardRef} className="relative cursor-pointer opacity-0">
      <img
        onMouseEnter={changeCursorFollower}
        onMouseLeave={changeCursorFollowerBack}
        src={img}
        alt="Ebadullah"
        className="relative object-cover grayscale hover:grayscale-0 hover:scale-110 team-card rounded-xl border w-full max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg bg-black/30 overflow-hidden"
      />
      <div className="absolute text-center inset-10 mt-[17rem]">
        <p className="text-white text-2xl">{name}</p>
        <p className="text-[#D6D6D6] text-lg">{role}</p>
      </div>
    </div>
  );
}
