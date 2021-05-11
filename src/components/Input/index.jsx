import React from 'react'

function Input (props) {
    const estilo = {
        borderColor: props.isInvalid ? '#d50000' : '#eeeee',
        backgroundColor: props.isInvalid ? '#ffcdd2' : '#ffffff'
    }

    const propriedades = { ...props }

    delete propriedades.isInvalid

    return (
        <input
            type="text"
            style={estilo}
            {...propriedades}
        />
    )
}

export default Input
