
import Clip from './Clip.js'

function Section(props) {
    const { title, data } = props

    return (
        <article id={title}>
            <h2 className="show-mobile-xs">{title}</h2>

            <div className={title === "design" ? "grid-2" : ''}>
                {title === 'webdev' && (
                    <>
                        <h3 style={{ marginTop: 0 }}>💫 Selects</h3>
                        {data.filter((clip) => clip?.select).map((clip, i) => {
                            return (
                                <Clip
                                    key={i}
                                    {...clip}
                                />
                            )
                        })}
                        <h3 style={{ marginTop: "1.5em" }}>🗓️ Recent work</h3>
                        {data.filter((clip) => !clip?.select).map((clip, i) => {
                            return (
                                <Clip
                                    key={i}
                                    {...clip}
                                />
                            )
                        })}
                    </>
                )}
                {title !== "webdev" && (
                    data.map((clip, i) => {
                        return (
                            <Clip
                                key={i}
                                {...clip}
                            />
                        )
                    })
                )}
            </div>

        </article>
    )
}

export default Section;