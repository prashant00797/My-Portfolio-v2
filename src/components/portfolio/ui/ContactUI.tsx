import { Email, Github, LinkedIn } from "@/utility/Icons";
import type { ContactData } from "@/types/index";

const contactData: ContactData[] = [
  {
    name: "Email",
    link: "mailto:prashantnath6307@gmail.com",
    element: <Email />,
  },
  {
    name: "Github",
    link: "https://github.com/prashant00797",
    element: <Github />,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/prashant0112",
    element: <LinkedIn />,
  },
];

const Contact = () => {
  return (
    <div
      id="contact"
      className="card mt-10 text-center py-2 flex flex-col gap-4"
    >
      <div>
        <p className="text-primary">
          I'm open to new opportunities and collaborations.
        </p>
        <div className="flex justify-center items-center gap-3 mt-1">
          <span className="w-8 border-t border-border"></span>
          <span className="text-secondary text-sm">
            Built with Next.js & Tailwind
          </span>
          <span className="w-8 border-t border-border"></span>
        </div>
      </div>
      <div className="flex justify-center gap-6 font-display">
        {contactData.map((item) => (
          <div
            key={item.name}
            className="flex  items-center gap-2 custom-transition"
          >
            <div>{item.element}</div>
            <a href={item.link} target="_blank">
              {item.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
