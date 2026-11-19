import { useEffect, useRef, useState } from "react"
import * as d3 from "d3"
import miserables from "./miserables"
import { styled } from "@stitches/react"

import { useContainerSize } from "./utils"

function forceVenn(centers, radiusAt, tolerance = 0) {
  let nodes

  function force() {
    for (const d of nodes) {
      let inside = false
      let nearest = null
      let nearestOver = Infinity

      centers.forEach(([cx, cy], i) => {
        if (inside) return
        const dx = d.x - cx
        const dy = d.y - cy
        const dist = Math.hypot(dx, dy) || 1
        // the rim in the direction this node lies from the center
        const over = dist - (radiusAt(i, Math.atan2(dy, dx)) + tolerance)
        if (over <= 0) inside = true
        else if (over < nearestOver) {
          nearestOver = over
          nearest = { dx, dy, dist }
        }
      })

      if (!inside && nearest) {
        d.x -= (nearest.dx / nearest.dist) * nearestOver
        d.y -= (nearest.dy / nearest.dist) * nearestOver
      }
    }
  }

  force.initialize = (n) => (nodes = n)
  return force
}

const margin = {
  top: 120,
  bottom: 40,
  left: 20,
  right: 20,
}

const Container = styled("div", {
  width: "100vw",
  height: "100vw",
  maxHeight: 1350,
  // aspectRatio: 1,
  maxWidth: 1350,
  margin: "auto",
  // border: "1px solid red",

  "@media screen and (max-width: 600px)": {
    height: "120vw",
  },
})

