
import Clip from './Clip.js'

function Section(props) {
    const { title, data } = props

    return (
        <article id={title}>
            <h2 className="show-mobile-xs">{title}</h2>

            <div className={title === "design" ? "grid-2" : ''}>
                {data.map((clip, i) => {
                    return (
                        <Clip
                            key={i}
                            {...clip}
                        />
                    )
                })}</div>

        </article>
    )
}

export default Section;