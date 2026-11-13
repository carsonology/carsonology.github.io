import { useState, useEffect } from "react"
import Project from "./Project"
import { styled } from "@stitches/react"
import Subgraph from "../Network/Subgraph"
import miserables from "../Network/miserables.json"

const ButtonStyled = styled("button", {})

const { nodes } = miserables

const ProjectPage = ({ projectIdSelectedFromHome, setCurrentView }) => {
  const [selectedId, setSelectedId] = useState(null)

  useEffect(() => {
    if (selectedId != projectIdSelectedFromHome) {
      setSelectedId(projectIdSelectedFromHome)
    }
  }, [projectIdSelectedFromHome])

  const currentNode = nodes.find((n) => n.id == selectedId)

  return (
    <>
      <ButtonStyled onClick={() => setCurrentView("home")}>Home</ButtonStyled>
      <p>{selectedId}</p>
      <Project />

      <Subgraph selectedId={selectedId} setSelectedId={setSelectedId} />
      <ButtonStyled>Previous project</ButtonStyled>
      <ButtonStyled>Next project</ButtonStyled>
    </>
  )
}

export default ProjectPage