const Radar = ({}) => {
  const containerRef = useRef(null)
  const svgRef = useRef(null)
  const { width: w, height: h } = useContainerSize(containerRef)

  const width = w
  const height = h

  const nodes = miserables.nodes.map((m) => {
    if (m.id == "Measles memories") {
      return { ...m, tags: ["Interactive"] }
    } else if (m.id == "Wellness influencers") {
      return { ...m, tags: ["Illustration"] }
    } else {
      return m
    }
  })

  const axisTick = 6
  const marginx = width > 600 ? 50 : 5
  const vennRatio = 1.2

  const maxValue = 100
  const angleSlice = (Math.PI * 2) / 3

  const angle = (i) => angleSlice * i + Math.PI / 2 // vertex 0 points down, 1 top-left, 2 top-right

  let placement = {
    radius: (width - 2 * marginx) / 2,
    xOffset: width / 2,
    yOffset:
      (width - 2 * marginx) / 2 + (width < 600 ? 10 : width > 1000 ? -30 : 0),
    //  margin.top + width / (width > 600 ? 3.25 : 4),
  }

  console.log(width)

  // venn
  const vennRadius = (placement.radius / (axisTick * 2)) * axisTick * vennRatio
  const transR = (placement.radius - vennRadius * 2) / 2

  let rScale = d3
    .scaleLinear()
    .domain([0, maxValue])
    .range([0, placement.radius])

  const vennCenters = [0, 1, 2].map((i) => {
    const a = angle(i)
    const dist = rScale(maxValue / 2) + transR // base offset + the translate you apply
    return [dist * Math.cos(a), dist * Math.sin(a)]
  })

  useEffect(() => {
    const axisName = ["Illustration", "Graphics", "Interactives"]
    const venn = ["#FAA9B2", "#F8CD29", "#1D95BB"]

    const svg = d3.select(svgRef.current)

    // const svgVenn = d3.select(svgVennRef.current)

    svg.select(".triangle").remove()

    const g = svg.append("g").attr("class", "triangle")

    const axisGrid = g
      .append("g")
      .attr("class", "axisWrapper")
      .attr(
        "transform",
        `translate(${placement.xOffset}, ${placement.yOffset})`,
      )

    // one shared recipe for all three circles
    const WAVES = [
      // { k: 40, amp: 0.009 }, // petals
    ]

    // cos peaks at angle(i), the direction pointing away from the triangle's center
    const radiusAt = (i, t) =>
      vennRadius *
      (1 + d3.sum(WAVES, (w) => w.amp * Math.cos(w.k * (t - angle(i)))))

    // the outline as a path, centered on (0, 0)
    const blobPath = (i) =>
      d3.line().curve(d3.curveLinearClosed)(
        d3.range(240).map((j) => {
          const t = (j / 240) * 2 * Math.PI
          const r = radiusAt(i, t)
          return [r * Math.cos(t), r * Math.sin(t)]
        }),
      )

    axisGrid
      .append("g")
      .attr("class", "venn")
      .selectAll("path")
      .data(venn)
      .join("path")
      .attr("d", (d, i) => blobPath(i))
      .attr(
        "transform",
        (d, i) => `translate(${vennCenters[i][0]}, ${vennCenters[i][1]})`,
      )
      .attr("fill", (d, i) => `url('#myGradient-${i + 1}')`)
      .attr("stroke", "var(--text-color)")
      .attr("stroke-width", 0.75)
      .attr("stroke-opacity", 0.7)
      .attr("stroke-dasharray", "4,5")

    axisGrid
      .append("g")
      .attr("class", "venn-labels")
      .selectAll("text")
      .data([1, 2, 3])
      .join("text")
      .attr("text-anchor", "middle")
      .attr("font-size", width > 600 ? 24 : 16)
      .attr("font-weight", "bold")
      .attr("letter-spacing", 2)
      .attr("fill", "var(--text-color)")
      .style("pointer-events", "none")
      .append("textPath")
      .attr("href", (d, i) => `#vennPath-${i}`)
      .attr("startOffset", (_, i) => (i == 0 ? "25%" : i == 1 ? "22%" : "32%"))
      .attr("textAnchor", "middle")
      .text((_, i) => axisName[i])
      .attr("side", "right")

    const photoImgWidth = width > 1000 ? 50 : width < 750 ? width * 0.05 : 40

    // --- where each project belongs: weighted average of the 3 corners ---
    const vertices = [0, 1, 2].map((i) => [
      rScale(maxValue) * Math.cos(angle(i)),
      rScale(maxValue) * Math.sin(angle(i)),
    ])

    function position(d) {
      const s = [
        d.tags?.includes("Design") || d.tags?.includes("Illustration")
          ? 0.8
          : 0.1,
        d.tags?.includes("Graphics") ? 0.8 : 0.1,
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
      .filter((d) => d.type !== "tag" && !d?.excludeFromRadar)
      .map((d) => {
        const [x, y] = position(d)
        return { ...d, tx: x, ty: y, x, y, r0: photoImgWidth, r: photoImgWidth }
      })

    const photoGroup = axisGrid
      .append("g")
      .attr("class", "photo")
      .selectAll("g")
      .data(simNodes)
      .join("g")
      .attr("transform", (d) => `translate(${d.x}, ${d.y})`)
      .style("transition", "300ms opacity")

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
      .append("a")
      .attr("target", "_blank")
      .attr("href", (d) => d.url)
      .append("circle")
      .attr("r", (d) => d.r)
      .attr("fill", (d) => `url(#img-${d.id.split(" ").join("-")})`)
      .attr("stroke-width", 1.5)
      .attr("stroke", "var(--text-color)")

    // const labels = axisGrid
    //   .append("g")
    //   .attr("class", "labels")
    //   .selectAll("text")
    //   .data([...simNodes, ...simNodes])
    //   .join("text")
    //   .text((d) => d.id)
    //   .attr("font-size", 16)
    //   .attr("fill", (d, i) =>
    //     i < simNodes.length ? "white" : "var(--text-color)",
    //   )
    //   .attr("font-weight", "bold")
    //   .attr("stroke-width", (d, i) => (i < simNodes.length ? 5 : 0))
    //   .attr("stroke", (d, i) => (i < simNodes.length ? "white" : 0))
    //   .attr("stroke-linecap", "round")
    //   .attr("stroke-linejoin", "round")
    //   .attr("text-anchor", "middle")
    //   .attr("dy", (d) => -1.3 * d.r0 - 10)
    //   .style("pointer-events", "none")
    //   .style("opacity", 0)
    //   .style("transition", "300ms opacity")

    const hoverLabel = axisGrid
      .append("g")
      .style("pointer-events", "none")
      .style("opacity", 0)
      .style("transition", "300ms opacity")

    ;["white", "var(--text-color)"].forEach((fill, i) => {
      hoverLabel
        .append("text")
        .attr("font-size", 16)
        .attr("font-weight", "bold")
        .attr("text-anchor", "middle")
        .attr("dy", -1.3 * photoImgWidth - 10)
        .attr("fill", fill)
        .attr("stroke", i === 0 ? "#ede7e7" : "none")
        .attr("stroke-width", i === 0 ? 5 : 0)
        .attr("stroke-linecap", "round")
        .attr("stroke-linejoin", "round")
    })

    let active = null

    const collideR = (d) => d.r + 5
    const collide = d3.forceCollide(collideR).iterations(3)

    // --- forces ---
    const simulation = d3
      .forceSimulation(simNodes)
      .force("x", d3.forceX((d) => d.tx).strength(0.15)) // pull toward target
      .force("y", d3.forceY((d) => d.ty).strength(0.15))
      .force("collide", collide)
      .force(
        "venn",
        forceVenn(vennCenters, (i, t) => radiusAt(i, t) / 2, 150),
      )
      .on("tick", () => {
        photoGroup.attr("transform", (d) => `translate(${d.x}, ${d.y})`)
        // labels.attr("transform", (d) => `translate(${d.x}, ${d.y})`)
        if (active)
          hoverLabel.attr("transform", `translate(${active.x}, ${active.y})`)
      })
      .velocityDecay(0.5)
      .alphaDecay(0.03)
      .alphaMin(0.02)

    function grow(circle, d, target) {
      circle
        .transition("grow")
        .duration(300)
        .ease(d3.easeCubicOut)
        .tween("r", function () {
          const i = d3.interpolateNumber(d.r, target)
          return (t) => {
            d.r = i(t)
            d3.select(this).attr("r", d.r)
            collide.radius(collideR) // makes d3 re-read every node's radius
          }
        })
      simulation.alpha(Math.max(simulation.alpha(), 0.1)).restart()
    }

    photoGroup
      .style("cursor", "pointer")
      .on("mouseenter", function (event, d) {
        if (width < 600) {
          return
        }
        console.log(this)
        // d3.selectAll(simNodes).attr("opacity", 0.3)
        // nodes.enter().attr("opacity", 0.5)
        // d3.select(this).raise() // draw the hovered bubble above its neighbors
        grow(d3.select(this).select("circle"), d, d.r0 * 1.3)
        photoGroup.style("opacity", (n) => (n === d ? 1 : 0.5)) // dim everyone else
        // labels.style("opacity", (n) => (n === d ? 1 : 0)) // dim everyone else
        active = d
        hoverLabel.selectAll("text").text(d.id)
        hoverLabel
          .attr("transform", `translate(${d.x}, ${d.y})`)
          .style("opacity", 1)
      })
      .on("mouseleave", function (event, d) {
        if (width < 600) {
          return
        }
        grow(d3.select(this).select("circle"), d, d.r0)
        photoGroup.style("opacity", null) // remove the override, back to fully visible
        // labels.style("opacity", 0) // dim everyone else
        active = null
        hoverLabel.style("opacity", 0)
      })

    return () => {
      simulation.stop()
      photoGroup.selectAll("circle").interrupt("grow")
    }
  }, [width, height])

  const createCirclePath = (x, y, r, flip = false) => `
    M ${x} ${y + r}
    a ${r},${r} 0 1,${flip ? 0 : 1} 0, ${r * -2}
    a ${r},${r} 0 1,1 0, ${r * 2}
    `

  return (
    <Container ref={containerRef}>
      {/* <svg
        className="venn"
        ref={svgVennRef}
        width={width + margin.left + margin.right}
        height={height + margin.top + margin.bottom}
        style={{
          overflow: "visible",
          transform: `translateZ(0)`,
        }}
      ></svg> */}
      <svg
        ref={svgRef}
        width={width}
        height={height}
        style={{
          overflow: "visible",
          transform: `translateZ(0)`,
        }}
      >
        <defs>
          <radialGradient id="myGradient-2">
            <stop offset="0%" stop-color="#BBD9F790" />
            <stop offset="80%" stop-color="#BBD9F730" />
            <stop offset="110%" stop-color="#BBD9F700" />
          </radialGradient>
          <radialGradient id="myGradient-3">
            <stop offset="0%" stop-color="#FFAB0B90" />
            <stop offset="80%" stop-color="#FFAB0B30" />
            <stop offset="110%" stop-color="#FFAB0B00" />
          </radialGradient>
          <radialGradient id="myGradient-1">
            <stop offset="0%" stop-color="#FB8DA690" />
            <stop offset="80%" stop-color="#FB8DA630" />
            <stop offset="110%" stop-color="#FB8DA600" />
          </radialGradient>

          {vennCenters.map((v, i) => {
            return (
              <path
                id={`vennPath-${i}`}
                d={createCirclePath(
                  v[0],
                  v[1],
                  i == 0 ? vennRadius + 30 : vennRadius + 12,
                  i == 0,
                )}
                transform={`rotate(86, ${v[0]}, ${v[1]})`}
              />
            )
          })}
        </defs>
      </svg>
    </Container>
  )
}

export default Radar
