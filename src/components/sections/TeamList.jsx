import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Team from '../../templates/team'

export default class TeamList extends Component {
    render() {
        const { data } = this.props

        return data.filter(({ node: team }) => {
            return team.frontmatter.name && team.frontmatter.role && team.frontmatter.imageSource && team.frontmatter.introduction && team.frontmatter.email && team.frontmatter.phone
        }).map(({ node: team }, index) => (
            <Team team={team} key={index} />
        ))
    }
}

TeamList.propTypes = {
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