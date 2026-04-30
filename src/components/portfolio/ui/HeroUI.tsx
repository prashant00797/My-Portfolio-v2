import type { ButtonsData } from "@/types";

const buttons: ButtonsData[] = [
  {
    name: "Github",
    link: "https://github.com/prashant00797",
    download: false,
  },
  {
    name: "Resume",
    link: "/resume.pdf",
    download: true,
  },
];
const Hero = () => {
  return (
    <div className="card py-6 mb-20 ">
      <div className="flex flex-col justify-center items-center gap-2.5 mb-10">
        <h1 className="text-2xl  md:text-5xl lg:text-7xl text-primary font-display">
          Prashant Nath
        </h1>
        <p className="text-md text-center md:text-2xl lg:3xl text-secondary">
          Developer building AI-powered web applications
        </p>
        <p className="text-center text-xs md:text-xl lg:text-2xl text-secondary px-px md:px-0">
          React · Next.js · Python · LLM Frameworks
        </p>
      </div>
      <div className="flex justify-center items-center gap-10">
        {buttons.map((ele) => (
          <a
            key={ele.name}
            href={ele.link}
            download={ele.download}
            target="_blank"
          >
            <button className="button w-20 h-10 md:min-w-30 ">
              {ele.name}
            </button>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Hero;
