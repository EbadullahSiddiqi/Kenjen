import React from "react";

export default function ProcessCards({ number, title, item1, item2, item3 }) {
  return (
    <div className="proces-card rounded-xl border">
      <div className="flex flex-col p-8 gap-6">
        <p className="text-basegreen text-lg">{number}</p>
        <p className="text-white text-xl">{title}</p>
        <ul className="text-lg text-[#D6D6D6] flex flex-col gap-2 list-disc pl-5">
          <li>{item1}</li>
          <li>{item2}</li>
          <li>{item3}</li>
        </ul>
      </div>
    </div>
  );
}
