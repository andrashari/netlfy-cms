import React, {Component} from 'react'
import PropTypes from 'prop-types'

import { Player } from 'video-react';

import "video-react/dist/video-react.css";

export class VideoTemplate extends Component {

  render() {
    return (
      <Player
      playsInline
      poster={this.props.poster}
      src={this.props.videoUrl}
    />
    )
  }
}

VideoTemplate.propTypes = {
  video: PropTypes.object,
}

const Video = ({ video }) => {
  return (
    <VideoTemplate
      videoUrl={video.frontmatter.videoUrl}
      poster={video.frontmatter.poster}
    />
  )
}

Video.propTypes = {
  video: PropTypes.object
}

export default Video
