import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Instafeed from 'react-instafeed';
import InstagramEmbed from 'react-instagram-embed'

export class InstagramTemplate extends Component {

  render() {
    const instafeedTarget = 'instafeed';
    return (
      <div>
        <div id={instafeedTarget}>
          <Instafeed
            limit='5'
            ref='instafeed'
            resolution='standard_resolution'
            sortBy='most-recent'
            target={instafeedTarget}
            template=''
            userId='hplatini89'
            clientId='5bf95bd04cf7495b8e1ccac949008599'
            accessToken='c8d9d727b0574bf1b0879d14d217ca35 '
          />
        </div>
        <InstagramEmbed
          url='https://instagr.am/p/Zw9o4/'
          maxWidth={320}
          hideCaption={false}
          containerTagName='div'
          protocol=''
          onLoading={() => { }}
          onSuccess={() => { }}
          onAfterRender={() => { }}
          onFailure={() => { }}
        />
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
