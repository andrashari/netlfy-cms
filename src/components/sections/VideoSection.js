import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Video from '../../templates/video'

export default class VideoSection extends Component {
    render() {
        const { data } = this.props
        return data.filter(({ node: video }) => {
            return video.frontmatter.videoUrl && video.frontmatter.videoPoster
        }).map(({ node: video }, index) => (
            <Video video={video} key={index} />
        ))
    }
}

VideoSection.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

export const videoFragment = graphql`
    fragment videoFragment on RootQueryType {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        videoUrl
                        videoPoster
                    }
                }
            }
        }
    }
`;