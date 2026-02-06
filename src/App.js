import "./App.css";
import { useState } from "react";
import Header from "./components/Header.js";
import Nav from "./components/Nav.js";
import Section from "./components/Section.js";
// import content for clips
import web_clips from "./clips/web_dev.json";
import graphic_clips from "./clips/graphics.json";
import writing_clips from "./clips/writing.json";
import design_clips from "./clips/design.json";

const config = [
  {
    section: "graphics",
    data: graphic_clips,
    icon: "chart",
  },
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
    section: "writing",
    data: writing_clips,
    icon: "pencil",
  },
];

const App = () => {
  const [shownSection, setShownSection] = useState("graphics");

  return (
    <>
      <Header />

      <main>
        <Nav
          config={config}
          shownSection={shownSection}
          setShownSection={setShownSection}
        />

        {config.map((topic) => {
          if (shownSection === topic.section) {
            return <Section title={topic.section} data={topic.data} />;
          }
          return null;
        })}
      </main>

      <footer>
        <div>
          <img src="./terbush-headshot.jpg" alt="Carson's headshot" />
          <div>
            <p>
              I'm Carson TerBush, a visual journalist with experience in design,
              web development, data visualization and investigative reporting.
              In my free time, I love cooking, drawing and rewatching Fleabag.
            </p>
            <p>
              Want to connect?{" "}
              <a href="mailto:carson.terbush@gmail.com" className="light">
                Email me!
              </a>
            </p>
          </div>
        </div>

        <small>
          <p className="footnote">
            Made with{" "}
            <span style={{ color: "#C93662", marginTop: "-2px" }}>&#9829;</span>{" "}
            and{" "}
            <a
              href="https://github.com/carsonology/carsonology.github.io"
              target="_blank"
              rel="noreferrer"
            >
              React
            </a>{" "}
            | &#169; 2026
          </p>
        </small>
      </footer>
    </>
  );
};

export default App;
