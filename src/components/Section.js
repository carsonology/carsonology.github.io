import { useState } from "react"
import Clip from "./Clip.js"

const Section = (props) => {
  const { title, data } = props

  const [numShownClips, setNumShownClips] = useState(10)

  const selects = data.filter((clip) => clip?.select)
  const nonSelects = data.filter((clip) => !clip?.select)
  const truncate = ["webdev", "graphics"].includes(title)

  return (
    <article id={title}>
      <h2 className="show-mobile-xs">{title}</h2>

      <div className={title === "design" ? "grid-2" : ""}>
        <>
          {selects.length > 0 && (
            <>
              <h3 style={{ marginTop: 0 }}>💫 Selects</h3>
              {selects.map((clip, i) => {
                return <Clip key={i} {...clip} />
              })}
              <h3 style={{ marginTop: "1.5em" }}>🗓️ Recent work</h3>
            </>
          )}
          {nonSelects
            .slice(
              0,
              truncate ? numShownClips - selects.length : nonSelects.length
            )
            .map((clip, i) => {
              return <Clip key={i} {...clip} />
            })}
        </>
      </div>

      {truncate && numShownClips < data.length && (
        <button
          className="show-more-button"
          onClick={() => {
            setNumShownClips((prev) => prev + 10)
          }}
        >
          Show more
        </button>
      )}
    </article>
  )
}

export default Section
