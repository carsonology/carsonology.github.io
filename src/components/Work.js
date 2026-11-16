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
    padding: ".2em .6em",
    marginRight: ".2em",
    borderRadius: 6,
    cursor: "pointer",
    transition: "300ms background ease-in",

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
})

const Work = () => {
  console.log(miserables)

  const [activeTag, setActiveTag] = useState("All")

  const tags = Array.from(
    new Set(miserables.nodes.flatMap((m) => m?.tags)),
  ).filter((t) => Boolean(t))
  console.log(tags)
  return (
    <>
      <TextContainer>
        <H4>Work</H4>
        <p>
          Show:{" "}
          {["All", ...tags].map((t, i) => {
            return (
              <>
                <span
                  onClick={() => {
                    setActiveTag(t)
                  }}
                  className={t == activeTag ? "active" : ""}
                >
                  {t}
                </span>{" "}
              </>
            )
          })}
        </p>
      </TextContainer>
      <WorkContainer>
        {miserables.nodes
          .filter((p) => p.type != "tag")
          .filter((p) => {
            if (activeTag == "All") {
              return true
            } else {
              return p.tags.includes(activeTag)
            }
          })
          .map((p) => {
            return <Project currentNode={p} />
          })}
      </WorkContainer>
    </>
  )
}

export default Work
