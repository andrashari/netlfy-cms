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
            <section style={style.background} class="banner page-banner home-page-banner">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-sm-6 col-xs-12 banner-text pull-left">
                            <div class="valign">
                                <h2>Hello camper van fans!</h2>
                                <p>Explore untouched nature of Slovenia, Croatia, Italy and rest of Europe, with our retro camper vans. Eat some burek and have some fun!</p>
                            </div>
                        </div>
                    </div>
                </div>
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
