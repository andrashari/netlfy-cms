import React, { Component } from 'react'
import PropTypes from 'prop-types'

import AboutUs from '../../templates/aboutUs'

export default class AboutUsList extends Component {
    render() {
        const { data } = this.props

        return data.filter(({ node: aboutUs }) => {
            return aboutUs.frontmatter.aboutUsName && aboutUs.frontmatter.aboutUsRole && aboutUs.frontmatter.aboutUsImageSource && aboutUs.frontmatter.aboutUsIntroduction && aboutUs.frontmatter.aboutUsEmail && aboutUs.frontmatter.aboutUsPhone
        }).map(({ node: aboutUs }, index) => (
            <AboutUs aboutUs={aboutUs} key={index} />
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

export const AboutUsFragment = graphql`
    fragment AboutUsFragment on RootQueryType {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        aboutUsName
                        aboutUsRole
                        aboutUsImageSource
                        aboutUsIntroduction
                        aboutUsEmail
                        aboutUsPhone
                    }
                }
            }
        }
    }
`;