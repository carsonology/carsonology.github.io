import "./App.css"
import { useState } from "react"
import Header from "./components/Header.js"
// import content for clips
import web_clips from "./clips/web_dev.json"
import graphic_clips from "./clips/graphics.json"
import writing_clips from "./clips/writing.json"
import design_clips from "./clips/design.json"

import Network from "./components/Network/index.js"
import ProjectPage from "./components/ProjectPage/index.js"

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
]

const App = () => {
  const [shownSection, setShownSection] = useState("webdev")

  const [currentView, setCurrentView] = useState("home")
  const [projectIdSelectedFromHome, setProjectIdSelectedFromHome] = useState("")

  return (
    <>
      <Header />

      <main>
        {currentView == "home" && (
          <Network
            setCurrentView={setCurrentView}
            setProjectIdSelectedFromHome={setProjectIdSelectedFromHome}
          />
        )}
        {currentView == "project" && (
          <ProjectPage
            projectIdSelectedFromHome={projectIdSelectedFromHome}
            setCurrentView={setCurrentView}
            setProjectIdSelectedFromHome={setProjectIdSelectedFromHome}
          />
        )}
      </main>
    </>
  )
}

export default App
