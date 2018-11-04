import React from 'react'
import PropTypes from 'prop-types'

export const HeroImage = ({
    heroUrl
}) => {

    const style = {
        background: {
            backgroundImage: `url(${heroUrl})`,
            backgroundSize: 'cover',
            height: '640px',
        }
    }

    return (
        <div>
            <section style={style.background} >
            </section>
        </div>
    )
}

HeroImage.propTypes = {
    heroUrl: PropTypes.string
}

export default HeroImage
