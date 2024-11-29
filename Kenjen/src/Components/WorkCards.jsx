import React from "react";

export default function ProcessCards({ software }) {
  const changeCursorFollower = () => {
    localStorage.setItem("cursorFollowerExpand", "true");
  };

  const changeCursorFollowerBack = () => {
    localStorage.setItem("cursorFollowerExpand", "false");
  };

  return (
    <div
      onMouseEnter={changeCursorFollower}
      onMouseLeave={changeCursorFollowerBack}
      className="group relative overflow-hidden font-parkinsans work-card rounded-xl border cursor-pointer w-full bg-black/50"
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
