export const GradientText = ({ text }) => {
  return (
    <h1 className="group">
      {text.split("").map((letter, index) => (
        <span
          key={index}
          className="transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-cyan-400 group-hover:to-purple-500"
          style={{ transitionDelay: `${index * 40}ms` }}
        >
          {letter}
        </span>
      ))}
    </h1>
  );
};
