import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Faq from '../../templates/faq'

export default class FaqList extends Component {
    render() {
        const { data } = this.props
        return data.filter(({ node: faq }) => {
            const {question, answer} = faq.frontmatter
            return question && answer
        }).map(({ node: faq }) => (
            <Faq faq={faq} />
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