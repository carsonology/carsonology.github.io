import Icon from './Icon.js'
import NameAnim from './NameAnim.js'

function SocialButton(props) {
    const { link, icon } = props
    return (
        <a href={link} target="_blank">
            <Icon name={icon} />
        </a>
    )
}

function Header() {
    return (
        <header>
            <div className="socials">
                <SocialButton link="https://twitter.com/_carsonology" icon="twitter" />
                <SocialButton link="mailto:carson.terbush@gmail.com" icon="envelope" />
                <SocialButton link="https://www.linkedin.com/in/carson-terbush-6a1a58193/" icon="linkedin" />
            </div>
            <img src="https://www.carsonterbush.com/images/wave.png" alt="wave emoji" />

            <NameAnim />
            <h1>A designer, coder and writer.</h1>
        </header>
    )
}
export default Header;