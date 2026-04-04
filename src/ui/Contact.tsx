import { Email, Github, LinkedIn } from "@/utility/Icons";
import type { ContactData } from "../types/index";

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
    <div id="contact" className="card mt-10 text-center py-2">
      <p className="text-primary mb-8">
        I'm open to new opportunities and collaborations.
      </p>

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
