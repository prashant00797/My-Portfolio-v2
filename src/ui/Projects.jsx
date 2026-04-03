import Image from "next/image";
import { project1_url, project2_url } from "@/common/constants";

const projects = [
  {
    name: "Insure AI Portal",
    image: project1_url,
    description:
      "InsureAI is an AI-powered health insurance dashboard that allows users to search claims and healthcare providers using natural language using Gemini AI.",
    links: [
      {
        name: "Github",
        url: "https://github.com/prashant00797/ai-insurance-app",
      },
      {
        name: "Live Demo",
        url: "https://insureai-portal.netlify.app",
        active: true,
      },
    ],
  },
  {
    name: "Insight AI",
    image: project2_url,
    description:
      "Free AI-powered text summarizer that generates concise summaries, key insights, and bullet points from long articles using Gemini AI.",
    links: [
      {
        name: "Github",
        url: "https://github.com/prashant00797/ai-summary-app",
      },
      {
        name: "Live Demo",
        url: "https://insight-ai-summary.netlify.app",
        active: true,
      },
    ],
  },
];

const Projects = () => {
  return (
    <div className=" mb-20 md:25">
      <h1 className="text-2xl text-primary font-display pl-4">
        Custom Projects
      </h1>
      <div className="mt-4 flex flex-col items-center justify-around md:flex-row gap-4 md:gap-1 px-4 md:px-1 lg:px-0">
        {projects.map((project, idx) => {
          return (
            <div
              key={idx}
              className="card p-3 flex flex-col md:w-105 lg:w-125  gap-4 custom-transition"
            >
              <div>
                <Image src={project.image} alt="Project" priority />
              </div>
              <span className="font-display pl-2 text-xl  md:text-2xl lg:text-3xl">
                {project.name}
              </span>
              <span className="px-2 text-secondary text-sm md:text-xl">
                {project.description}
              </span>
              <div className=" pt-2 flex items-center justify-between">
                {project.links.map((item, idx) => (
                  <button
                    key={idx}
                    className={`text-sm md:text-xl custom-transition ${item.active ? "button w-20 h-10 md:min-w-30 text-center" : "button w-20 h-10 md:min-w-30 text-center bg-gray-400"}`}
                  >
                    <a key={idx} href={item.url} target="_blank">
                      {item.name}
                    </a>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
