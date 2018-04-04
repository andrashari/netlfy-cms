import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Testimonial from '../../templates/testimonial'

export default class TestimonialList extends Component {
    state = {

    }

    render() {
        const { data } = this.props

        return data.map(({ node: faq }) => (
            <div>
                <p>{faq.frontmatter.question}</p>
                <p>{faq.frontmatter.answer}</p>
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

export const faqFragment = graphql`
    fragment faqFragment on RootQueryType {
        allMarkdownRemark {
            edges {
            node {
                frontmatter {
                question
                answer
                }
            }
            }
        }
    }
`;