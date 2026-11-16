import { useEffect, useRef, useState } from "react"
import * as d3 from "d3"
import miserables from "./miserables"
import {
  useContainerSize,
  animateRadius,
  drag,
  forceBoundary,
  clampToBounds,
  buildNeighborMap,
} from "./utils"

const margin = {
  top: 40,
  bottom: 40,
  left: 20,
  right: 20,
}

export const ForceGraph = ({
  setCurrentView,
  setProjectIdSelectedFromHome,
}) => {
  // refs
  const containerRef = useRef(null)
  const svgRef = useRef(null)
  const graphRef = useRef({}) // shares main-graph data with the subgraph effect

  const { width: w, height: h } = useContainerSize(containerRef)

  const width = w - margin.left - margin.right
  const height = h - margin.top - margin.bottom
  const linkDistance = w * 0.15
  console.log(linkDistance)

  const { nodes, links } = miserables

  // render the main force graph + simulation
  useEffect(() => {
    const baseRadius = (d) => (d?.select ? 90 : 8) // tags are slightly larger

    nodes.forEach((d) => {
      d.r0 = baseRadius(d) // resting radius, never changes
      d.r = d.r0 // current radius, animated on hover
    })

    const svg = d3.select(svgRef.current)
    svg.selectAll("*").remove()

    const neighbors = buildNeighborMap(nodes, links)
    const idOf = (x) => (typeof x === "object" ? x.id : x)

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
      .append("g")
      .attr("class", "links")
      .selectAll(".link")
      .data(miserables.links)
      .join((enter) => enter.append("line").attr("class", "link"))
      .attr("stroke", "#634646")
      // .style("mix-blend-mode", "multiply")
      .attr("stroke-width", 0.75)
      .attr("stroke-opacity", 0.25)

    // Nodes data join
    const node = g
      .append("g")
      .attr("class", "nodes")
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
      // .style("fill", (d) => color(d.group))
      .style("fill", (d) =>
        d?.select
          ? `url(#img-${d.id.split(" ").join("-")})`
          : d.type == "tag"
            ? "#ede7e7"
            : "#634646",
      )
      .attr("stroke", "var(--text-color)")
      .attr("stroke-width", 2)
      // .style("mix-blend-mode", "multiply")/
      .attr("r", (d) => d.r)
      .call(drag(simulation))
      .on("mouseenter", function (event, d) {
        animateRadius(this, d, d.r0 + (d?.select ? 10 : 4))
        highlight(d)
        console.log(d)
      })
      .on("mouseleave", function (event, d) {
        animateRadius(this, d, d.r0)
        clearHighlight()
      })
      .style("cursor", "pointer")
      .on("click", (event, d) => {
        console.log("clicked", d.id, "event")
        setCurrentView("project")
        setProjectIdSelectedFromHome(d.id)

        // later: show the subgraph here
        // for project nodes you could also do: if (d.url) window.location.href = d.url;
      })

    // 1. Define a <pattern> for each data item inside <defs>
    const defs = svg.append("defs")

    defs
      .selectAll("pattern")
      .data(nodes.filter((n) => Boolean(n?.select)))
      .enter()
      .append("pattern")
      .attr("id", (d) => `img-${d.id.split(" ").join("-")}`)
      .attr("width", 1)
      .attr("height", 1)
      .attr("patternContentUnits", "objectBoundingBox")
      .append("image")
      .attr("href", (d) => `thumbnails/${d?.image?.src}`)
      .attr("width", 1)
      .attr("height", 1)
      .attr("preserveAspectRatio", "xMidYMid slice") // Crops image cleanly to fit circle

    const labels = g
      .append("g")
      .attr("class", "labels")
      .append("g")
      .attr("class", "label-backgrounds")
      .selectAll("text")
      .data(nodes)
      .join("text")
      .text((d) => d.id)
      .attr("font-size", (d) => (d.type == "tag" || d?.select ? 14 : 11))
      .attr("font-weight", (d) =>
        d.type == "tag" || d?.select ? "bold" : "normal",
      )
      .attr("fill", "white")
      .attr("stroke", "#ede7e7")
      .attr("stroke-width", 2.5)
      .attr("stroke-linecap", "round")
      .attr("text-anchor", "middle")
      .attr("dy", (d) => -1 * d.r - 4)
      .style("pointer-events", "none")

    const labels2 = g
      .append("g")
      .attr("class", "labels")
      .selectAll("text")
      .data(nodes)
      .join("text")
      .text((d) => d.id)
      .attr("font-size", (d) => (d.type == "tag" || d?.select ? 14 : 11))
      .attr("font-weight", (d) =>
        d.type == "tag" || d?.select ? "bold" : "normal",
      )
      .attr("fill", "#545454")
      .attr("text-anchor", "middle")
      .attr("dy", (d) => -1 * d.r - 4)
      .style("pointer-events", "none")

    function highlight(d) {
      const ids = neighbors.get(d.id)
      const touches = (l) => idOf(l.source) === d.id || idOf(l.target) === d.id

      node
        .transition("fade")
        .duration(150)
        .attr("opacity", (n) => (ids.has(n.id) ? 1 : 0.15))
      labels
        .transition("fade")
        .duration(150)
        .attr("opacity", (n) => (ids.has(n.id) ? 1 : 0.1))
      link
        .transition("fade")
        .duration(150)
        .attr("stroke-opacity", (l) => (touches(l) ? 1 : 0.05))
    }

    function clearHighlight() {
      node.transition("fade").duration(150).attr("opacity", 1)
      labels.transition("fade").duration(150).attr("opacity", 1)
      link.transition("fade").duration(150).attr("stroke-opacity", 1)
    }

    simulation
      .nodes(miserables.nodes)
      .force(
        "link",
        d3
          .forceLink(links)
          .id((d) => d.id)
          .distance((d) => (d?.select ? 200 : linkDistance))
          .strength(0.5)
          .iterations(3),
      )
      .alpha(0.5)
      .alphaDecay(0.02)
      .velocityDecay(0.8)
      // .force("charge", d3.forceManyBody().strength(-200).distanceMax(50))
      .force(
        "charge",
        d3
          .forceManyBody()
          .strength((d) => (d?.select ? -500 : -50))
          // .strength(-300)
          .distanceMax(80),
      )
      .force(
        "collide",
        d3.forceCollide((d) => (d?.select ? 120 : 60)),
      )
      .force("x", d3.forceX(width / 2).strength(0.05))
      .force("y", d3.forceY(height / 2).strength(0.05))
      .force(
        "boundary",
        forceBoundary(() => ({
          width,
          height,
        })),
      )
      .on("tick", () => {
        // clampToBounds(nodes, w, h)
        link
          .attr("x1", (d) => d.source.x)
          .attr("y1", (d) => d.source.y)
          .attr("x2", (d) => d.target.x)
          .attr("y2", (d) => d.target.y)

        node.attr("cx", (d) => d.x).attr("cy", (d) => d.y)
        labels.attr("x", (d) => d.x).attr("y", (d) => d.y)
        labels2.attr("x", (d) => d.x).attr("y", (d) => d.y)
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
      setProjectIdSelectedFromHome(d.id)
      setCurrentView("project")
    })

    graphRef.current = { nodes, links, node, link }

    return () => {
      simulation.stop()
      svg.on(".zoom", null).on("click", null)
      node.interrupt("hover")
    }
  }, [w, h])

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "180vh",
          maxWidth: 1000,
          margin: "auto",
        }}
        ref={containerRef}
      >
        <svg
          ref={svgRef}
          width={width + margin.left + margin.right}
          height={height + margin.top + margin.bottom}
          style={{ border: "1px solid red", overflow: "visible" }}
        />
      </div>
      {/* <Subgraph nodes={nodes} links={links} /> */}
    </>
  )
}
