import React from 'react'
import PropTypes from 'prop-types'

export const ListWithImage = ({
    brandName, brandUrl, imageUrl, altText, text
}) => {

    const style = {
        image: {
            float: 'left',
            clear: 'both',
            width: '150px',
            height: '150px',
            margin: '25px 50px',
        },
        paragraph: {
            minHeight: '200px',
            padding: '50px 0',
        }
    }

    return (
        <div>
            <img src={imageUrl} alt={altText} style={style.image} />
            <p style={style.paragraph}>
                <a target="_blank" href={brandUrl}>{brandName}</a>
                {text}
            </p>

        </div>
    )
}

export default ListWithImage
