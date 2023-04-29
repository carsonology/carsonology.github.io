import Lottie from 'react-lottie';
import { useEffect, useState } from 'react'
import anim_data_graphics from './animation-data/bar-chart.json'
import anim_data_design from './animation-data/paint-palette.json'
import anim_data_writing from './animation-data/notebook.json'
import anim_data_dev from './animation-data/laptop.json'
import { flatten } from 'lottie-colorify'

import lottieWeb from 'https://cdn.skypack.dev/lottie-web';


function AnimatedIcon(props) {
    const { name, shownSection, hoveredAnimId } = props

    useEffect(() => {
        // console.log(hoveredAnimId, name, hoveredAnimId !== name)
        // setStopFlag(hoveredAnimId !== name)
        console.log(hoveredAnimId)
        console.log(name, 'stop flag:', hoveredAnimId !== name)
        // console.log('shown section:', shownSection)
    }, [hoveredAnimId])

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
    // const anim_color = [104, 104, 104]

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: flatten(anim_color, anim_data),
        // animationData: anim_data,
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