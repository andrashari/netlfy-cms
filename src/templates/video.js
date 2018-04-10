import React, {Component} from 'react'
import PropTypes from 'prop-types'

export class VideoTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoUrl: this.props.videoUrl,
      mousedown: false,

      playerRef: React.createRef(),
      videoRef: React.createRef(),
      progressRef: React.createRef(),
      progressBarRef: React.createRef(),
      toggleRef: React.createRef(),

      skipButtonsRef: React.createRef(),
      rangesRef: React.createRef(),
    }
  }

  togglePlay() {
    const method = this.videoRef.paused ? 'play' : 'pause';
    this.videoRef[method]();
  }
  
  updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    console.log(icon);
    this.toggleRef.textContent = icon;
  }
  
  skip() {
    this.videoRef.currentTime += parseFloat(this.dataset.skip);
  }
  
  handleRangeUpdate() {
    this.videoRef[this.name] = this.value;
  }
  
  handleProgress() {
    const percent = (this.videoRef.currentTime / this.videoRef.duration) * 100;
    this.progressBarRef.style.flexBasis = `${percent}%`;
  }
  
  scrub(e) {
    const scrubTime = (e.offsetX / this.progress.offsetWidth) * this.videoRef.duration;
    this.videoRef.currentTime = scrubTime;
  }

  render() {
    return (
      <div class="player">
      <video class="player__video viewer" ref={this.videoRef} src={this.state.videoUrl} onClick={this.togglePlay} onTimeUpdate={this.handleProgress} ></video>
 
      <div class="player__controls">
        <div class="progress" onClick={this.scrub} onMouseMove={(e) => this.state.mousedown && this.scrub(e)} >
           <div class="progress__filled"></div>
        </div>
        <button class="player__button toggle" title="Toggle Play" onClick={this.togglePlay} onPlay={this.updateButton} onPause={this.updateButton} >►</button>
        <input type="range" name="volume" class="player__slider" min="0" max="1" step="0.05" value="1" />>
        <input type="range" name="playbackRate" class="player__slider" min="0.5" max="2" step="0.1" value="1" onChange={this.handleRangeUpdate} onMouseMove={this.handleRangeUpdate} />
        <button data-skip="-10" class="player__button" onClick={this.skip} >« 10s</button>
        <button data-skip="25" class="player__button">25s »</button>
      </div>
    </div>
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
    />
  )
}

Video.propTypes = {
  video: PropTypes.object
}

export default Video
