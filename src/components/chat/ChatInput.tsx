import { INPUT_PLACEHOLDER } from "@/common/constants";
import type { ChatInputProps } from "@/types";
import React, { useRef } from "react";

const ChatInput = ({ onSend, setInput, input, streaming }: ChatInputProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const handleSendUserMessage = () => {
    onSend(input);
    setInput("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = Math.min(e.target.scrollHeight, 120) + "px";
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend(input);
      setInput("");
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }
  };
  return (
    <div className="px-2 mb-3 flex items-end gap-2">
      <textarea
        rows={1}
        name="query"
        id="query"
        placeholder={
          streaming ? INPUT_PLACEHOLDER.RESPONDING : INPUT_PLACEHOLDER.DEFAULT
        }
        className=" w-full p-4 flex-1 rounded-xl  focus:outline-none bg-white text-black placeholder:text-secondary shadow-[0_10px_40px_rgba(0,0,0,0.18)] focus:shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition-shadow resize-none"
        autoComplete="off"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={input}
        disabled={streaming}
        ref={textareaRef}
      />
      <button
        onClick={handleSendUserMessage}
        disabled={streaming}
        className=" rounded-lg px-3 py-2 shrink-0 right-4 bottom-2 cursor-pointer disabled:cursor-default"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={22}
          height={22}
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-primary"
        >
          <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
        </svg>
      </button>
    </div>
  );
};

export default ChatInput;
