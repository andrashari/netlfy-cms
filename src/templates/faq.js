import React from 'react'
import PropTypes from 'prop-types'

export const FaqTemplate = ({
  faqQuestion,
  faqAnswer,
}) => {

  return (
    <section className="section">
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <p>{faqQuestion}</p>
            <p>{faqAnswer}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

FaqTemplate.propTypes = {
  faqQuestion: PropTypes.string,
  faqAnswer: PropTypes.string
}

const Faq = ({ faq }) => {
  return (
    <FaqTemplate
      faqQuestion={faq.frontmatter.faqQuestion}
      faqAnswer={faq.frontmatter.faqAnswer}
    />
  )
}

Faq.propTypes = {
  faq: PropTypes.object
}

export default Faq
