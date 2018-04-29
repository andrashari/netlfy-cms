import React from 'react'
import PropTypes from 'prop-types'

export const AboutUsTemplate = ({
  aboutUsname,
  aboutUsRole,
  aboutUsImageSource,
  aboutUsIntroduction,
  aboutUsEmail,
  aboutUsPhone

}) => {

  return (
    <section className="section">
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <p>{aboutUsname}</p>
            <p>{aboutUsRole}</p>
            <img src={aboutUsImageSource} />
            <p>{aboutUsIntroduction}</p>
            <p>{aboutUsEmail}</p>
            <p>{aboutUsPhone}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

AboutUsTemplate.propTypes = {
  aboutUs: PropTypes.object
}

const AboutUs = ({ aboutUs }) => {
  return (
    <AboutUsTemplate
      aboutUsName={aboutUs.frontmatter.aboutUsName}
      aboutUsRole={aboutUs.frontmatter.aboutUsRole}
      aboutUsImageSource={aboutUs.frontmatter.aboutUsImageSource}
      aboutUsIntroduction={aboutUs.frontmatter.aboutUsIntroduction}
      aboutUsEmail={aboutUs.frontmatter.aboutUsEmail}
      aboutUsPhone={aboutUs.frontmatter.aboutUsPhone}
    />
  )
}

AboutUs.propTypes = {
  aboutUs: PropTypes.object
}

export default AboutUs
