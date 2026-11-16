import { ForceGraph } from "./forceGraphNew"
import Radar from "./radarGraph.js"

const Network = ({ setCurrentView, setProjectIdSelectedFromHome }) => {
  return (
    <div
      style={
        {
          // background: "#63464615"
        }
      }
    >
      <Radar
        setCurrentView={setCurrentView}
        setProjectIdSelectedFromHome={setProjectIdSelectedFromHome}
      />
    </div>
  )
}

export default Network
