import Image from "next/image";
import { project1_url, project2_url, project3_url } from "@/common/constants";
import type { ProjectsData } from "@/types";

const aiProjects: ProjectsData[] = [
  {
    name: "Portfolio Assistant",
    image: project3_url,
    description:
      "A plug-and-play ReAct agent for developer portfolios. Built with LangGraph, RAG, Python, FastAPI and Next.js.",
    links: [
      {
        name: "Github",
        url: "https://github.com/prashant00797/personal-chat-agent",
      },
      {
        name: "Try it here ->",
        active: true,
      },
    ],
  },
];

const frontendProjects: ProjectsData[] = [
  {
    name: "Insure AI Portal",
    image: project1_url,
    description:
      "SaaS-style health insurance dashboard simulating real-world claims and provider workflows, enhanced with intent-based AI search for structured data navigation.",
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
      "AI-powered text summarizer that generates concise summaries, key insights and bullet points from long articles using Open AI.",
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

const ProjectCard = ({ project }: { project: ProjectsData }) => (
  <div className="card p-4 flex flex-col justify-between gap-3 custom-transition w-full max-w-lg">
    <div className="rounded-lg overflow-hidden h-56 w-full relative">
      <Image
        src={project.image}
        alt={`${project.name} preview`}
        fill
        className="object-cover"
        priority
      />
    </div>
    <span className="font-display text-lg md:text-xl font-semibold text-primary">
      {project.name}
    </span>
    <span className="text-secondary text-sm  leading-relaxed">
      {project.description}
    </span>
    <div
      className={`flex items-center justify-between gap-3 pt-1 mt-auto group relative`}
    >
      {project.links.map((item) => (
        <a
          key={item.name}
          href={item.url}
          target="_blank"
          className={`text-sm custom-transition flex items-center justify-center flex-1 h-10 text-center rounded-button ${
            item.active
              ? "button"
              : "border border-border text-primary hover:bg-surface"
          }`}
        >
          {item.name}
        </a>
      ))}
    </div>
  </div>
);

const Projects = () => {
  return (
    <div className="mb-20 md:mb-25 px-4">
      <h1 className="text-2xl font-display font-bold text-primary">
        Projects & Engineering Work
      </h1>
      <p className="text-secondary font-display mt-1 mb-8">
        Real-world applications focused on AI integration, interactive systems
        and end-to-end user flows.
      </p>

      {/* Fullstack AI Projects */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-1">
          <h2 className="text-lg font-display font-semibold text-primary">
            Fullstack AI Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {aiProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>

      <div className="border-t border-border my-8" />

      {/* Frontend Projects */}
      <div>
        <div className="mb-1">
          <h2 className="text-lg font-display font-semibold text-primary">
            Frontend Projects
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          {frontendProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
