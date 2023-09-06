import Lottie from 'react-lottie';
import anim_data_graphics from '../animation-data/bar-chart.json'
import anim_data_design from '../animation-data/paint-palette.json'
import anim_data_writing from '../animation-data/notebook.json'
import anim_data_dev from '../animation-data/laptop.json'
import { flatten } from 'lottie-colorify'


function AnimatedIcon(props) {
    const { name, shownSection, hoveredAnimId } = props

    let anim_data = null

    if (name == 'design') {
        anim_data = anim_data_design
    } else if (name == 'graphics') {
        anim_data = anim_data_graphics
    } else if (name == 'webdev') {
        anim_data = anim_data_dev
    } else if (name == 'writing') {
        anim_data = anim_data_writing
    }

    const anim_color = ((name === shownSection) || (name === hoveredAnimId)) ? [104, 104, 104] : [176, 176, 176]

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: flatten(anim_color, anim_data),
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid meet'
        }
    };

    return (
        <Lottie
            options={defaultOptions}
            height={30}
            width={40}
            // if it's not being hovered, it is stopped
            isStopped={hoveredAnimId === null}
        />
    )
}

export default AnimatedIcon