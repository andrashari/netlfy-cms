import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Instagram from '../../templates/instagram'

export default class InstagramSection extends Component {
    render() {
        const { data } = this.props
        return data.filter(({ node: instagram }) => {
            return instagram.frontmatter.instagramUrl
        }).map(({ node: instagram }, index) => (
            <Instagram instagram={instagram} key={index} />
        ))
    }
}

InstagramSection.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

export const instagramFragment = graphql`
    fragment instagramFragment on RootQueryType {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        instagramUrl
                    }
                }
            }
        }
    }
`;