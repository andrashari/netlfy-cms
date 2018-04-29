import React from 'react'
import PropTypes from 'prop-types'
import { TestimonialTemplate } from '../../templates/testimonial'

const TestimonialPreview = ({ entry, widgetFor }) => (
  <TestimonialTemplate
    title={entry.getIn(['data', 'name'])}
    name={entry.getIn(['data', 'name'])}
    testimonialQuote={entry.getIn(['data', 'testimonialQuote'])}
    testimonialImageSource={entry.getIn(['data', 'testimonialImageSource'])}
  />
)

TestimonialPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default TestimonialPreview
