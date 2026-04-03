import type { ExpereinceData } from "@/types";
import React from "react";

const expData: ExpereinceData[] = [
  {
    name: "Development Engineer - Frontend",
    description: "Avizva Solutions • Sep 2021 - Jan 2024",
    promotion:
      "Promoted from Associate Trainee → Associate Frontend Developer → Development Engineer.",
    bullets: [
      "Built and maintained a healthcare insurance member portal using React, Redux, and REST APIs",
      "Developed interactive dashboards with charts, filters, and date range selection for claims insights.",
      "Improved application performance using lazy loading, debouncing, and optimized API usage.",
      "Created reusable UI components to accelerate development across modules.",
      "Contributed to Cordova-based mobile releases for Android and iOS.",
      "Managed deployments using Git branching workflows and AWS S3 hosting.",
      "Collaborated with cross-functional teams in an Agile/Scrum environment, participating in sprint planning, stand-ups, and code reviews.",
    ],
  },
];

const Experience = () => {
  return (
    <div id="experience" className="padding-margin bg-primary-foreground mb-10">
      <h1 className=" text-xl md:text-6xl text-primary font-display pl-4 mb-5">
        Experience
      </h1>
      <div className="flex gap-4">
        {expData.map((item, idx) => (
          <React.Fragment key={idx}>
            <div className="px-4">
              <h1 className="text-xs md:text-xl mb-1 text-primary">
                {item.name}
              </h1>
              <p className="text-xs md:text-[16px] mb-2">{item.description}</p>
              <p className="text-xs md:text-[15px] mb-2">
                <i>{item.promotion}</i>
              </p>
              {item.bullets.map((bullet, idx) => (
                <ul key={idx} className="list-disc list-inside py-2">
                  <li className="text-xs md:text-xl leading-7">{bullet}</li>
                </ul>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Experience;
