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
                <h2>Hello camper van fans!</h2>
                <p>Explore untouched nature of Slovenia, Croatia, Italy and rest of Europe, with our retro camper vans. Eat some burek and have some fun!</p>
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
