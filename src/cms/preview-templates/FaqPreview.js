import React from 'react'
import PropTypes from 'prop-types'
import { FaqTemplate } from '../../templates/faq'

const FaqPreview = ({ entry, widgetFor }) => (
  <FaqTemplate
    title={entry.getIn(['data', 'title'])}
    question={entry.getIn(['data', 'question'])}
    answer={entry.getIn(['data', 'answer'])}
  />
)

FaqPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default FaqPreview
