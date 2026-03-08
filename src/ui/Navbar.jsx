const navLinksName = ["Experience", "Skills", "Contact"];

const Navbar = () => {
  return (
    <div className="px-4 py-1  md:flex md:items-center md:justify-between">
      <div className="animate-pulse">
        <h6 className="text-xs md:text-xl lg:text-2xl">@Prashant</h6>
      </div>
      <div className="hidden md:block">
        <ul className="flex flex-row items-center gap-6 ">
          {navLinksName.map((link, idx) => (
            <li
              className="md:text-sm lg:text-xl lg:cursor-pointer lg:hover:translate-x-0.5 lg:hover:brightness-110 lg:transition lg:duration-100"
              key={idx}
            >
              {link}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
