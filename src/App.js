import "./App.css";
import { useState } from "react";
import Header from "./components/Header.js";
// import content for clips
import web_clips from "./clips/web_dev.json";
import graphic_clips from "./clips/graphics.json";
import writing_clips from "./clips/writing.json";
import design_clips from "./clips/design.json";

import Network from "./components/Network/index.js";

const config = [
  {
    section: "webdev",
    data: web_clips,
    name: "web dev",
    icon: "laptop",
  },
  {
    section: "design",
    data: design_clips,
    icon: "palette",
  },
  {
    section: "graphics",
    data: graphic_clips,
    icon: "chart",
  },
  {
    section: "writing",
    data: writing_clips,
    icon: "pencil",
  },
];

const App = () => {
  const [shownSection, setShownSection] = useState("webdev");

  return (
    <>
      <Header />

      <main>
        <Network />

      </main>
    </>
  );
};

export default App;
