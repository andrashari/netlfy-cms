import React, { Component } from 'react'
import PropTypes from 'prop-types'

import AboutUs from '../../templates/aboutus'

export default class AboutUsList extends Component {
    render() {
        const { data } = this.props

        return data.filter(({ node: aboutus }) => {
            const {name, role, imageSource, introduction, email, phone} = aboutus.frontmatter;
            return name && role && imageSource && introduction && email && phone
        }).map(({ node: aboutus }) => (
            <AboutUs aboutus={aboutus} />
        ))
    }
}

AboutUsList.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

export const aboutUsFragment = graphql`
    fragment aboutUsFragment on RootQueryType {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        name
                        role
                        imageSource
                        introduction
                        email
                        phone
                    }
                }
            }
        }
    }
`;