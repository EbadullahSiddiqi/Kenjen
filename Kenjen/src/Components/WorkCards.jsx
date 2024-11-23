import React from "react";

export default function ProcessCards({ software }) {
  return (
    <div className="group relative overflow-hidden font-parkinsans work-card rounded-xl border cursor-pointer">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out" />
      <div className="relative flex flex-col justify-center text-center h-full">
        <h1 className="text-white text-2xl transform transition-transform duration-500 ease-out group-hover:scale-110">
          {software}
        </h1>
      </div>
    </div>
  );
}
