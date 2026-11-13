import { ForceGraph } from "./forceGraphNew"

const Network = ({ setCurrentView, setCurrentProject }) => {
  return (
    <ForceGraph
      setCurrentView={setCurrentView}
      setCurrentProject={setCurrentProject}
    />
  )
}

export default Network
