import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Team from '../../templates/team'

export default class TeamList extends Component {
    render() {
        const { data } = this.props

        return data.filter(({ node: team }) => {
            const {name, role, imageSource, introduction, email, phone} = team.frontmatter;
            return name && role && imageSource && introduction && email && phone
        }).map(({ node: team }) => (
            <Team team={team} />
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