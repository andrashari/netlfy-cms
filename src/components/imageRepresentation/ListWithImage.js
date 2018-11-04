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
            margin: '0 50px'
        },
        paragraph: {
            minHeight: '200px',
            margin: '50px auto'
        }
    }

    return (
        <div>
            <p style={style.paragraph}>
                <img src={imageUrl} alt={altText} style={style.image} />
                <a href={brandUrl}>{brandName}</a>{text}
            </p>

        </div>
    )
}

export default ListWithImage
