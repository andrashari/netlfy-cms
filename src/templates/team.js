import React from 'react'
import PropTypes from 'prop-types'

export const TeamTemplate = ({
    teamname,
    teamRole,
    teamImageSource,
    teamIntroduction,
    teamEmail,
    teamPhone

}) => {

    return (
        <section className="section">
            <div className="container content">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <p>{teamname}</p>
                        <p>{teamRole}</p>
                        <img src={teamImageSource} />
                        <p>{teamIntroduction}</p>
                        <p>{teamEmail}</p>
                        <p>{teamPhone}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

TeamTemplate.propTypes = {
    teamname: PropTypes.string,
    teamRole: PropTypes.string,
    teamImageSource: PropTypes.string,
    teamIntroduction: PropTypes.string,
    teamEmail: PropTypes.string,
    teamPhone: PropTypes.string
}

const Team = ({ team }) => {
    return (
        <TeamTemplate
            teamName={team.frontmatter.teamName}
            teamRole={team.frontmatter.teamRole}
            teamImageSource={team.frontmatter.teamImageSource}
            teamIntroduction={team.frontmatter.teamIntroduction}
            teamEmail={team.frontmatter.teamEmail}
            teamPhone={team.frontmatter.teamPhone}
        />
    )
}

Team.propTypes = {
    team: PropTypes.object
}

export default Team
