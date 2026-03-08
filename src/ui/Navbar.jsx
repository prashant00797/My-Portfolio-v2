import { GradientText } from "./utilities/GradientHover";

const navLinksName = ["Experience", "Skills", "Contact"];

const Navbar = () => {
  return (
    <div className="px-4 py-1  md:flex md:items-center md:justify-between">
      <div className="md:hover:animate-pulse">
        <h6 className="text-xs md:text-xl lg:text-2xl ">
          <GradientText text={"@Prashant"} />
        </h6>
      </div>
      <div className="hidden md:block">
        <ul className="flex flex-row items-center gap-6 ">
          {navLinksName.map((link, idx) => (
            <li className="md:text-sm lg:text-xl custom-transition" key={idx}>
              {link}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
