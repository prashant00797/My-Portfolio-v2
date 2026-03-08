import { GradientText } from "../utility/GradientHover";

const navLinksName = [
  { name: "Experience", to: "#experience" },
  { name: "Skills", to: "#skills" },
  { name: "Contact", to: "#contact" },
];

const Navbar = () => {
  return (
    <div className="px-4 py-1 my-7 md:flex md:items-center md:justify-between">
      <div className="md:hover:animate-pulse">
        <h1 className="text-xs md:text-xl lg:text-2xl font-display">
          <GradientText text={"@Prashant"} />
        </h1>
      </div>
      <div className="hidden md:block">
        <ul className="flex flex-row items-center gap-6 ">
          {navLinksName.map((link, idx) => (
            <a
              href={link.to}
              className="md:text-sm lg:text-xl custom-transition font-display"
            >
              <li key={idx}>{link.name}</li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
