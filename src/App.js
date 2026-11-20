import "./App.css"
import { useState } from "react"
import { styled } from "@stitches/react"
import Work from "./components/Work"
import Nav from "./components/Nav"
import Home from "./components/Home"

import { HashRouter, Routes, Route } from "react-router-dom"

const Footer = styled("div", {
  background: "#63464630",
  color: "var(--text-color)",
  borderTop: "1px solid var(--text-color)",
  padding: "1em",
  textAlign: "center",
  fontFamily: "Archivo",
  fontWeight: 300,
  letterSpacing: ".05em",
  p: { margin: 0 },
})

const App = () => {
  const [currentPage, setCurrentPage] = useState("Home")

  return (
    <HashRouter>
      {/* <Header /> */}

      <Nav setCurrentPage={setCurrentPage} currentPage={currentPage} />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </main>

      <Footer>
        <p>
          Made with React{" "}
          <span style={{ width: 50, position: "inline-block" }}>
            <img
              src="/keyboard.svg"
              style={{
                width: "1em",
                height: "1em",
                marginBottom: -3,
                fill: "var(--text-color",
              }}
            ></img>
          </span>
          . Last updated November 2026{" "}
          <span style={{ width: 50, position: "inline-block" }}>
            <img
              src="/clock.svg"
              style={{
                width: "1em",
                height: "1em",
                marginBottom: -3,
                fill: "var(--text-color",
              }}
            ></img>
          </span>
          .
        </p>
      </Footer>
    </HashRouter>
  )
}

export default App
