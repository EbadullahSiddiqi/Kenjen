import React from "react";
import FaqsCard from "./FaqsCard";

export default function OurFaqs() {
  return (
    <div className="service sm:text-4xl p-10 sm:p-4 mt-16">
      <h1 className="xl:text-5xl text-center xs:text-3xl text-white leading-tight">
        Our faqs.
      </h1>
      <p className="text-lg text-[#D6D6D6] text-center mt-3">
        The most common questions we get asked.
      </p>
      <div className="flex justify-center items-center h-full flex-wrap gap-4 py-9 px-4 rounded-xl">
        <FaqsCard />
      </div>
    </div>
  );
}
