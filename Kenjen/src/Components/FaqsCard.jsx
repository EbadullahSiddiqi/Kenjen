import React from "react";

export default function FaqsCard() {
  return (
    <div className="faq-card py-3 overflow-auto">
      <div className="collapse text-white collapse-plus bg-transparent">
        <input
          type="radio"
          name="my-accordion-3"
          // defaultChecked
          className="bg-basegreen"
        />
        <div className="collapse-title text-xl font-medium">
          What services does Kenjen offer?
        </div>
        <div className="collapse-content text-lg text-[#D6D6D6]">
          <p>
            We provide web/app development, integrations, automations, graphic
            design, and digital marketing.
          </p>
        </div>
      </div>

      <div className="collapse collapse-plus text-white bg-transparent">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          How do you ensure the software meets my needs?
        </div>
        <div className="collapse-content text-lg text-[#D6D6D6]">
          <p>
            We collaborate closely, gathering requirements and offering regular
            updates during development.
          </p>
        </div>
      </div>

      <div className="collapse collapse-plus text-white bg-transparent">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          What industries do you serve?
        </div>
        <div className="collapse-content text-lg text-[#D6D6D6]">
          <p>
            We serve various industries like retail, healthcare, education, and
            logistics.
          </p>
        </div>
      </div>

      <div className="collapse collapse-plus text-white bg-transparent">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          What makes Kenjen unique?
        </div>
        <div className="collapse-content text-lg text-[#D6D6D6]">
          <p>
            Our client-first approach, technical expertise, and commitment to
            delivering impactful solutions.
          </p>
        </div>
      </div>

      <div className="collapse collapse-plus text-white bg-transparent">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          How long does a project take?
        </div>
        <div className="collapse-content text-lg text-[#D6D6D6]">
          <p>
            Timelines vary; smaller projects take 4-8 weeks, while larger ones
            may take 3-6 months.
          </p>
        </div>
      </div>
    </div>
  );
}
