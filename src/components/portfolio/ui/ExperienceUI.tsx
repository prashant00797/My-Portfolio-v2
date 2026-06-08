import type { ExpereinceData } from "@/types";
import React from "react";

const expData: ExpereinceData[] = [
  {
    name: "Development Engineer",
    description: "Avizva Solutions • Sep 2021 - Jan 2024",
    promotion:
      "Promoted from Associate Trainee → Associate Frontend Developer → Development Engineer.",
    bullets: [
      "Worked on enterprise healthcare software serving insurance members, providers and claims workflows.",
      "Contributed across frontend development, API integrations, deployment activities and production releases",
      "Collaborated with product, QA and engineering teams in an Agile/Scrum environment.",
      "Delivered client-facing features and maintained large-scale applications used by healthcare organizations.",
    ],
  },
];

const Experience = () => {
  return (
    <div id="experience" className="padding-margin bg-background mb-10">
      <h1 className=" text-xl md:text-6xl text-primary font-display pl-4 mb-5">
        Experience
      </h1>
      <div className="flex gap-4">
        {expData.map((item) => (
          <React.Fragment key={item.name}>
            <div className="px-4">
              <h1 className="text-xs md:text-xl mb-1 text-secondary">
                {item.name}
              </h1>
              <p className="text-xs md:text-[16px] mb-2 text-secondary">
                {item.description}
              </p>
              <p className="text-xs md:text-[15px] mb-2 text-secondary">
                <i>{item.promotion}</i>
              </p>
              <ul className="list-disc list-inside py-2">
                {item.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="text-xs md:text-xl leading-7 text-secondary"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Experience;
