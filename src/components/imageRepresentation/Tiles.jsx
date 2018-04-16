import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Tiles extends Component {

    state = {
        images: [],
        isLoading: true
    }

    componentDidMount() {
        // fetchImages
        fetch("https://api.instagram.com/v1/media/search?lat=48.858844&lng=2.294351&access_token=400253150.5bf95bd.66295cca016f4681a2473b5a0488f18d", {
            method: 'GET'
        })
        .then(res => res.json())
        .then(images => 
            this.setState({ isLoading: false, images: images }))
        .catch(e => console.log('error: ', e))
    }

    render() {
        // TODO different sources for images like Flickr
        const { type } = this.props
        const { images } = this.state
        return images.map((imageSource, index) => (
            <img src={imageSource} alt="" key={index}/>
        ))
    }
}


Tiles.propTypes = {
    type: PropTypes.string
}