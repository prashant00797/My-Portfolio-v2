import type { StaticImageData } from "next/image";
import React from "react";
export type ContactData = {
  name: string;
  link: string;
  element: React.JSX.Element;
};

export type ExpereinceData = {
  name: string;
  description: string;
  promotion: string;
  bullets: string[];
};

export type ButtonsData = {
  name: string;
  link: string;
  download: boolean;
};

export type NavLinkData = {
  name: string;
  to: string;
};

type LinksData = {
  name: string;
  url: string;
  active?: boolean;
};
export type ProjectsData = {
  name: string;
  image: StaticImageData;
  description: string;
  links: LinksData[];
};
