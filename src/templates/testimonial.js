import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

export const TestimonialTemplate = ({
  helmet,
  name,
  quote,
  imageSource
}) => {

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <img src={imageSource} alt={null} title={null} />
            <p>{name}</p>
            <p>{quote}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

TestimonialTemplate.propTypes = {
  helmet: PropTypes.instanceOf(Helmet),
  question: PropTypes.string,
  answer: PropTypes.string,
}

const Testimonial = ({ data }) => {
  const { markdownRemark: testimonial } = data

  return (
    <TestimonialTemplate
      helmet={<Helmet title={`${testimonial.frontmatter.name} | Testimonial`} />}
      name={testimonial.frontmatter.name}
      quote={testimonial.frontmatter.quote}
      imageSource={testimonial.frontmatter.imageSource}
    />
  )
}

Testimonial.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Testimonial
