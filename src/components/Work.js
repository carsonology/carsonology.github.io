import { useState } from "react"
import { styled } from "@stitches/react"
import Project from "./ProjectPage/Project"

import miserables from "./Network/miserables.js"

const H4 = styled("h4", {
  fontFamily: "Young Serif",
  fontSize: 48,
  fontWeight: "normal",
  color: "var(--text-color)",
  marginTop: "4rem",
  marginBottom: 0,

  "@media screen and (max-width: 600px)": { fontSize: 24 },
})

const TextContainer = styled("div", {
  margin: "auto",
  marginTop: "8em",
  paddingLeft: 20,
  paddingRight: 20,
  maxWidth: 990,
  marginBottom: "1.5em",

  span: {
    border: "1px solid var(--text-color)",
    display: "inline-block",
    color: "var(--text-color)",
    padding: ".2em .6em",
    marginRight: ".5em",
    marginBottom: ".5em",
    borderRadius: 6,
    cursor: "pointer",
    transition: "300ms background ease-in",

    "@media screen and (max-width: 600px)": {
      padding: ".25em 1em",
      fontSize: 16,
      marginRight: ".75em",
      marginBottom: ".75em",
    },

    "&:hover": {
      background: "#63464625",
      transition: "300ms background",
    },

    "&.active": {
      background: "var(--text-color)",
      color: "white",
    },
  },
})

const WorkContainer = styled("div", {
  //   display: "grid",
  maxWidth: 990,
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  gridTemplateColumns: "repeat(2, 1fr)",
  marginBottom: "10em",

  gap: 30,
  paddingLeft: 30,
  paddingRight: 30,

  justifyItems: "start",
  alignItems: "start",

  "@media screen and (max-width: 600px)": {
    paddingLeft: 20,
    paddingRight: 20,
  },
})

const Work = () => {
  const [activeTag, setActiveTag] = useState("All")

  const tags = Array.from(new Set(miserables.nodes.flatMap((m) => m?.tags)))
    .filter((t) => Boolean(t) && t != "Design" && t != "Social")
    .sort((a, b) => {
      const order = [
        "Graphics",
        "Interactive",
        "Design",
        "Multimedia",
      ].reverse()
      return order.findIndex((d) => d == b) - order.findIndex((d) => d == a)
    })

  const visibleNodes = miserables.nodes
    .reduce((acc, d) => {
      return d?.select
        ? [
            ...acc.filter((a) => Boolean(a?.select)),
            d,
            ...acc.filter((a) => !Boolean(a?.select)),
          ]
        : [...acc, d]
    }, [])
    .filter((p) => p.type != "tag" && !p?.excludeFromWork)
    .filter((p) => {
      if (activeTag == "All") {
        return true
      } else {
        return p.tags.includes(activeTag)
      }
    })

  return (
    <>
      <TextContainer>
        <H4>Work</H4>
        <p style={{ color: "var(--text-color)", marginBottom: 0 }}>
          Show:{" "}
          {["All", ...tags].map((t, i) => {
            return (
              <span
                key={`${t}-${i}`}
                style={{ mixBlendMode: "multiply" }}
                onClick={() => {
                  setActiveTag(t)
                }}
                className={t == activeTag ? "active" : ""}
              >
                {t}
              </span>
            )
          })}
        </p>
        <p
          style={{
            fontStyle: "italic",
            color: "var(--text-color)",
            fontSize: 14,
            marginTop: ".25em",
          }}
        >
          Showing {activeTag == "All" ? "all" : ""} {visibleNodes.length}{" "}
          {activeTag != "All" ? activeTag.toLowerCase() : ""} projects
        </p>
      </TextContainer>
      <WorkContainer>
        {visibleNodes.map((p, i) => {
          return <Project key={`${p.id}-${i}`} currentNode={p} />
        })}
      </WorkContainer>
    </>
  )
}

export default Work
