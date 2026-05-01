import {
  ASSISTANT,
  errorMessage,
  HEADERS_CONTENT_TYPE,
  ONBOARDING_MESSAGE,
  POST,
  STREAM_EVENTS,
  TOOL_MESSAGES,
  TOOL_NAMES,
  USER,
} from "@/common/constants";
import type { Message } from "@/types";
import { useState } from "react";

export const useStream = (
  thread_id: string,
  message: Message[],
  setMessage: React.Dispatch<React.SetStateAction<Message[]>>,
) => {
  const [streaming, setIsStreaming] = useState(false);
  const [pondering, setIsPondering] = useState(false);
  const [statusText, setStatusText] = useState("");
  const [streamingText, setStreamingText] = useState("");

  const sendMessage = async (userInputMessage: string) => {
    setMessage((prev) => [...prev, { role: USER, content: userInputMessage }]);

    setIsPondering(true);
    setIsStreaming(true);
    setStreamingText("");
    setStatusText("");

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
        method: POST,
        headers: HEADERS_CONTENT_TYPE,
        body: JSON.stringify({
          message: userInputMessage,
          thread_id: thread_id,
        }),
      });

      const reader = response.body?.getReader();
      if (!reader) return;
      const decoder = new TextDecoder();
      let buffer = "";
      let accumulatedText = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value);
        const lines = buffer.split("\n\n");
        buffer = lines.pop() ?? "";

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const parsed = JSON.parse(line.replace("data: ", ""));
            console.log(parsed);
            if (parsed.type === STREAM_EVENTS.TOKEN_EVENT) {
              setIsPondering(false);
              accumulatedText += parsed.content;
              setStreamingText((prev) => prev + parsed.content);
            } else if (parsed.type === STREAM_EVENTS.TOOL_EVENT) {
              setIsPondering(false);
              const tool = parsed.tool;
              if (tool === TOOL_NAMES.RAG_TOOL) {
                setStatusText(TOOL_MESSAGES.RAG_TOOL_MESSAGE);
              } else if (tool === TOOL_NAMES.GITHUB_TOOL) {
                setStatusText(TOOL_MESSAGES.GITHUB_TOOL_MESSAGE);
              } else if (tool === TOOL_NAMES.DB_TOOL) {
                setStatusText(TOOL_MESSAGES.SAVE_USER_DETAILS_TOOL_MESSAGE);
              }
            } else if (parsed.type === STREAM_EVENTS.STREAM_END_EVENT) {
              setMessage((prev) => [
                ...prev,
                { role: ASSISTANT, content: accumulatedText },
              ]);
              setStreamingText("");
              setStatusText("");
            } else if (parsed.type === STREAM_EVENTS.ERROR_EVENT) {
              setIsPondering(false);
              setMessage((prev) => [
                ...prev,
                {
                  role: ASSISTANT,
                  content: errorMessage,
                },
              ]);
              setStreamingText("");
              setStatusText("");
            }
          }
        }
      }
    } catch {
      setMessage((prev) => [
        ...prev,
        {
          role: ASSISTANT,
          content: errorMessage,
        },
      ]);
    } finally {
      setIsStreaming(false);
      setIsPondering(false);
    }
  };
  return {
    message,
    streaming,
    pondering,
    statusText,
    streamingText,
    sendMessage,
  };
};
