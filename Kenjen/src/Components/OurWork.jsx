import React from "react";
import WorkCards from "./WorkCards";

export default function OurWork() {
  return (
    <div className="p-10">
      <h1 className="xl:text-5xl  xs:text-3xl text-center text-white leading-tight">
        Our work.
      </h1>
      <p className="text-lg text-[#D6D6D6] text-center mt-3">
        View our expertly crafted minimal logos, designed to convey simplicity
        and elegance.
      </p>
      <div className="flex justify-center items-center h-full flex-wrap gap-4 py-9 px-4">
        <WorkCards software="Appointment Reminder Software" />
        <WorkCards software="Order Confirmation Software" />
        <WorkCards software="Personalized Member Engagement Software" />
        <WorkCards software="Tenant Lease Managemet Software" />
      </div>
    </div>
  );
}
