import Overlay from "@/components/portfolio/ui/OverlayUI";
import Content from "@/components/portfolio/page/ContentPage";
import ChatbotWrapper from "@/components/chat/ChatbotWrapper";

const Page = () => {
  return (
    <div className="group relative">
      <Overlay />
      <div className="z-10 relative">
        <Content />
      </div>
      <ChatbotWrapper />
    </div>
  );
};

export default Page;
