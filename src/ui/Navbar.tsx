import type { NavLinkData } from "@/types";

const navLinksName: NavLinkData[] = [
  { name: "Experience", to: "#experience" },
  { name: "Skills", to: "#skills" },
  { name: "Contact", to: "#contact" },
];

const Navbar = () => {
  return (
    <div className="px-4 py-1 my-7 md:flex md:items-center md:justify-between">
      <div className="md:hover:animate-pulse">
        <h1 className="text-xs md:text-xl lg:text-2xl font-display">
          @Prashant
        </h1>
      </div>
      <div className="hidden md:block">
        <ul className="flex flex-row items-center gap-6 ">
          {navLinksName.map((link) => (
            <li key={link.name}>
              <a
                className="md:text-sm lg:text-xl custom-transition font-display"
                href={link.to}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
