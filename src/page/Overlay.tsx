import {
  CssIcon,
  HtmlIcon,
  JSIcon,
  NextJSIcon,
  ReactIcon,
  ReduxIcon,
  TailwindIcon,
  TSIcon,
} from "@/utility/Icons";

const Overlay = () => {
  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-0 opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500">
      <ReactIcon className={"absolute top-0 left-20 w-30 "} />
      <JSIcon className={" absolute top-0 right-[50%] w-30"} />
      <NextJSIcon className={" absolute top-0 right-[20%] w-30"} />
      <TSIcon className={"absolute top-0 left-10 w-30 "} />
      <TailwindIcon className={"absolute top-[55%] right-40 w-30"} />
      <HtmlIcon className={"absolute top-[65%] left-[45%] w-30"} />
      <ReduxIcon className={"absolute top-[75%] left-0 w-30"} />
      <CssIcon className={"absolute top-[55%] left-[10%] w-30"} />
    </div>
  );
};

export default Overlay;
