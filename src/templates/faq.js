import React from 'react'
import PropTypes from 'prop-types'

export const FaqTemplate = ({
  question,
  answer,
}) => {

  return (
    <section className="section">
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <p>{question}</p>
            <p>{answer}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

FaqTemplate.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
}

const Faq = ({ faq }) => {
  return (
    <FaqTemplate
      question={faq.frontmatter.question}
      answer={faq.frontmatter.answer}
    />
  )
}

Faq.propTypes = {
  faq: PropTypes.object
}

export default Faq
