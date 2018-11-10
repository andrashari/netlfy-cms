import React from 'react'
import PropTypes from 'prop-types'

export const HeroTemplate = ({
    heroUrl
}) => {

    const style = {
        background: {
            backgroundImage: `url(${heroUrl})`,
            backgroundSize: 'cover',
            height: '410px',
        }
    }

    return (
        <div>
            <section style={style.background} >
             </section>
        </div>
    )
}

HeroTemplate.propTypes = {
    heroUrl: PropTypes.string
}

const Hero = ({ hero }) => {
    return (
        <HeroTemplate
            heroUrl={hero.frontmatter.heroUrl}
        />
    )
}

Hero.propTypes = {
    hero: PropTypes.object
}

export default Hero
