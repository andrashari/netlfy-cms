import React, { Component } from 'react'
import PropTypes from 'prop-types'

import layout from '../../assets/theme/layout'

import axios from 'axios'

export default class Tiles extends Component {

    state = {
        images: [],
        isLoading: true,
        style: {
            flexbox: layout.flexbox,
            tile: {
                width: '160px',
                height: '160px',
                padding: '1px',
                margin: '1px',
            }
        }
    }

    async instagramPhotos() {
        // It will contain our photos' links
        const res = []

        try {
            const userInfoSource = await axios.get('https://www.instagram.com/danilo_polani/')

            // userInfoSource.data contains the HTML from Axios
            const jsonObject = await userInfoSource.data.match(/<script type="text\/javascript">window\._sharedData = (.*)<\/script>/)[1].slice(0, -1)

            const userInfo = JSON.parse(jsonObject)
            // Retrieve only the first 10 results
            const mediaArray = userInfo.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.splice(0, 10)
            for (let media of mediaArray) {
                const node = media.node

                // Process only if is an image
                if ((node.__typename && node.__typename !== 'GraphImage')) {
                    continue
                }

                // Push the thumbnail src in the array
                res.push(node.thumbnail_src)
            }
        } catch (e) {
            console.error('Unable to retrieve photos. Reason: ' + e.toString())
        }

        return res
    }

    async componentDidMount() {
        // fetchImages
        const { instagramUrl } = this.props;
        const images = await this.instagramPhotos(instagramUrl);
        await this.setState({ isLoading: false, images: images })
    }

    render() {
        // TODO different sources for images like Flickr
        const { images, isLoading, style } = this.state
        return <div style={style.flexbox} >
            {images.map((imageSource, index) => (
                <img src={imageSource} alt="" key={index} style={style.tile} />
            ))}
        </div>
    }
}
