import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'

export const FaqTemplate = ({
  helmet,
  title,
  question,
  answer,
}) => {

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
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
  title: PropTypes.string,
  question: PropTypes.string,
  answer: PropTypes.string,
}

const Faq = ({ data }) => {
  const { markdownRemark: faq } = data

  return (
    <FaqTemplate
      helmet={<Helmet title={`${faq.frontmatter.title} | Blog`} />}
      title={faq.frontmatter.title}
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

export const pageQuery = graphql`
  query FaqID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        question
        answer
      }
    }
  }
`
