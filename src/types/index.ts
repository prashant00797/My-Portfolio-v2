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
  url?: string;
  active?: boolean;
  toolTip?: boolean;
  toolTipText?: string;
};
export type ProjectsData = {
  name: string;
  image: StaticImageData;
  description: string;
  links: LinksData[];
};

export type ChatWidgetProps = {
  onClose: (openChat: boolean) => void;
  thread_id: string;
  message: Message[];
  setMessage: React.Dispatch<React.SetStateAction<Message[]>>;
};

export type Message = {
  role: "user" | "assistant";
  content: string;
};

export type ChatInputProps = {
  onSend: (input: string) => void;
  setInput: (input: string) => void;
  input: string;
  streaming: boolean;
};
