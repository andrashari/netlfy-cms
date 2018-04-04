import React from 'react'
import PropTypes from 'prop-types'
import { TestimonialTemplate } from '../../templates/testimonial'

const TestimonialPreview = ({ entry, widgetFor }) => (
  <FaqTemplate
    title={entry.getIn(['data', 'title'])}
    question={entry.getIn(['data', 'question'])}
    answer={entry.getIn(['data', 'answer'])}
  />
)

TestimonialPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default TestimonialPreview
