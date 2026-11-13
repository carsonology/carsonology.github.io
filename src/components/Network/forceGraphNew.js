import { useEffect, useRef, useState } from "react"
import * as d3 from "d3"
import miserables from "./miserables.json"

function drag(simulation) {
  function dragstarted(event) {
    if (!event.active) simulation.alphaTarget(0.3).restart()
    event.subject.fx = event.subject.x
    event.subject.fy = event.subject.y
  }

  function dragged(event) {
    event.subject.fx = event.x
    event.subject.fy = event.y
  }

  function dragended(event) {
    if (!event.active) simulation.alphaTarget(0)
    event.subject.fx = null
    event.subject.fy = null
  }

  return d3
    .drag()
    .on("start", dragstarted)
    .on("drag", dragged)
    .on("end", dragended)
}

const SUB_SIZE = 300

// links must already have object source/target (true once forceLink has run)
function neighborIds(centerId, links) {
  const ids = new Set([centerId])
  for (const l of links) {
    if (l.source.id === centerId) ids.add(l.target.id)
    if (l.target.id === centerId) ids.add(l.source.id)
  }
  return ids
}

export const ForceGraph = () => {
  const svgRef = useRef(null)
  const subSvgRef = useRef(null)
  const graphRef = useRef({}) // shares main-graph data with the subgraph effect
  const [selectedId, setSelectedId] = useState(null)

  const margin = {
    top: 40,
    bottom: 10,
    left: 20,
    right: 20,
  }
  const width = 700 - margin.left - margin.right
  const height = 500 - margin.top - margin.bottom

  useEffect(() => {
    const { nodes, links } = miserables

    const baseRadius = (d) => (d.type === "tag" ? 8 : 5)

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

    node.style("fill", (d) => color(d.group))

    const collideRadius = (d) => d.r + 7
    const chargeStrength = (d) => -60 * (d.r / d.r0) ** 2

    const collide = d3.forceCollide(collideRadius)
    const charge = d3.forceManyBody().strength(chargeStrength).distanceMax(150)

    simulation
      .nodes(miserables.nodes)
      .force(
        "link",
        d3
          .forceLink(links)
          .id((d) => d.id)
          .distance(50)
          .strength(1)
          .iterations(3),
      )
      .alphaDecay(0.01)
      .force("charge", d3.forceManyBody().strength(-120).distanceMax(100))
      .force(
        "charge",
        d3
          .forceManyBody()
          .strength((d) => (d.type === "tag" ? -300 : -60))
          .distanceMax(300),
      )
      .force("collide", d3.forceCollide(9))
      // .force("center", d3.forceCenter(width / 2, height / 2))
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
      })

    node.call(drag(simulation))

    node.attr("r", (d) => d.r)

    function animateRadius(el, d, target) {
      d3.select(el)
        .transition("hover")
        .duration(150)
        .ease(d3.easeCubicOut)
        .tween("radius", () => {
          const i = d3.interpolateNumber(d.r, target)
          return (t) => {
            d.r = i(t)
            d3.select(el).attr("r", d.r)
            collide.radius(collideRadius) // re-read every node's radius
            charge.strength(chargeStrength) // re-read every node's strength
          }
        })
    }

    node
      .on("mouseenter", function (event, d) {
        animateRadius(this, d, d.r0 * 1.6)
        // simulation.alpha(Math.max(simulation.alpha(), 0.3)).restart()
      })
      .on("mouseleave", function (event, d) {
        animateRadius(this, d, d.r0)
        // simulation.alpha(Math.max(simulation.alpha(), 0.3)).restart()
      })

    node.style("cursor", "pointer").on("click", (event, d) => {
      console.log("clicked", d.id)
      // later: show the subgraph here
      // for project nodes you could also do: if (d.url) window.location.href = d.url;
    })

    const zoom = d3
      .zoom()
      .scaleExtent([1, 6])
      .on("zoom", (event) => {
        g.attr("transform", event.transform)
      })

    svg.call(zoom)

    // const nodeById = new Map(nodes.map((d) => [d.id, d]))

    // ---- click selects a node; clicking empty space clears it ----
    node.on("click", (event, d) => {
      event.stopPropagation()
      setSelectedId(d.id)
    })

    graphRef.current = { nodes, links, node, link }

    return () => {
      simulation.stop()
      svg.on(".zoom", null).on("click", null)
      node.interrupt("hover")
    }
  }, [])

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

    const ids = neighborIds(selectedId, links)
    const touchesCenter = (l) =>
      l.source.id === selectedId || l.target.id === selectedId

    // dim everything except the selected node and its neighbors
    node.attr("opacity", (d) => (ids.has(d.id) ? 1 : 0.15))
    link.attr("stroke-opacity", (l) => (touchesCenter(l) ? 0.9 : 0.05))

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
      <svg
        ref={svgRef}
        width={width + margin.left + margin.right}
        height={height + margin.top + margin.bottom}
        style={{ border: "1px solid red" }}
      ></svg>
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
