import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'

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

const Faq = ({ data }) => {
  const { markdownRemark: faq } = data

  return (
    <FaqTemplate
      helmet={<Helmet title={`${faq.frontmatter.question} | Faq`} />}
      question={faq.frontmatter.question}
      answer={faq.frontmatter.answer}
    />
  )
}

Faq.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Faq
