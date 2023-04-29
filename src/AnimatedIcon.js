import Lottie from 'react-lottie';
import anim_data_graphics from './animation-data/bar-chart.json'
import anim_data_design from './animation-data/paint-palette.json'
import anim_data_writing from './animation-data/notebook.json'
import anim_data_dev from './animation-data/monitor.json'
import { flatten } from 'lottie-colorify'


function AnimatedIcon(props) {
    const { name, animationStopped } = props

    let anim_data = null

    if (name == 'palette') {
        anim_data = anim_data_design
    } else if (name == 'chart') {
        anim_data = anim_data_graphics
    } else if (name == 'laptop') {
        anim_data = anim_data_dev
    } else if (name == 'pencil') {
        anim_data = anim_data_writing
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: anim_data,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid meet'
        }
    };

    return (
        <Lottie
            options={defaultOptions}
            height={30}
            width={40}
            isStopped={animationStopped}
        />
    )
}

export default AnimatedIcon