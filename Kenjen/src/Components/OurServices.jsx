import React from "react";
import ServiceCards from "./ServiceCards";

export default function OurServices() {
  const list1 = [
    "Core software functionality",
    "Optimized performance",
    "72-hour delivery",
    "Max 1 revision",
    "Dedicated support",
  ];

  const list2 = [
    "Core software functionality",
    "Monthly performance optimization",
    "72-hour delivery",
    "Up to 1 revision per month",
    "Dedicated support",
  ];

  return (
    <div className="service sm:text-4xl p-10 sm:p-4 mt-28">
      <h1 className="xl:text-5xl text-center xs:text-3xl text-white leading-tight">
        Our services.
      </h1>
      <p className="text-lg text-[#D6D6D6] text-center mt-3">
        Fixed-cost plans to avoid negotiations and start creating.
      </p>
      <div className="flex justify-center items-center h-full flex-wrap gap-4 py-9 px-4">
        <ServiceCards
          type="Standard"
          price="$2,499"
          description="Acquire the software quickly with a one time payment with cutomer support."
          items={list1}
          priority={true}
        />
        <ServiceCards
          type="Monthly"
          price="$199/m"
          description="Acquire the software quickly with a one time payment with cutomer support."
          items={list2}
        />
      </div>
    </div>
  );
}
