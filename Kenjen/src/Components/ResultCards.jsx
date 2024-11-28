import React from "react";

export default function ResultCards({ review, name, company }) {
  return (
    <div className="text-basegreen result-card rounded-xl flex flex-col gap-4 p-6 max-w-[350px] w-full">
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
