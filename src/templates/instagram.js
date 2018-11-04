import React, { Component } from 'react'
import PropTypes from 'prop-types'

import InstagramEmbed from 'react-instagram-embed'

import Tiles from '../components/imageRepresentation/Tiles'

export const InstagramTemplate = ({
    instagramUrl
}) => {

    return (
        <div>
            <InstagramEmbed
                url='https://instagr.am/p/Zw9o4/'
                maxWidth={320}
            />
            <Tiles instagramUrl={instagramUrl} />
        </div>
    )
}

InstagramTemplate.propTypes = {
    instagramUrl: PropTypes.string,
}

const Instagram = ({ instagram }) => {
    return (
        <InstagramTemplate
            instagramUrl={instagram.frontmatter.instagramUrl}
        />
    )
}

Instagram.propTypes = {
    instagram: PropTypes.object
}

export default Instagram
