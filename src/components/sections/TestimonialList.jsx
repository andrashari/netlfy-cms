import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Testimonial from '../../templates/testimonial'

export default class TestimonialList extends Component {
    render() {
        const { data } = this.props

        return data.filter(({ node: testimonial }) => {
            return testimonial.frontmatter.imageSource && testimonial.frontmattername && testimonial.frontmatterquote
        }).map(({ node: testimonial }) => (
            <Testimonial testimonial={testimonial} />
        ))
    }
}

TestimonialList.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

export const testimonialFragment = graphql`
    fragment testimonialFragment on RootQueryType {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        imageSource
                        name
                        quote
                    }
                }
            }
        }
    }
`;