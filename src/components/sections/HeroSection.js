import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Hero from '../../templates/hero'

export default class HeroSection extends Component {
    render() {
        const { data } = this.props
        // GraphQL later
        /*return data.filter(({ node: hero }) => {
            return hero.frontmatter.heroUrl
        }).map(({ node: hero }, index) => (
            <Hero hero={hero} key={index} />
        ))*/
        return <Hero hero={data} key={1} />
    }
}

HeroSection.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

export const heroFragment = graphql`
    fragment heroFragment on RootQueryType {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        heroUrl
                    }
                }
            }
        }
    }
`;