import Icon from './Icon.js'

function ListItem(props) {
    const { section, name, icon, shownSection, setShownSection } = props
    return (
        <li className={shownSection === section ? 'active' : ''} onClick={() => setShownSection(section)}>
            {/* <i className="fa fa-palette show-mobile-xs"></i> */}
            <Icon name={icon} />
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