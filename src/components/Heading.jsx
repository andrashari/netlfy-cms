import React from 'react'
import PropTypes from 'prop-types'
import fonts from '../assets/theme/fonts';

const Heading = ({ content, type, }) => {
    const Tag = `${type}`
    let fontStyle = null;

    switch (type) {
        case 'h1':
            fontStyle = fonts.headerFont
            break;

        case 'h2':
            fontStyle = { ...fonts.headerFont, ...{ fontSize: '40px' } }
            break;

        case 'h3':
            fontStyle = { ...fonts.headerFont, ...{ fontSize: '30px' } }
            break;

        default:
            break;
    }

    if (type == 'h1') {
        return (
            <div style={{ maxWidth: '30%', margin: '40px auto' }}>
                <Tag style={fontStyle}>
                    <hr className="hr-text" data-content={content}></hr>
                </Tag >
            </div>
        );
    }
    else {
        return (
            <div style={{ maxWidth: '30%', margin: '40px auto' }}>
                <Tag style={fontStyle}>{content}</Tag >
            </div>
        );
    }
}

Heading.propTypes = {
    content: PropTypes.string,
    type: PropTypes.string
}

export default Heading
