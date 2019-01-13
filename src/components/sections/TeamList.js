import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Team from '../../templates/team'

export default class TeamList extends Component {
    render() {
        const { data } = this.props

        return data.filter(({ node: team }) => {
            return team.frontmatter.teamName && team.frontmatter.teamRole && team.frontmatter.teamImageSource && team.frontmatter.teamIntroduction && team.frontmatter.teamEmail && team.frontmatter.teamPhone
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