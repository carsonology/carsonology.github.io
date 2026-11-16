import { useState, useEffect } from "react"
import Project from "./Project"
import { styled } from "@stitches/react"
import Subgraph from "../Network/Subgraph"
import miserables from "../Network/miserables"

const ButtonStyled = styled("button", {
  background: "none",
  border: "none",
  fontSize: 16,
  fontWeight: "bold",
  cursor: "pointer",
})
const Flex = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  padding: "1rem",
})

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
      <Flex>
        <ButtonStyled
          onClick={() => {
            const index = nodes.findIndex((n) => n.id == selectedId)
            if (index > 0) {
              setSelectedId(nodes[index - 1]?.id)
            } else if (index == 0) {
              setSelectedId(nodes[nodes.length - 1].id)
            } else {
              setSelectedId(nodes[0].id)
            }
          }}
        >
          ← Previous project
        </ButtonStyled>
        <ButtonStyled onClick={() => setCurrentView("home")}>Home</ButtonStyled>
        <ButtonStyled
          onClick={() => {
            const index = nodes.findIndex((n) => n.id == selectedId)
            if (index < nodes.length - 1) {
              setSelectedId(nodes[index + 1]?.id)
            } else {
              setSelectedId(nodes[0].id)
            }
          }}
        >
          Next project →
        </ButtonStyled>
      </Flex>
      {/* <p>{selectedId}</p> */}
      <Project currentNode={currentNode} />

      <div style={{ borderTop: "2px solid var(--text-color)" }}>
        <Subgraph selectedId={selectedId} setSelectedId={setSelectedId} />
      </div>
    </>
  )
}

export default ProjectPage
