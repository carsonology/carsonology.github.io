import { useState } from 'react'
import Icon from './Icon.js'

function ListItem(props) {
    const { section, name, icon, shownSection, setShownSection } = props

    const [animationStopped, setAnimationStopped] = useState(true)

    return (
        <li onMouseEnter={(() => setAnimationStopped(false))}
            onMouseLeave={(() => setAnimationStopped(true))}
            className={shownSection === section ? 'active' : ''}
            onClick={() => setShownSection(section)}>
            <Icon name={icon} animationStopped={animationStopped} />
            <span className="show-desktop-sm">{name}</span>
            <div className="lines"></div>
            <div className="lines1"></div>
            <div className="lines2"></div>
        </li>
    )
}

function Nav(props) {
    return (
        <nav>
            <ul>
                <ListItem section="webdev" name="web dev" icon="laptop" shownSection={props.shownSection} setShownSection={props.setShownSection} />
                <ListItem section="graphics" name="graphics" icon="chart" shownSection={props.shownSection} setShownSection={props.setShownSection} />
                <ListItem section="design" name="design" icon="palette" shownSection={props.shownSection} setShownSection={props.setShownSection} />
                <ListItem section="writing" name="writing" icon="pencil" shownSection={props.shownSection} setShownSection={props.setShownSection} />
            </ul>
        </nav >
    )
}

export default Nav;