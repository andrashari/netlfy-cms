import React from 'react'
import PropTypes from 'prop-types'
import { AboutUsTemplate } from '../../templates/aboutus'

const AboutUsPreview = ({ entry, widgetFor }) => (
  <AboutUsTemplate
    title={entry.getIn(['data', 'name'])}
    name={entry.getIn(['data', 'name'])}
    role={entry.getIn(['data', 'role'])}
    imageSource={entry.getIn(['data', 'imageSource'])}
    introduction={entry.getIn(['data', 'introduction'])}
    email={entry.getIn(['data', 'email'])}
    phone={entry.getIn(['data', 'phone'])}
  />
)

AboutUsPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutUsPreview
