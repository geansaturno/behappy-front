import React from 'react'

function Label(props) {
    const style = {
        color: props.isInvalid ? '#d50000' : '#444444'
    }

    return (
        <label htmlFor="{props.htmlFor}" style={style}>{props.text}</label>
    )
}

export default Label