import React from "react";

import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image';

const ResponsiveImage = ({ type }) => (
    <ResponsiveImage>
        <ResponsiveImageSize
            default
            minWidth={0}
            path={'path-to-small-image.jpg'}
        />
        <ResponsiveImageSize
            minWidth={768}
            path={'path-to-medium-image.jpg'}
        />
        <ResponsiveImageSize
            minWidth={1100}
            path={'path-to-large-image.jpg'}
        />
    </ResponsiveImage>
);

export default ResponsiveImage;
