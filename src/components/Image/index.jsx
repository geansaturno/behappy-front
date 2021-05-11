import React from 'react'
import PropsTypes from 'prop-types'
import './img/avatars.png'

class Image extends React.Component {
    getXPosition () {
        return `${this.props.xAxis * this.props.width * (-1)}px`
    }

    getYPosition () {
        return `${this.props.yAxis * this.props.height * (-1)}px`
    }

    getSize () {
        return `auto ${this.props.backgroundHeight}px`
    }

    getStyle () {
        return {
            backgroundImage: `url(${this.props.file})`,
            backgroundPositionX: this.getXPosition(),
            backgroundPositionY: this.getYPosition(),
            backgroundSize: this.getSize(),
            width: `${this.props.width}px`,
            height: `${this.props.height}px`,
            display: 'table',
            margin: '0 auto'
        }
    }

    render () {
        return <div style={this.getStyle()}/>
    }
}

Image.propTypes = {
    xAxis: PropsTypes.number.isRequired,
    yAxis: PropsTypes.number.isRequired,
    width: PropsTypes.number.isRequired,
    height: PropsTypes.number.isRequired,
    file: PropsTypes.string.isRequired,
    backgroundHeight: PropsTypes.number.isRequired
}

export default Image
