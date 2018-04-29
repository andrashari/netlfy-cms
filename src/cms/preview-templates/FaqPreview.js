import React from 'react'
import PropTypes from 'prop-types'
import { FaqTemplate } from '../../templates/faq'

const FaqPreview = ({ entry, widgetFor }) => (
  <FaqTemplate
    title={entry.getIn(['data', 'title'])}
    faqQuestion={entry.getIn(['data', 'faqQuestion'])}
    faqAnswer={entry.getIn(['data', 'faqAnswer'])}
  />
)

FaqPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default FaqPreview
