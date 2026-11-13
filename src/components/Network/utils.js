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
