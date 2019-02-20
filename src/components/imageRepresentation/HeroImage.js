import React from 'react'
import PropTypes from 'prop-types'

export const HeroImage = ({
    heroUrl
}) => {

    const style = {
        background: {
            backgroundImage: `url(${heroUrl})`,
            backgroundSize: 'cover',
            height: '520px',
            backgroundPositionX: '50%',
            backgroundPositionY: '50%'
        }
    }

    return (
        <div style={{ paddingBottom: '40px' }}>
            <section className="hero-background" style={style.background} >
            </section>
        </div >
    )
}

HeroImage.propTypes = {
    heroUrl: PropTypes.string
}

export default HeroImage
