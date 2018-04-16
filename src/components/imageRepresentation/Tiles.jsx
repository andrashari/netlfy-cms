import React, { Component } from 'react'
import PropTypes from 'prop-types'

import 'regenerator-runtime/runtime'

export class Tiles extends Component {

    state = {
        images: [],
        isLoading: false
    }

    fetchImages = () => (
        fetch("https://api.instagram.com/v1/media/search?lat=48.858844&lng=2.294351&access_token=400253150.5bf95bd.66295cca016f4681a2473b5a0488f18d", {
            method: 'GET'
        })
        .then(res => res.json())
    )

    async componentDidMount() {
        this.setState({ isLoading: true });
        const images = await this.fetchImages()
        //this.setState({ images });
        this.setState({ isLoading: false });
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