import React, { Component } from 'react'
import PropTypes from 'prop-types'

import layout from '../../assets/theme/layout'

import { StaticQuery, graphql } from 'gatsby'

class InstagramPhotos extends Component {

    state = {
        images: [],
        isLoading: true,
        style: {
            flexbox: layout.flexbox,
            tile: {
                width: '320px',
                height: '320px',
                padding: '1px',
                margin: '1px',
            }
        }
    }

    render() {
        const { style } = this.state;
        const { edges } = this.props.data.allInstaNode;
        console.log(edges);
        return <div style={{ ...style.flexbox, ...{ justifyContent: 'center' } }} >
            {edges.map((photo, index) => (
                <img src={photo.node.thumbnails[2].src} alt="" key={index} style={style.tile} />
            ))}
        </div>
    }
}

export default () => (
    <StaticQuery
        query={graphql`
            query InstagramPhotosQuery {
                allInstaNode(limit: 6) {
                    edges {
                        node {
                            thumbnails {
                                src
                            }
                        }
                        }
                    }
                }
        `}
        render={data => (
            <InstagramPhotos data={data} />
        )}
    />
)