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

        const gallery = images.map((obj, i) => {
            return (
                <a
                    href={obj.src}
                    key={i}
                    onClick={(e) => this.openLightbox(i, e)}
                    style={{ float: 'left', padding: '5px' }}
                >
                    <img src={obj.src} />
                </a>
            );
        });

        return (
            <div style={{ width: '820px' }}>
                {gallery}
            </div>
        );
    }

    render() {
        return (
            <div style={{ margin: '150px auto', width: '50%' }} >
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
