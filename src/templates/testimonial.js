import React from 'react'
import PropTypes from 'prop-types'

export const TestimonialTemplate = ({
  name,
  quote,
  imageSource
}) => {

  return (
    <section className="section">
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
  question: PropTypes.string,
  answer: PropTypes.string,
}

const Testimonial = ({ testimonial }) => {
  return (
    <TestimonialTemplate
      name={testimonial.frontmatter.name}
      quote={testimonial.frontmatter.quote}
      imageSource={testimonial.frontmatter.imageSource}
    />
  )
}

Testimonial.propTypes = {
  testimonial: PropTypes.object
}

export default Testimonial
