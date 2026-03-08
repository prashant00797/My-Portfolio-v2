import { GradientText } from "./utilities/GradientHover";
const buttons = [
  {
    name: "Github",
    link: "https://github.com/prashant00797",
  },
  {
    name: "Resume",
    link: "https://drive.google.com/drive/folders/1O2puCpnaOkCawyO4KBYXNiCtsydeNnYS?usp=sharing",
  },
];
const Hero = () => {
  return (
    <div className="max-w-3xl mx-auto card py-4">
      <div className="flex flex-col justify-center items-center gap-2.5 mb-10">
        <h1 className="text-2xl  md:text-6xl lg:text-8xl primary">
          <GradientText text={"Prashant Nath"} />
        </h1>
        <p className="text-md md:text-2xl lg:3xl secondary">
          "Frontend Engineer | UI Engineer"
        </p>
        <p className="group text-center md:text-justify text-xs md:text-xl lg:text-2xl text-secondary">
          A dedicated and detail oriented Frontend Engineer
        </p>
      </div>
      <div className="flex justify-center items-center gap-10">
        {buttons.map((ele, idx) => (
          <a key={idx} href={ele.link} target="_blank">
            <button className="button w-20 md:min-w-30 md:h-10">
              {ele.name}
            </button>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Hero;
