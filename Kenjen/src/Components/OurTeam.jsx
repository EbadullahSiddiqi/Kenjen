import React from "react";
import TeamCards from "./TeamCards";
import ebad from "../assets/Ebadullah Siddiqi.jpeg";
import haider from "../assets/Haider.jpeg";
import zayan from "../assets/Zayan.jpeg";
import khuzaima from "../assets/Khuzaima.jpeg";

export default function OurTeam() {
  return (
    <div className="py-28">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-center text-white leading-tight">
        Our team.
      </h1>
      <p className="text-base sm:text-lg text-[#D6D6D6] text-center mt-3">
        Meet our talented team proud in delivering your company's software.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-10 py-9 px-4">
        <TeamCards
          img={ebad}
          name="Ebadullah Siddiqi"
          role="Founder of Kenjen"
        />
        <TeamCards img={khuzaima} name="Khuzaima" role="Head of Design" />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-10 py-9 px-1">
        <TeamCards img={zayan} name="Zayan Tariq" role="Lead Developer" />
        <TeamCards img={haider} name="Haider Ali" role="Head of Sales" />
      </div>
    </div>
  );
}
