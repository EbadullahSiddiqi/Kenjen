import React from "react";
import ProcessCards from "./ProcessCards";

export default function Process() {
  return (
    <div className="py-20">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-center text-white leading-tight">
        Our process.
      </h1>
      <p className="text-base sm:text-lg text-[#D6D6D6] text-center mt-3">
        Reliable process for achieving distinctiveness.
      </p>
      <div className="flex justify-center items-center h-full flex-wrap gap-6 py-6 px-4">
        <ProcessCards
          number="01"
          title="Discovery and Research."
          item1="Understand the client's values and audience."
          item2="Conduct market research."
          item3="Identify key design elements."
        />
        <ProcessCards
          number="02"
          title="Concept Development."
          item1="Brainstorm and sketch initial logo concepts."
          item2="Focus on simplicity."
          item3="Prioritise ideas for further development."
        />
        <ProcessCards
          number="03"
          title="Design and Refinement."
          item1="Create digital versions of prioritised concepts."
          item2="Refine the designs, ensuring clarity."
          item3="Incorporate client feedback to fine-tuning."
        />
        <ProcessCards
          number="04"
          title="Finalisation and Delivery."
          item1="Prepare the final logo in various formats."
          item2="Provide a comprehensive brand guide."
          item3="Deliver the final assets and support."
        />
      </div>
    </div>
  );
}
