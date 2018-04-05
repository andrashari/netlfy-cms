import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Testimonial from '../../templates/testimonial'

export default class TestimonialList extends Component {
    render() {
        const { data } = this.props
        console.log(this.props);

        return data.map(({ node: testimonial }) => (
            <div>
                <img src={testimonial.frontmatter.imageSource} alt=""/>
                <p>{testimonial.frontmatter.name}</p>
                <p>{testimonial.frontmatter.quote}</p>
            </div>
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