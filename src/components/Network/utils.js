import { useLayoutEffect, useState } from "react"
import * as d3 from "d3"

export function drag(simulation) {
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

// links must already have object source/target (true once forceLink has run)
export function getNeighborIds(centerId, links) {
  const ids = new Set([centerId])
  for (const l of links) {
    if (l.source.id === centerId) ids.add(l.target.id)
    if (l.target.id === centerId) ids.add(l.source.id)
  }
  return ids
}

export function animateRadius(el, d, target) {
  d3.select(el)
    .transition("hover")
    .duration(150)
    .ease(d3.easeCubicOut)
    .tween("radius", () => {
      const i = d3.interpolateNumber(d.r, target)
      return (t) => {
        d.r = i(t)
        d3.select(el).attr("r", d.r)
      }
    })
}

export function useContainerSize(
  ref,
  fallback = { width: null, height: null },
) {
  const [size, setSize] = useState(fallback)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    const update = (w, h) => {
      const width = Math.round(w)
      const height = Math.round(h)
      // returning prev keeps the same object, so React skips the re-render
      setSize((prev) =>
        prev.width === width && prev.height === height
          ? prev
          : { width, height },
      )
    }

    const rect = el.getBoundingClientRect()
    update(rect.width, rect.height) // measure before first paint

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      update(width, height)
    })
    observer.observe(el)

    return () => observer.disconnect()
  }, [ref])

  return size
}

export function forceBoundary(getBounds, padding = 10, strength = 0.3) {
  let nodes

  function force() {
    const { width, height } = getBounds()
    for (const d of nodes) {
      const p = padding + (d.r ?? 0) // leave room for the node's own radius
      if (d.x < p) d.vx += (p - d.x) * strength
      else if (d.x > width - p) d.vx -= (d.x - (width - p)) * strength
      if (d.y < p) d.vy += (p - d.y) * strength
      else if (d.y > height - p) d.vy -= (d.y - (height - p)) * strength
    }
  }

  force.initialize = (n) => (nodes = n)
  return force
}

export function clampToBounds(nodes, width, height, padding = 4) {
  for (const d of nodes) {
    const p = padding + (d.r ?? 0)
    if (d.x < p) {
      d.x = p
      d.vx = 0
    } else if (d.x > width - p) {
      d.x = width - p
      d.vx = 0
    }
    if (d.y < p) {
      d.y = p
      d.vy = 0
    } else if (d.y > height - p) {
      d.y = height - p
      d.vy = 0
    }
  }
}

const idOf = (x) => (typeof x === "object" ? x.id : x)

export function buildNeighborMap(nodes, links) {
  // each node starts with itself, so the hovered node stays fully visible
  const map = new Map(nodes.map((d) => [d.id, new Set([d.id])]))
  links.forEach((l) => {
    const s = idOf(l.source)
    const t = idOf(l.target)
    map.get(s).add(t)
    map.get(t).add(s)
  })
  return map
}

export const polygonCentroid = function (path) {
  let vertices = path
    .slice(0, path.length - 2)
    .split(/(?=[LM])/)
    .map(function (d) {
      var pointsArray = d.slice(1, d.length).split(",")
      return [+pointsArray[0], +pointsArray[1]]
    })

  let a = 0,
    x = 0,
    y = 0,
    l = vertices.length

  for (let i = 0; i < l; i++) {
    const s = i === l - 1 ? 0 : i + 1,
      v0 = vertices[i],
      v1 = vertices[s],
      f = v0[0] * v1[1] - v1[0] * v0[1]

    a += f
    x += (v0[0] + v1[0]) * f
    y += (v0[1] + v1[1]) * f
  }

  const d = a * 3

  return [x / d, y / d]
}
