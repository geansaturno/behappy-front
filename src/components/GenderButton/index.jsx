import React from 'react'
import './style.scss'
import GenderImage from '../GenderImage'

function GenderButton (props) {
    return (
        <a
            className={
                props.selected
                    ? 'gender-button gender-button--selected'
                    : 'gender-button'
            }
            href="#!"
            onClick={e => props.updateGender(e, props.gender)}
        >
            <GenderImage
                gender={props.gender}
            />
        </a>
    )
}

export default GenderButton
