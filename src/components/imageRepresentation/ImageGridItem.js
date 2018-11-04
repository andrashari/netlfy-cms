import React from 'react'
import PropTypes from 'prop-types'

import convertToKebabCase from '../utils/utils'

export const ImageGridItem = ({
    imageUrl, text
}) => {

    const style = {
        container: {
            position: 'relative',
            width: '46%',
            marginTop: '4%'
        },
        image: {
            height: '100%',
            width: '100%',
            background: `url('/img/sunsetherowide.jpg') no-repeat center center`,
            backgroundSize: '100%'
        },
        overlay: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            height: '100%',
            width: '100%',
            transition: '.5s ease',
        },
        text: {
            color: 'white',
            fontSize: '20px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            width: '100%',
        }

    }

    return (
        <a href="#" style={style.container} className="container" >
            <img src="/img/sunsetherowide.jpg" alt="Avatar" className="image" />
            <div style={style.overlay} className="overlay" >
                <span style={style.text}>{text}<br />Read More</span>
            </div>
        </a>
    )
}

export default ImageGridItem
