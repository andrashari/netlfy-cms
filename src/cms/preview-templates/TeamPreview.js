import React from 'react'
import PropTypes from 'prop-types'
import { TeamTemplate } from '../../templates/team'

const TeamPreview = ({ entry, widgetFor }) => (
  <TeamTemplate
    title={entry.getIn(['data', 'name'])}
    name={entry.getIn(['data', 'name'])}
    role={entry.getIn(['data', 'role'])}
    imageSource={entry.getIn(['data', 'imageSource'])}
    introduction={entry.getIn(['data', 'introduction'])}
    email={entry.getIn(['data', 'email'])}
    phone={entry.getIn(['data', 'phone'])}
  />
)

TeamPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default TeamPreview
