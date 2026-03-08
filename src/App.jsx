import Content from "./page/Content";
import Overlay from "./page/Overlay";

const App = () => {
  return (
    <div className="group relative">
      <Overlay />
      <div className="z-10 relative">
        <Content />
      </div>
    </div>
  );
};

export default App;
