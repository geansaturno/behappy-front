import React from 'react'
import Image from '../Image'

function GenderImage (props) {
    return (
        <Image
            xAxis={0}
            yAxis={props.gender === 'm' ? 0 : 1}
            width={170}
            height={170}
            backgroundHeight={340}
            file="img/avatars.png"
        />
    )
}

export default GenderImage
