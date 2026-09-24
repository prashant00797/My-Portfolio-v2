import type { ExpereinceData } from "@/types";

const expData: ExpereinceData[] = [
  {
    name: "Assistant Manager (Full Stack Developer)",
    description: "EXL • Gurgaon • Jul 2026 - Present",
    bullets: [
      "Rebuilding a multi-tenant sports analytics platform from scratch as an individual contributor, migrating it from Python/Streamlit to a modern TypeScript stack.",
      "Building end-to-end with TanStack Start, React, Tailwind CSS, Mantine UI, Drizzle ORM and PostgreSQL.",
      "Designed a config-driven architecture that has onboarded multiple tenants, secured with PostgreSQL Row-Level Security (RLS) so each tenant can only access its own data.",
      "Cut page load times by ~70% versus the legacy Python/Streamlit system by fixing its performance and efficiency gaps instead of doing a like-for-like migration.",
    ],
  },
  {
    name: "Development Engineer",
    description: "Avizva Solutions • Sep 2021 - Jan 2024",
    promotion:
      "Promoted from Associate Trainee → Associate Developer → Development Engineer.",
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
    <div id="experience" className="mb-20 md:mb-25 px-4">
      <h1 className="text-2xl font-display font-bold text-primary mb-8">
        Experience
      </h1>
      <div className="flex flex-col gap-4">
        {expData.map((item) => (
          <div
            key={item.name}
            className="card p-4 flex flex-col gap-1 custom-transition"
          >
            <span className="font-display text-lg md:text-xl font-semibold text-primary">
              {item.name}
            </span>
            <span className="text-secondary text-sm font-display">
              {item.description}
            </span>
            {item.promotion && (
              <span className="text-secondary text-sm italic">
                {item.promotion}
              </span>
            )}
            <ul className="list-disc pl-5 mt-2 space-y-1">
              {item.bullets.map((bullet, idx) => (
                <li
                  key={idx}
                  className="text-secondary text-sm leading-relaxed"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
