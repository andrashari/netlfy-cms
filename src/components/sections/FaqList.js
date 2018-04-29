import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Faq from '../../templates/faq'
import { Input } from 'antd';

export default class FaqList extends Component {
    render() {
        const { data } = this.props
        
        return data.filter(({ node: faq }) => {
            return faq.frontmatter.faqQuestion && faq.frontmatter.faqAnswer
        })
        .map(({ node: faq }, index) => (
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
                        faqQuestion
                        faqAnswer
                    }
                }
            }
        }
    }
`;