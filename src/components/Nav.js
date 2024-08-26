import { useState } from "react"
import Icon from "./Icon.js"

const Nav = (props) => {
  const { shownSection, setShownSection, config } = props

  return (
    <nav>
      <ul>
        {config.map((section) => {
          return (
            <ListItem
              key={section.section}
              section={section.section}
              name={section?.name || section.section}
              icon={section.icon}
              shownSection={shownSection}
              setShownSection={setShownSection}
            />
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav

const ListItem = (props) => {
  const { section, name, shownSection, setShownSection } = props

  const [hoveredAnimId, setHoveredAnimId] = useState(null)

  return (
    <li
      onMouseEnter={() => {
        setHoveredAnimId(section)
      }}
      onMouseLeave={() => {
        setHoveredAnimId(null)
      }}
      className={shownSection === section ? "active" : ""}
      onClick={() => setShownSection(section)}
    >
      <Icon
        name={section}
        hoveredAnimId={hoveredAnimId}
        shownSection={shownSection}
      />
      <span className="show-desktop-sm">{name}</span>
      <div className="lines" />
      <div className="lines1" />
      <div className="lines2" />
    </li>
  )
}
