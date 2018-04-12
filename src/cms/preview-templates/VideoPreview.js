import React from 'react'
import PropTypes from 'prop-types'
import { VideoPreview } from '../../templates/video'

const VideoPreview = ({ entry, widgetFor }) => (
  <VideoTemplate
    src={entry.getIn(['data', 'videoUrl'])}
    poster={entry.getIn(['data', 'poster'])}
  />
)

VideoPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default VideoPreview
