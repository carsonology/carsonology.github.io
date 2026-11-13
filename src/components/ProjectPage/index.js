import Project from "./Project"
import { styled } from "@stitches/react"

const ButtonStyled = styled("button", {})

const ProjectPage = ({ currentProject, setCurrentView }) => {
  console.log(currentProject)
  return (
    <>
      <ButtonStyled onClick={() => setCurrentView("home")}>Home</ButtonStyled>
      <p>{currentProject.id}</p>
      <Project />

      <ButtonStyled>Previous project</ButtonStyled>
      <ButtonStyled>Next project</ButtonStyled>
    </>
  )
}

export default ProjectPage
