
import Clip from './Clip.js'

function Section(props) {
    const { title, data, filters } = props

    const filterData = (clip) => {
        let skillsApply = false
        if (clip?.skills) {
            for (let skill of clip.skills) {
                if (filters?.includes(skill)) {
                    skillsApply = true
                }
            }
        }
        return skillsApply
    }

    return (
        <article id={title}>
            <h2 className="show-mobile-xs">{title}</h2>

            <div className={title === "design" ? "grid-2" : ''}>
                {data.filter(clip => filterData(clip))
                    .map((clip, i) => {
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