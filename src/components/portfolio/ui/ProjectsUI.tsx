import Image from "next/image";
import {
  product1_url,
  project1_url,
  project2_url,
  project3_url,
} from "@/common/constants";
import type { ProjectsData } from "@/types";

const product: ProjectsData[] = [
  {
    name: "Crevia",
    image: product1_url,
    description:
      "Crevia is a Creator OS — a platform to help creators plan, generate and manage their content faster. ",
    links: [
      {
        name: "Github",
        url: "https://github.com/prashant00797/crevia-landing",
      },
      {
        name: "Landing Page",
        url: "https://crevia-landing.netlify.app",
        active: true,
      },
    ],
    status: "InProgress",
  },
];

const projects: ProjectsData[] = [
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
    status: "Completed",
  },
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
    status: "Completed",
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
    status: "Completed",
  },
];

const ProjectStatusTag = ({ status }: { status: ProjectsData["status"] }) => {
  const isInProgress = status === "InProgress";

  return (
    <span className="absolute right-3 top-3 z-20 inline-flex items-center gap-2 rounded-full border border-border bg-surface/90 px-3 py-1.5 text-xs font-semibold text-primary shadow-(--shadow-card) backdrop-blur-md">
      <span className="relative flex h-2 w-2">
        {isInProgress && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-tag-text opacity-40" />
        )}
        <span className="relative inline-flex h-2 w-2 rounded-full bg-tag-text" />
      </span>
      {isInProgress ? "In progress" : "Completed"}
    </span>
  );
};

const ProjectCard = ({ project }: { project: ProjectsData }) => (
  <div className="card p-4 flex flex-col justify-between gap-3 custom-transition w-full max-w-lg">
    <div className="relative aspect-[1.9/1] w-full overflow-hidden rounded-lg bg-background">
      <Image
        src={project.image}
        alt={`${project.name} preview`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-contain"
        priority
      />
      {project.status === "InProgress" && (
        <ProjectStatusTag status={project.status} />
      )}
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
        What I've Built
      </h1>
      <p className="text-secondary font-display mt-1 mb-8">
        Products, applications and systems built with React, Node.js, Python and
        AI-powered workflows.
      </p>

      {/* Product */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-1">
          <h2 className="text-lg font-display font-semibold text-primary">
            Product
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {product.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>

      <div className="border-t border-border my-8" />

      {/* Projects */}
      <div>
        <div className="mb-1">
          <h2 className="text-lg font-display font-semibold text-primary">
            Projects
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
