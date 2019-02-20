import React from 'react'
import PropTypes from 'prop-types'

import Lightbox from 'react-images';

export default class Gallery extends React.Component {

    state = {
        lightboxIsOpen: false,
        currentImage: 0,
    }

    openLightbox = (index, event) => {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox = () => {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious = () => {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext = () => {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    gotoImage = (index) => {
        this.setState({
            currentImage: index,
        });
    }
    handleClickImage = () => {
        if (this.state.currentImage === this.state.images.length - 1) return;

        this.gotoNext();
    }

    renderGallery = () => {
        const { images } = this.props;

        if (!images) return;

        console.log(images);

        const gallery = images.map((obj, i) => {
            return (
                <a
                    href={obj.src}
                    key={i}
                    onClick={(e) => this.openLightbox(i, e)}
                    className="gallery-image"
                >
                    <img style={{
                        margin: '1px',
                        padding: '1px'
                    }} src={obj.src} className="gallery-image" />
                </a>
            );
        });

        return (
            <div className="gallery-wrapper">
                {gallery}
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderGallery()}
                <Lightbox
                    currentImage={this.state.currentImage}
                    images={this.props.images}
                    isOpen={this.state.lightboxIsOpen}
                    onClickImage={this.handleClickImage}
                    onClickNext={this.gotoNext}
                    onClickPrev={this.gotoPrevious}
                    onClickThumbnail={this.gotoImage}
                    onClose={this.closeLightbox}
                    showThumbnails
                /*spinner={this.props.spinner}
                spinnerColor={this.props.spinnerColor}
                spinnerSize={this.props.spinnerSize}*/
                />
            </div>
        );
    }
}
