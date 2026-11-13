import { useEffect, useRef, useState } from "react"
import * as d3 from "d3"
import miserables from "./miserables.json"
import { useContainerSize, animateRadius, drag, getNeighborIds } from "./utils"

const SUB_SIZE = 300
const margin = {
  top: 40,
  bottom: 10,
  left: 20,
  right: 20,
}

export const ForceGraph = ({ setCurrentView, setCurrentProject }) => {
  // refs
  const containerRef = useRef(null)
  const svgRef = useRef(null)
  const subSvgRef = useRef(null)
  const graphRef = useRef({}) // shares main-graph data with the subgraph effect
  const [selectedId, setSelectedId] = useState(null)

  const { width: w, height: h } = useContainerSize(containerRef)

  const width = w - margin.left - margin.right
  const height = h - margin.top - margin.bottom

  // render the main force graph + simulation
  useEffect(() => {
    const { nodes, links } = miserables

    const baseRadius = (d) => (d.type === "tag" ? 10 : 8) // tags are slightly larger

    nodes.forEach((d) => {
      d.r0 = baseRadius(d) // resting radius, never changes
      d.r = d.r0 // current radius, animated on hover
    })

    const svg = d3.select(svgRef.current)
    svg.selectAll("*").remove()

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`)

    const simulation = d3
      .forceSimulation()
      .force(
        "link",
        d3.forceLink().id((d) => d.id),
      )
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(width / 2, height / 2))

    const color = d3.scaleOrdinal(d3.schemeCategory10)

    // Links data join
    const link = g
      .selectAll(".link")
      .data(miserables.links)
      .join((enter) => enter.append("line").attr("class", "link"))

    // Nodes data join
    const node = g
      .selectAll(".node")
      .data(miserables.nodes)
      .join((enter) => {
        const node_enter = enter
          .append("circle")
          .attr("class", "node")
          .attr("r", 5)
        node_enter.append("title").text((d) => d.id)
        return node_enter
      })
      .style("fill", (d) => color(d.group))
      .attr("r", (d) => d.r)
      .call(drag(simulation))
      .on("mouseenter", function (event, d) {
        animateRadius(this, d, d.r0 * 1.6)
      })
      .on("mouseleave", function (event, d) {
        animateRadius(this, d, d.r0)
      })
      .style("cursor", "pointer")
      .on("click", (event, d) => {
        console.log("clicked", d.id, "event")
        setCurrentView("project")
        setCurrentProject(d.id)
        // later: show the subgraph here
        // for project nodes you could also do: if (d.url) window.location.href = d.url;
      })
    // .append("g")
    // .selectAll("text")
    // .data(nodes)
    // .join("text")
    // .text((d) => d.id)
    // .attr("font-size", 10)
    // .attr("fill", "#ccc")
    // .attr("text-anchor", "middle")
    // .attr("dy", -12)
    // .style("pointer-events", "none")

    const labels = g
      .append("g")
      .selectAll("text")
      .data(nodes)
      .join("text")
      .text((d) => d.id)
      .attr("font-size", 10)
      .attr("fill", "#545454")
      .attr("text-anchor", "middle")
      .attr("dy", -12)
      .style("pointer-events", "none")

    simulation
      .nodes(miserables.nodes)
      .force(
        "link",
        d3
          .forceLink(links)
          .id((d) => d.id)
          .distance(120)
          .strength(1)
          .iterations(3),
      )
      .alpha(0.5)
      .alphaDecay(0.01)
      // .force("charge", d3.forceManyBody().strength(-200).distanceMax(50))
      .force(
        "charge",
        d3
          .forceManyBody()
          .strength((d) => (d.type === "tag" ? -800 : -300))
          .distanceMax(200),
      )
      .force("collide", d3.forceCollide(2))
      .force("x", d3.forceX(width / 2).strength(0.05))
      .force("y", d3.forceY(height / 2).strength(0.05))
      .on("tick", () => {
        link
          .attr("x1", (d) => d.source.x)
          .attr("y1", (d) => d.source.y)
          .attr("x2", (d) => d.target.x)
          .attr("y2", (d) => d.target.y)
          .attr("stroke", "#545454")
          .attr("stroke-width", 0.5)
        node.attr("cx", (d) => d.x).attr("cy", (d) => d.y)
        labels.attr("x", (d) => d.x).attr("y", (d) => d.y)
      })

    const zoom = d3
      .zoom()
      .scaleExtent([1, 6])
      .on("zoom", (event) => {
        g.attr("transform", event.transform)
      })

    // svg.call(zoom)

    // ---- click selects a node; clicking empty space clears it ----
    node.on("click", (event, d) => {
      event.stopPropagation()
      setSelectedId(d.id)
      setCurrentProject(d)
      setCurrentView("project")
    })

    graphRef.current = { nodes, links, node, link }

    return () => {
      simulation.stop()
      svg.on(".zoom", null).on("click", null)
      node.interrupt("hover")
    }
  }, [w, h])

  useEffect(() => {
    const { nodes, links, node, link } = graphRef.current
    if (!node) return

    const subSvg = d3.select(subSvgRef.current)
    subSvg.selectAll("*").remove()

    // nothing selected: restore the main graph and stop
    if (selectedId === null) {
      node.attr("opacity", null)
      link.attr("stroke-opacity", null)
      return
    }

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
    <>
      <div style={{ width: "100%", height: "70vh" }} ref={containerRef}>
        <svg
          ref={svgRef}
          width={width + margin.left + margin.right}
          height={height + margin.top + margin.bottom}
          style={{ border: "1px solid red" }}
        />
      </div>
      <div
        id="subgraph"
        hidden={selectedId === null}
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
    </>
  )
}
