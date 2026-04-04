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
        <h1 className="text-2xl  md:text-5xl lg:text-7xl primary font-display">
          Prashant Nath
        </h1>
        <p className="text-md md:text-2xl lg:3xl secondary">
          "Frontend Engineer | UI Engineer"
        </p>
        <p className="group text-center md:text-justify text-xs md:text-xl lg:text-2xl text-gray-500 px-px md:px-0">
          Frontend Engineer focused on building scalable React applications.
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
