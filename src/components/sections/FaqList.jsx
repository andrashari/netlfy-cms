import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Faq from '../../templates/faq'

export default class FaqList extends Component {
    state = {

    }

    render() {
        const { data } = this.props
        const { edges: faqs } = data.allMarkdownRemark

        faqs.map(({ node: faq }) => (
            <div>
                <p>{faq.frontmatter.question}</p>
                <p>{faq.frontmatter.answer}</p>
            </div>
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

export const faqListQuery = graphql`
  query faqListQuery {
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
`

export const faqQuery = graphql`
    query allFaqs {
      markdownRemark(frontmatter: {question: {eq: "hgfh"}}) {
        frontmatter {
          question
          answer
        }
      }
    }
  `