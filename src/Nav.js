import { useState, useEffect } from 'react'
import Icon from './Icon.js'

function ListItem(props) {
    const { section, name, shownSection, setShownSection } = props

    const [hoveredAnimId, setHoveredAnimId] = useState(null)

    // useEffect(() => {
    //     console.log(hoveredAnimId)
    // }, [hoveredAnimId])

    // useEffect(() => {
    //     console.log(shownSection)
    // }, [shownSection])

    return (
        <li
            onMouseEnter={(() => {
                setHoveredAnimId(section)
            })}
            onMouseLeave={(() => {
                setHoveredAnimId(null)
            })}
            className={shownSection === section ? 'active' : ''}
            onClick={() => setShownSection(section)}
        >
            <Icon name={section} hoveredAnimId={hoveredAnimId} shownSection={shownSection} />
            <span className="show-desktop-sm">{name}</span>
            <div className="lines"></div>
            <div className="lines1"></div>
            <div className="lines2"></div>
        </li>
    )
}

function Nav(props) {
    const { shownSection, setShownSection } = props

    return (
        <nav>
            <ul>
                <ListItem section="webdev" name="web dev" icon="laptop" shownSection={shownSection} setShownSection={setShownSection} />
                <ListItem section="graphics" name="graphics" icon="chart" shownSection={shownSection} setShownSection={setShownSection} />
                <ListItem section="design" name="design" icon="palette" shownSection={shownSection} setShownSection={setShownSection} />
                <ListItem section="writing" name="writing" icon="pencil" shownSection={shownSection} setShownSection={setShownSection} />
            </ul>
        </nav >
    )
}

export default Nav;