import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

export const TeamTemplate = ({
  helmet,
  name,
  role,
  imageSource,
  introduction,
  email,
  phone

}) => {

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <p>{name}</p>
            <p>{role}</p>
            <img src={imageSource} />
            <p>{introduction}</p>
            <p>{email}</p>
            <p>{phone}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

TeamTemplate.propTypes = {
  helmet: PropTypes.instanceOf(Helmet),
  name: PropTypes.string,
  role: PropTypes.string,
  imageSource: PropTypes.string,
  introduction: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
}

const Team = ({ team }) => {
  return (
    <TeamTemplate
      helmet={<Helmet title={`${team.frontmatter.name} | Team`} />}
      name={team.frontmatter.name}
      role={team.frontmatter.role}
      imageSource={team.frontmatter.imageSource}
      introduction={team.frontmatter.introduction}
      email={team.frontmatter.email}
      phone={team.frontmatter.phone}
    />
  )
}

Team.propTypes = {
  team: PropTypes.object
}

export default Team
