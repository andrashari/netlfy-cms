import React from 'react'
import PropTypes from 'prop-types'

export const HeroTemplate = ({
    heroUrl
}) => {

    const style = {
        background: {
            backgroundImage: `url(${heroUrl})`,
            backgroundSize: 'cover',
            height: '640px',
            backgroundPositionX: '50%',
            backgroundPositionY: '50%'
        }
    }

    return (
        <div>
            <section className="hero-background" style={style.background} >
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
            //GrapQL later
            //heroUrl={hero.frontmatter.heroUrl}
            heroUrl={hero.url}
        />
    )
}

Hero.propTypes = {
    hero: PropTypes.object
}

export default Hero
