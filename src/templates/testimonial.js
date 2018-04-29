import React from 'react'
import PropTypes from 'prop-types'

export const TestimonialTemplate = ({
  testimonialName,
  testimonialQuote,
  testimonialImageSource
}) => {

  return (
    <section className="section">
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <img src={testimonialImageSource} alt={null} title={null} />
            <p>{testimonialName}</p>
            <p>{testimonialQuote}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

TestimonialTemplate.propTypes = {
  testimonialName: PropTypes.string,
  testimonialQuote: PropTypes.string,
  testimonialImageSource: PropTypes.string,
}

const Testimonial = ({ testimonial }) => {
  return (
    <TestimonialTemplate
      testimonialName={testimonial.frontmatter.testimonialName}
      testimonialQuote={testimonial.frontmatter.testimonialQuote}
      testimonialImageSource={testimonial.frontmatter.testimonialImageSource}
    />
  )
}

Testimonial.propTypes = {
  testimonial: PropTypes.object
}

export default Testimonial
