import React, { Component } from 'react'
import PropTypes from 'prop-types'

import InstagramEmbed from 'react-instagram-embed'

import { Tiles } from '../components/imageRepresentation/Tiles'

export class InstagramTemplate extends Component {

  render() {
    return (
      <div>
        <Tiles type={"instagram"} />
      </div>
    )
  }
}

InstagramTemplate.propTypes = {
  instagram: PropTypes.object,
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
