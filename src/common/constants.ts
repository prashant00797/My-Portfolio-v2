import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

export const project1_url = project1;
export const project2_url = project2;
export const project3_url = project3;

export const POST = "POST";
export const ASSISTANT = "assistant";
export const USER = "user";
export const errorMessage =
  "Hi I am facing trouble at this moment. Please try again after sometime. Sorry for the inconvenience caused.";
export const AGENT_NAME = "Viola";
export const ONLINE_STATUS_LABEL = "Online";
export const CLOSE_CHAT_LABEL = "X";

export const HEADERS_CONTENT_TYPE = {
  "Content-Type": "application/json",
};

export const INPUT_PLACEHOLDER = {
  DEFAULT: "Ask anything...",
  RESPONDING: "Agent Responding...",
};

export const ONBOARDING_MESSAGE = {
  role: "assistant" as const,
  content:
    "Hi, I am Viola — Prashant's AI assistant. Feel free to ask anything about him!",
};

export const TOOL_NAMES = {
  RAG_TOOL: "retrieve_relevant_chunks",
  GITHUB_TOOL: "get_repo_info",
  DB_TOOL: "capture_user_info",
};

export const STREAM_EVENTS = {
  TOOL_EVENT: "tool_call",
  TOKEN_EVENT: "token",
  STREAM_END_EVENT: "end",
  ERROR_EVENT: "error",
};

export const TOOL_MESSAGES = {
  RAG_TOOL_MESSAGE: "🔨 Searching knowledge base...",
  GITHUB_TOOL_MESSAGE: "🔨 Fetching github repo of Prashant...",
  SAVE_USER_DETAILS_TOOL_MESSAGE: "🔨 Trying to save user information...",
};
