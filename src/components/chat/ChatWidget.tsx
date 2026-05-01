import type { ChatWidgetProps } from "@/types";
import { useEffect, useRef, useState } from "react";
import { useStream } from "@/hooks/useStream";
import ChatInput from "./ChatInput";
import ChatMessageBubble from "./ChatMessageBubble";
import {
  AGENT_NAME,
  AGENT_THINKING_STATE,
  CLOSE_CHAT_LABEL,
  LOADING_STATE,
  ONLINE_STATUS_LABEL,
} from "@/common/constants";

const ChatWidget = ({
  onClose,
  thread_id,
  message,
  setMessage,
}: ChatWidgetProps) => {
  const [input, setInput] = useState("");
  const scrollBottomRef = useRef<HTMLDivElement>(null);

  const { streaming, pondering, statusText, streamingText, sendMessage } =
    useStream(thread_id, message, setMessage);

  useEffect(() => {
    scrollBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message, streamingText]);

  const onSend = async (input: string) => {
    if (!input.trim()) return;
    await sendMessage(input);
  };

  return (
    <div className="w-85 h-125 md:w-100  card fixed right-3 bottom-22 md:bottom-20 md:right-20 z-90 flex flex-col cursor-default">
      <div
        id="header"
        className="h-20 shadow-card rounded-t-[12px] flex items-center justify-between p-7  bg-surface border-b border-border"
      >
        <div className="flex flex-col">
          <h1 className="text-primary font-bold text-md md:text-xl">
            {AGENT_NAME}
          </h1>
          <div>
            <span className="brightness-110">🟢</span>
            <span className="text-primary font-light">
              {ONLINE_STATUS_LABEL}
            </span>
          </div>
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            onClose(false);
          }}
          className="font-semibold text-xl cursor-pointer"
        >
          {CLOSE_CHAT_LABEL}
        </div>
      </div>
      <div
        id="chat-area"
        className="flex flex-col flex-1 min-h-0 overflow-y-auto p-3 gap-2"
      >
        {message.map((msg, index) => (
          <ChatMessageBubble key={index} message={msg} />
        ))}
        {pondering && !streamingText && (
          <div className="flex justify-start">
            <span className="text-xs text-secondary italic px-1 animate-pulse">
              {LOADING_STATE}
            </span>
          </div>
        )}
        {statusText && !streamingText && (
          <div className="flex justify-start">
            <span className="text-xs text-secondary italic px-1 animate-pulse">
              {`${AGENT_THINKING_STATE} : ${statusText}`}
            </span>
          </div>
        )}
        {streamingText && (
          <ChatMessageBubble
            message={{ role: "assistant", content: streamingText }}
          />
        )}
        <div ref={scrollBottomRef}></div>
      </div>
      <div id="input" className="shadow-card rounded-b-[12px]">
        <ChatInput
          onSend={onSend}
          setInput={setInput}
          input={input}
          streaming={streaming}
        />
      </div>
    </div>
  );
};

export default ChatWidget;
