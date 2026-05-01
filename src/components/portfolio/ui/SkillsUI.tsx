const skills: string[] = [
  "HTML5",
  "CSS3",
  "Javascript",
  "React Js",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "scss",
  "Redux RTK",
  "Python",
  "FastAPI",
  "Langchain-Langraph",
  "RAG",
  "PostgresSql",
  "Vector Databases",
  "Git",
  "Parcel",
  "Webpack",
  "Vite",
  "Agile",
  "Scrum",
  "JIRA",
  "Zeplin",
  "Figma",
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
