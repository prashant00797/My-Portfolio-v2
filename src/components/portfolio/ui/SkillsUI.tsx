const skills: string[] = [
  "HTML5",
  "CSS3",
  "Javascript",
  "React Js",
  "Next.js",
  "TypeScript",
  "Tanstack Ecosystem",
  "Tailwind",
  "scss",
  "Redux RTK",
  "Node.js",
  "Express.js",
  "zod",
  "Python",
  "FastAPI",
  "pydantic",
  "Langchain-Langraph",
  "RAG",
  "PostgresSql",
  "Vector Databases - Pinecone, Chroma DB",
  "MongoDB",
  "Git",
  "Parcel",
  "Webpack",
  "Vite",
  "RTL",
  "JEST",
  "AWS EC2",
  "AWS S3",
  "Docker",
  "Agile",
  "Scrum",
  "JIRA",
  "Zeplin",
  "Figma",
  "Open AI APIs",
  "Anthropic AI APIs",
  "Cursor",
  "Antigravity",
  "Codex",
  "Claude Code",
  "Product Thinking",
];

const Skills = () => {
  return (
    <>
      <h1 className="text-2xl text-primary font-display pl-4 mb-2">Skills</h1>
      <div
        id="skills"
        className=" flex gap-1 justify-center flex-wrap mb-20 font-display"
      >
        {skills.map((item, idx) => (
          <div key={idx} className="inline-block mr-2 mb-2 custom-transition">
            <span className="tag">{item}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
