import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

export const FaqTemplate = ({
  helmet,
  question,
  answer,
}) => {

  return (
    <section className="section">
      {helmet || ''}
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
  helmet: PropTypes.instanceOf(Helmet),
  question: PropTypes.string,
  answer: PropTypes.string,
}

const Faq = ({ faq }) => {
  return (
    <FaqTemplate
      helmet={<Helmet title={`${faq.frontmatter.question} | Faq`} />}
      question={faq.frontmatter.question}
      answer={faq.frontmatter.answer}
    />
  )
}

Faq.propTypes = {
  faq: PropTypes.object
}

export default Faq
