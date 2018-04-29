import React from 'react'
import PropTypes from 'prop-types'
import { TeamTemplate } from '../../templates/aboutUs'

const TeamPreview = ({ entry, widgetFor }) => (
  <TeamTemplate
    title={entry.getIn(['data', 'name'])}
    name={entry.getIn(['data', 'name'])}
    teamRole={entry.getIn(['data', 'teamRole'])}
    teamImageSource={entry.getIn(['data', 'teamImageSource'])}
    teamIntroduction={entry.getIn(['data', 'teamIntroduction'])}
    teamEmail={entry.getIn(['data', 'teamEmail'])}
    teamPhone={entry.getIn(['data', 'teamPhone'])}
  />
)

TeamPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default TeamPreview
