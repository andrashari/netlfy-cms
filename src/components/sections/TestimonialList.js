import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Testimonial from '../../templates/testimonial'

export default class TestimonialList extends Component {
    render() {
        const { data } = this.props

        return data.filter(({ node:testimonial }) => {
            return testimonial.frontmatter.testimonialImageSource && testimonial.frontmatter.testimonialName && testimonial.frontmatter.testimonialQuote
        }).map(({ node:testimonial }, index) => (
            <Testimonial testimonial={testimonial} key={index} />
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
