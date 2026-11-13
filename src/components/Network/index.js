import { ForceGraph } from "./forceGraphNew"

const Network = ({ setCurrentView, setProjectIdSelectedFromHome }) => {
  return (
    <ForceGraph
      setCurrentView={setCurrentView}
      setProjectIdSelectedFromHome={setProjectIdSelectedFromHome}
    />
  )
}

export default Network
