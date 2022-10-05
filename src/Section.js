
import Clip from './Clip.js'

function Section(props) {
    const { title, data } = props

    return (
        <article id={title}>
            <h2 className="show-mobile-xs">{title}</h2>

            {title === "webdev" &&
                <>
                    <h3 style={{ marginTop: 0 }}>💫 Selects</h3>
                    {data.filter(clip => clip.select).map((clip, i) => {
                        return (
                            <Clip
                                key={i}
                                type="webdev"
                                {...clip}
                            />
                        )
                    })}
                    <h3 style={{ marginTop: "1.5em" }}>🗓️ Recent work</h3>
                    {data.filter(clip => !clip.select).map((clip, i) => {
                        return (
                            <Clip
                                key={i}
                                type="webdev"
                                {...clip}
                            />
                        )
                    })}
                </>
            }

            {title === "graphics" && data.map((clip, i) => {
                return (
                    <Clip
                        key={i}
                        type="webdev"
                        {...clip}
                    />
                )
            })}

            {title === "design" && (
                <div className="grid-2">
                    {data.map((design, i) => {
                        return (
                            <Clip key={i} {...design} />
                        )
                    })}
                </div>
            )}

            {title === "writing" && data.map((clip, i) => {
                return (
                    <Clip
                        key={i}
                        type="writing"
                        {...clip}
                    />
                )
            })}

        </article>
    )
}

export default Section;