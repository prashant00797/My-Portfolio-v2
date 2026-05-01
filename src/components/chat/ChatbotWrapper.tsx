"use client";

import Lottie from "lottie-react";
import Chatbot from "@/animations/Chatbot.json";
import { useEffect, useState } from "react";
import ChatWidget from "@/components/chat/ChatWidget";
import { ONBOARDING_MESSAGE } from "@/common/constants";
import type { Message } from "@/types";

export default function ChatbotWrapper() {
  const [openChat, setOpenChat] = useState(false);
  const [thread_id, setThread_id] = useState("");
  const [message, setMessage] = useState<Message[]>([
    {
      role: ONBOARDING_MESSAGE.role,
      content: ONBOARDING_MESSAGE.content,
    },
  ]);
  const handleChatWidget = () => {
    setOpenChat(true);
  };

  useEffect(() => {
    setThread_id(crypto.randomUUID());
  }, []);
  return (
    <div id="chat" onClick={handleChatWidget} className="relative">
      <Lottie
        animationData={Chatbot}
        loop={true}
        style={{
          width: 100,
          position: "fixed",
          bottom: "0px",
          right: "0px",
          zIndex: "100",
        }}
      />
      {openChat && <ChatWidget onClose={setOpenChat} thread_id={thread_id} message={message} setMessage={setMessage} />}
    </div>
  );
}
