import type { Message } from "@/types";
import ReactMarkdown from "react-markdown";
const ChatMessageBubble = ({ message }: { message: Message }) => {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm wrap-break-word ${
          isUser
            ? "bg-user text-white rounded-br-none"
            : "bg-assistant text-assistant-text rounded-bl-none"
        }`}
      >
        <ReactMarkdown>{message.content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default ChatMessageBubble;
