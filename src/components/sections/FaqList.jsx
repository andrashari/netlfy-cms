import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Faq from '../../templates/faq'

export default class FaqList extends Component {
    render() {
        const { data } = this.props
        /*return data.filter(({ node: faq }) => {
            return faq.frontmatter.question && faq.frontmatter.answer
        })*/
        return data.map(({ node: faq }, index) => (
            <Faq faq={faq} key={index} />
        ))
    }
}

FaqList.propTypes = {
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