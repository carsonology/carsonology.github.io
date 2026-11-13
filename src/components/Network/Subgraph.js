import { useEffect, useRef, useState } from "react"
import * as d3 from "d3"
import { getNeighborIds } from "./utils"
import miserables from "./miserables.json"

const SUB_SIZE = 300

const Subgraph = ({ setSelectedId, selectedId }) => {
  const subSvgRef = useRef(null)

  const { nodes, links } = miserables

  useEffect(() => {
    if (!selectedId) return

    const subSvg = d3.select(subSvgRef.current)
    subSvg.selectAll("*").remove()

    const ids = getNeighborIds(selectedId, links)
    const touchesCenter = (l) =>
      l.source.id === selectedId || l.target.id === selectedId

    // dim everything except the selected node and its neighbors
    // node.attr("opacity", (d) => (ids.has(d.id) ? 1 : 0.15))
    // link.attr("stroke-opacity", (l) => (touchesCenter(l) ? 0.9 : 0.05))

    // copies, so this simulation doesn't overwrite x/y on the main graph's nodes
    const subNodes = nodes
      .filter((n) => ids.has(n.id))
      .map((n) => ({ id: n.id, type: n.type, group: n.group, url: n.url }))
    const subLinks = links
      .filter(touchesCenter)
      .map((l) => ({ source: l.source.id, target: l.target.id }))

    const centerNode = subNodes.find((n) => n.id === selectedId)
    centerNode.fx = SUB_SIZE / 2
    centerNode.fy = SUB_SIZE / 2

    const sLink = subSvg
      .append("g")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(subLinks)
      .join("line")

    const sNode = subSvg
      .append("g")
      .selectAll("circle")
      .data(subNodes)
      .join("circle")
      .attr("r", (d) => (d.id === selectedId ? 10 : 6))
      .attr("fill", (d) => (d.id === selectedId ? "#fff" : "#ccc"))
      .style("cursor", "pointer")
      .on("click", (event, d) => setSelectedId(d.id)) // hop to that node

    const sLabel = subSvg
      .append("g")
      .selectAll("text")
      .data(subNodes)
      .join("text")
      .text((d) => d.id)
      .attr("font-size", 10)
      .attr("fill", "#ccc")
      .attr("text-anchor", "middle")
      .attr("dy", -12)
      .style("pointer-events", "none")

    const subSim = d3
      .forceSimulation(subNodes)
      .force(
        "link",
        d3
          .forceLink(subLinks)
          .id((d) => d.id)
          .distance(90)
          .strength(1),
      )
      .force("charge", d3.forceManyBody().strength(-150))
      .force("collide", d3.forceCollide(16))
      .on("tick", () => {
        sLink
          .attr("x1", (d) => d.source.x)
          .attr("y1", (d) => d.source.y)
          .attr("x2", (d) => d.target.x)
          .attr("y2", (d) => d.target.y)
        sNode.attr("cx", (d) => d.x).attr("cy", (d) => d.y)
        sLabel.attr("x", (d) => d.x).attr("y", (d) => d.y)
      })

    return () => subSim.stop() // stops the old sim before the next selection
  }, [selectedId])

  return (
    <div
      id="subgraph"
      //   hidden={selectedId === null}
      style={{
        position: "fixed",
        right: 16,
        bottom: 16,
        background: "#1e1e1e",
        border: "1px solid #444",
        borderRadius: 8,
        padding: 8,
      }}
    >
      <button
        id="sub-close"
        onClick={() => setSelectedId(null)}
        style={{
          position: "absolute",
          top: 4,
          right: 8,
          background: "none",
          border: 0,
          color: "#ccc",
          cursor: "pointer",
        }}
      >
        ×
      </button>
      <h3
        id="sub-title"
        style={{ margin: "0 0 4px", font: "12px sans-serif", color: "#ccc" }}
      >
        {selectedId}
      </h3>
      <svg ref={subSvgRef} width={SUB_SIZE} height={SUB_SIZE} />
    </div>
  )
}

export default Subgraph
