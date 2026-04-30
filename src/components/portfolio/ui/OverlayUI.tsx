import {
  CssIcon,
  FastApiIcon,
  HtmlIcon,
  JSIcon,
  OpenAI,
  NextJSIcon,
  PostgreSQLIcon,
  PythonIcon,
  ReactIcon,
  ReduxIcon,
  TailwindIcon,
  TSIcon,
  LangGraphIcon,
} from "@/utility/Icons";

const Overlay = () => {
  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-0 opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500">
      <ReactIcon className="absolute top-[4%] left-[2%] w-20" />
      <NextJSIcon className="absolute top-[2%] right-[12%] w-24" />
      <JSIcon className="absolute top-[10%] left-[38%] w-20" />
      <TSIcon className="absolute top-[28%] left-[30%] w-16" />
      <TailwindIcon className="absolute top-[25%] right-[10%] w-16" />
      <CssIcon className="absolute top-[48%] left-[3%] w-20" />
      <HtmlIcon className="absolute top-[60%] left-[42%] w-18" />
      <ReduxIcon className="absolute top-[72%] left-[8%] w-24" />
      <PythonIcon className="absolute top-[38%] right-[20%] w-25" />
      <FastApiIcon className="absolute top-[58%] right-[30%] w-20" />
      <OpenAI className="absolute top-[22%] right-[32%] w-16" />
      <PostgreSQLIcon className="absolute top-[80%] right-[8%] w-22" />
      <LangGraphIcon className="absolute top-[90%] left-[50%] w-22" />
    </div>
  );
};

export default Overlay;
