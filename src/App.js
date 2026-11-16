import "./App.css"
import { useState } from "react"
import Header from "./components/Header.js"
import { styled } from "@stitches/react"

import Network from "./components/Network/index.js"
import ProjectPage from "./components/ProjectPage/index.js"
import Work from "./components/Work"
import Nav from "./components/Nav"
import Home from "./components/Home"

import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  const [currentPage, setCurrentPage] = useState("Home")

  return (
    <BrowserRouter>
      {/* <Header /> */}

      <Nav setCurrentPage={setCurrentPage} currentPage={currentPage} />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
