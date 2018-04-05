import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

export const AboutUsTemplate = ({
  helmet,
  name,
  role,
  imageSource,
  introduction,
  email,
  phone

}) => {

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <p>{name}</p>
            <p>{role}</p>
            <img src={imageSource} />
            <p>{introduction}</p>
            <p>{email}</p>
            <p>{phone}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

AboutUsTemplate.propTypes = {
  helmet: PropTypes.instanceOf(Helmet),
  name: PropTypes.string,
  role: PropTypes.string,
  imageSource: PropTypes.string,
  introduction: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
}

const AboutUs = ({ aboutus }) => {
  return (
    <AboutUsTemplate
      helmet={<Helmet title={`${aboutus.frontmatter.name} | Faq`} />}
      name={aboutus.frontmatter.name}
      role={aboutus.frontmatter.role}
      imageSource={aboutus.frontmatter.imageSource}
      introduction={aboutus.frontmatter.introduction}
      email={aboutus.frontmatter.email}
      phone={aboutus.frontmatter.phone}
    />
  )
}

AboutUs.propTypes = {
  aboutus: PropTypes.object
}

export default AboutUs
