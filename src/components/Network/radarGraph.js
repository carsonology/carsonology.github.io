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
  polygonCentroid,
} from "./utils"

// keeps bubble centers inside any one of the circles, each grown by `tolerance` px
function forceVenn(centers, radius, tolerance = 0) {
  let nodes
  const limit = radius + tolerance

  function force() {
    for (const d of nodes) {
      let inside = false
      let nearest = null // the circle this node is closest to leaving
      let nearestOver = Infinity

      for (const [cx, cy] of centers) {
        const dx = d.x - cx
        const dy = d.y - cy
        const dist = Math.hypot(dx, dy)
        const over = dist - limit // > 0 means outside this circle

        if (over <= 0) {
          inside = true
          break
        } // inside one circle is enough
        if (over < nearestOver) {
          nearestOver = over
          nearest = { dx, dy, dist }
        }
      }

      if (!inside && nearest) {
        // slide it back along the line to that circle's center, onto the boundary
        d.x -= (nearest.dx / nearest.dist) * nearestOver
        d.y -= (nearest.dy / nearest.dist) * nearestOver
      }
    }
  }

  force.initialize = (n) => (nodes = n)
  return force
}

const margin = {
  top: 40,
  bottom: 40,
  left: 20,
  right: 20,
}

const Radar = ({}) => {
  const containerRef = useRef(null)
  const svgRef = useRef(null)
  const { width: w, height: h } = useContainerSize(containerRef)

  const width = w - margin.left - margin.right
  const height = h - margin.top - margin.bottom

  const { nodes, links } = miserables

  const axisTick = 6
  //   const height= 600
  const marginx = 50
  const vennRatio = 1.2

  useEffect(() => {
    const axisName = ["Graphics", "Design & illustration", "Interactives"]
    const venn = ["#FAA9B2", "#F8CD29", "#1D95BB"]

    const maxValue = 100
    const angleSlice = (Math.PI * 2) / 3

    const lineStroke = "#201E1F"

    const svg = d3.select(svgRef.current)

    svg.select(".triangle").remove()

    const g = svg.append("g").attr("class", "triangle")

    let placement = {
      radius: (width - 2 * marginx) / 2,
      xOffset: width / 2,
      yOffset: marginx + width / 2,
    }

    let rScale = d3
      .scaleLinear()
      .domain([0, maxValue])
      .range([0, placement.radius])

    let radarLine = d3
      .lineRadial()
      .curve(d3.curveLinearClosed)
      .radius((d) => rScale(d))
      .angle((d, i) => i * angleSlice)

    const axisGrid = g
      .append("g")
      .attr("class", "axisWrapper")
      .attr(
        "transform",
        `translate(${placement.xOffset}, ${placement.yOffset})`,
      )

    // venn
    const vennRadius =
      (placement.radius / (axisTick * 2)) * axisTick * vennRatio
    const transR = (placement.radius - vennRadius * 2) / 2
    axisGrid
      .append("g")
      .attr("class", "venn")
      .selectAll("circle")
      .data(venn)
      .enter()
      .append("circle")
      .attr(
        "cx",
        (d, i) => rScale(maxValue / 2) * Math.cos(angleSlice * i - Math.PI / 2),
      )
      .attr(
        "cy",
        (d, i) => rScale(maxValue / 2) * Math.sin(angleSlice * i - Math.PI / 2),
      )
      .attr("r", vennRadius)
      //   .attr("fill", (d) => d)
      .attr("fill", (d, i) => `url('#myGradient-${i + 1}')`)
      //   .attr("fill-opacity", 0)
      .attr("stroke", "var(--text-color)")
      .attr("stroke-width", 0.75)
      .attr("stroke-opacity", 0.7)
      .attr("stroke-dasharray", "4,5")
      .attr(
        "transform",
        (d, i) =>
          `translate(
              ${transR * Math.cos(angleSlice * i - Math.PI / 2)},
              ${transR * Math.sin(angleSlice * i - Math.PI / 2)})
            `,
      )

    const tickData = new Array(axisTick).fill([]).map((item, index) => {
      let r = (maxValue / axisTick) * (index + 1)
      return [r, r, r]
    })

    // grid line
    // axisGrid
    //   .append("g")
    //   .selectAll("g")
    //   .data(tickData)
    //   .join("g")
    //   .attr("fill", "transparent")
    //   .attr("opacity", 0.3)
    //   .attr("stroke", lineStroke)
    //   .attr("stroke-dasharray", "5 5")
    //   .append("path")
    //   .attr("d", (d) => radarLine(d))

    // axis line
    let axisLine = axisGrid
      .selectAll(".axis-line")
      .data(axisName)
      .enter()
      .append("g")
      .attr("class", "axis-line")

    // axisLine
    //   .append("line")
    //   .attr("x1", (d, i) => rScale(0) * Math.cos(angleSlice * i - Math.PI / 2))
    //   .attr("y1", (d, i) => rScale(0) * Math.sin(angleSlice * i - Math.PI / 2))
    //   .attr(
    //     "x2",
    //     (d, i) => rScale(maxValue) * Math.cos(angleSlice * i - Math.PI / 2),
    //   )
    //   .attr(
    //     "y2",
    //     (d, i) => rScale(maxValue) * Math.sin(angleSlice * i - Math.PI / 2),
    //   )
    //   .attr("stroke", lineStroke)
    //   .attr("opacity", 0.3)

    // axisLine
    //   .append("circle")
    //   .attr(
    //     "cx",
    //     (d, i) => rScale(maxValue) * Math.cos(angleSlice * i - Math.PI / 2),
    //   )
    //   .attr(
    //     "cy",
    //     (d, i) => rScale(maxValue) * Math.sin(angleSlice * i - Math.PI / 2),
    //   )
    //   .attr("r", 3)
    //   .attr("stroke", "#201E1F")

    axisLine
      .append("text")
      .attr(
        "x",
        (d, i) => rScale(maxValue) * Math.cos(angleSlice * i - Math.PI / 2),
      )
      .attr(
        "y",
        (d, i) => rScale(maxValue) * Math.sin(angleSlice * i - Math.PI / 2),
      )
      .attr("dy", (d, i) => (i > 0 ? -300 : -10))
      .attr("text-anchor", "middle")
      .attr("fill", "var(--text-color)")
      .style("font-size", 24)
      .style("font-weight", "bold")
      //   .style("color", "var(--text-color)")
      .style("font-family", "Archivo")
      .text((d) => d)

    const photoImgWidth = 50
    const shapeColor = "#CF141E"

    // shape
    let shape = axisGrid
      .append("g")
      .attr("class", "color-shape")
      .append("path")
      .attr("d", (d) => "M0,0L0,0L0,0Z")
      .attr("stroke", shapeColor)
      .attr("stroke-width", 2)
      .attr("fill", shapeColor)
      .attr("fill-opacity", 0.25)

    // --- where each project belongs: weighted average of the 3 corners ---
    const vertices = [0, 1, 2].map((i) => [
      rScale(maxValue) * Math.cos(angleSlice * i - Math.PI / 2),
      rScale(maxValue) * Math.sin(angleSlice * i - Math.PI / 2),
    ])

    const vennCenters = [0, 1, 2].map((i) => {
      const a = angleSlice * i - Math.PI / 2
      const dist = rScale(maxValue / 2) + transR // base offset + the translate you apply
      return [dist * Math.cos(a), dist * Math.sin(a)]
    })

    function position(d) {
      const s = [
        d.tags?.includes("Graphics") ? 0.8 : 0.1,
        d.tags?.includes("Design") || d.tags?.includes("Illustration")
          ? 0.8
          : 0.1,
        d.tags?.includes("Interactive") ? 0.8 : 0.1,
      ]
      const total = d3.sum(s)
      if (!total) return [0, 0]
      return [
        d3.sum(s, (v, i) => (v / total) * vertices[i][0]),
        d3.sum(s, (v, i) => (v / total) * vertices[i][1]),
      ]
    }

    // copies, so the simulation doesn't write x/y onto your imported data
    const simNodes = nodes
      .filter((d) => d.type !== "tag")
      .map((d) => {
        const [x, y] = position(d)
        return { ...d, tx: x, ty: y, x, y, r0: photoImgWidth, r: photoImgWidth }
      })

    //   const nodeRadius = photoWid

    // --- one group per project: image + border + label move together ---
    const photoGroup = axisGrid
      .append("g")
      .attr("class", "photo")
      .selectAll("g")
      .data(simNodes)
      .join("g")
      .attr("transform", (d) => `translate(${d.x}, ${d.y})`)

    const defs = svg.select("defs")

    defs
      .selectAll("pattern")
      .data(nodes)
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

    photoGroup
      .append("circle")
      .attr("r", (d) => d.r)
      .attr("fill", (d) => `url(#img-${d.id.split(" ").join("-")})`)
      .attr("stroke-width", 1.5)
      .attr("stroke", "var(--text-color)")

    const collideR = (d) => d.r + 5
    const collide = d3.forceCollide(collideR).iterations(3)

    // --- forces ---
    const simulation = d3
      .forceSimulation(simNodes)
      .force("x", d3.forceX((d) => d.tx).strength(0.15)) // pull toward target
      .force("y", d3.forceY((d) => d.ty).strength(0.15))
      .force("collide", collide)
      .force("venn", forceVenn(vennCenters, vennRadius / 2, 90))
      .on("tick", () => {
        photoGroup.attr("transform", (d) => `translate(${d.x}, ${d.y})`)
      })
      //   .alpha(0.3)
      .velocityDecay(0.5)
      .alphaDecay(0.005)

    function grow(circle, d, target) {
      circle
        .transition("grow")
        .duration(500)
        .ease(d3.easeCubicOut)
        .tween("r", function () {
          const i = d3.interpolateNumber(d.r, target)
          return (t) => {
            d.r = i(t)
            d3.select(this).attr("r", d.r)
            collide.radius(collideR) // makes d3 re-read every node's radius
          }
        })
      simulation.alpha(Math.max(simulation.alpha(), 0.3)).restart()
    }

    photoGroup
      .style("cursor", "pointer")
      .on("mouseenter", function (event, d) {
        d3.select(this).raise() // draw the hovered bubble above its neighbors
        grow(d3.select(this).select("circle"), d, d.r0 * 1.3)
      })
      .on("mouseleave", function (event, d) {
        grow(d3.select(this).select("circle"), d, d.r0)
      })

    return () => {
      simulation.stop()
      photoGroup.selectAll("circle").interrupt("grow")
    }
  }, [width, height])

  return (
    <div
      style={{
        width: "100vw",
        height: "75vw",
        // aspectRatio: 1,
        maxWidth: 1200,
        margin: "auto",
      }}
      ref={containerRef}
    >
      <svg
        ref={svgRef}
        width={width + margin.left + margin.right}
        height={height + margin.top + margin.bottom}
        style={{
          overflow: "visible",
        }}
      >
        <defs>
          <radialGradient id="myGradient-1">
            <stop offset="0%" stop-color="rgba(188,214,237,.8)" />
            <stop offset="80%" stop-color="rgba(188,214,237,.3)" />
            <stop offset="110%" stop-color="rgba(188,214,237,0)" />
          </radialGradient>
          <radialGradient id="myGradient-2">
            <stop offset="0%" stop-color="rgba(253,199,22,.6)" />
            <stop offset="80%" stop-color="rgba(253,199,22,.2)" />
            <stop offset="110%" stop-color="rgba(253,199,22,0)" />
          </radialGradient>
          <radialGradient id="myGradient-3">
            <stop offset="0%" stop-color="rgba(122,173,103,.7)" />
            <stop offset="80%" stop-color="rgba(122,173,103,0.2)" />
            <stop offset="110%" stop-color="rgba(122,173,103,0)" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}

export default Radar
