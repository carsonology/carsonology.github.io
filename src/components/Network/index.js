import { useRef, useEffect } from "react"
import data from "./miserables.json"
import { ForceGraph } from "./forceGraphNew"

const Network = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    // 1. Get your raw SVGSVGElement from your tool/library
    // const width = containerRef.current.clientWidth
    // const chart = ForceGraph(
    //   { nodes: data.nodes, links: data.links.map((d) => ({ ...d, value: 1 })) },
    //   {
    //     nodeId: (d) => d.id,
    //     nodeGroup: (d) => d.group,
    //     nodeTitle: (d) => `${d.id}\n${d.group}`,
    //     // linkStrokeWidth: l => Math.sqrt(l.value),
    //     linkStrokeWidth: 0.5,
    //     width: width,
    //     height: 600,
    //     linkStroke: "#000",
    //     nodeFillOpacity: 0.9,
    //     nodeStroke: 0,
    //     nodeRadius: (d) => d.group * 2,
    //     linkStrength: 1,
    //     linkDistance: 200,
    //     // invalidation // a promise to stop the simulation when the cell is re-run
    //   },
    // );
    // 2. Safely append it to the DOM container
    // if (containerRef.current) {
    //   containerRef.current.innerHTML = ""; // Clear previous renders
    //   containerRef.current.appendChild(chart);
    // }
  }, [])

  return <ForceGraph />
}

export default Network
